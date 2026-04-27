-- ============================================================
-- USERS (extends Supabase auth.users)
-- ============================================================
CREATE TABLE public.profiles (
  id              UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email           TEXT NOT NULL,
  full_name       TEXT,
  avatar_url      TEXT,
  plan            TEXT NOT NULL DEFAULT 'free'
                  CHECK (plan IN ('free', 'pro', 'team', 'api')),
  credits         INTEGER NOT NULL DEFAULT 0,
  stripe_customer_id TEXT UNIQUE,
  stripe_subscription_id TEXT UNIQUE,
  subscription_status TEXT DEFAULT 'inactive',
  subscription_period_end TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- DAILY USAGE TRACKING
-- ============================================================
CREATE TABLE public.usage (
  id              BIGSERIAL PRIMARY KEY,
  user_id         UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  date            DATE NOT NULL DEFAULT CURRENT_DATE,
  words_input     INTEGER NOT NULL DEFAULT 0,
  words_output    INTEGER NOT NULL DEFAULT 0,
  requests_count  INTEGER NOT NULL DEFAULT 0,
  tokens_used     INTEGER NOT NULL DEFAULT 0,
  mode            TEXT DEFAULT 'basic',
  UNIQUE (user_id, date)
);

-- Index for fast daily lookup
CREATE INDEX idx_usage_user_date ON public.usage(user_id, date);

-- ============================================================
-- REWRITE HISTORY
-- ============================================================
CREATE TABLE public.rewrites (
  id              BIGSERIAL PRIMARY KEY,
  user_id         UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  
  -- Content
  input_text      TEXT NOT NULL,
  output_text     TEXT NOT NULL,
  
  -- Configuration
  tone            TEXT NOT NULL DEFAULT 'professional'
                  CHECK (tone IN ('academic', 'casual', 'professional', 'creative', 'persuasive')),
  mode            TEXT NOT NULL DEFAULT 'fast'
                  CHECK (mode IN ('fast', 'advanced')),
  use_case        TEXT DEFAULT 'general',
  
  -- Metadata
  input_words     INTEGER NOT NULL,
  output_words    INTEGER NOT NULL,
  tokens_used     INTEGER,
  processing_ms   INTEGER,
  model_used      TEXT,
  
  -- Scores
  human_score     SMALLINT CHECK (human_score BETWEEN 0 AND 100),
  readability_score SMALLINT CHECK (readability_score BETWEEN 0 AND 100),
  burstiness_score SMALLINT CHECK (burstiness_score BETWEEN 0 AND 100),
  
  -- Flags
  is_starred      BOOLEAN DEFAULT FALSE,
  is_deleted      BOOLEAN DEFAULT FALSE,
  
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_rewrites_user_created ON public.rewrites(user_id, created_at DESC);
CREATE INDEX idx_rewrites_starred ON public.rewrites(user_id, is_starred) WHERE is_starred = TRUE;

-- ============================================================
-- CUSTOM TEMPLATES
-- ============================================================
CREATE TABLE public.templates (
  id              BIGSERIAL PRIMARY KEY,
  user_id         UUID REFERENCES public.profiles(id) ON DELETE CASCADE, -- NULL = system template
  name            TEXT NOT NULL,
  description     TEXT,
  use_case        TEXT NOT NULL,
  tone            TEXT NOT NULL,
  mode            TEXT NOT NULL DEFAULT 'advanced',
  system_prompt   TEXT,           -- Custom prompt override (Pro only)
  is_system       BOOLEAN DEFAULT FALSE,
  is_public       BOOLEAN DEFAULT FALSE,
  usage_count     INTEGER DEFAULT 0,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- API KEYS (for API plan users)
-- ============================================================
CREATE TABLE public.api_keys (
  id              BIGSERIAL PRIMARY KEY,
  user_id         UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  key_hash        TEXT NOT NULL UNIQUE,
  key_prefix      TEXT NOT NULL,           -- First 8 chars for display
  name            TEXT NOT NULL DEFAULT 'Default',
  last_used_at    TIMESTAMPTZ,
  revoked_at      TIMESTAMPTZ,
  total_requests  INTEGER DEFAULT 0,
  total_tokens    INTEGER DEFAULT 0,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rewrites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.api_keys ENABLE ROW LEVEL SECURITY;

-- Users can only see their own data
CREATE POLICY "profiles_own" ON public.profiles FOR ALL USING (auth.uid() = id);
CREATE POLICY "usage_own" ON public.usage FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "rewrites_own" ON public.rewrites FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "api_keys_own" ON public.api_keys FOR ALL USING (auth.uid() = user_id);

-- ============================================================
-- FUNCTIONS
-- ============================================================

-- Get or create today's usage row
CREATE OR REPLACE FUNCTION increment_usage(
  p_user_id UUID, 
  p_words_input INTEGER, 
  p_words_output INTEGER,
  p_tokens INTEGER
)
RETURNS void AS $$
BEGIN
  INSERT INTO public.usage (user_id, date, words_input, words_output, requests_count, tokens_used)
  VALUES (p_user_id, CURRENT_DATE, p_words_input, p_words_output, 1, p_tokens)
  ON CONFLICT (user_id, date) DO UPDATE SET
    words_input    = usage.words_input + p_words_input,
    words_output   = usage.words_output + p_words_output,
    requests_count = usage.requests_count + 1,
    tokens_used    = usage.tokens_used + p_tokens;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
