"use client"

import { useEffect, useState } from "react"

const codeLines = [
  { type: "comment", text: "// MARKET101 Trading Engine v2.0" },
  { type: "comment", text: "// 自研量化交易策略引擎" },
  { type: "empty", text: "" },
  {
    type: "keyword",
    text: "import",
    rest: " { KAIYANG, AlphaDojo } ",
    from: "from ",
    module: "'@market101/strategies'",
  },
  { type: "empty", text: "" },
  { type: "keyword", text: "const", rest: " engine = ", func: "new TradingEngine", params: "({" },
  { type: "prop", key: "  mode", value: "'autonomous'", comma: "," },
  { type: "prop", key: "  strategies", value: "[KAIYANG, AlphaDojo]", comma: "," },
  { type: "prop", key: "  riskLevel", value: "'calculated'", comma: "," },
  { type: "prop", key: "  status", value: "'ACTIVE'", comma: "" },
  { type: "close", text: "})" },
  { type: "empty", text: "" },
  { type: "keyword", text: "await", rest: " engine.", func: "initialize", params: "()" },
  { type: "output", text: "// >> Engine initialized successfully" },
  { type: "output", text: "// >> Monitoring 500+ trading pairs..." },
]

export function HeroSection() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((v) => v + 1)
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [visibleLines])

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((v) => !v)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden scanline-overlay">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-foreground mb-4"
            style={{
              textShadow: "0 0 40px rgba(255,255,255,0.15), 0 0 80px rgba(255,255,255,0.05)",
            }}
          >
            MARKET101
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl tracking-widest">// TRADING ENGINE v2.0</p>
        </div>

        {/* Terminal Window */}
        <div className="terminal-window max-w-3xl mx-auto rounded">
          {/* Terminal Header */}
          <div className="terminal-header px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-muted-foreground/40" />
              <span className="w-3 h-3 rounded-full bg-muted-foreground/60" />
              <span className="w-3 h-3 rounded-full bg-foreground/80" />
            </div>
            <span className="text-xs text-muted-foreground ml-2">Discipline. Precision. Alpha.</span>
          </div>

          {/* Terminal Content */}
          <div className="p-4 md:p-6 text-sm md:text-base overflow-x-auto">
            {codeLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} className="flex">
                <span className="text-muted-foreground/50 w-6 text-right mr-4 select-none text-xs">{i + 1}</span>
                <code className="flex-1">
                  {line.type === "comment" && <span className="code-comment">{line.text}</span>}
                  {line.type === "empty" && <span>&nbsp;</span>}
                  {line.type === "keyword" && (
                    <>
                      <span className="code-keyword">{line.text}</span>
                      <span className="text-foreground">{line.rest}</span>
                      {line.func && <span className="code-function">{line.func}</span>}
                      {line.params && <span className="text-foreground">{line.params}</span>}
                      {line.from && <span className="code-keyword">{line.from}</span>}
                      {line.module && <span className="code-string">{line.module}</span>}
                    </>
                  )}
                  {line.type === "prop" && (
                    <>
                      <span className="text-foreground">{line.key}: </span>
                      <span className={line.value?.startsWith("'") ? "code-string" : "code-function"}>
                        {line.value}
                      </span>
                      <span className="text-foreground">{line.comma}</span>
                    </>
                  )}
                  {line.type === "close" && <span className="text-foreground">{line.text}</span>}
                  {line.type === "output" && <span className="text-foreground/80">{line.text}</span>}
                </code>
              </div>
            ))}
            {visibleLines === codeLines.length && (
              <div className="flex mt-2">
                <span className="text-muted-foreground/50 w-6 text-right mr-4 select-none text-xs">
                  {codeLines.length + 1}
                </span>
                <code className="flex items-center">
                  <span className="text-foreground">{">"}</span>
                  <span className={`w-2 h-4 bg-foreground ml-1 ${cursorVisible ? "opacity-100" : "opacity-0"}`} />
                </code>
              </div>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: "STRATEGIES", value: "02" },
            { label: "PAIRS_MONITORED", value: "500+" },
            { label: "UPTIME", value: "99.9%" },
            { label: "AVG_ROI", value: "+45%" },
          ].map((stat) => (
            <div key={stat.label} className="border border-border p-3 text-center bg-card/50">
              <div className="text-xs text-muted-foreground mb-1">{stat.label}</div>
              <div className="text-xl text-foreground font-bold">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
