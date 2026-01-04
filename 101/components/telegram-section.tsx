export function TelegramSection() {
  return (
    <section id="telegram" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="terminal-window rounded overflow-hidden">
            <div className="terminal-header px-4 py-2 flex items-center gap-2">
              <span className="text-xs text-muted-foreground">telegram.connect</span>
            </div>
            <div className="p-6 md:p-8">
              <pre className="text-primary text-xs mb-6 overflow-x-auto">
                {`
  ╔════════════════════════════════════════════╗
  ║                                            ║
  ║   ████████╗███████╗██╗     ███████╗        ║
  ║   ╚══██╔══╝██╔════╝██║     ██╔════╝        ║
  ║      ██║   █████╗  ██║     █████╗          ║
  ║      ██║   ██╔══╝  ██║     ██╔══╝          ║
  ║      ██║   ███████╗███████╗███████╗        ║
  ║      ╚═╝   ╚══════╝╚══════╝╚══════╝        ║
  ║                                            ║
  ║      JOIN MARKET101 COMMUNITY              ║
  ║                                            ║
  ╚════════════════════════════════════════════╝
`}
              </pre>

              <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">{">"} 加入 MARKET101 社群_</h2>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                  获取实时交易信号、市场分析与策略更新。与志同道合的交易者交流，共同成长。
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-8 text-xs">
                <span className="border border-border px-3 py-1">
                  <span className="text-muted-foreground">[</span>
                  <span className="text-primary">活跃社群</span>
                  <span className="text-muted-foreground">]</span>
                </span>
                <span className="border border-border px-3 py-1">
                  <span className="text-muted-foreground">[</span>
                  <span className="text-primary">实时信号</span>
                  <span className="text-muted-foreground">]</span>
                </span>
                <span className="border border-border px-3 py-1">
                  <span className="text-muted-foreground">[</span>
                  <span className="text-primary">专业分析</span>
                  <span className="text-muted-foreground">]</span>
                </span>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://t.me/YOUR_TELEGRAM_CHANNEL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0088cc] text-white font-bold hover:bg-[#0088cc]/80 transition-colors"
                >
                  <span>{">"}</span>
                  <span>./join_telegram.sh</span>
                  <span className="w-2 h-4 bg-white animate-blink" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
