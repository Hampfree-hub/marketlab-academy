---
title: 'The Famous ELDER 2.0 Spot Strategy with Settings'
description: 'Proven ELDER 2.0 strategy with averaging: Stochastic, Bollinger, CMO settings for spot bots in the crypto market.'
pubDate: '2026-02-28'
category: 'algo-trading'
---

**ELDER 2.0 spot strategy** is an automated trading system on the spot market with position averaging, based on three key indicators. The strategy has proven its effectiveness over years of practical use in algorithmic trading.

## Why ELDER 2.0?

This strategy was developed for working on the [spot market](/en/library/what-is-spot-trading/), where there is no liquidation risk. The key idea is to enter a position in small parts when overbought/oversold signals appear and average down on pullbacks.

**Advantages of the approach:**

- Trading without leverage — no liquidation risk
- Position averaging instead of stop-losses
- Automation via [exchange trading bots](/en/library/bybit-trading-bot-setup/)
- Proven effectiveness in various market conditions

## Three Pillars of the ELDER 2.0 Strategy

### 1. Stochastic Oscillator — the main signal

**Function:** Identifying overbought and oversold zones for entry points. Read more about how the [Stochastic indicator](/en/library/stochastic-oscillator/) works in a separate article.

**Settings:** 14, 3, 3. Oversold zone: 20, Overbought zone: 80.

### 2. Bollinger Bands — volatility filter

**Function:** Signal confirmation during price stretches. Learn more about [Bollinger Bands and their application](/en/library/bollinger-bands/).

**Settings:** Period 20, Deviation 2.0.

### 3. CMO (Chande Momentum Oscillator) — momentum filter

**Function:** Filtering out false signals. A detailed breakdown of the [CMO indicator](/en/library/chande-momentum-oscillator/) will help to better understand its role.

**Settings:** Period 14, Filtration zone: from −50 to +50.

## Strategy Algorithm

### Entry signal (opening/averaging)

Enter a trade when the following conditions are met **simultaneously**:
1. Stochastic < 20
2. Price touches or is below the lower Bollinger Band
3. CMO < −50

### Exit signal (profit-taking)

Close the position when:
1. Stochastic > 80
2. Price touches or is above the upper Bollinger Band
3. CMO > +50
4. Profit from the average entry price is ≥ 3–5%

## Capital Management

### Deposit distribution

- **Base order:** 5% of the deposit
- **Safety orders:** from 5% to 15% depending on the drawdown depth
- **Maximum number of safety orders:** 4–6 orders
- **Reserve:** 20–30% of the deposit

### Averaging steps

Recommended intervals:
- 1st averaging: −5% from entry
- 2nd averaging: −10%
- 3rd averaging: −15%
- 4th averaging: −20%

## Recommended Timeframes and Assets

| Timeframe | Description | Risk |
|-----------|-------------|------|
| **4H (4 hours)** | Optimal for beginners. Less noise, more stable signals. | Low |
| **1H (1 hour)** | Balance between signal frequency and quality. | Medium |
| **30 minutes** | More trades, but more false signals. | High |
| **5-15 minutes** | Scalping. Only for experienced traders. | Very high |

**Recommendation:** Start with 4H, test for 1-2 months, then move to smaller timeframes.

**Assets:**
- **Required:** BTC, ETH (liquidity, low spread)
- **Recommended:** TOP-20 by market cap (SOL, BNB, XRP, ADA, etc.)
- **Avoid:** Coins with volume < $1M/day

## Backtests ELDER 2.0

![Annual backtest ELDER 2.0 BB SPOT LONG INJ](./assets/inj-elder-strategy.png)

[ELDER 2.0 BB SPOT LONG INJ](https://veles.finance/share/QyjWG)

![Annual backtest ELDER 2.0 BB SPOT LONG HYPE](./assets/hype-elder-strategy.png)

[ELDER 2.0 BB SPOT LONG HYPE](https://veles.finance/share/8yj24)

## Summary

The ELDER 2.0 spot strategy is a fundamental approach to working in the crypto market without liquidation risk. Key advantages: position averaging instead of stop-losses, three-factor signal filtering, and automation through bots. The strategy has proven stable in various market conditions.

## FAQ

**Why spot and not futures?**

On spot, there's no liquidation risk — the position can drop indefinitely but won't be liquidated. This is ideal for long-term investing with averaging.

**How much money do I need to start?**

Minimum $100-200 recommended. With $100 deposit, base order 5% = $5. This is enough for 4-6 averaging orders.

**Which timeframe should beginners choose?**

Start with 4H (4 hours) — less noise than 1H. After testing, you can switch to 1H for more frequent trades.

**What if all 6 averaging orders are used and price is still lower?**

If reserves are exhausted, it's better to take the loss and start fresh with a different coin. Don't increase position beyond the plan — this leads to margin call.

**Does ELDER 2.0 work on low-liquidity coins?**

No. Use only TOP-20 by market cap (BTC, ETH, SOL, BNB, etc.). Low-liquidity coins can give false signals and order execution issues.

**Do I need to change indicator settings for different coins?**

Base settings (14,3,3 for Stochastic; 20,2.0 for Bollinger; 14 for CMO) work universally. Experienced traders may adjust periods based on asset volatility.

---
