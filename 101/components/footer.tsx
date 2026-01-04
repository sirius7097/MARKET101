"use client"

import { useState, useEffect } from "react"

export function Footer() {
  const [clickCount, setClickCount] = useState(0)
  const [showHint, setShowHint] = useState(false)

  const handleSecretClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)

    if (newCount >= 5) {
      // 切换管理模式
      const currentUrl = new URL(window.location.href)
      if (currentUrl.searchParams.get("admin") === "market101") {
        currentUrl.searchParams.delete("admin")
        setShowHint(false)
      } else {
        currentUrl.searchParams.set("admin", "market101")
        setShowHint(true)
      }
      window.history.pushState({}, "", currentUrl.toString())
      window.location.reload()
      setClickCount(0)
    }
  }

  // 3秒内没有继续点击则重置计数
  useEffect(() => {
    if (clickCount > 0 && clickCount < 5) {
      const timer = setTimeout(() => setClickCount(0), 3000)
      return () => clearTimeout(timer)
    }
  }, [clickCount])

  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">MARKET101</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-foreground">自营交易室</span>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#strategies" className="hover:text-primary transition-colors">
              [策略]
            </a>
            <a href="#pricing" className="hover:text-primary transition-colors">
              [定价]
            </a>
            <a
              href="https://t.me/YOUR_TELEGRAM_CHANNEL"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              [Telegram]
            </a>
          </div>

          <p className="text-xs text-muted-foreground cursor-default select-none" onClick={handleSecretClick}>
            © {new Date().getFullYear()} MARKET101 // All rights reserved
            {clickCount > 0 && clickCount < 5 && <span className="ml-2 text-primary/50">({5 - clickCount})</span>}
          </p>
        </div>
      </div>
    </footer>
  )
}
