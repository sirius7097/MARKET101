const exchanges = [
  {
    name: "BINANCE",
    rebate: "20%",
    link: "https://t.me/bitjh",
    status: "ONLINE",
  },
  {
    name: "BYBIT",
    rebate: "33%",
    link: "https://t.me/bitjh",
    status: "ONLINE",
  },
  {
    name: "BITGET",
    rebate: "40%",
    link: "https://t.me/bitjh",
    status: "ONLINE",
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 relative bg-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block border border-border px-4 py-2 mb-4">
            <span className="text-muted-foreground text-sm">{"// "}</span>
            <span className="text-primary text-sm">PRICING.config</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{">"} 选择访问模式_</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Subscription Option */}
          <div className="terminal-window rounded overflow-hidden">
            <div className="terminal-header px-4 py-2 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">subscription.plan</span>
              <span className="text-xs text-muted-foreground px-2 py-0.5 border border-muted-foreground">价值锚点</span>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <span className="text-muted-foreground text-sm">price = </span>
                <span className="text-3xl font-bold text-foreground">500</span>
                <span className="text-muted-foreground"> USDT</span>
                <span className="text-muted-foreground text-sm"> /month</span>
              </div>

              <div className="space-y-2 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-primary">[✓]</span>
                  <span className="text-muted-foreground">KAIYANG 开阳策略</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">[✓]</span>
                  <span className="text-muted-foreground">Alpha Dojo 策略</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">[✓]</span>
                  <span className="text-muted-foreground">实时交易信号</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">[✓]</span>
                  <span className="text-muted-foreground">Telegram 社群支持</span>
                </div>
              </div>

              <button className="w-full py-2 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors text-sm">
                {">"} 订阅付费_
              </button>
            </div>
          </div>

          {/* Free via Exchange */}
          <div className="terminal-window rounded overflow-hidden border-primary/50">
            <div className="terminal-header px-4 py-2 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">exchange.register</span>
              <span className="text-xs text-primary px-2 py-0.5 border border-primary animate-pulse">推荐</span>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <span className="text-muted-foreground text-sm">price = </span>
                <span className="text-3xl font-bold text-primary">FREE</span>
                <span className="text-muted-foreground text-sm"> + 返佣</span>
              </div>

              <div className="space-y-3 mb-6">
                {exchanges.map((exchange) => (
                  <a
                    key={exchange.name}
                    href={exchange.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 border border-border hover:border-primary transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-foreground font-bold">{exchange.name}</span>
                      <span className="text-xs px-2 py-0.5 bg-primary/20 text-primary">{exchange.rebate} 返佣</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                        {exchange.status}
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              <p className="text-xs text-muted-foreground text-center">{"// "} 点击链接注册后联系我们激活</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
