import { useState, useCallback } from "react";
import { prompts, tools, timeOptions, type BuildPrompt } from "@/data/prompts";

const PromptGenerator = () => {
  const [selectedTime, setSelectedTime] = useState<number | null>(null);
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [generatedPrompt, setGeneratedPrompt] = useState<BuildPrompt | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [bootDone, setBootDone] = useState(false);

  // Simulate boot sequence
  useState(() => {
    setTimeout(() => setBootDone(true), 1200);
  });

  const toggleTool = (tool: string) => {
    setSelectedTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  const generate = useCallback(() => {
    setIsGenerating(true);
    setGeneratedPrompt(null);

    // Filter prompts by time and tools
    let filtered = prompts.filter((p) => {
      const timeOk = selectedTime ? p.minTime <= selectedTime : true;
      const toolsOk =
        selectedTools.length === 0 ||
        p.tools.some((t) => selectedTools.includes(t));
      return timeOk && toolsOk;
    });

    if (filtered.length === 0) filtered = prompts;

    setTimeout(() => {
      const pick = filtered[Math.floor(Math.random() * filtered.length)];
      setGeneratedPrompt(pick);
      setIsGenerating(false);
    }, 800 + Math.random() * 600);
  }, [selectedTime, selectedTools]);

  const difficultyColor = (d: string) => {
    switch (d) {
      case "EASY": return "text-foreground";
      case "MEDIUM": return "text-foreground";
      case "HARD": return "text-foreground text-glow-strong";
      case "INSANE": return "text-foreground text-glow-strong";
      default: return "text-foreground";
    }
  };

  if (!bootDone) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background crt-scanlines">
        <div className="animate-boot text-foreground text-glow font-mono">
          <p>BIOS v3.14 ... OK</p>
          <p>MEM TEST: 640K ... OK</p>
          <p>LOADING VIBE_CODER.EXE ...</p>
          <span className="cursor-blink">█</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background crt-scanlines animate-flicker">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
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
        <div className="mb-6 border border-border box-glow p-4">
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

        {/* Tools Selection */}
        <div className="mb-6 border border-border box-glow p-4">
          <p className="text-foreground text-glow mb-3">
            ┌─ PICK YOUR TOOLS (optional) ─┐
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <button
                key={tool}
                onClick={() => toggleTool(tool)}
                className={`px-2 py-1 border text-xs transition-all ${
                  selectedTools.includes(tool)
                    ? "bg-primary text-primary-foreground border-primary box-glow"
                    : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
                }`}
              >
                {selectedTools.includes(tool) ? "■" : "□"} {tool}
              </button>
            ))}
          </div>
          {selectedTools.length > 0 && (
            <button
              onClick={() => setSelectedTools([])}
              className="text-muted-foreground text-xs mt-2 hover:text-foreground"
            >
              [CLEAR ALL]
            </button>
          )}
        </div>

        {/* Generate Button */}
        <div className="text-center mb-8">
          <button
            onClick={generate}
            disabled={isGenerating}
            className="px-8 py-3 border-2 border-primary text-foreground text-glow-strong text-xl hover:bg-primary hover:text-primary-foreground transition-all box-glow disabled:opacity-50"
            style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "14px" }}
          >
            {isGenerating ? "GENERATING..." : "► GENERATE PROMPT"}
          </button>
        </div>

        {/* Loading */}
        {isGenerating && (
          <div className="text-center text-foreground text-glow">
            <p>ACCESSING MAINFRAME...</p>
            <p>RANDOMIZING VECTORS...</p>
            <p className="cursor-blink">█</p>
          </div>
        )}

        {/* Result */}
        {generatedPrompt && !isGenerating && (
          <div className="border-2 border-primary box-glow p-6 animate-type-reveal">
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <p className="text-muted-foreground text-sm">
                ┌─── MISSION BRIEFING ───┐
              </p>
              <span className={`text-xs px-2 py-0.5 border border-border ${difficultyColor(generatedPrompt.difficulty)}`}>
                [{generatedPrompt.difficulty}]
              </span>
            </div>

            <h2
              className="text-foreground text-glow-strong text-2xl mb-3"
              style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "18px" }}
            >
              &gt; {generatedPrompt.title}
            </h2>

            <p className="text-foreground text-glow text-lg mb-4 leading-relaxed">
              {generatedPrompt.description}
            </p>

            <div className="border-t border-border pt-3 mt-3">
              <p className="text-muted-foreground text-sm mb-1">SUGGESTED STACK:</p>
              <div className="flex flex-wrap gap-2">
                {generatedPrompt.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs px-2 py-0.5 border border-border text-foreground text-glow"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-3 mt-3">
              <p className="text-muted-foreground text-sm">
                EST. TIME: ~{generatedPrompt.minTime >= 60 ? `${generatedPrompt.minTime / 60}h` : `${generatedPrompt.minTime}min`}
              </p>
            </div>

            <div className="mt-4 text-center">
              <button
                onClick={generate}
                className="text-muted-foreground hover:text-foreground text-sm text-glow"
              >
                [↻ REROLL] [PRESS TO TRY AGAIN]
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-muted-foreground text-xs">
          <p>═══════════════════════════════════════</p>
          <p className="mt-1">VIBE CODER OS (C) 2026 — ALL VIBES RESERVED</p>
          <p>640K OUGHT TO BE ENOUGH FOR ANYBODY</p>
        </div>
      </div>
    </div>
  );
};

export default PromptGenerator;
