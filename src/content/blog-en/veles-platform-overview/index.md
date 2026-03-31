---
title: 'Veles: Cryptocurrency Trading Automation Platform'
description: 'Veles Finance — cloud algo trading platform from $10. Grid bots, DCA, backtests, ready strategies. 20% fee, 7 exchanges, Android/iOS app.'
pubDate: '2026-03-10'
category: 'algo-trading'
---

**Veles** — cloud platform for cryptocurrency trading automation. Allows creating trading bots without programming, testing strategies on history, and running them 24/7. If you're just getting started with automation, we recommend reading our [introduction to algo trading](/en/library/algorithmic-trading-intro/) first.

**For whom:** Traders with small capital (from $10) who want to automate trading without learning programming.

## What is Veles

**Veles Finance** is a SaaS (Software as a Service) platform for cryptocurrency trading automation. No need to install software, configure servers, or write code — everything works in the cloud.

**Main idea:** Make algo trading accessible for traders with any capital from $10.

### Key Features

1. **Grid bots** — buy/sell order grid within a specified range
2. **DCA bots** — position averaging on price movement
3. **Futures bots** — leveraged trading (long/short)
4. **Backtests** — historical data trading simulator
5. **Ready-made strategies** — community settings library, showcase of ready bots
6. **Telegram bot** — notifications and monitoring

### Supported Exchanges

| Exchange | Spot | Futures | Status |
|----------|------|---------|--------|
| **Bybit** | ✅ | ✅ | Official integration |
| **Binance** | ✅ | ✅ | Full support |
| **OKX** | ✅ | ✅ | Full support |
| **Bitget** | ✅ | ✅ | Full support |
| **HTX (Huobi)** | ✅ | ✅ | Full support |
| **Gate.io** | ✅ | ✅ | Full support |
| **BingX** | ✅ | ✅ | Full support |

![Veles Dashboard](./assets/veles-dashboard.png)

**Important:** Veles does not store funds — trades go directly through your exchange via API keys.

## How Veles Works

### Architecture

```
You → Veles (cloud) → Exchange (API) → Order execution
       ↓
   Backtests, statistics, notifications
```

