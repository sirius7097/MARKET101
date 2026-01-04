"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"

interface TradeRecord {
  id: number
  coin: string
  gain: number
  amount: string
  strategy: "开阳" | "北极星"
}

const defaultRecords: TradeRecord[] = [
  { id: 1, coin: "FIL", gain: 100, amount: "2,500", strategy: "开阳" },
  { id: 2, coin: "SOL", gain: 85, amount: "1,800", strategy: "北极星" },
  { id: 3, coin: "BTC", gain: 32, amount: "5,200", strategy: "开阳" },
  { id: 4, coin: "ETH", gain: 45, amount: "3,100", strategy: "北极星" },
  { id: 5, coin: "PEPE", gain: 156, amount: "4,600", strategy: "开阳" },
  { id: 6, coin: "WIF", gain: 120, amount: "2,900", strategy: "北极星" },
  { id: 7, coin: "AVAX", gain: 67, amount: "1,500", strategy: "开阳" },
  { id: 8, coin: "BNB", gain: 28, amount: "980", strategy: "北极星" },
  { id: 9, coin: "DOGE", gain: 78, amount: "2,100", strategy: "开阳" },
  { id: 10, coin: "XRP", gain: 42, amount: "1,350", strategy: "北极星" },
  { id: 11, coin: "ADA", gain: 95, amount: "2,800", strategy: "开阳" },
  { id: 12, coin: "MATIC", gain: 63, amount: "1,200", strategy: "北极星" },
]

export function TradeRecordsMarquee() {
  const searchParams = useSearchParams()
  const [records, setRecords] = useState<TradeRecord[]>(defaultRecords)
  const [isEditing, setIsEditing] = useState(false)

  const isAdmin = searchParams.get("admin") === "market101"

  const updateRecord = (id: number, field: keyof TradeRecord, value: string) => {
    setRecords((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r
        if (field === "gain") return { ...r, [field]: Number(value) || 0 }
        if (field === "strategy") return { ...r, [field]: value as "开阳" | "北极星" }
        return { ...r, [field]: value }
      }),
    )
  }

  const addRecord = () => {
    const newId = Math.max(...records.map((r) => r.id)) + 1
    setRecords([...records, { id: newId, coin: "NEW", gain: 0, amount: "0", strategy: "开阳" }])
  }

  const removeRecord = (id: number) => {
    if (records.length > 1) {
      setRecords(records.filter((r) => r.id !== id))
    }
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Vertical scrolling background layer */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        {/* Left column - scrolling up */}
        <div className="absolute left-[10%] top-0 flex flex-col gap-8 animate-scroll-up">
          {[...records, ...records, ...records].map((record, index) => (
            <div
              key={`left-${record.id}-${index}`}
              className="px-6 py-4 border border-border/30 bg-card/20 font-mono text-lg whitespace-nowrap"
            >
              <span className="text-xs text-muted-foreground/60 mr-2">[{record.strategy}]</span>
              <span className="text-muted-foreground">{record.coin}</span>
              <span className="text-primary ml-4">+{record.gain}%</span>
              <span className="text-muted-foreground/80 ml-2">${record.amount}</span>
            </div>
          ))}
        </div>

        {/* Right column - scrolling down */}
        <div className="absolute right-[10%] top-0 flex flex-col gap-8 animate-scroll-down">
          {[...records, ...records, ...records].reverse().map((record, index) => (
            <div
              key={`right-${record.id}-${index}`}
              className="px-6 py-4 border border-border/30 bg-card/20 font-mono text-lg whitespace-nowrap"
            >
              <span className="text-xs text-muted-foreground/60 mr-2">[{record.strategy}]</span>
              <span className="text-muted-foreground">{record.coin}</span>
              <span className="text-primary ml-4">+{record.gain}%</span>
              <span className="text-muted-foreground/80 ml-2">${record.amount}</span>
            </div>
          ))}
        </div>

        {/* Center column - scrolling up slower */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 flex flex-col gap-8 animate-scroll-up-slow">
          {[...records, ...records, ...records].map((record, index) => (
            <div
              key={`center-${record.id}-${index}`}
              className="px-6 py-4 border border-border/30 bg-card/20 font-mono text-xl whitespace-nowrap"
            >
              <span className="text-xs text-muted-foreground/60 mr-2">[{record.strategy}]</span>
              <span className="text-muted-foreground">{record.coin}</span>
              <span className="text-primary ml-4">+{record.gain}%</span>
              <span className="text-muted-foreground/80 ml-2">${record.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for fade effect */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />

      {/* Main content overlay */}
      <div className="relative z-20 text-center px-4">
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground font-mono tracking-wider">LIVE TRADE FEED</span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight">实时收益</h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          社区成员通过 MARKET101 策略获得的真实收益记录
        </p>

        {isAdmin && (
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="mb-6 px-4 py-2 text-xs font-mono text-muted-foreground border border-border/50 hover:border-primary hover:text-primary transition-colors"
          >
            {isEditing ? "[ 完成编辑 ]" : "[ 编辑背景数据 ]"}
          </button>
        )}

        {isAdmin && isEditing && (
          <div className="mb-8 p-4 border border-border/50 bg-card/50 backdrop-blur-sm max-w-2xl mx-auto max-h-80 overflow-y-auto">
            <div className="space-y-3">
              {records.map((record) => (
                <div key={record.id} className="flex flex-wrap items-center gap-2 font-mono text-sm">
                  <select
                    value={record.strategy}
                    onChange={(e) => updateRecord(record.id, "strategy", e.target.value)}
                    className="w-24 px-2 py-1 bg-background border border-border text-foreground outline-none focus:border-primary text-xs"
                  >
                    <option value="开阳">开阳</option>
                    <option value="北极星">北极星</option>
                  </select>
                  <input
                    type="text"
                    value={record.coin}
                    onChange={(e) => updateRecord(record.id, "coin", e.target.value)}
                    className="w-20 px-2 py-1 bg-background border border-border text-foreground outline-none focus:border-primary"
                    placeholder="币种"
                  />
                  <span className="text-muted-foreground">+</span>
                  <input
                    type="number"
                    value={record.gain}
                    onChange={(e) => updateRecord(record.id, "gain", e.target.value)}
                    className="w-16 px-2 py-1 bg-background border border-border text-primary outline-none focus:border-primary"
                    placeholder="%"
                  />
                  <span className="text-muted-foreground">%</span>
                  <span className="text-muted-foreground">$</span>
                  <input
                    type="text"
                    value={record.amount}
                    onChange={(e) => updateRecord(record.id, "amount", e.target.value)}
                    className="w-24 px-2 py-1 bg-background border border-border text-foreground outline-none focus:border-primary"
                    placeholder="收益额"
                  />
                  <button
                    onClick={() => removeRecord(record.id)}
                    className="px-2 py-1 text-muted-foreground hover:text-red-500 transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={addRecord}
              className="mt-3 px-3 py-1 text-xs font-mono text-muted-foreground border border-border/50 hover:border-primary hover:text-primary transition-colors"
            >
              + 添加记录
            </button>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-primary mb-2">+156%</div>
            <div className="text-sm text-muted-foreground font-mono">最高单笔收益</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-foreground mb-2">87%</div>
            <div className="text-sm text-muted-foreground font-mono">胜率</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-5xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground font-mono">成功交易</div>
          </div>
        </div>
      </div>
    </section>
  )
}
