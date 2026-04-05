export type Vibe = "chaotic" | "aesthetic" | "practical" | "weird" | "ai" | "game" | "creative";
export type Level = "beginner" | "intermediate" | "advanced";
export type Difficulty = "EASY" | "MEDIUM" | "HARD" | "INSANE";

export interface BuildPrompt {
  title: string;
  description: string;
  time: 15 | 30 | 60 | 120 | 240;
  level: Level;
  vibe: Vibe;
}

export const timeOptions = [
  { label: "15 MIN", value: 15 },
  { label: "30 MIN", value: 30 },
  { label: "1 HOUR", value: 60 },
  { label: "2 HOURS", value: 120 },
  { label: "4+ HRS", value: 240 },
] as const;

export const levelOptions: { label: string; value: Level }[] = [
  { label: "WARM UP", value: "beginner" },
  { label: "PUSH IT", value: "intermediate" },
  { label: "FULL SEND", value: "advanced" },
];

export const vibeOptions: { label: string; value: Vibe }[] = [
  { label: "CHAOTIC", value: "chaotic" },
  { label: "AESTHETIC", value: "aesthetic" },
  { label: "PRACTICAL", value: "practical" },
  { label: "WEIRD", value: "weird" },
  { label: "AI", value: "ai" },
  { label: "GAME", value: "game" },
  { label: "CREATIVE", value: "creative" },
];

export function getDifficulty(time: number, level: Level): Difficulty {
  if (level === "beginner") {
    if (time <= 30) return "EASY";
    if (time <= 120) return "MEDIUM";
    return "HARD";
  }
  if (level === "intermediate") {
    if (time <= 30) return "EASY";
    if (time === 60) return "MEDIUM";
    return "HARD";
  }
  // advanced
  if (time <= 30) return "MEDIUM";
  if (time === 60) return "HARD";
  return "INSANE";
}