1. **[Registration](https://veles.finance/invite/washmallay?utm_source=marketlab-blog&utm_medium=article-link&utm_campaign=veles-platform-overview):** Create Veles account *(affiliate link)*
2. **Exchange connection:** Add API keys (trading only, no withdrawal!)
3. **Bot setup:** Choose bot type, strategy, parameters
4. **Launch:** Bot starts trading 24/7
5. **Monitoring:** Watch via web interface or Telegram bot

![Connecting Exchange Veles](./assets/connecting-the-exchange.png)

### API Keys Connection

**API Keys Requirements:**

1. **Permissions:**
   - **Spot:** Spot market trading
   - **Futures:** Futures trading
   - **Withdrawal:** ❌ NOT needed (disable!)

2. **Security:**
   - Save secret key on creation (shown only once!)
   - Use Veles trusted IPs (if exchange requires)
   - Choose "Veles" app on key creation (lifetime access)

3. **Veles IPs:**
   ```
   5.9.195.106-110, 5.9.200.58-62, 88.198.100.162-166
   ```

**Important:** One connection can be used in multiple bots.

## Veles Bot Types

Veles supports two main types of trading bots:

### 1. Grid Bots

**Principle:** Buys low, sells high within a specified range.

**How it works:**
- You set price range (min/max)
- Veles places buy and sell order grid
- On price movement, bot locks profit on each grid

**Settings:**
- Price range (min/max)
- Number of grids (5-100)
- Position size per grid
- Stop-loss (optional)
- Take-profit (optional)

**For whom:** Sideways market (flat), high volatility.

![Creating Bot Veles](./assets/creating-a-grid-bot.png)

### 2. DCA Bots (Averaging)

**Principle:** Buys at regular intervals or on price drop. Learn more about averaging strategy in our [DCA crypto guide](/en/library/dca-strategy-crypto/).

**How it works:**
- You set base purchase amount
- Bot buys at specified intervals (time or % drop)
- On price growth, locks profit

**Settings:**
- Base purchase amount
- Interval (time or % drop)
- Multiplier (increase purchase on drop)
- Take-profit (when to lock profit)

**For whom:** Long-term investments, position accumulation.

### 3. Futures Bots

**Principle:** Leveraged trading (long/short).

**Settings:**
- Direction (long/short)
- Leverage (2-20x)
- Position size
- Stop-loss / Take-profit

**Risks:** High! Can lose more than deposit with improper risk management.

**For whom:** Experienced traders, position hedging.

## Ready-Made Strategies Veles

**Veles provides a showcase of ready-made strategies** — bot settings that can be copied and launched without deep understanding of indicators.

**Examples from our blog:**

### 1. Prisma 5.5

**Description:** High-frequency strategy for volatile altcoins. Uses oscillator combination for oversold entry.

**Indicators:**
- RSI (Relative Strength Index)
- Stochastic RSI
- CMO (Chande Momentum Oscillator)

**Settings:**
- Timeframe: 15 minutes
- Deposit: from $10
- Risk: moderate (diversification across 10-20 pairs)

**For whom:** Traders who want to automate trading on volatile altcoins.

**[More on Prisma 5.5 settings](/en/library/prisma-5-5-strategy-settings/)**

### 2. Elder 2.0 (Spot)

**Description:** Spot strategy based on three filters: trend, momentum, volatility. Named after Alexander Elder.

**Indicators:**
- MA (Moving Average) — trend filter
- CMO — momentum
- ATR% — volatility

**Settings:**
- Timeframe: 1 hour
- Deposit: from $10
- Risk: low (spot only, no leverage)

**For whom:** Conservative investors who want to earn on volatility without futures risk.

**[More on Elder 2.0 strategy](/en/library/spot-strategy-elder-20/)**

## Backtests

**Veles provides historical data trading simulator** — you can test a strategy before launching with real money.

![Setting Up Backtest Veles](./assets/setting-up-a-backtest.png)

**How backtests work:**
1. Choose strategy and parameters
2. Specify testing period (e.g., 30 days)
3. Launch simulation
4. Get statistics: profit, drawdown, win rate

![Backtest Results Veles](./assets/backtest-results.png)

**Important:** Backtests show how strategy would have worked in the past, but don't guarantee future returns.

## Fees

### Veles Fees

**Veles has no subscription fee.** You pay only profit commission:

| Parameter | Value |
|-----------|-------|
| **Fee** | 20% of trade profit |
| **Maximum** | 50 USDT per month (spot + futures separately) |
| **Minimum** | $0 (if bots don't make profit) |

**Example:**
- Monthly profit: 100 USDT
- Veles fee: 20 USDT (20%)
- **Net profit:** 80 USDT

**If bots are unprofitable:** Fee is not charged.

### Fee Payment

**Available cryptocurrencies:**
- BTC (Bitcoin)
- TRX (Tron)
- MATIC (Polygon)
- BNB (Binance Coin)
- USDT (Tether)
- USDC (USD Coin)

**Bonuses:**
- Up to 5 USDT for completing tasks (API key creation, subscriptions, etc.)

## Pros and Cons Veles

### Pros

| Advantage | Description |
|-----------|-------------|
| **No subscription fee** | Fee only on profit (20%, max $50/month) |
| **Low entry threshold** | Can start from $10 |
| **Simplicity** | Interface clear for beginners, no code needed |
| **Cloud** | No need to keep PC on 24/7 |
| **Backtests** | Can test strategy before launch |
| **Ready strategies** | Community settings showcase |
| **Telegram bot + mobile apps** | Notifications and monitoring 24/7 |
| **Multi-exchange** | 7+ exchanges in one platform |

### Cons

| Disadvantage | Description |
|--------------|-------------|
| **Centralization** | Veles dependency (if servers down — bots don't work) |
| **Limited functionality** | No complex strategies (like in Python) |
| **20% Fee** | Can be high with large profit |
| **Mobile app** | Basic functionality (setup via web) |

## For Whom Veles

### ✅ Suitable if:

- Want to automate trading but can't program
- Deposit: from $10 (minimum for bot)
- Trade on spot or futures with moderate leverage (up to 5x)
- Ready to pay 20% of profit (max $50/month)
- Want to test strategies on history

### ❌ Not suitable if:

- Can program in Python (better write own bot)
- Deposit < $10 (not enough to launch bot)
- Need complex strategies (HFT, arbitrage, ML)
- Don't trust cloud services (want full control)

---

### 8. Mobile App

**Veles has mobile apps for Android and iOS** — launched in January 2026 with push notifications support.

**Features:**
- View active bots and statistics
- Push notifications on trades and events
- Duplicate notifications from Telegram bot
- Monitor profit and losses

![Veles Active Bot Statistics](./assets/active-bot-statistics-veles.png)

**Limitations:**
- Basic functionality (bot setup via web interface)

**For whom:** Traders who want to monitor bots 24/7 without constant PC access.

## Veles Alternatives

| Platform | Pros | Cons | For whom |
|----------|------|------|----------|
| **Gainium** | Free up to 2 bots, simple interface | Fewer features, no futures | Beginners, test |
| **Ginarea** | Visual builder, futures | Fewer exchanges, no backtests | Advanced |
| **3Commas** | Many features, mobile app | Expensive ($20-100/month), complex backtests | Experienced |
| **Python + CCXT** | Full freedom, free | Need code, server setup | Developers |

## FAQ

**How much money to start?**

Minimum: $10 (minimum for bot).  
Optimal: $100-500 for comfortable trading.

**Can I lose more than deposit?**

On spot — no (max -100% of position).  
On futures — yes, with leveraged trading and no stop-loss.

**Does Veles work in Russia?**

Yes, Veles is available in Russia. Exchanges (Bybit, Binance) also work with restrictions.

**Do I need to pay taxes?**

Yes, cryptocurrency trading profit is taxed (13% for Russia residents). Veles provides export for accounting.

**Is it safe to trust API keys to Veles?**

Yes, if keys are for trading only (no withdrawal). Veles can't withdraw funds — only trade.

**What are Veles fees?**

20% of trade profit, maximum 50 USDT per month (spot + futures separately). If bots don't make profit — fee is not charged.

## Try Veles

**[Register on Veles](https://veles.finance/invite/washmallay?utm_source=marketlab-blog&utm_medium=article-link&utm_campaign=veles-platform-overview)** and start automating trading today.

*Affiliate link: registration gives benefits to both us and you.*

---

**Sources:**
- Veles Finance — official documentation
- Forklog — [Veles Platform Review](https://forklog.com/exclusive/dlya-novichkov-i-profi-obzor-platformy-dlya-sozdaniya-torgovyh-botov-veles/)
- Veles community (Telegram, forum)
