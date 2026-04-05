import { useState, useCallback, useEffect } from "react";
import { prompts, timeOptions, levelOptions, vibeOptions, getDifficulty, type BuildPrompt, type Level, type Vibe } from "@/data/prompts";

const PromptGenerator = () => {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [selectedVibe, setSelectedVibe] = useState<Vibe | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState<BuildPrompt | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [bootDone, setBootDone] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);
  const [view, setView] = useState<'filters' | 'result'>('filters');

  const bootLines = [
    "BIOS v3.14.159 ................. OK",
    "MEM TEST: 640K ................. OK",
    "LOADING VIBE_CODER.EXE .........",
    "> CALIBRATING CHAOS LEVELS ...",
    "> SYSTEM READY.",
  ];

  useEffect(() => {
    const delays = [600, 500, 700, 600, 700];
    let total = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];
    delays.forEach((delay, i) => {
      total += delay;
      timers.push(setTimeout(() => setVisibleLines(i + 1), total));
    });
    timers.push(setTimeout(() => setBootDone(true), total + 500));
    return () => timers.forEach(clearTimeout);
  }, []);

  const generate = useCallback(() => {
    setIsGenerating(true);
    setGeneratedPrompt(null);

    let filtered = prompts.filter((p) => {
      const timeOk = selectedTime ? p.time === selectedTime : true;
      const levelOk = selectedLevel ? p.level === selectedLevel : true;
      const vibeOk = selectedVibe ? p.vibe === selectedVibe : true;
      return timeOk && levelOk && vibeOk;
    });

    // Relax vibe if no results, then relax level
    if (filtered.length === 0) {
      filtered = prompts.filter((p) => {
        const timeOk = selectedTime ? p.time === selectedTime : true;
        const levelOk = selectedLevel ? p.level === selectedLevel : true;
        return timeOk && levelOk;
      });
    }
    if (filtered.length === 0) filtered = prompts;

    setTimeout(() => {
      const pick = filtered[Math.floor(Math.random() * filtered.length)];
      setGeneratedPrompt(pick);
      setIsGenerating(false);
      setView('result');
    }, 800 + Math.random() * 600);
  }, [selectedTime, selectedLevel, selectedVibe]);

  const difficultyColor = (d: string) => {
    switch (d) {
      case "HARD": return "text-foreground text-glow-strong";
      case "INSANE": return "text-foreground text-glow-strong";
      default: return "text-foreground";
    }
  };

  if (!bootDone) {
    return (
      <div className="monitor-outer">
      <div className="monitor-screen-bezel">
      <div className="monitor-screen">
        <div className="h-full bg-background crt-scanlines animate-flicker flex items-center justify-center px-6">
          <div className="text-foreground text-glow font-mono text-sm w-full max-w-sm">
            {bootLines.slice(0, visibleLines).map((line, i) => (
              <p key={i} className="leading-relaxed">{line}</p>
            ))}
            {visibleLines < bootLines.length && (
              <span className="cursor-blink">█</span>
            )}
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }

  return (
    <div className="monitor-outer">
    <div className="monitor-screen-bezel">
    <div className="monitor-screen">
    <div className="h-full bg-background crt-scanlines animate-flicker flex flex-col">

      {/* ── FILTERS SCREEN ── */}
      {view === 'filters' && (
        <div className="flex flex-col h-full px-6 pt-8 pb-4 overflow-y-auto">
          {/* Header */}
          <div className="text-center mb-4">
            <h1
              className="text-4xl md:text-5xl text-foreground text-glow-strong mb-2"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "clamp(16px, 4vw, 28px)" }}
            >
              VIBE GENERATOR v2.0
            </h1>
            <p className="text-muted-foreground text-glow text-lg">
              ═══ BUILD PROMPT GENERATOR ═══
            </p>
            <p className="text-muted-foreground mt-1 text-sm">
              C:\VIBECODER&gt; SELECT YOUR PARAMETERS_
            </p>
          </div>

          {/* Time Selection */}
          <div className="mb-3 border border-border box-glow p-3">
            <p className="text-foreground text-glow mb-3">
              ┌─ HOW MUCH TIME YOU GOT? ─┐
            </p>
            <div className="flex flex-wrap gap-2">
              {timeOptions.map((t) => (
                <button
                  key={t.value}
                  onClick={() => setSelectedTime(selectedTime === t.value ? null : t.value)}
                  className={`px-3 py-1.5 border transition-all text-sm ${
                    selectedTime === t.value
                      ? "bg-primary text-primary-foreground border-primary box-glow"
                      : "border-border text-foreground hover:border-primary hover:text-foreground text-glow"
                  }`}
                >
                  [{selectedTime === t.value ? "X" : " "}] {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Level Selection */}
          <div className="mb-3 border border-border box-glow p-3">
            <p className="text-foreground text-glow mb-3">
              ┌─ PICK YOUR DIFFICULTY ─┐
            </p>
            <div className="flex flex-wrap gap-2">
              {levelOptions.map((l) => (
                <button
                  key={l.value}
                  onClick={() => setSelectedLevel(selectedLevel === l.value ? null : l.value)}
                  className={`px-3 py-1.5 border transition-all text-sm ${
                    selectedLevel === l.value
                      ? "bg-primary text-primary-foreground border-primary box-glow"
                      : "border-border text-foreground hover:border-primary hover:text-foreground text-glow"
                  }`}
                >
                  [{selectedLevel === l.value ? "X" : " "}] {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Vibe Selection */}
          <div className="mb-3 border border-border box-glow p-3">
            <p className="text-foreground text-glow mb-3">
              ┌─ PICK A VIBE (optional) ─┐
            </p>
            <div className="flex flex-wrap gap-2">
              {vibeOptions.map((v) => (
                <button
                  key={v.value}
                  onClick={() => setSelectedVibe(selectedVibe === v.value ? null : v.value)}
                  className={`px-2 py-1 border text-xs transition-all ${
                    selectedVibe === v.value
                      ? "bg-primary text-primary-foreground border-primary box-glow"
                      : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {selectedVibe === v.value ? "■" : "□"} {v.label}
                </button>
              ))}
            </div>
            {selectedVibe && (
              <button
                onClick={() => setSelectedVibe(null)}
                className="text-muted-foreground text-xs mt-2 hover:text-foreground"
              >
                [CLEAR VIBE]
              </button>
            )}
          </div>

          {/* Generate button / loading */}
          <div className="flex-1 flex flex-col justify-center">
            {!isGenerating && (
              <div className="text-center">
                <button
                  onClick={generate}
                  disabled={isGenerating}
                  className="px-8 py-3 border-2 border-primary text-foreground text-glow-strong hover:bg-primary hover:text-primary-foreground transition-all box-glow disabled:opacity-50"
                  style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "14px" }}
                >
                  ► GENERATE PROMPT
                </button>
              </div>
            )}

            {isGenerating && (
              <div className="text-center text-foreground text-glow">
                <p>ACCESSING MAINFRAME...</p>
                <p>RANDOMIZING VECTORS...</p>
                <p className="cursor-blink">█</p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="text-center mt-3 text-muted-foreground text-xs">
            <p>═══════════════════════════════════════</p>
            <p>VIBE GENERATOR OS (C) 2026 — ALL VIBES RESERVED</p>
          </div>
        </div>
      )}

      {/* ── RESULT SCREEN ── */}
      {view === 'result' && generatedPrompt && (
        <div className="flex flex-col h-full px-6 py-4">
          {/* Back button */}
          <div className="mb-4">
            <button
              onClick={() => { setView('filters'); setGeneratedPrompt(null); }}
              className="text-muted-foreground hover:text-foreground text-sm text-glow transition-all"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "11px" }}
            >
              ← BACK
            </button>
          </div>

          {/* Prompt card — centered, fills remaining space */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="border-2 border-primary box-glow p-4 animate-type-reveal">
              <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                <p className="text-muted-foreground text-sm">┌─── MISSION BRIEFING ───┐</p>
                <span className={`text-xs px-2 py-0.5 border border-border ${difficultyColor(getDifficulty(generatedPrompt.time, generatedPrompt.level))}`}>
                  [{getDifficulty(generatedPrompt.time, generatedPrompt.level)}]
                </span>
              </div>
              <h2
                className="text-foreground text-glow-strong mb-2"
                style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "16px" }}
              >
                &gt; {generatedPrompt.title}
              </h2>
              <p className="text-foreground text-glow mb-3 leading-relaxed">
                {generatedPrompt.description}
              </p>
              <div className="border-t border-border pt-2 flex flex-wrap gap-2 items-center justify-between">
                <div className="flex gap-2">
                  <span className="text-muted-foreground text-xs px-2 py-0.5 border border-border">{generatedPrompt.level.toUpperCase()}</span>
                  <span className="text-muted-foreground text-xs px-2 py-0.5 border border-border">{generatedPrompt.vibe.toUpperCase()}</span>
                  <span className="text-muted-foreground text-xs px-2 py-0.5 border border-border">~{generatedPrompt.time >= 60 ? `${generatedPrompt.time / 60}h` : `${generatedPrompt.time}min`}</span>
                </div>
                <button onClick={generate} className="text-muted-foreground hover:text-foreground text-sm text-glow">
                  [↻ REROLL]
                </button>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-3 text-muted-foreground text-xs">
            <p>═══════════════════════════════════════</p>
            <p>VIBE GENERATOR OS (C) 2026 — ALL VIBES RESERVED</p>
          </div>
        </div>
      )}

    </div>
    </div>
    </div>
    </div>
  );
};

export default PromptGenerator;