export const prompts: BuildPrompt[] = [

  // ── PRACTICAL × BEGINNER — simple, single-purpose tools ──────────
  { title: "FOCUS TIMER", description: "A clean Pomodoro timer: 25 min work, 5 min break, session counter, and a subtle sound when time's up. One screen, zero distractions.", time: 15, level: "beginner", vibe: "practical" },
  { title: "BILL SPLITTER", description: "Enter a total, tip %, and headcount. Get everyone's exact share. One tap to copy the result as a ready-to-paste message.", time: 15, level: "beginner", vibe: "practical" },
  { title: "DAILY STANDUP", description: "Three fields: what you did, what's next, any blockers. Hit copy — get a formatted standup message ready to paste into Slack.", time: 30, level: "beginner", vibe: "practical" },
  { title: "HABIT STREAK CARD", description: "Track one daily habit with a 7-day dot grid. Green when done, grey when skipped. Tap to log today. Saves to localStorage.", time: 30, level: "beginner", vibe: "practical" },
  { title: "READING LIST", description: "Save articles by URL or title. Mark as read. Filter by status. No sign-up, no sync, just localStorage. Ship it in an hour.", time: 60, level: "beginner", vibe: "practical" },
  { title: "LINK IN BIO", description: "Your personal link-in-bio page: name, avatar, one-liner, and up to 8 links. Static, fast, actually yours. Deploy to Vercel.", time: 60, level: "beginner", vibe: "practical" },
  { title: "EXPENSE TRACKER", description: "Log daily expenses with a category tag. Running total at the top. Monthly breakdown chart at the bottom. Stores in localStorage.", time: 120, level: "beginner", vibe: "practical" },
  { title: "INVOICE GENERATOR", description: "Client name, your name, line items and rates. Preview a clean invoice, download as PDF. No subscription required.", time: 120, level: "beginner", vibe: "practical" },
  { title: "PERSONAL DASHBOARD", description: "A browser start page: live clock, weather, top links, sticky notes, daily quote. No account, no tracking, just yours.", time: 240, level: "beginner", vibe: "practical" },
  { title: "KANBAN BOARD", description: "Drag-and-drop task cards across To Do / Doing / Done columns. Add cards, archive columns, persist everything in localStorage.", time: 240, level: "beginner", vibe: "practical" },

  // ── PRACTICAL × INTERMEDIATE — real developer tools ───────────────
  { title: "TAB SAVER EXTENSION", description: "Chrome extension that saves all open tabs as a named session. One click to restore any saved session. No cloud needed.", time: 15, level: "intermediate", vibe: "practical" },
  { title: "CLIPBOARD MANAGER", description: "Browser extension that stores your last 10 copied items. Click any to copy again. Clears on browser close for privacy.", time: 15, level: "intermediate", vibe: "practical" },
  { title: "JSON FORMATTER PRO", description: "Paste raw or minified JSON. Get it formatted, validated, and collapsible by key. Copy any node or the whole thing.", time: 30, level: "intermediate", vibe: "practical" },
  { title: "ENV FILE EDITOR", description: "A GUI for .env files. Add, edit, and delete vars with a clean UI. Preview as key-value or export as a file. Never paste secrets in chat again.", time: 30, level: "intermediate", vibe: "practical" },
  { title: "REGEX PLAYGROUND", description: "Live regex tester: type a pattern, test against multiple strings, see matches highlighted in real time. Cheat sheet in the sidebar.", time: 60, level: "intermediate", vibe: "practical" },
  { title: "PR DESCRIPTION HELPER", description: "Paste a git diff or commit list. Get a structured PR description: what changed, why, and how to test it. Copy to GitHub.", time: 60, level: "intermediate", vibe: "practical" },
  { title: "WEBHOOK DEBUGGER", description: "A local server that receives, logs, and replays incoming webhooks. Shows headers, body, and timestamp. Better than ngrok inspect.", time: 120, level: "intermediate", vibe: "practical" },
  { title: "SCREENSHOT ANNOTATOR", description: "Chrome extension: capture any tab, draw boxes and arrows, add text labels, download. No installs, no upload to external servers.", time: 120, level: "intermediate", vibe: "practical" },
  { title: "DOCS SITE SEARCH", description: "Paste a URL to any documentation site. It scrapes and indexes the pages locally so you can search across all of them fast.", time: 240, level: "intermediate", vibe: "practical" },
  { title: "LOCAL BOOKMARK MANAGER", description: "A full replacement for the browser bookmark bar: folders, tags, favicon previews, fuzzy search. Imports from browser export.", time: 240, level: "intermediate", vibe: "practical" },

  // ── PRACTICAL × ADVANCED — non-trivial tools worth shipping ───────
  { title: "CRON EXPRESSION BUILDER", description: "Visual cron job builder with a plain-English description of each expression. Preview next 5 run times. One-click copy.", time: 15, level: "advanced", vibe: "practical" },
  { title: "CI STATUS BOARD", description: "Pull GitHub Actions status for multiple repos into one dashboard. Shows pass/fail, duration, and last run. Green/red at a glance.", time: 30, level: "advanced", vibe: "practical" },
  { title: "FEATURE FLAG DASHBOARD", description: "A lightweight feature flag system: define flags per environment, toggle them via UI, expose via a tiny SDK. No third-party service.", time: 60, level: "advanced", vibe: "practical" },
  { title: "DEPLOY PIPELINE VISUALIZER", description: "Connect to GitHub API. Visualize the last 10 workflow runs as a Gantt-style timeline. See where your deploys slow down.", time: 120, level: "advanced", vibe: "practical" },
  { title: "SELF-HOSTED UPTIME MONITOR", description: "Ping a list of URLs every 5 minutes. Browser notification if one goes down. History log per URL. Runs fully in the browser.", time: 240, level: "advanced", vibe: "practical" },

  // ── AI × BEGINNER — AI wrappers with a clear, useful job ──────────
  { title: "PROMPT IMPROVER", description: "Paste a rough AI prompt. Get a structured version with clear context, a defined goal, constraints, and the expected output format.", time: 15, level: "beginner", vibe: "ai" },
  { title: "TONE REWRITER", description: "Paste any text. Pick a tone: formal, casual, direct, or warm. AI rewrites it instantly. Great for emails and Slack messages.", time: 15, level: "beginner", vibe: "ai" },
  { title: "STANDUP WRITER", description: "Fill in: what you worked on, what's next, any blockers. AI turns your rough bullets into a polished standup. One-click copy to Slack.", time: 30, level: "beginner", vibe: "ai" },
  { title: "EMAIL TONE CHECKER", description: "Paste a draft email before you send it. AI flags tone mismatches and suggests one-line fixes. Saves you from passive-aggressive replies.", time: 30, level: "beginner", vibe: "ai" },
  { title: "COVER LETTER GENERATOR", description: "Paste a job description and your 3-bullet resume summary. Get a tailored, non-generic cover letter in under 60 seconds.", time: 60, level: "beginner", vibe: "ai" },
  { title: "BIO GENERATOR", description: "Answer 5 quick questions about yourself. Get a bio in 3 styles: LinkedIn-ready, Twitter punchy, and personal site warm.", time: 60, level: "beginner", vibe: "ai" },
  { title: "AI STUDY BUDDY", description: "Paste a topic or block of text. Get back: a plain-English summary, key concept flashcards, and a 5-question quiz to test yourself.", time: 120, level: "beginner", vibe: "ai" },
  { title: "RECIPE SUGGESTER", description: "Enter the ingredients you have. AI suggests 3 recipes with step-by-step instructions. Filter by cuisine or dietary preference.", time: 120, level: "beginner", vibe: "ai" },
  { title: "AI JOURNAL COMPANION", description: "A daily journaling app. Each entry gets an AI reflection: thoughtful, empathetic, no toxic positivity. Saves entries locally.", time: 240, level: "beginner", vibe: "ai" },
  { title: "30-DAY LEARNING PLAN", description: "Enter a skill you want to learn. AI builds a structured 30-day plan with daily tasks, resource links, and weekly milestones.", time: 240, level: "beginner", vibe: "ai" },

  // ── AI × INTERMEDIATE — smarter tools and agent-lite flows ────────
  { title: "SYSTEM PROMPT TESTER", description: "Compare how different system prompts affect the same user message. Side-by-side output. Log your best-performing prompts.", time: 15, level: "intermediate", vibe: "ai" },
  { title: "CHANGELOG WRITER", description: "Paste your git log output. AI writes a clean, user-facing changelog grouped by feature, fix, and breaking change. Copy-ready.", time: 15, level: "intermediate", vibe: "ai" },
  { title: "AI CODE REVIEWER", description: "Paste a function or component. AI reviews it: potential bugs, edge cases, style issues, and a refactored version you can copy.", time: 30, level: "intermediate", vibe: "ai" },
  { title: "CONTENT CLASSIFIER", description: "Paste any incoming text (email, ticket, message). AI labels it as question, complaint, request, or feedback — and suggests a response template.", time: 30, level: "intermediate", vibe: "ai" },
  { title: "MEETING SUMMARIZER", description: "Paste raw meeting notes. Get a clean summary: key decisions, action items with owners, and open questions. Ready to drop into Notion.", time: 60, level: "intermediate", vibe: "ai" },
  { title: "PR REVIEW ASSISTANT", description: "Paste a git diff. AI reviews it for logic bugs, missing edge cases, style issues, and security risks. Outputs a structured review.", time: 60, level: "intermediate", vibe: "ai" },
  { title: "KNOWLEDGE BASE CHATBOT", description: "Upload a PDF or paste a block of text. Ask questions about it. Answers cite the exact paragraph they're pulling from.", time: 120, level: "intermediate", vibe: "ai" },
  { title: "AI INTERVIEW COACH", description: "Enter a job role and company. Get 10 likely questions. Answer each one, get AI feedback on clarity, specificity, and confidence.", time: 120, level: "intermediate", vibe: "ai" },
  { title: "RESEARCH AGENT", description: "Enter a topic. Agent searches public sources, extracts key points, and writes a structured brief with takeaways and source links.", time: 240, level: "intermediate", vibe: "ai" },
  { title: "AI FORM BUILDER", description: "Describe a form in plain English. AI generates the fields, validation rules, and a working React component you can drop into any project.", time: 240, level: "intermediate", vibe: "ai" },

  // ── AI × ADVANCED — real agent work, pipelines, multi-model ───────
  { title: "STRUCTURED OUTPUT VALIDATOR", description: "Define a JSON schema. Send prompts to an LLM. Test how reliably it returns valid, schema-conforming output. Log failures.", time: 15, level: "advanced", vibe: "ai" },
  { title: "MULTI-AGENT DEBATE", description: "Two AI agents with opposing system prompts debate a topic. You judge which made the stronger argument. Outputs a scorecard.", time: 30, level: "advanced", vibe: "ai" },
  { title: "PROMPT CHAIN EDITOR", description: "Visual node editor where each node is an AI prompt. Connect nodes to chain prompts. Run the whole pipeline and inspect output at each step.", time: 60, level: "advanced", vibe: "ai" },
  { title: "AUTONOMOUS PR REVIEWER", description: "Connect to a GitHub repo. Agent reads PR diffs, posts structured inline comments, and outputs an overall risk level assessment.", time: 120, level: "advanced", vibe: "ai" },
  { title: "MULTI-MODEL BENCHMARK", description: "Send the same prompt to 3 different models. Compare responses side by side. Score by accuracy, tone, and length. Export as a report.", time: 240, level: "advanced", vibe: "ai" },

  // ── AESTHETIC × BEGINNER — beautiful, shippable, low complexity ───
  { title: "GRADIENT CARD", description: "One gorgeous gradient card with your name, title, and a subtle animation. Perfect for screenshots and social headers. Download as PNG.", time: 15, level: "beginner", vibe: "aesthetic" },
  { title: "MINIMAL PORTFOLIO", description: "One-page personal site: name, tagline, 3 projects, contact link. Zero JavaScript, pure typographic elegance. Deploy in minutes.", time: 30, level: "beginner", vibe: "aesthetic" },
  { title: "LINK IN BIO DELUXE", description: "A beautiful animated link-in-bio: avatar, short bio, social icons, and a featured project card. Better than Linktree. Actually yours.", time: 60, level: "beginner", vibe: "aesthetic" },
  { title: "READING PROGRESS PAGE", description: "Track your current book: progress bar, quote of the week, and reading notes. Connects to your Goodreads profile for the cover.", time: 120, level: "beginner", vibe: "aesthetic" },
  { title: "DESIGN PORTFOLIO", description: "Multi-section portfolio: scroll-driven hero, project grid with hover reveals, about section, and a contact form. Clean and fast.", time: 240, level: "beginner", vibe: "aesthetic" },

  // ── AESTHETIC × INTERMEDIATE — design tools worth using ───────────
  { title: "PALETTE EXTRACTOR", description: "Upload an image. Extract the 5 dominant colors. Export as CSS variables, Tailwind config, or a Figma-ready JSON token file.", time: 15, level: "intermediate", vibe: "aesthetic" },
  { title: "FONT PAIRING EXPLORER", description: "Browse heading and body Google Font combinations with live preview text. One-click to copy the CSS import and font stack.", time: 30, level: "intermediate", vibe: "aesthetic" },
  { title: "MOODBOARD BUILDER", description: "Drag and pin images onto a freeform canvas. Add sticky text notes. Lock your layout and export the whole board as a PNG.", time: 60, level: "intermediate", vibe: "aesthetic" },
  { title: "INTERACTIVE RESUME", description: "A scroll-driven animated resume: timeline for experience, skill bars that animate in, and a smooth dark/light mode toggle.", time: 120, level: "intermediate", vibe: "aesthetic" },
  { title: "BRAND KIT GENERATOR", description: "Enter a brand name and 3 adjectives. Get a full brand kit: color palette, font stack, logo concept sketch, and usage guidelines.", time: 240, level: "intermediate", vibe: "aesthetic" },

  // ── AESTHETIC × ADVANCED — tools that generate design output ──────
  { title: "GENERATIVE POSTER TOOL", description: "Type your text and choose colors. AI suggests a layout. Renders a styled poster with hierarchy and whitespace. Export as SVG.", time: 60, level: "advanced", vibe: "aesthetic" },
  { title: "ANIMATED LANDING PAGE BUILDER", description: "Describe a landing page in plain English. It renders a full styled, scroll-animated version using your design tokens. Export the HTML.", time: 240, level: "advanced", vibe: "aesthetic" },

  // ── WEIRD × BEGINNER — quick, funny, actually buildable ───────────
  { title: "MEETING EXCUSE GENERATOR", description: "Can't make that 9am? Click once. Get a completely believable excuse. Randomize until you find your truth. Copy and paste.", time: 15, level: "beginner", vibe: "weird" },
  { title: "IS IT A SIDE PROJECT?", description: "Answer 3 brutally honest questions about your idea. Get a ruthless verdict on whether it's worth building or just dopamine bait.", time: 15, level: "beginner", vibe: "weird" },
  { title: "VIBE CHECK", description: "Type a few words about your day. Get a full vibe assessment: energy level, mood archetype, and a suggested snack pairing.", time: 30, level: "beginner", vibe: "weird" },
  { title: "JOB TITLE INFLATOR", description: "Enter your actual job title. Get 5 increasingly unhinged LinkedIn versions of it. Copy your favorite before anyone notices.", time: 30, level: "beginner", vibe: "weird" },
  { title: "PASSIVE AGGRESSIVE TODO", description: "A to-do app that adds increasingly pointed commentary to your overdue tasks. The longer you ignore them, the worse it gets.", time: 60, level: "beginner", vibe: "weird" },
  { title: "SHOULD THIS BE A MEETING?", description: "5 ruthlessly honest questions. One verdict: send the email, post async, or fine — meet. But make it under 20 minutes.", time: 60, level: "beginner", vibe: "weird" },
  { title: "FONT DATING APP", description: "Swipe left or right on font pairings. Save your matches. Export the CSS for the 'relationships' you're willing to commit to.", time: 120, level: "beginner", vibe: "weird" },
  { title: "STARTUP OBITUARY", description: "Enter a startup name. AI writes a mock TechCrunch post about why it shut down. Eerily plausible. Uncomfortably relatable.", time: 120, level: "beginner", vibe: "weird" },

  // ── WEIRD × INTERMEDIATE — more effort, more unhinged ────────────
  { title: "CORPORATE JARGON TRANSLATOR", description: "Paste a corporate email. Get the actual meaning, the subtext, and the passive aggression score. Works both directions.", time: 15, level: "intermediate", vibe: "weird" },
  { title: "COMMIT MESSAGE ROASTER", description: "Paste your git log. AI rates each commit message from 'fine' to 'you should be ashamed.' Outputs a developer personality report.", time: 15, level: "intermediate", vibe: "weird" },
  { title: "AI PERSONALITY ROASTER", description: "Answer 10 questions about how you work and build. Get a savage-but-loving roast of your developer archetype. Share the result.", time: 30, level: "intermediate", vibe: "weird" },
  { title: "REVERSE SPEC", description: "Paste a finished product. AI guesses what the original PRD probably looked like — including the features that got cut and the stakeholder drama.", time: 30, level: "intermediate", vibe: "weird" },
  { title: "ALTERNATE TIMELINE GENERATOR", description: "Change one historical tech decision (e.g. 'Microsoft buys Google in 2002'). AI generates the full cascading fallout as a mock Wikipedia article.", time: 60, level: "intermediate", vibe: "weird" },
  { title: "VIBE TRANSLATOR", description: "Paste corporate speak → get the real version. Paste the real version → get corporate speak. Sarcasm intensity slider included.", time: 60, level: "intermediate", vibe: "weird" },
  { title: "STARTUP IDEAS FROM RAGE", description: "Rant about something frustrating for 3 sentences. AI converts your anger into a startup pitch: problem, solution, and a business model.", time: 120, level: "intermediate", vibe: "weird" },
  { title: "POST REGRET DETECTOR", description: "Paste a social post before you publish it. AI scores your future regret 1–10 with specific reasoning and a suggested safer edit.", time: 120, level: "intermediate", vibe: "weird" },

  // ── WEIRD × ADVANCED — requires real engineering, full chaos ──────
  { title: "EMOTION-BASED RENAMER", description: "Paste any codebase. AI renames all variables, functions, and components to reflect a chosen emotion. Still runs. Just… vibes differently.", time: 60, level: "advanced", vibe: "weird" },
  { title: "AI CONSPIRACY GENERATOR", description: "Input two unrelated things. AI builds a 4-source, citation-heavy conspiracy theory connecting them. Structured like a real investigative piece.", time: 240, level: "advanced", vibe: "weird" },

  // ── GAME × BEGINNER — one mechanic, fast to build, fun to play ────
  { title: "REACTION TIMER", description: "Wait for the screen to flash green, then click as fast as possible. Track average reaction time across 10 rounds. Share your score.", time: 15, level: "beginner", vibe: "game" },
  { title: "TRIVIA BLITZ", description: "10 questions from Open Trivia DB. 10 seconds per question. Final score card with correct answers revealed. One tap to share.", time: 15, level: "beginner", vibe: "game" },
  { title: "WORD SCRAMBLE", description: "One scrambled word per day. Unscramble it. Track your streak. Share a spoiler-free result (like Wordle squares) on social.", time: 30, level: "beginner", vibe: "game" },
  { title: "QUIZ MAKER", description: "Build a 5-question multiple-choice quiz. Anyone with the link can take it. You see a live summary of how people answered.", time: 30, level: "beginner", vibe: "game" },
  { title: "TYPING RACE", description: "Type a paragraph against the clock. See your WPM and accuracy. Replay to beat your best score. Choose from 3 difficulty modes.", time: 60, level: "beginner", vibe: "game" },
  { title: "DAILY PUZZLE", description: "One logic or word puzzle per day (pulled from a curated set). Track your streak. No hints. Share your result without spoilers.", time: 60, level: "beginner", vibe: "game" },
  { title: "QUIZ PLATFORM", description: "Create and share full quizzes with multiple question types. Anyone with the link can play. Host sees a live results dashboard.", time: 120, level: "beginner", vibe: "game" },
  { title: "FLASHCARD GAME", description: "Upload a CSV of term/definition pairs. Study mode shuffles them; quiz mode times you and scores accuracy. Progress persists.", time: 240, level: "beginner", vibe: "game" },

  // ── GAME × INTERMEDIATE — real mechanics, some complexity ─────────
  { title: "MORSE CODE TRAINER", description: "Tap spacebar in Morse rhythm. App decodes your input in real time and shows what you typed. Score accuracy across 5 rounds.", time: 15, level: "intermediate", vibe: "game" },
  { title: "COLOR MEMORY GAME", description: "A sequence of colors flashes. Repeat it in the right order. Difficulty scales with each round. Clean UI, satisfying sound design.", time: 30, level: "intermediate", vibe: "game" },
  { title: "TERMINAL ADVENTURE", description: "A text-based adventure game rendered in a terminal-style UI. 4 rooms, 3 items, one escape route, branching choices throughout.", time: 60, level: "intermediate", vibe: "game" },
  { title: "DAILY WORD GAME", description: "Wordle-style game but the target word is connected to today's trending topic. Clue changes every 24 hours. Share your result.", time: 120, level: "intermediate", vibe: "game" },
  { title: "PIXEL ART EDITOR", description: "16×16 canvas with a color picker, fill tool, undo/redo, and a gallery of saved pieces. Export any artwork as a PNG file.", time: 240, level: "intermediate", vibe: "game" },

  // ── GAME × ADVANCED — real multiplayer or procedural complexity ───
  { title: "MULTIPLAYER TRIVIA", description: "Real-time quiz game via WebSockets. Host creates a room code, players join on any device. Live leaderboard updates after each question.", time: 60, level: "advanced", vibe: "game" },
  { title: "PROCEDURAL DUNGEON", description: "Browser-based dungeon explorer with procedurally generated maps on every run. Simple turn-based combat, item drops, and a score screen.", time: 240, level: "advanced", vibe: "game" },

  // ── CREATIVE × BEGINNER — output something you actually want ──────
  { title: "HAIKU GENERATOR", description: "Enter a theme word. Get a beautifully written haiku. Regenerate until one feels right. Copy it. Post it. It's yours.", time: 15, level: "beginner", vibe: "creative" },
  { title: "DAILY WRITING PROMPT", description: "One new writing prompt each morning. Set a 10-minute countdown timer. Write. Save your response locally. Build a habit.", time: 15, level: "beginner", vibe: "creative" },
  { title: "MOOD COLOR CARD", description: "Pick 3 adjectives. Get a matching 5-color palette, a font suggestion, and a styled mood card. Export as an image.", time: 30, level: "beginner", vibe: "creative" },
  { title: "BAND NAME GENERATOR", description: "Click once. Get a random band name, genre mashup, and a fictional debut album title. Keep clicking until something's actually good.", time: 30, level: "beginner", vibe: "creative" },
  { title: "SONG CONCEPT GENERATOR", description: "Enter a genre and a feeling. Get a full song concept: title, core themes, 3 verse hooks, and a mood board color palette.", time: 60, level: "beginner", vibe: "creative" },
  { title: "STORY TITLE MACHINE", description: "Pick a genre. Get 10 potential titles from 'safe bestseller' to 'too weird to publish.' Click any to build the back-cover blurb.", time: 60, level: "beginner", vibe: "creative" },
  { title: "WORLD BUILDER STARTER", description: "Name your fictional world and choose an era and tone. AI generates geography, 3 factions, a founding myth, and 5 lore seeds.", time: 120, level: "beginner", vibe: "creative" },
  { title: "NEWSLETTER DRAFTER", description: "Enter a topic, audience, and tone. AI drafts a full newsletter: subject line, opening hook, 3 sections, and a call to action.", time: 120, level: "beginner", vibe: "creative" },

  // ── CREATIVE × INTERMEDIATE — tools that produce real output ──────
  { title: "SCRIPT SCENE GENERATOR", description: "Two characters, one conflict. AI writes a short, punchy script scene with stage direction. Copy directly into Final Draft or Google Docs.", time: 15, level: "intermediate", vibe: "creative" },
  { title: "FONT & COPY EXPLORER", description: "Paste your copy. Try different fonts, sizes, line heights, and letter spacing side by side. Export the winning combo as a CSS snippet.", time: 30, level: "intermediate", vibe: "creative" },
  { title: "AI ZINE MAKER", description: "Enter a theme. AI writes a 4-page digital zine: title, 3 short articles, art direction notes per page. Rendered as a styled layout.", time: 60, level: "intermediate", vibe: "creative" },
  { title: "LYRIC WRITING PARTNER", description: "Paste a phrase or hum an idea in text. AI extends it into a verse, suggests a rhyme scheme, and writes a full hook to match.", time: 120, level: "intermediate", vibe: "creative" },
  { title: "BRAND STORY GENERATOR", description: "Enter a brand name, 3 core values, and target audience. AI writes the full origin story, hero tagline, and a brand voice guide.", time: 240, level: "intermediate", vibe: "creative" },

  // ── CREATIVE × ADVANCED — full tools worth shipping ───────────────
  { title: "GENERATIVE COVER ART", description: "Describe a song or album. AI writes an art direction brief and renders a styled SVG/CSS cover mockup you can hand to a real designer.", time: 60, level: "advanced", vibe: "creative" },
  { title: "AI WORLDBUILDING AGENT", description: "Define 3 constraints for a fictional universe. Agent builds 12 interconnected lore entries, a faction map description, and a timeline.", time: 240, level: "advanced", vibe: "creative" },

  // ── CHAOTIC × BEGINNER — fast, low-stakes, high energy ───────────
  { title: "SPEED BUILD RANDOMIZER", description: "Enter your stack. Get a random project concept you must start building in the next 15 minutes. Timer auto-starts. No refunds.", time: 15, level: "beginner", vibe: "chaotic" },
  { title: "FEATURE ROULETTE", description: "Spin a slot of app features. Build whatever 3-feature combo you land on. Screenshot the result and post it somewhere.", time: 15, level: "beginner", vibe: "chaotic" },
  { title: "SIDE PROJECT DECIDER", description: "Can't pick what to build next? Answer 3 rapid-fire questions. Get one non-negotiable project directive. Build it this weekend.", time: 30, level: "beginner", vibe: "chaotic" },
  { title: "RANDOM STACK PICKER", description: "Spin the wheel. Get a random but valid tech stack. Build a todo app with it. Yes, even that one. Timer on.", time: 30, level: "beginner", vibe: "chaotic" },
  { title: "RAPID PROTOTYPE TIMER", description: "Spin a random app category and a random constraint. Timer starts. Build the most viable version in one hour. Then ship it.", time: 60, level: "beginner", vibe: "chaotic" },
  { title: "SIDE PROJECT SPEC", description: "Answer 5 rapid-fire questions. Get a fully specced side project: name, stack recommendation, MVP feature list, and a monetization path.", time: 120, level: "beginner", vibe: "chaotic" },
  { title: "HACKATHON STARTER KIT", description: "Spin a random theme, a technical constraint, and a time limit. Clock starts. Build something that technically qualifies as a product.", time: 240, level: "beginner", vibe: "chaotic" },

  // ── CHAOTIC × INTERMEDIATE — harder builds, same frenetic energy ──
  { title: "DEPLOY ROULETTE", description: "App randomly picks one of your stale side projects from your GitHub. Open it. Fix one bug. Deploy it. Do it in 15 minutes.", time: 15, level: "intermediate", vibe: "chaotic" },
  { title: "RANDOM STACK CHALLENGE", description: "Spin a tech stack you've never used. Build a working todo app with CRUD operations. Timer on. Docs are allowed. Barely.", time: 30, level: "intermediate", vibe: "chaotic" },
  { title: "API MASHUP BUILDER", description: "Randomly pulls 3 public APIs from a curated list. Build the most useful (or most unhinged) app that combines all three into one interface.", time: 60, level: "intermediate", vibe: "chaotic" },
  { title: "CLONE SOMETHING DEAD", description: "Randomly picks a product from the ProductHunt graveyard (2020-2021). Clone its core feature in your preferred stack. Ship it.", time: 120, level: "intermediate", vibe: "chaotic" },
  { title: "LIVE DATA DASHBOARD", description: "Pull live data from 5 public APIs simultaneously. Display all of it in one real-time dashboard. Make it coherent. Or don't. Ship it.", time: 240, level: "intermediate", vibe: "chaotic" },

  // ── CHAOTIC × ADVANCED — actually hard, fully chaotic in scope ────
  { title: "BUILD YOUR OWN FRAMEWORK", description: "Build a tiny React-like library from scratch: useState, useEffect, virtual DOM diffing, and JSX rendering. Under 200 lines of code.", time: 60, level: "advanced", vibe: "chaotic" },
  { title: "FULL STACK IN ONE SESSION", description: "Pick a SaaS idea. Build auth, full CRUD, a payment flow, and deploy to production. One sitting. Real product. No excuses.", time: 240, level: "advanced", vibe: "chaotic" },
];
