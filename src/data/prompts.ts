export interface BuildPrompt {
  title: string;
  description: string;
  difficulty: "EASY" | "MEDIUM" | "HARD" | "INSANE";
  tools: string[];
  minTime: number; // in minutes
}

export const tools = [
  "React", "Next.js", "Python", "Node.js", "AI/LLM", "Supabase",
  "Tailwind", "Three.js", "WebSocket", "REST API", "GraphQL",
  "Firebase", "Stripe", "OpenAI", "Claude API", "Figma",
  "TypeScript", "Svelte", "Vue", "Flutter", "Electron"
] as const;

export const timeOptions = [
  { label: "15 MIN", value: 15 },
  { label: "30 MIN", value: 30 },
  { label: "1 HOUR", value: 60 },
  { label: "2 HOURS", value: 120 },
  { label: "4+ HRS", value: 240 },
] as const;

export const prompts: BuildPrompt[] = [
  { title: "RETRO CHAT ROOM", description: "Build a real-time chatroom that looks like IRC from 1995. Users pick a handle and join channels.", difficulty: "MEDIUM", tools: ["React", "WebSocket", "Tailwind"], minTime: 60 },
  { title: "AI ROAST BOT", description: "A web app where you paste your GitHub profile and an AI roasts your repos, commit messages, and code style.", difficulty: "MEDIUM", tools: ["React", "AI/LLM", "OpenAI", "Claude API"], minTime: 30 },
  { title: "PIXEL ART EDITOR", description: "Create a browser-based pixel art editor with layers, color palettes, and export to PNG.", difficulty: "HARD", tools: ["React", "TypeScript", "Tailwind"], minTime: 120 },
  { title: "VIBE CHECK DASHBOARD", description: "Build a dashboard that shows real-time sentiment analysis of a subreddit or Twitter feed.", difficulty: "HARD", tools: ["React", "AI/LLM", "REST API", "Python"], minTime: 120 },
  { title: "POMODORO HACKER", description: "A terminal-themed Pomodoro timer with ASCII art, sound effects, and task tracking.", difficulty: "EASY", tools: ["React", "Tailwind", "TypeScript"], minTime: 15 },
  { title: "STARTUP NAME GEN", description: "Generate ridiculous startup names and landing pages with AI. One click to create a full fake product page.", difficulty: "EASY", tools: ["React", "AI/LLM", "Tailwind"], minTime: 30 },
  { title: "MULTIPLAYER SNAKE", description: "Build a multiplayer Snake game. Players compete in real-time on the same board.", difficulty: "HARD", tools: ["React", "WebSocket", "Node.js"], minTime: 120 },
  { title: "CLI PORTFOLIO", description: "Create a personal portfolio that works like a terminal. Visitors type commands to navigate.", difficulty: "MEDIUM", tools: ["React", "TypeScript", "Tailwind"], minTime: 60 },
  { title: "MEME API MASHUP", description: "Combine two random meme templates with AI-generated captions. Auto-post to a gallery.", difficulty: "MEDIUM", tools: ["React", "REST API", "AI/LLM"], minTime: 60 },
  { title: "EXPENSE SPLITTER", description: "Build a bill-splitting app for friend groups. Track who owes who with a clean UI.", difficulty: "MEDIUM", tools: ["React", "Supabase", "Tailwind"], minTime: 60 },
  { title: "WEATHER TERMINAL", description: "A weather app that displays forecasts in ASCII art. Rain, sun, clouds — all in text characters.", difficulty: "EASY", tools: ["React", "REST API", "Tailwind"], minTime: 30 },
  { title: "CODE SNIPPET VAULT", description: "A personal code snippet manager with syntax highlighting, tags, and search.", difficulty: "MEDIUM", tools: ["React", "Supabase", "TypeScript"], minTime: 60 },
  { title: "AUDIO VISUALIZER", description: "Build a real-time audio visualizer that reacts to microphone input with trippy WebGL effects.", difficulty: "HARD", tools: ["React", "Three.js", "TypeScript"], minTime: 120 },
  { title: "LINK SHORTENER", description: "Create a URL shortener with click analytics, QR code generation, and custom slugs.", difficulty: "MEDIUM", tools: ["React", "Supabase", "Node.js"], minTime: 60 },
  { title: "AI FLASHCARDS", description: "Paste any article or notes, and AI generates flashcards. Includes spaced repetition.", difficulty: "MEDIUM", tools: ["React", "AI/LLM", "Supabase"], minTime: 60 },
  { title: "RANDOM COLOR PALETTE", description: "Generate beautiful color palettes with one click. Lock colors you like. Export as CSS variables.", difficulty: "EASY", tools: ["React", "Tailwind", "TypeScript"], minTime: 15 },
  { title: "KANBAN BOARD", description: "Drag-and-drop Kanban board with columns, cards, labels, and local persistence.", difficulty: "MEDIUM", tools: ["React", "TypeScript", "Tailwind"], minTime: 60 },
  { title: "PAYMENT CHECKOUT", description: "Build a full Stripe checkout flow with product selection, cart, and payment confirmation.", difficulty: "HARD", tools: ["React", "Stripe", "Node.js"], minTime: 120 },
  { title: "MARKDOWN BLOG", description: "A minimal blog engine that renders Markdown files with syntax highlighting and dark mode.", difficulty: "MEDIUM", tools: ["React", "TypeScript", "Tailwind"], minTime: 60 },
  { title: "AI COMMIT MSGS", description: "A tool that reads your git diff and generates perfect commit messages using AI.", difficulty: "EASY", tools: ["Python", "AI/LLM", "Claude API"], minTime: 30 },
  { title: "HABIT TRACKER", description: "Track daily habits with streaks, heatmaps, and motivational stats. GitHub-contribution-style grid.", difficulty: "MEDIUM", tools: ["React", "Supabase", "Tailwind"], minTime: 60 },
  { title: "TYPING SPEED TEST", description: "A typing speed test with WPM tracking, accuracy stats, and a leaderboard.", difficulty: "EASY", tools: ["React", "TypeScript", "Tailwind"], minTime: 30 },
  { title: "RECIPE FINDER", description: "Enter ingredients you have, get AI-powered recipe suggestions with step-by-step instructions.", difficulty: "MEDIUM", tools: ["React", "AI/LLM", "REST API"], minTime: 60 },
  { title: "3D PRODUCT VIEWER", description: "Build a 3D product viewer with orbit controls, lighting, and material switching.", difficulty: "HARD", tools: ["React", "Three.js", "TypeScript"], minTime: 120 },
  { title: "FAKE OS DESKTOP", description: "Create a web-based fake operating system with draggable windows, a taskbar, and mini-apps.", difficulty: "INSANE", tools: ["React", "TypeScript", "Tailwind"], minTime: 240 },
  { title: "NOISE MACHINE", description: "An ambient noise generator with mixable sounds: rain, cafe, fireplace, forest. Adjustable volumes.", difficulty: "EASY", tools: ["React", "Tailwind", "TypeScript"], minTime: 30 },
  { title: "BOOKMARK MANAGER", description: "A visual bookmark manager with auto-generated thumbnails, folders, and full-text search.", difficulty: "MEDIUM", tools: ["React", "Supabase", "REST API"], minTime: 60 },
  { title: "ASCII WEBCAM", description: "Turn your webcam feed into real-time ASCII art in the browser.", difficulty: "HARD", tools: ["React", "TypeScript"], minTime: 120 },
  { title: "QUIZ MAKER", description: "Build a quiz creation tool where you can make, share, and take quizzes with scoring.", difficulty: "MEDIUM", tools: ["React", "Supabase", "TypeScript"], minTime: 60 },
  { title: "MICRO SAAS LANDING", description: "Generate a complete SaaS landing page from a one-line product description using AI.", difficulty: "MEDIUM", tools: ["React", "AI/LLM", "Tailwind"], minTime: 60 },
];
