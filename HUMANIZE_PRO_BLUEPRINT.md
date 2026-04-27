# ✦ HumanizeAI Pro — Complete Product Blueprint
### From Zero to Revenue: Full-Stack SaaS Implementation Guide
> **Stack:** Next.js 14 · Supabase · Stripe · OpenAI · Anthropic Claude  
> **UI System:** 21st.dev Magic MCP · Tailwind CSS · Framer Motion  
> **Design Philosophy:** Luxury-Minimal · Dark-first · Editorial Typography

---

## TABLE OF CONTENTS

1. [Product Vision & Positioning](#1-product-vision--positioning)
2. [Market Research & Competitive Analysis](#2-market-research--competitive-analysis)
3. [User Personas & Journey Maps](#3-user-personas--journey-maps)
4. [Information Architecture](#4-information-architecture)
5. [UI/UX Design System (21st.dev MCP)](#5-uiux-design-system-21stdev-mcp)
6. [Complete Page Inventory & Wireframes](#6-complete-page-inventory--wireframes)
7. [Tech Stack & Infrastructure](#7-tech-stack--infrastructure)
8. [Database Schema (Supabase)](#8-database-schema-supabase)
9. [API Architecture](#9-api-architecture)
10. [AI Processing Pipeline](#10-ai-processing-pipeline)
11. [Prompt Engineering System](#11-prompt-engineering-system)
12. [Authentication & Authorization](#12-authentication--authorization)
13. [Billing & Monetization (Stripe)](#13-billing--monetization-stripe)
14. [Usage Limits & Rate Limiting](#14-usage-limits--rate-limiting)
15. [Frontend Implementation Guide](#15-frontend-implementation-guide)
16. [Performance & Streaming](#16-performance--streaming)
17. [SEO & Content Strategy](#17-seo--content-strategy)
18. [Launch Strategy](#18-launch-strategy)
19. [Analytics & Growth Metrics](#19-analytics--growth-metrics)
20. [Deployment & DevOps](#20-deployment--devops)
21. [Post-Launch Roadmap](#21-post-launch-roadmap)
22. [Vibe Coding Sprint Plan (14 Days)](#22-vibe-coding-sprint-plan-14-days)

---

## 1. Product Vision & Positioning

### 1.1 Core Value Proposition

**HumanizeAI Pro** — The intelligent writing partner that transforms machine-generated text into authentic, compelling human expression.

> *"Not just undetectable. Genuinely better."*

### 1.2 Product Pillars

| Pillar | Promise | How We Deliver |
|--------|---------|----------------|
| **Authenticity** | Sounds real, not edited | Multi-pass linguistic pipeline |
| **Quality** | Actually improved writing | Tone-aware rewriting, not paraphrasing |
| **Speed** | Results in seconds | Streaming + optimized prompts |
| **Intelligence** | Understands context | Mode-based transformation engine |

### 1.3 Brand Identity

```
Brand Name:    HumanizeAI Pro
Tagline:       "Write Like a Human. Think Like a Pro."
Tone:          Confident · Clean · Intelligent
Color Palette: 
  Primary:     #0A0A0B (Deep Black)
  Secondary:   #F5F0E8 (Warm Ivory)
  Accent:      #D4A853 (Amber Gold)
  Surface:     #141416 (Card Dark)
  Muted:       #3A3A3C (Text Secondary)
  Success:     #22C55E
  Danger:      #EF4444

Typography (via 21st.dev tokens):
  Display:     "Playfair Display" — editorial authority
  Heading:     "Sora" — clean, modern tech
  Body:        "Inter" — reliable legibility
  Mono:        "JetBrains Mono" — code/scores
```

---

## 2. Market Research & Competitive Analysis

### 2.1 Market Size

- AI content market: **$1.8B in 2024**, projected **$5.6B by 2027**
- AI detection tools growing **340% YoY** → demand for humanization also spikes
- Target TAM: Students + Freelancers + Marketers ≈ **180M users globally**

### 2.2 Competitor Matrix

| Product | Price | Weakness | Our Edge |
|---------|-------|----------|----------|
| Undetectable.ai | $9.99/mo | No tone control, robotic output | Multi-mode pipeline |
| Humanizer.pro | $12/mo | Slow, outdated prompts | Streaming + better UX |
| QuillBot | $9.95/mo | Paraphraser only | True rewriting |
| Wordtune | $13.99/mo | No humanization focus | Purpose-built |
| WriteHuman | $6.99/mo | Low quality output | Superior prompts |

### 2.3 Differentiation Matrix

```
What We Do Differently:
├── Multi-step Linguistic Pipeline (4-pass rewrite)
├── Real-time Humanization Score (proprietary)
├── Tone Intelligence Engine (not just presets)
├── Use-Case Transformation Modes
├── Comparison View with change tracking
└── Smart Iteration (one-click refinements)
```

---

## 3. User Personas & Journey Maps

### Persona 1: Alex — The Grad Student

```
Age: 24 | Location: USA | Device: MacBook + iPhone
Goal: Polish AI-written essays to sound authentic
Pain Point: Scared of AI detection, poor quality paraphrasers
Willingness to Pay: $10-15/month
Usage: 3-5x per week, 500-2000 words/session
Journey:
  Discovery → Google "make ai text undetectable"
  Evaluation → Tries free tier (300 words)
  Conversion → Hits limit, upgrades to Pro
  Retention → Uses daily, saves history
```

### Persona 2: Maya — The Freelance Content Writer

```
Age: 31 | Location: Remote | Device: Desktop + Notion
Goal: Deliver client content faster without sacrificing quality
Pain Point: AI content sounds flat, clients notice
Willingness to Pay: $15/month (business expense)
Usage: Daily, 5000-10000 words/day
Journey:
  Discovery → ProductHunt / Twitter recommendation
  Evaluation → Compares output vs competitors
  Conversion → Needs unlimited for client work
  Retention → Integrates into daily workflow
```

### Persona 3: Daniel — The SEO Agency Owner

```
Age: 38 | Location: UK | Device: Multiple
Goal: Scale content production for multiple clients
Pain Point: Bulk processing, consistency, team access
Willingness to Pay: $49/month (Team plan)
Usage: API integration, 50K+ words/month
Journey:
  Discovery → G2 / alternative.to listing
  Evaluation → Tests API, checks throughput
  Conversion → Needs team seats + API access
  Retention → Billing integration, volume discounts
```

---

## 4. Information Architecture

### 4.1 Site Map

```
humanizeai.pro/
│
├── / (Landing Page)
│   ├── Hero Section (Live Demo)
│   ├── Features Showcase
│   ├── Pricing Table
│   ├── Social Proof / Testimonials
│   ├── Use Cases
│   └── FAQ
│
├── /app (Main Application — Protected)
│   ├── /app/dashboard (Default)
│   ├── /app/humanize (Core Tool)
│   ├── /app/history (Previous Rewrites)
│   ├── /app/templates (Pre-built Modes)
│   └── /app/settings
│       ├── /profile
│       ├── /billing
│       └── /api-keys
│
├── /pricing
├── /blog (SEO content)
├── /docs (API Documentation)
│
├── /auth
│   ├── /login
│   ├── /signup
│   └── /reset-password
│
└── /legal
    ├── /privacy
    └── /terms
```

### 4.2 Navigation Structure

```
Public Nav:
  Logo | Features | Pricing | Blog | Login | Start Free →

App Nav (Sidebar):
  ✦ HumanizeAI
  ─────────────
  ⚡ Humanize         (primary)
  📋 Templates
  🕐 History
  ─────────────
  📊 Usage (meter)
  ─────────────
  ⚙️  Settings
  💎 Upgrade (if free)
  ─────────────
  Avatar + Name
  Plan Badge
```

---

## 5. UI/UX Design System (21st.dev MCP)

### 5.1 21st.dev MCP Integration

21st.dev Magic MCP provides production-grade, pre-built React components. Use it via the MCP server at `https://mcp.21st.dev/api?apiKey=YOUR_KEY`.

**Installation:**

```bash
# Install the Magic MCP globally
npx @21st-dev/cli@latest init --api-key YOUR_21ST_KEY

# Or add to mcp_config.json:
{
  "mcpServers": {
    "21st-dev-magic": {
      "command": "npx",
      "args": ["-y", "@21st-dev/magic-mcp"],
      "env": {
        "API_21ST_KEY": "your-api-key"
      }
    }
  }
}
```

**Usage in Cursor / Claude Code:**

```
/ui Create a dark luxury textarea component with word counter,
    character limit, and a floating "Humanize" CTA button
    with amber gold gradient. Use our design tokens.
```

### 5.2 Component Library (21st.dev Picks)

| Component | 21st.dev Slug | Usage |
|-----------|--------------|-------|
| Animated Counter | `numbers/counter` | Word count, score displays |
| Text Diff Viewer | `text/diff` | Before/After comparison |
| Progress Ring | `feedback/progress-ring` | Humanization score |
| Floating Toolbar | `overlays/floating-toolbar` | Quick action bar |
| Sliding Panel | `layout/sliding-panel` | Settings drawer |
| Gradient Button | `buttons/gradient-cta` | Primary CTA |
| Token Usage Bar | `data/usage-bar` | Daily limit meter |
| Score Badge | `data/badge-score` | Quality indicators |
| Shimmer Loader | `feedback/shimmer` | Streaming placeholder |
| Command Menu | `navigation/command` | Quick actions (⌘K) |

### 5.3 Design Tokens

```css
/* globals.css — CSS Custom Properties */
:root {
  /* Core Palette */
  --color-bg:           #0A0A0B;
  --color-surface:      #141416;
  --color-surface-2:    #1C1C1F;
  --color-border:       #2A2A2D;
  --color-border-light: #3A3A3E;
  
  /* Text */
  --color-text-primary:   #F5F0E8;
  --color-text-secondary: #9A9A9E;
  --color-text-muted:     #5A5A5E;
  
  /* Brand */
  --color-accent:         #D4A853;
  --color-accent-light:   #E8C578;
  --color-accent-dark:    #A07830;
  --color-accent-glow:    rgba(212, 168, 83, 0.15);
  
  /* Semantic */
  --color-success:  #22C55E;
  --color-warning:  #F59E0B;
  --color-danger:   #EF4444;
  --color-info:     #3B82F6;

  /* Spacing Scale */
  --space-xs:  4px;
  --space-sm:  8px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  40px;
  --space-2xl: 64px;
  --space-3xl: 96px;

  /* Typography Scale */
  --font-display: 'Playfair Display', Georgia, serif;
  --font-heading: 'Sora', sans-serif;
  --font-body:    'Inter', sans-serif;
  --font-mono:    'JetBrains Mono', monospace;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 18px;
  --radius-xl: 24px;

  /* Shadows */
  --shadow-card:   0 4px 24px rgba(0,0,0,0.4);
  --shadow-glow:   0 0 40px rgba(212, 168, 83, 0.12);
  --shadow-float:  0 8px 32px rgba(0,0,0,0.6);
}
```

### 5.4 Component Anatomy

#### Core Editor Component Layout

```
┌─────────────────────────────────────────────────────────┐
│  HUMANIZE EDITOR                           [⌘K] [?]     │
├─────────────────────────────────────────────────────────┤
│  Mode: [Essay ▼]   Tone: [Professional ▼]  [Advanced ○] │
├────────────────────────┬────────────────────────────────┤
│  INPUT                 │  OUTPUT                        │
│                        │                                │
│  Paste your text       │  ✦ Humanized result appears   │
│  here...               │    here with streaming...      │
│                        │                                │
│                        │                                │
│                        │                                │
│  ────────────────────  │  ────────────────────────────  │
│  📝 0 / 2000 words     │  [📋 Copy] [🔄 Regenerate]    │
├────────────────────────┴────────────────────────────────┤
│   [✦ HUMANIZE — 0 credits used]   Scores: [H: 94] [R:87]│
└─────────────────────────────────────────────────────────┘
```

---

## 6. Complete Page Inventory & Wireframes

### 6.1 Landing Page — Section Breakdown

#### Section 1: Hero

```
Layout: Full-viewport, centered
Background: Deep black with animated grain texture + subtle amber radial glow

Content:
  ─ Eyebrow: "Trusted by 50,000+ writers"
  ─ H1: "Turn AI Text Into 
         Human Writing."          ← Playfair Display, 72px
  ─ Sub: "Multi-pass linguistic rewriting that sounds
          genuinely written by a human — not just paraphrased."
  ─ CTA: [Start for Free →]  [Watch Demo ▶]
  ─ Live Demo: Embedded mini-editor showing real transformation
  ─ Trust Bar: logos (Product Hunt, G2, Capterra)
```

#### Section 2: Live Product Demo

```
Layout: Split screen, sticky scrolling
Left: "Before" — AI-sounding text (highlighted in red)
Right: "After" — Human text (highlighted in green)
Animation: Text transforms word by word as user scrolls
CTA: "Try it yourself →"
```

#### Section 3: Feature Cards (21st.dev grid)

```
6-card bento grid:
┌──────────────┬──────────────┬──────────────┐
│ Multi-Pass   │ Tone Engine  │ Live Score   │
│ Pipeline     │              │              │
├──────────────┼──────────────┼──────────────┤
│ Comparison   │ Smart        │ Use-Case     │
│ View         │ Suggestions  │ Modes        │
└──────────────┴──────────────┴──────────────┘
```

#### Section 4: How It Works (3-step)

```
Step 1: Paste your AI text
Step 2: Choose tone & mode  
Step 3: Get human writing instantly

Visual: Animated pipeline diagram showing the 4-pass process
```

#### Section 5: Humanization Score Demo

```
Interactive widget showing:
- Input text gets analyzed
- Scores update in real-time:
  - Human Score: 94/100
  - Readability: 87/100
  - Burstiness: 91/100
```

#### Section 6: Use Cases

```
Tab navigation:
[Students] [Freelancers] [SEO Teams] [Marketers]

Each tab shows:
- Sample before/after
- Specific benefits
- Relevant testimonial
```

#### Section 7: Pricing Table

*(See Section 13 for full pricing details)*

#### Section 8: Social Proof

```
Layout: Masonry testimonials wall (dark cards)
Data: 
  - Star ratings
  - User photo + name + role
  - Quote about specific benefit
  - Usage stat ("Saved 3 hours/week")
```

#### Section 9: FAQ

```
Accordion-style, 10 questions:
1. Is it truly undetectable?
2. What LLMs do you use?
3. Does it work for academic writing?
4. What languages do you support?
5. Is my content stored?
6. Can I use the API?
7. What's the refund policy?
8. How do credits work?
9. Is there a team plan?
10. What file formats do you support?
```

---

### 6.2 Main App — `/app/humanize`

#### Full Layout Specification

```
┌─────────────────────────────────────────────────────────────────┐
│ SIDEBAR (240px)           │ MAIN CANVAS                         │
│                           │                                     │
│ ✦ HumanizeAI Pro          │ ┌───────────────────────────────┐  │
│ ─────────────────         │ │ TOOLBAR                       │  │
│ ⚡ Humanize   ← active    │ │ Mode ▼  Tone ▼  [Advanced ○]  │  │
│ 📋 Templates              │ └───────────────────────────────┘  │
│ 🕐 History                │                                     │
│ ─────────────────         │ ┌────────────────┬──────────────┐  │
│                           │ │ INPUT          │ OUTPUT       │  │
│ DAILY USAGE               │ │                │              │  │
│ ████████░░ 240/300        │ │ [textarea]     │ [result]     │  │
│ Free · 60 left            │ │                │              │  │
│ [Upgrade →]               │ │                │              │  │
│                           │ └────────────────┴──────────────┘  │
│ ─────────────────         │                                     │
│ ⚙️  Settings               │ ┌───────────────────────────────┐  │
│ ─────────────────         │ │ SCORE BAR                     │  │
│ 👤 Alex Johnson           │ │ Human:94  Read:87  Burst:91   │  │
│ Free Plan                 │ └───────────────────────────────┘  │
│                           │                                     │
│                           │ [✦ HUMANIZE NOW]                   │
└─────────────────────────────────────────────────────────────────┘
```

#### Toolbar Options

```
Mode Selector (Dropdown):
  ✦ Auto Detect
  ─────────────
  📝 Essay / Academic
  💼 Professional Email
  📱 LinkedIn Post
  🐦 Twitter Thread
  📖 Blog Introduction
  🛒 Ad Copy
  ─────────────
  + Custom Mode

Tone Selector:
  🎓 Academic
  💬 Casual
  💼 Professional
  ✍️  Creative
  🔥 Persuasive

Mode Toggle:
  ⚡ Fast (1 pass, ~3s)
  ✦ Advanced (4 pass, ~12s)
```

#### Smart Suggestion Bar (Post-Rewrite)

```
"Make it shorter" · "More casual" · "More persuasive" · "Simplify" · "More formal"
```

---

### 6.3 History Page — `/app/history`

```
Layout: Timeline with search + filter

Header: 
  Search bar  |  Filter: [All Types ▼]  [Date ▼]  |  [Export All]

Each history card:
┌────────────────────────────────────────────────────────┐
│ 📝 Essay · Academic · Advanced Mode        2h ago      │
│ ──────────────────────────────────────────────────────│
│ "The implications of quantum computing on modern..."   │
│  ↓                                                      │
│ "Quantum computing's influence on today's digital..."  │
│ ──────────────────────────────────────────────────────│
│ 📊 246 words · H:92 · R:88      [View] [Copy] [Delete] │
└────────────────────────────────────────────────────────┘
```

---

### 6.4 Templates Page — `/app/templates`

```
Grid of 12 template cards:

┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│ 📝             │  │ 💼             │  │ 📱             │
│ Essay Rewrite  │  │ Business Email │  │ LinkedIn Post  │
│ Academic tone  │  │ Professional   │  │ Engagement     │
│ [Use Template] │  │ [Use Template] │  │ [Use Template] │
└────────────────┘  └────────────────┘  └────────────────┘
```

---

### 6.5 Settings — `/app/settings`

```
Tabs: Profile | Billing | API Keys | Preferences

Profile:
  - Display name
  - Email
  - Profile picture
  - Timezone

Billing:
  - Current plan badge
  - Usage this month (visual bar)
  - Payment method
  - Invoice history
  - Cancel / Upgrade buttons

API Keys:
  - Generate key button
  - Key list (masked)
  - Revoke buttons
  - API docs link

Preferences:
  - Default mode
  - Default tone
  - Auto-save history toggle
  - Email notifications
```

---

## 7. Tech Stack & Infrastructure

### 7.1 Core Stack

```
Layer           Technology              Version   Purpose
─────────────────────────────────────────────────────────
Frontend        Next.js                14.x      App Router, RSC
Styling         Tailwind CSS           3.4       Utility-first CSS
Components      Shadcn/UI              Latest    Base components
UI Magic        21st.dev Magic MCP     Latest    Premium components
Animations      Framer Motion          11.x      Transitions, micro-UX
Icons           Lucide React           Latest    Icon system
Fonts           next/font + Google     —         Typography

Backend         Next.js API Routes     14.x      Serverless functions
AI Primary      OpenAI API             Latest    gpt-4o-mini
AI Fallback     Anthropic API          Latest    claude-3-haiku
AI Premium      Anthropic API          Latest    claude-3-5-sonnet
Streaming       Vercel AI SDK          3.x       Stream responses

Database        Supabase (PostgreSQL)  Latest    Data persistence
Auth            Supabase Auth          Latest    User management
Storage         Supabase Storage       Latest    File exports
Cache           Upstash Redis          Latest    Rate limiting + cache

Payments        Stripe                 Latest    Subscriptions + credits
Webhooks        Stripe Webhooks        —         Event processing
Email           Resend                 Latest    Transactional emails

Deployment      Vercel                 —         Frontend + API
CDN             Vercel Edge Network    —         Global distribution
Monitoring      Vercel Analytics       —         Core metrics
Error Tracking  Sentry                 Latest    Error monitoring
```

### 7.2 Package.json (Key Dependencies)

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "@supabase/supabase-js": "^2.43.0",
    "@supabase/ssr": "^0.3.0",
    "openai": "^4.47.0",
    "@anthropic-ai/sdk": "^0.22.0",
    "ai": "^3.2.0",
    "stripe": "^15.11.0",
    "@stripe/stripe-js": "^3.5.0",
    "framer-motion": "^11.2.0",
    "@radix-ui/react-*": "latest",
    "tailwindcss": "^3.4.0",
    "zod": "^3.23.0",
    "zustand": "^4.5.0",
    "@upstash/redis": "^1.31.0",
    "@upstash/ratelimit": "^1.2.0",
    "resend": "^3.2.0",
    "lucide-react": "latest",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0"
  }
}
```

### 7.3 Project Structure

```
humanize-pro/
├── app/
│   ├── (auth)/
│   │   ├── login/page.tsx
│   │   ├── signup/page.tsx
│   │   └── reset-password/page.tsx
│   ├── (marketing)/
│   │   ├── page.tsx                  ← Landing
│   │   ├── pricing/page.tsx
│   │   └── blog/
│   ├── (app)/
│   │   ├── layout.tsx                ← App shell + sidebar
│   │   ├── dashboard/page.tsx
│   │   ├── humanize/page.tsx         ← CORE TOOL
│   │   ├── history/page.tsx
│   │   ├── templates/page.tsx
│   │   └── settings/
│   │       ├── page.tsx
│   │       ├── billing/page.tsx
│   │       └── api-keys/page.tsx
│   ├── api/
│   │   ├── humanize/route.ts         ← CORE API
│   │   ├── score/route.ts
│   │   ├── webhooks/stripe/route.ts
│   │   └── usage/route.ts
│   └── layout.tsx
│
├── components/
│   ├── ui/                           ← Shadcn base
│   ├── editor/
│   │   ├── EditorToolbar.tsx
│   │   ├── TextInput.tsx
│   │   ├── TextOutput.tsx
│   │   ├── HumanizeButton.tsx
│   │   ├── ScoreBar.tsx
│   │   ├── ComparisonView.tsx
│   │   └── SuggestionBar.tsx
│   ├── layout/
│   │   ├── Sidebar.tsx
│   │   ├── TopBar.tsx
│   │   └── UsageMeter.tsx
│   ├── marketing/
│   │   ├── Hero.tsx
│   │   ├── DemoEditor.tsx
│   │   ├── FeatureCards.tsx
│   │   ├── PricingTable.tsx
│   │   └── Testimonials.tsx
│   └── shared/
│       ├── PlanBadge.tsx
│       └── UpgradeBanner.tsx
│
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── middleware.ts
│   ├── ai/
│   │   ├── pipeline.ts               ← 4-pass engine
│   │   ├── prompts.ts
│   │   └── scoring.ts
│   ├── stripe/
│   │   ├── client.ts
│   │   └── plans.ts
│   └── utils/
│       ├── ratelimit.ts
│       └── words.ts
│
├── store/
│   ├── editorStore.ts                ← Zustand
│   └── userStore.ts
│
├── types/
│   ├── database.ts
│   ├── api.ts
│   └── plans.ts
│
├── hooks/
│   ├── useHumanize.ts
│   ├── useUsage.ts
│   └── useSubscription.ts
│
└── middleware.ts                     ← Auth guard
```

---

## 8. Database Schema (Supabase)

### 8.1 Full Schema SQL

```sql
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
```

---

## 9. API Architecture

### 9.1 Core Humanize Endpoint

```typescript
// app/api/humanize/route.ts

import { NextRequest } from 'next/server'
import { createServerClient } from '@/lib/supabase/server'
import { HumanizePipeline } from '@/lib/ai/pipeline'
import { ratelimit } from '@/lib/utils/ratelimit'
import { z } from 'zod'

const HumanizeSchema = z.object({
  text:    z.string().min(10).max(15000),
  tone:    z.enum(['academic', 'casual', 'professional', 'creative', 'persuasive']),
  mode:    z.enum(['fast', 'advanced']),
  useCase: z.enum(['general', 'essay', 'email', 'linkedin', 'twitter', 'blog', 'ad']).default('general'),
})

export async function POST(req: NextRequest) {
  try {
    // 1. Auth check
    const supabase = createServerClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 })

    // 2. Rate limit (Redis)
    const { success } = await ratelimit.limit(user.id)
    if (!success) return Response.json({ error: 'Rate limit exceeded' }, { status: 429 })

    // 3. Validate input
    const body = HumanizeSchema.parse(await req.json())
    const wordCount = body.text.split(/\s+/).length

    // 4. Check usage limits
    const { data: profile } = await supabase
      .from('profiles')
      .select('plan, credits')
      .eq('id', user.id)
      .single()

    const limit = PLAN_LIMITS[profile.plan]
    const { data: todayUsage } = await supabase
      .from('usage')
      .select('words_input')
      .eq('user_id', user.id)
      .eq('date', new Date().toISOString().split('T')[0])
      .single()

    const usedToday = todayUsage?.words_input ?? 0
    if (profile.plan === 'free' && (usedToday + wordCount) > limit.dailyWords) {
      return Response.json({ 
        error: 'Daily limit reached',
        used: usedToday,
        limit: limit.dailyWords,
        upgrade: true
      }, { status: 402 })
    }

    // 5. Advanced mode: Pro only check
    if (body.mode === 'advanced' && profile.plan === 'free') {
      return Response.json({ error: 'Advanced mode requires Pro', upgrade: true }, { status: 402 })
    }

    // 6. Stream the response
    const pipeline = new HumanizePipeline({
      text: body.text,
      tone: body.tone,
      mode: body.mode,
      useCase: body.useCase,
      plan: profile.plan
    })

    const stream = await pipeline.stream()

    // 7. Background: save to DB + update usage
    stream.on('finish', async (result) => {
      await supabase.rpc('increment_usage', {
        p_user_id: user.id,
        p_words_input: wordCount,
        p_words_output: result.wordCount,
        p_tokens: result.tokensUsed
      })

      await supabase.from('rewrites').insert({
        user_id: user.id,
        input_text: body.text,
        output_text: result.text,
        tone: body.tone,
        mode: body.mode,
        use_case: body.useCase,
        input_words: wordCount,
        output_words: result.wordCount,
        tokens_used: result.tokensUsed,
        processing_ms: result.processingMs,
        model_used: result.model,
        human_score: result.scores.human,
        readability_score: result.scores.readability,
        burstiness_score: result.scores.burstiness,
      })
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
      }
    })

  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json({ error: 'Invalid input', details: error.errors }, { status: 400 })
    }
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
```

### 9.2 Score Endpoint

```typescript
// app/api/score/route.ts
// POST { text: string }
// Returns { human: number, readability: number, burstiness: number }
// Used for scoring input BEFORE humanization (show improvement)
```

### 9.3 API Route Table

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| `POST` | `/api/humanize` | Required | Core rewrite |
| `POST` | `/api/score` | Required | Score text |
| `GET` | `/api/usage` | Required | Today's usage |
| `GET` | `/api/history` | Required | List rewrites |
| `DELETE` | `/api/history/[id]` | Required | Delete rewrite |
| `POST` | `/api/checkout` | Required | Create Stripe session |
| `POST` | `/api/webhooks/stripe` | Stripe sig | Handle events |
| `GET` | `/api/plans` | Public | Plan info |
| `POST` | `/api/v1/humanize` | API Key | Public API |

---

## 10. AI Processing Pipeline

### 10.1 Pipeline Architecture

```typescript
// lib/ai/pipeline.ts

export class HumanizePipeline {
  private config: PipelineConfig
  
  constructor(config: PipelineConfig) {
    this.config = config
  }

  async stream(): Promise<ReadableStream> {
    if (this.config.mode === 'fast') {
      return this.fastPass()
    }
    return this.advancedPipeline()
  }

  // ── FAST MODE: Single-pass, ~3 seconds ──
  private async fastPass(): Promise<ReadableStream> {
    return streamOpenAI({
      model: 'gpt-4o-mini',
      system: PROMPTS.system(this.config.tone, this.config.useCase),
      user: PROMPTS.user(this.config.text),
      temperature: 0.85,
    })
  }

  // ── ADVANCED MODE: 4-pass pipeline, ~12 seconds ──
  private async advancedPipeline(): Promise<ReadableStream> {
    const text = this.config.text

    // Pass 1: Structural variation
    const pass1 = await callLLM({
      system: PROMPTS.structureVariation,
      user: text,
      temperature: 0.7,
    })

    // Pass 2: Synonym & vocabulary diversification
    const pass2 = await callLLM({
      system: PROMPTS.vocabularyDiversify(this.config.tone),
      user: pass1,
      temperature: 0.8,
    })

    // Pass 3: Sentence rhythm & burstiness
    const pass3 = await callLLM({
      system: PROMPTS.rhythmRandomize,
      user: pass2,
      temperature: 0.9,
    })

    // Pass 4 (Premium only): Final polish + tone refinement — STREAM THIS
    return streamLLM({
      model: this.config.plan === 'pro' ? 'claude-3-5-sonnet-20241022' : 'gpt-4o-mini',
      system: PROMPTS.finalPolish(this.config.tone, this.config.useCase),
      user: pass3,
      temperature: 0.85,
    })
  }
}
```

### 10.2 LLM Selection Strategy

```
User Tier    Mode        LLM Used                    Reason
─────────────────────────────────────────────────────────
Free         Fast        gpt-4o-mini                 Cost efficient
Pro          Fast        gpt-4o-mini                 Fast
Pro          Advanced    claude-3-5-sonnet (pass 4)  Best quality
API          Any         claude-3-5-sonnet            Premium
Team         Advanced    claude-3-5-sonnet (all)     Best quality
```

---

## 11. Prompt Engineering System

### 11.1 System Prompt — Core Rewrite

```typescript
export const PROMPTS = {
  
  system: (tone: Tone, useCase: UseCase) => `
You are an expert human editor and writer with 20 years of experience 
in ${USE_CASE_CONTEXT[useCase]}.

Your task is to rewrite AI-generated text to sound authentically human.

WRITING STYLE RULES — STRICTLY FOLLOW:
1. BURSTINESS: Vary sentence lengths dramatically.
   Mix very short sentences. Then occasionally write longer, more complex 
   sentences that flow naturally with subordinate clauses and connecting phrases.
2. PERPLEXITY: Use unexpected but contextually perfect word choices.
   Avoid clichéd AI phrases: "delve into", "in conclusion", "it is worth noting",
   "it is important to", "leverage", "utilize", "furthermore", "moreover",
   "in today's fast-paced world", "game-changer", "paradigm shift"
3. IMPERFECTION: Occasionally use:
   - Slightly informal constructions (not mistakes)
   - Contractions naturally
   - First-person perspective where appropriate
   - Rhetorical questions
4. FLOW: Create natural rhythm. Start sentences differently. Not always with "The".
5. VOICE: Sound like a smart, knowledgeable human — not a language model.

TONE: ${TONE_INSTRUCTIONS[tone]}

CRITICAL CONSTRAINTS:
- Preserve ALL factual information exactly
- Never add new facts or figures
- Maintain the same core meaning
- Output ONLY the rewritten text — no explanations, no meta-commentary
`,

  // PASS 1 — Structure variation
  structureVariation: `
You are a writing editor. Restructure the following text to:
- Vary paragraph lengths (some short, some longer)
- Break up long compound sentences
- Combine some short choppy sentences
- Reorder some points for better flow
Preserve all content. Output rewritten text only.
`,

  // PASS 2 — Vocabulary diversification  
  vocabularyDiversify: (tone: Tone) => `
Replace overused words and AI-clichéd phrases with more natural, ${tone} alternatives.
Target phrases to remove: delve, utilize, leverage, furthermore, moreover, 
in conclusion, it is worth noting, it is important to, in today's world.
Output rewritten text only.
`,

  // PASS 3 — Rhythm randomization
  rhythmRandomize: `
Edit this text to maximize sentence variety:
- Some sentences: 3-6 words
- Some sentences: 20-35 words
- Avoid three consecutive sentences of similar length
- Add occasional one-word or two-word sentences for impact
Output rewritten text only.
`,

  // PASS 4 — Final polish
  finalPolish: (tone: Tone, useCase: UseCase) => `
You are a senior editor doing a final pass. Polish this rewritten text to:
- Sound completely natural for ${useCase} context
- Apply ${tone} tone consistently
- Ensure the opening line is compelling and human
- Ensure the closing feels natural, not AI-wrapped-up
- Remove any remaining AI-isms or stiffness
Output ONLY the final polished text.
`,

}

const TONE_INSTRUCTIONS = {
  academic:     "Use precise, formal language. Avoid contractions. Use field-specific vocabulary naturally.",
  casual:       "Sound like a smart friend explaining something. Use contractions. Conversational but not sloppy.",
  professional: "Clean, confident, direct. No fluff. Persuasive but not pushy.",
  creative:     "Vivid, engaging, with personality. Show don't tell. Unexpected metaphors.",
  persuasive:   "Drive action. Make the reader feel the stakes. Use contrast and rhythm.",
}
```

---

## 12. Authentication & Authorization

### 12.1 Auth Flow

```
Public Routes:    /, /pricing, /blog, /docs, /auth/*
Protected Routes: /app/*, /api/humanize, /api/history, etc.

Auth Provider: Supabase Auth
Methods:
  - Email + Password
  - Google OAuth
  - GitHub OAuth (optional)

Session: HttpOnly cookies (via @supabase/ssr)
```

### 12.2 Middleware

```typescript
// middleware.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

export async function middleware(request) {
  const { pathname } = request.nextUrl

  // Protect /app routes
  if (pathname.startsWith('/app')) {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      return NextResponse.redirect(new URL('/auth/login', request.url))
    }
  }
  
  // Protect API routes (except webhooks)
  if (pathname.startsWith('/api') && !pathname.startsWith('/api/webhooks')) {
    // Auth check happens in route handlers
  }
}
```

### 12.3 Plan Authorization Matrix

```
Feature                    Free    Pro     Team    API
─────────────────────────────────────────────────────
Daily words                300    ∞       ∞       ∞
Advanced mode              ✗      ✓       ✓       ✓
History                    7 days ∞       ∞       ∞
Templates                  Basic  All     All     All
Export                     ✗      ✓       ✓       ✓
API access                 ✗      ✗       ✗       ✓
Team seats                 1      1       5       —
Custom prompts             ✗      ✗       ✓       ✓
Priority support           ✗      ✓       ✓       ✓
Claude 3.5 Sonnet          ✗      ✓       ✓       ✓
```

---

## 13. Billing & Monetization (Stripe)

### 13.1 Pricing Structure

```
┌─────────────────────────────────────────────────────────────┐
│                       PRICING PLANS                          │
├──────────────┬────────────────┬──────────────┬──────────────┤
│   FREE        │   PRO          │   TEAM        │   CREDITS    │
│   $0/mo       │   $12/mo       │   $39/mo      │   Pay once   │
├──────────────┼────────────────┼──────────────┼──────────────┤
│ 300 words/day │ Unlimited      │ Unlimited     │ 5K → $4      │
│ Fast mode     │ Advanced mode  │ 5 seats       │ 25K → $15    │
│ Basic tones   │ All tones      │ All features  │ 100K → $45   │
│ 7-day history │ Full history   │ Team history  │              │
│               │ Export         │ Priority API  │              │
│               │ Priority model │ Custom prompt │              │
└──────────────┴────────────────┴──────────────┴──────────────┘
```

### 13.2 Stripe Integration

```typescript
// lib/stripe/plans.ts
export const PLANS = {
  free:    { id: null,                  words: 300,   features: ['basic'] },
  pro:     { id: 'price_pro_monthly',   words: -1,    features: ['all'] },
  team:    { id: 'price_team_monthly',  words: -1,    features: ['all', 'team'] },
}

export const CREDIT_PACKS = [
  { id: 'price_credits_5k',   words: 5_000,   price: 400 },  // $4
  { id: 'price_credits_25k',  words: 25_000,  price: 1500 }, // $15
  { id: 'price_credits_100k', words: 100_000, price: 4500 }, // $45
]
```

### 13.3 Stripe Webhook Events to Handle

```
customer.subscription.created   → Set plan to 'pro'/'team'
customer.subscription.updated   → Update plan/status
customer.subscription.deleted   → Downgrade to free
payment_intent.succeeded        → Add credits to account
invoice.payment_failed          → Email user + pause account
checkout.session.completed      → Fulfill order
```

### 13.4 Checkout Flow

```
1. User clicks "Upgrade" in app
2. POST /api/checkout { priceId, userId }
3. Create Stripe Checkout Session
4. Redirect to Stripe hosted page
5. On success: redirect to /app?upgraded=true
6. Webhook fires: update profile.plan in Supabase
7. Show celebration modal + new features unlocked
```

---

## 14. Usage Limits & Rate Limiting

### 14.1 Plan Limits

```typescript
export const PLAN_LIMITS = {
  free: {
    dailyWords:     300,
    maxTextLength:  500,    // characters
    requestsPerMin: 2,
    historyDays:    7,
  },
  pro: {
    dailyWords:     -1,     // unlimited
    maxTextLength:  15000,
    requestsPerMin: 10,
    historyDays:    -1,     // unlimited
  },
  team: {
    dailyWords:     -1,
    maxTextLength:  15000,
    requestsPerMin: 20,
    historyDays:    -1,
  },
}
```

### 14.2 Rate Limiting (Upstash Redis)

```typescript
// lib/utils/ratelimit.ts
import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

const redis = Redis.fromEnv()

export const ratelimitByPlan = {
  free: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(2, '60s'),  // 2 req/min
    prefix: 'rl:free',
  }),
  pro: new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(10, '60s'),
    prefix: 'rl:pro',
  }),
}

// IP-based fallback (unauthenticated)
export const ipRatelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '3600s'), // 5/hour for anon
  prefix: 'rl:ip',
})
```

---

## 15. Frontend Implementation Guide

### 15.1 Core Editor Component

```typescript
// components/editor/HumanizeEditor.tsx
'use client'

import { useState, useCallback } from 'react'
import { useCompletion } from 'ai/react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScoreBar } from './ScoreBar'
import { SuggestionBar } from './SuggestionBar'

export function HumanizeEditor() {
  const [inputText, setInputText] = useState('')
  const [tone, setTone] = useState<Tone>('professional')
  const [mode, setMode] = useState<Mode>('fast')
  const [useCase, setUseCase] = useState('general')
  const [showComparison, setShowComparison] = useState(false)

  const { completion, complete, isLoading, error } = useCompletion({
    api: '/api/humanize',
    body: { tone, mode, useCase },
  })

  const handleHumanize = useCallback(async () => {
    if (!inputText.trim()) return
    await complete(inputText)
  }, [inputText, tone, mode, useCase])

  const wordCount = inputText.split(/\s+/).filter(Boolean).length

  return (
    <div className="editor-container">
      {/* Toolbar */}
      <EditorToolbar
        tone={tone} onToneChange={setTone}
        mode={mode} onModeChange={setMode}
        useCase={useCase} onUseCaseChange={setUseCase}
        showComparison={showComparison}
        onToggleComparison={() => setShowComparison(!showComparison)}
      />

      {/* Dual pane */}
      <div className="editor-panes">
        {/* Input */}
        <div className="pane input-pane">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste your AI-generated text here..."
            className="editor-textarea"
          />
          <div className="pane-footer">
            <span className="word-count">{wordCount} words</span>
            <UsageMeter />
          </div>
        </div>

        {/* Output */}
        <AnimatePresence>
          <div className="pane output-pane">
            {isLoading ? (
              <ShimmerLoader />
            ) : completion ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="output-text"
              >
                {showComparison ? (
                  <ComparisonView original={inputText} rewritten={completion} />
                ) : (
                  <p>{completion}</p>
                )}
                <OutputActions text={completion} onRegenerate={handleHumanize} />
              </motion.div>
            ) : (
              <EmptyState />
            )}
          </div>
        </AnimatePresence>
      </div>

      {/* Score Bar */}
      {completion && <ScoreBar text={completion} />}

      {/* Main CTA */}
      <HumanizeButton
        onClick={handleHumanize}
        loading={isLoading}
        wordCount={wordCount}
        disabled={!inputText.trim()}
      />

      {/* Smart Suggestions */}
      {completion && (
        <SuggestionBar
          onSuggest={(suggestion) => complete(`${completion}\n\nInstruction: ${suggestion}`)}
        />
      )}
    </div>
  )
}
```

### 15.2 Zustand Store

```typescript
// store/editorStore.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface EditorStore {
  inputText: string
  outputText: string
  tone: Tone
  mode: Mode
  useCase: string
  scores: Scores | null
  isProcessing: boolean
  
  setInput: (text: string) => void
  setOutput: (text: string) => void
  setTone: (tone: Tone) => void
  setMode: (mode: Mode) => void
  setScores: (scores: Scores) => void
  reset: () => void
}

export const useEditorStore = create<EditorStore>()(
  persist(
    (set) => ({
      inputText: '',
      outputText: '',
      tone: 'professional',
      mode: 'fast',
      useCase: 'general',
      scores: null,
      isProcessing: false,
      setInput: (text) => set({ inputText: text }),
      setOutput: (text) => set({ outputText: text }),
      setTone: (tone) => set({ tone }),
      setMode: (mode) => set({ mode }),
      setScores: (scores) => set({ scores }),
      reset: () => set({ inputText: '', outputText: '', scores: null }),
    }),
    { name: 'editor-store' }
  )
)
```

---

## 16. Performance & Streaming

### 16.1 Streaming Implementation

```typescript
// Vercel AI SDK streaming
import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai'

const openai = new OpenAI()

export async function streamOpenAI(params) {
  const response = await openai.chat.completions.create({
    model: params.model,
    messages: [
      { role: 'system', content: params.system },
      { role: 'user', content: params.user },
    ],
    temperature: params.temperature,
    stream: true,
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}
```

### 16.2 Performance Optimizations

```
Technique                 Implementation
──────────────────────────────────────────────────────
Streaming responses       Vercel AI SDK useCompletion
Input debounce            300ms delay on word count
Request deduplication     useTransition + abort controller
Output caching            Upstash Redis (1h TTL, hash key)
Image optimization        Next.js Image + WebP
Font optimization         next/font with display:swap
Code splitting            Next.js dynamic imports
Preloading                prefetch on hover
Edge runtime              API routes on Vercel Edge
```

### 16.3 Caching Strategy

```typescript
// Cache identical inputs for 1 hour
const cacheKey = `humanize:${hashText(text)}:${tone}:${mode}`
const cached = await redis.get(cacheKey)
if (cached) return cached

// After generation
await redis.set(cacheKey, result, { ex: 3600 })
```

---

## 17. SEO & Content Strategy

### 17.1 Target Keywords

| Keyword | Monthly Volume | Difficulty | Page |
|---------|---------------|------------|------|
| humanize ai text | 60,500 | Medium | Home |
| make ai text undetectable | 33,100 | Medium | Home |
| ai text humanizer | 27,200 | Low | Home |
| paraphrase ai content | 14,800 | Low | Blog |
| bypass ai detection | 22,400 | High | Blog |
| chatgpt text humanizer | 18,900 | Medium | Home |

### 17.2 Blog Content Strategy (SEO)

```
Month 1:
  - "How to Make AI Text Sound Human (Complete Guide)"
  - "Best AI Text Humanizers in 2025 — Reviewed"
  - "How AI Detection Works & How to Write Around It"

Month 2:
  - "The Ultimate Guide to Academic Writing with AI"
  - "Humanize ChatGPT Output for LinkedIn: Step-by-Step"
  - "AI Content for SEO: What Actually Works in 2025"

Month 3+:
  - Long-tail: "[Use Case] + AI humanizer" articles
  - Comparison: "HumanizeAI Pro vs Undetectable.ai"
  - Tutorial: "How to Write Better Emails with AI"
```

### 17.3 Technical SEO

```
- Dynamic meta tags per page
- Open Graph images (og:image per page)
- Schema markup (SoftwareApplication)
- Sitemap.xml auto-generated
- Robots.txt configured
- Core Web Vitals: LCP < 2.5s, FID < 100ms, CLS < 0.1
- Canonical URLs
- Hreflang for future i18n
```

---

## 18. Launch Strategy

### 18.1 Pre-Launch (Week 1-2)

```
□ Set up waitlist landing page (EmailOctopus / Resend)
□ Launch Twitter/X account — post daily build logs
□ Post on indie hackers "I'm building X" thread
□ Build in public — Twitter/LinkedIn updates
□ Collect 200+ waitlist emails before launch
□ Create demo video (Loom, 2 min)
□ Write Product Hunt description + images
□ Prepare 5 testimonials (beta testers)
```

### 18.2 Launch Day (Week 3)

```
1. ProductHunt Launch (Tuesday, 12:01 AM PST)
   - Hunter: find a relevant hunter with audience
   - Comment strategy: respond to every comment
   - Upvote ask: send email to waitlist

2. Hacker News "Show HN"
   - Post: "Show HN: I built an AI text humanizer with 4-pass pipeline"
   - Be honest about tech + business

3. Reddit
   - r/artificial, r/ChatGPT, r/sideprojects
   - r/SEO, r/freelance (use-case specific)

4. Twitter announcement
5. LinkedIn post (personal + company)
```

### 18.3 Post-Launch Growth

```
Week 1-4: Community building
  - Respond to all reviews
  - Add requested features from feedback
  - Build 5 blog posts for SEO

Month 2: Paid acquisition (if profitable)
  - Google Ads: target keywords from §17.1
  - Budget: $500/month test
  - Target CPA: < $15

Month 3: Partnership
  - Integrate with popular writing tools
  - Affiliate program (30% recurring)
  - Influencer outreach (YouTube/writing niche)
```

---

## 19. Analytics & Growth Metrics

### 19.1 Core KPIs

```
GROWTH METRICS (weekly):
  - New signups
  - Activation rate (signed up → humanized first text)
  - Day 1 / Day 7 / Day 30 retention
  - Free-to-Pro conversion rate (target: 5-8%)

USAGE METRICS (daily):
  - DAU / MAU ratio
  - Words humanized per day
  - Average session length
  - Mode distribution (fast vs advanced)

REVENUE METRICS (monthly):
  - MRR / ARR
  - ARPU (Average Revenue Per User)
  - Churn rate (target: < 5%/month)
  - LTV / CAC ratio (target: > 3:1)

QUALITY METRICS:
  - Average humanization score
  - Regeneration rate (low = good first pass)
  - Error rate
  - API latency (P50, P95, P99)
```

### 19.2 Analytics Setup

```typescript
// lib/analytics.ts
// Vercel Analytics (built-in, privacy-first)
// PostHog (product analytics, free tier)
// Stripe Dashboard (revenue)

// Key events to track:
track('humanize_started', { tone, mode, wordCount })
track('humanize_completed', { processingMs, score })
track('upgrade_clicked', { from, planSource })
track('upgrade_completed', { plan, price })
track('suggestion_clicked', { suggestion })
track('history_viewed')
track('copy_clicked')
```

---

## 20. Deployment & DevOps

### 20.1 Environment Variables

```bash
# .env.local

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# AI APIs
OPENAI_API_KEY=
ANTHROPIC_API_KEY=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# Upstash Redis
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

# Email
RESEND_API_KEY=

# 21st.dev MCP
API_21ST_KEY=

# App
NEXT_PUBLIC_APP_URL=https://humanizeai.pro
```

### 20.2 Vercel Configuration

```json
// vercel.json
{
  "functions": {
    "app/api/humanize/route.ts": {
      "maxDuration": 60,
      "memory": 1024
    }
  },
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    }
  ]
}
```

### 20.3 CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 21. Post-Launch Roadmap

### Phase 2 (Month 2-3)

```
□ Chrome Extension
  - Right-click → "Humanize selection"
  - Works on Google Docs, Gmail, LinkedIn

□ File Upload
  - Upload .docx / .txt
  - Process and download humanized version

□ Bulk Processing (Team plan)
  - CSV upload with multiple texts
  - Batch API endpoint

□ Plagiarism Score Integration
  - Add Copyscape / Grammarly API
  - Show plagiarism before & after
```

### Phase 3 (Month 4-6)

```
□ Google Docs Add-on
□ WordPress Plugin
□ Zapier Integration
□ White-label API (Agency plan)
□ AI Detection Pre-check
  - Run through GPTZero / Copyleaks first
  - Show "AI Score Before" metric
□ Team Collaboration
  - Shared history
  - Comments on rewrites
  - Brand voice profiles
```

### Phase 4 (Month 7+)

```
□ Grammar + Style scoring
□ Readability grade level targeting
□ Multi-language support (ES, FR, DE, PT)
□ SEO optimization suggestions
□ Tone consistency checker
□ Integration marketplace
```

---

## 22. Vibe Coding Sprint Plan (14 Days)

```
DAY 1 — Foundation
  ✓ Next.js 14 project init
  ✓ Tailwind + design tokens setup
  ✓ 21st.dev MCP configured
  ✓ Supabase project + schema
  ✓ Folder structure

DAY 2 — Landing Page (with 21st.dev MCP)
  ✓ Hero section + live demo widget
  ✓ Feature grid (bento)
  ✓ How it works section
  ✓ Mobile responsive

DAY 3 — Auth
  ✓ Supabase Auth setup
  ✓ Login / Signup pages
  ✓ Google OAuth
  ✓ Auth middleware
  ✓ Profile creation on signup

DAY 4 — Core Editor UI
  ✓ Sidebar + app shell
  ✓ Dual-pane editor layout
  ✓ Textarea input component
  ✓ Mode/tone/use-case toolbar
  ✓ Empty states

DAY 5 — AI Integration
  ✓ POST /api/humanize route
  ✓ OpenAI streaming integration
  ✓ Vercel AI SDK setup
  ✓ Fast mode working end-to-end
  ✓ Basic prompt engineering

DAY 6 — Advanced Pipeline
  ✓ 4-pass pipeline implementation
  ✓ Advanced mode working
  ✓ Prompt optimization
  ✓ Error handling

DAY 7 — Scoring + Features
  ✓ Humanization score display
  ✓ Word counter
  ✓ Copy button
  ✓ Comparison view
  ✓ Smart suggestions bar

DAY 8 — Usage + Limits
  ✓ Daily word limit logic
  ✓ Usage meter in sidebar
  ✓ Rate limiting (Upstash)
  ✓ Upgrade prompts

DAY 9 — Stripe Integration
  ✓ Stripe products + prices
  ✓ Checkout session API
  ✓ Webhook handler
  ✓ Plan gates (Pro features)
  ✓ Billing settings page

DAY 10 — History + Templates
  ✓ History page
  ✓ Rewrite cards
  ✓ Search + filter
  ✓ Templates page

DAY 11 — Pricing Page + Conversions
  ✓ Pricing table
  ✓ FAQ section
  ✓ Upgrade flow polish
  ✓ Testimonials

DAY 12 — Polish + 21st.dev UI
  ✓ Apply 21st.dev components
  ✓ Animations (Framer Motion)
  ✓ Loading states
  ✓ Mobile responsive check

DAY 13 — SEO + Analytics
  ✓ Meta tags + OG images
  ✓ Sitemap + robots.txt
  ✓ Vercel Analytics
  ✓ PostHog setup
  ✓ Blog skeleton

DAY 14 — Deploy + Launch Prep
  ✓ Vercel production deploy
  ✓ Custom domain
  ✓ Environment variables
  ✓ Stripe live mode
  ✓ End-to-end testing
  ✓ ProductHunt assets ready
  🚀 LAUNCH
```

---

## APPENDIX A — Checklist Before Launch

```
Infrastructure:
  □ Custom domain configured
  □ SSL certificate active
  □ All env vars set in Vercel
  □ Stripe in live mode (not test)
  □ Supabase daily backups enabled
  □ Upstash Redis provisioned

Legal:
  □ Privacy Policy published
  □ Terms of Service published
  □ Cookie consent banner
  □ GDPR compliance (EU users)
  □ Payment processor terms agreed

UX:
  □ Mobile tested (iOS + Android)
  □ All error states designed
  □ Empty states implemented
  □ Loading states for all async actions
  □ Stripe checkout tested end-to-end

Marketing:
  □ Landing page published
  □ OG images for all pages
  □ ProductHunt listing ready
  □ Twitter account active
  □ Demo video recorded
  □ Waitlist email sequence ready
```

---

## APPENDIX B — Revenue Projections

```
Conservative Scenario (Month 6):
  Free Users:    2,000
  Pro ($12/mo):    120   → $1,440 MRR
  Credit Sales:          → $360/mo
  Total:                 → ~$1,800 MRR

Growth Scenario (Month 12):
  Free Users:   15,000
  Pro ($12/mo):    750   → $9,000 MRR
  Team ($39/mo):    50   → $1,950 MRR
  Credits:               → $1,500/mo
  Total:                 → ~$12,450 MRR

Optimistic Scenario (Month 18):
  Free Users:   60,000
  Pro:           3,000   → $36,000 MRR
  Team:            200   → $7,800 MRR
  API Plan:         50   → $4,950 MRR
  Credits:               → $5,000/mo
  Total:                 → ~$53,750 MRR
```

---

*Document Version: 1.0 | Last Updated: 2025 | Stack: Next.js 14 + Supabase + Stripe + 21st.dev*

> **Ready to build.** Follow the 14-day sprint. Ship on Day 14. Iterate from revenue.
