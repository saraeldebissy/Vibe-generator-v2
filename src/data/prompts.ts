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
  { title: "TAB SAVER EXTENSION", description: "Browser extension that saves all your open tabs under a name. One click to restore any saved session later. Never lose a research rabbit hole again.", time: 15, level: "intermediate", vibe: "practical" },
  { title: "CLIPBOARD MANAGER", description: "Browser extension that remembers the last 10 things you copied. Click any to copy it again. Auto-wipes when you close the browser.", time: 15, level: "intermediate", vibe: "practical" },
  { title: "DATA CLEANER", description: "Paste a messy blob of data and get it back clean, readable, and easy to browse. Copy any piece of it or everything in one click.", time: 30, level: "intermediate", vibe: "practical" },
  { title: "SETTINGS MANAGER", description: "A clean visual editor for your project's secret keys and settings. Add, edit, and hide sensitive values — no more digging through raw text files.", time: 30, level: "intermediate", vibe: "practical" },
  { title: "TEXT PATTERN FINDER", description: "Write a rule for what you're searching for in any text, and see every match highlighted live as you type. Includes a cheat sheet of examples.", time: 60, level: "intermediate", vibe: "practical" },
  { title: "CHANGE SUMMARY TOOL", description: "Paste a list of recent updates to your project. Get a clean, human-readable summary of what changed and what's ready to share.", time: 60, level: "intermediate", vibe: "practical" },
  { title: "REQUEST LOGGER", description: "A tool that catches messages sent to your app from other services, shows you exactly what arrived, and lets you replay them for testing.", time: 120, level: "intermediate", vibe: "practical" },
  { title: "SCREENSHOT ANNOTATOR", description: "Browser extension: capture any tab, draw arrows and boxes, add text callouts, then download. No accounts, no uploads to anyone's server.", time: 120, level: "intermediate", vibe: "practical" },
  { title: "DOCS SEARCH ENGINE", description: "Point it at any documentation website. It reads all the pages and builds a fast local search so you can find anything instantly.", time: 240, level: "intermediate", vibe: "practical" },
  { title: "LOCAL BOOKMARK MANAGER", description: "A proper replacement for your browser bookmarks: folders, tags, preview images, and fuzzy search. Import from your browser in one click.", time: 240, level: "intermediate", vibe: "practical" },

  // ── PRACTICAL × ADVANCED — non-trivial tools worth shipping ───────
  { title: "TASK SCHEDULER", description: "Visual tool for setting up tasks that run automatically — pick the frequency in plain English, preview the next run times, copy the settings.", time: 15, level: "advanced", vibe: "practical" },
  { title: "PROJECT STATUS BOARD", description: "Pull live status for all your projects into one dashboard. Green when everything's fine, red when something broke. No more checking five tabs.", time: 30, level: "advanced", vibe: "practical" },
  { title: "FEATURE SWITCH PANEL", description: "Turn features of your app on or off with a toggle — per version, per audience, no code change needed. Runs on your own setup.", time: 60, level: "advanced", vibe: "practical" },
  { title: "RELEASE HISTORY VIEWER", description: "See your last 10 releases laid out on a timeline. Know exactly how long each step took and where things tend to slow down.", time: 120, level: "advanced", vibe: "practical" },
  { title: "UPTIME MONITOR", description: "Watch a list of your websites and check them every 5 minutes. Get a browser notification the moment one goes down. Full history included.", time: 240, level: "advanced", vibe: "practical" },

  // ── AI × BEGINNER — AI wrappers with a clear, useful job ──────────
  { title: "PROMPT IMPROVER", description: "Type a rough instruction for an AI tool. Get back a cleaner, more specific version that actually gets you what you wanted.", time: 15, level: "beginner", vibe: "ai" },
  { title: "TONE REWRITER", description: "Paste any text. Pick a tone: formal, casual, direct, or warm. AI rewrites it instantly. Great for emails and messages you keep second-guessing.", time: 15, level: "beginner", vibe: "ai" },
  { title: "DAILY UPDATE WRITER", description: "Fill in what you worked on, what's next, and any blockers. AI turns your rough bullets into a polished team update ready to copy and send.", time: 30, level: "beginner", vibe: "ai" },
  { title: "EMAIL TONE CHECKER", description: "Paste a draft email before you send it. AI flags where it might land wrong and suggests one-line fixes. Saves you from passive-aggressive replies.", time: 30, level: "beginner", vibe: "ai" },
  { title: "COVER LETTER GENERATOR", description: "Paste a job description and a few lines about yourself. Get a tailored, non-generic cover letter in under 60 seconds.", time: 60, level: "beginner", vibe: "ai" },
  { title: "BIO GENERATOR", description: "Answer 5 quick questions about yourself. Get a bio in 3 styles: professional and polished, short and punchy, or warm and personal.", time: 60, level: "beginner", vibe: "ai" },
  { title: "AI STUDY BUDDY", description: "Paste any topic or block of text. Get back a plain-English summary, key concept flashcards, and a 5-question quiz to test yourself.", time: 120, level: "beginner", vibe: "ai" },
  { title: "RECIPE SUGGESTER", description: "Enter the ingredients you have at home. AI suggests 3 recipes with step-by-step instructions. Filter by cuisine or dietary preference.", time: 120, level: "beginner", vibe: "ai" },
  { title: "AI JOURNAL COMPANION", description: "A daily journaling app where each entry gets a thoughtful AI reflection back — empathetic, honest, no toxic positivity. Saves everything locally.", time: 240, level: "beginner", vibe: "ai" },
  { title: "30-DAY LEARNING PLAN", description: "Enter a skill you want to learn. AI builds a structured 30-day plan: daily tasks, resource links, and weekly milestones. Print it and go.", time: 240, level: "beginner", vibe: "ai" },

  // ── AI × INTERMEDIATE — smarter tools ────────────────────────────
  { title: "AI INSTRUCTIONS TESTER", description: "Try different AI instruction styles on the same question and see the results side by side. Find the version that gets the best answers.", time: 15, level: "intermediate", vibe: "ai" },
  { title: "UPDATE LOG WRITER", description: "List what changed in your project and AI turns it into a clean, readable summary grouped by new features, fixes, and anything that broke.", time: 15, level: "intermediate", vibe: "ai" },
  { title: "AI PROJECT REVIEWER", description: "Paste any piece of your work. AI spots potential issues, flags edge cases you missed, and gives you an improved version you can copy.", time: 30, level: "intermediate", vibe: "ai" },
  { title: "MESSAGE SORTER", description: "Paste any incoming message — email, feedback, request. AI labels it, reads the subtext, and suggests a ready-to-use reply template.", time: 30, level: "intermediate", vibe: "ai" },
  { title: "MEETING SUMMARIZER", description: "Paste raw meeting notes. Get a clean summary: key decisions, who owns what, and open questions. Ready to share with anyone who wasn't there.", time: 60, level: "intermediate", vibe: "ai" },
  { title: "WORK REVIEWER", description: "Paste anything you've built or written. AI reads it for problems, blind spots, and style issues, then outputs a structured review with suggestions.", time: 60, level: "intermediate", vibe: "ai" },
  { title: "DOCUMENT CHATBOT", description: "Upload a PDF or paste a long document. Ask questions about it in plain English. Answers point to the exact section they came from.", time: 120, level: "intermediate", vibe: "ai" },
  { title: "AI INTERVIEW COACH", description: "Enter a job role and company. Get 10 likely questions. Answer each one and get feedback on clarity, what to add, and what to cut.", time: 120, level: "intermediate", vibe: "ai" },
  { title: "TOPIC RESEARCHER", description: "Enter a topic. AI reads public sources, pulls out the key points, and writes a tidy brief with the main takeaways and where they came from.", time: 240, level: "intermediate", vibe: "ai" },
  { title: "AI FORM BUILDER", description: "Describe what information you need to collect in plain English. AI builds a working form with the right fields and validation. Done.", time: 240, level: "intermediate", vibe: "ai" },

  // ── AI × ADVANCED — real AI work, comparisons, flows ─────────────
  { title: "AI RELIABILITY TESTER", description: "Pick a task. Run the same question through an AI 20 times. See how consistent or random the answers are and log the failures.", time: 15, level: "advanced", vibe: "ai" },
  { title: "AI DEBATE ARENA", description: "Two AI instances argue opposite sides of any topic you choose. You judge which one made the stronger case. Outputs a winner and scorecard.", time: 30, level: "advanced", vibe: "ai" },
  { title: "AI WORKFLOW BUILDER", description: "Visual canvas where each box is an AI task. Connect them in a sequence, run the whole flow, and see the output at every step.", time: 60, level: "advanced", vibe: "ai" },
  { title: "AI FEEDBACK BOT", description: "Connect it to any project. It reads new submissions, writes detailed structured feedback, and flags the ones that need human attention.", time: 120, level: "advanced", vibe: "ai" },
  { title: "AI COMPARISON TOOL", description: "Type one question and send it to three different AI tools at once. Compare the answers side by side and score them on accuracy, tone, and length.", time: 240, level: "advanced", vibe: "ai" },

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
  { title: "REVIVAL ROULETTE", description: "Randomly picks one of your forgotten projects. Open it. Fix one thing. Publish it. You have 15 minutes. Go.", time: 15, level: "intermediate", vibe: "chaotic" },
  { title: "RANDOM TOOL CHALLENGE", description: "Spin a tool or framework you've never used before. Build a working to-do app with it. Timer on. Looking things up is allowed. Barely.", time: 30, level: "intermediate", vibe: "chaotic" },
  { title: "DATA MASHUP BUILDER", description: "Randomly assigns 3 live data sources. Build the most useful — or most unhinged — app that combines all three into one screen.", time: 60, level: "intermediate", vibe: "chaotic" },
  { title: "CLONE SOMETHING DEAD", description: "Randomly picks a product that shut down between 2020 and 2022. Clone its core feature. Make it better. Ship it.", time: 120, level: "intermediate", vibe: "chaotic" },
  { title: "LIVE DATA DASHBOARD", description: "Pull live data from 5 different sources at once. Show all of it on one screen in real time. Make it make sense. Or don't. Just ship it.", time: 240, level: "intermediate", vibe: "chaotic" },

  // ── CHAOTIC × ADVANCED — actually hard, fully chaotic in scope ────
  { title: "BUILD YOUR OWN FRAMEWORK", description: "Build a tiny version of a UI framework from scratch — state, effects, a component tree, and rendering. Under 200 lines. It has to actually work.", time: 60, level: "advanced", vibe: "chaotic" },
  { title: "FULL PRODUCT IN ONE SESSION", description: "Pick an idea. Build sign-in, the core feature, a payment screen, and get it live — in one sitting. Real product. No shortcuts.", time: 240, level: "advanced", vibe: "chaotic" },
];
