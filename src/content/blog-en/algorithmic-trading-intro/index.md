---
title: "Algorithmic Trading: From Caveman's Stick to Crypto Bots"
description: 'Algo trading for beginners: what is a trading algorithm, history from simple rules to AI. Crypto markets, traditional platforms, strategy automation.'
pubDate: '2026-03-10'
category: 'algo-trading'
draft: true
---

**Algorithmic trading** вЂ” using predefined rules (algorithms) to buy and sell assets. Come to think of it, when a caveman picked up a stick and rolled a huge boulder off the path вЂ” that's also an algorithm: "If rock blocks path в†’ pick up stick в†’ roll rock."

**Why this matters:**

Algorithms free you from emotions, save time, and allow 24/7 trading. In crypto, this is especially important: the market never sleeps, but humans do.

---

## What is an Algorithm in Simple Terms

**Algorithm** вЂ” step-by-step instructions to achieve a goal.

**Real-life examples:**

1. **Borscht recipe:**
   - If you have beets в†’ grate them
   - If no meat в†’ add beans
   - Cook for 2 hours в†’ serve with sour cream

2. **Getting ready for work:**
   - If alarm rings в†’ get up
   - If raining в†’ take umbrella
   - If traffic jam в†’ turn on navigator

**Trading algorithm:**
- If price crosses moving average from below в†’ buy
- If price drops 5% from high в†’ sell
- If time is 18:00 в†’ close all positions

---

## History of Trading Algorithms

### Pre-computer Era: Paper Rules

**1920s:** Jesse Livermore (legendary trader) uses "trading rules."

**His algorithm:**
- If stock rises 3 days in a row в†’ buy
- If drops 10% from peak в†’ sell
- If news is bad в†’ reduce position

**Result:** One of the largest fortunes of the time ($100+ million), several bankruptcies due to violating his own rules among other factors.

**Lesson:** Algorithm works only if you follow it.

### 1950-1970: First Computers

**1950s:** Computers appear on Wall Street.

**First algorithms:**
- Calculating moving averages
- Simple conditions: "If MA(50) > MA(200) в†’ buy"

**Problem:** Room-sized computers, expensive, slow.

**1971:** NASDAQ вЂ” first electronic quotation system.

- Quotes on screens (not phone calls)
- But trading still by phone (market makers in offices)
- Fully electronic trading: late 1980s (SOES after 1987 crash)

**Important:** NYSE still used "open outcry" trading. NASDAQ was an alternative, but not a fully automated exchange in the modern sense.

### 1980-1990: Quantitative Analysis

**1980s:** Quant funds appear.

**Renaissance Technologies (Jim Simons):**
- Mathematicians, physicists, astronomers instead of traders
- Algorithms based on statistics, patterns
- Returns: 66% annually (1988-2018)

**Lesson:** Math beats intuition.

### 1990-2000: High-Frequency Trading (HFT)

**1990s:** Internet, fast computers.

**HFT (High-Frequency Trading):**
- Thousands of trades per second
- Profit from microscopic price differences
- Requires: direct connection to exchange, servers near exchange

**HFT peak:** 2000-2010.

- 60-70% of trading volume in US
- Scandals: Flash Crash 2010 (1000-point drop in minutes)

### 2010-2020: Cryptocurrencies and Retail Bots

**2010:** Bitcoin starts trading on exchanges.

**Crypto market features:**
- 24/7 (no weekends)
- High volatility (В±10% per day вЂ” normal)
- Many exchanges (arbitrage opportunities)

**2015-2020:** Bots for retail traders.

- 3Commas, Cryptohopper, HaasOnline
- Ready strategies: DCA, Grid, Trailing Stop
- Accessible to everyone ($20-100/month)

### 2020-2026: AI and Machine Learning

**2020s:** Neural networks in trading.

**What AI can do:**
- Analyze news (NLP вЂ” natural language processing)
- Recognize patterns on charts (CNN вЂ” convolutional networks)
- Optimize strategy parameters (RL вЂ” reinforcement learning)

**Problem:**
- AI requires data (years of history)
- AI doesn't understand "black swans" (unpredictable events)
- AI can overfit (works only on historical data)

**Important:** Using ready-made "AI bots" from marketplaces is often a marketing gimmick. Training models requires data scientist qualifications, not just parameter tweaking.

**Conclusion:** AI is a tool, not a magic wand.

---

## Types of Trading Algorithms

### 1. Trend Strategies

**Idea:** "The trend is your friend."

**Algorithm:**
- If price above MA(50) and MA(200) в†’ long
- If price below MA(50) and MA(200) в†’ short
- If MAs cross в†’ exit

**Example:**
- BTC rises from $60,000 to $100,000 (6 months)
- Algorithm bought at $65,000, sold at $95,000
- Profit: +46%

**Pros:**
- вњ… Catches big moves
- вњ… Simple logic

**Cons:**
- вќЊ Loses in sideways (frequent false signals)
- вќЊ Lag (enters late)

### 2. Counter-Trend Strategies

**Idea:** "What goes up must come down."

**Algorithm:**
- If RSI > 70 (overbought) в†’ short
- If RSI < 30 (oversold) в†’ long
- If RSI normal в†’ wait

**Example:**
- BTC dropped from $100,000 to $80,000 in a day
- RSI = 25 (strong oversold)
- Algorithm bought at $80,000, sold at $90,000
- Profit: +12.5%

**Pros:**
- вњ… Works in sideways
- вњ… Fast trades

**Cons:**
- вќЊ Dangerous in strong trend (can catch a falling knife)
- вќЊ Requires precise entry points

### 3. Arbitrage (for Advanced)

**Idea:** "Buy cheap on one exchange, sell expensive on another."

**Algorithm:**
- If BTC on Bybit = $95,000, and on Binance = $95,300
- Buy on Bybit, sell on Binance
- Profit: $300 (minus fees)

**Reality for retail trader:**

- Price difference between major exchanges: 0.1-0.3% (rarely more)
- Opportunities disappear in milliseconds (HFT competition)
- For capital < $10,000, arbitrage is practically inaccessible
- More realistic: futures arbitrage (basis trading), pair arbitrage

**Pros:**
- вњ… Low risk (market doesn't matter)
- вњ… Predictable profit (if you made it)

**Cons:**
- вќЊ Need capital on two exchanges
- вќЊ Fees eat profit
- вќЊ Competition with HFT (need low latency)
- вќЊ Not recommended for capital < $10,000

### 4. Market Making

**Idea:** "Profit from the spread (difference between buy and sell)."

**Algorithm:**
- Place limit buy at $94,900
- Place limit sell at $95,100
- Spread: $200
- If both sides executed в†’ profit $200

**Example:**
- Spread: 0.2-0.5%
- Volume: $1,000,000/day
- Profit: $2,000-5,000/day (minus risks)

**Rebates:**

Exchanges pay makers for providing liquidity. Maker fee is often negative (e.g., -0.005% to -0.025%), meaning you get paid for placing limit orders.

**Pros:**
- вњ… Profit in any market
- вњ… Exchanges pay rebates

**Cons:**
- вќЊ Risk of one-sided position (price moved, order stayed)
- вќЊ Requires constant monitoring
- вќЊ Need large capital for noticeable profit

### 5. DCA (Dollar Cost Averaging)

**Idea:** "Buy regularly, regardless of price."

**Algorithm:**
- Every Monday buy $100
- Doesn't matter if price is $50,000 or $100,000
- Averaging entry price

**Example:**
- Week 1: $100 / $50,000 = 0.002 BTC
- Week 2: $100 / $60,000 = 0.00167 BTC
- Week 3: $100 / $55,000 = 0.00182 BTC
- Total: $300 / 0.00549 BTC = $54,645 average price

**Pros:**
- вњ… No emotions
- вњ… Volatility averaging
- вњ… Suitable for long-term investments

**Cons:**
- вќЊ Doesn't maximize profit (could have bought at the bottom)
- вќЊ Requires discipline

### 6. Grid Trading

**Idea:** "Place a grid of orders within a range."

**Algorithm:**
- Range: $90,000-100,000
- Grid step: $1,000
- Place 10 buy orders ($90k, $91k, ... $99k)
- Place 10 sell orders ($91k, $92k, ... $100k)
- If price oscillates в†’ profit on each cycle

**Example:**
- Price: $95,000 в†’ $96,000 в†’ $95,000 в†’ $96,000
- Bought at $95k, sold at $96k в†’ +$1,000
- Repeated 10 times в†’ +$10,000

**Pros:**
- вњ… Works in sideways (70% of the time)
- вњ… Automatic, 24/7

**Cons:**
- вќЊ Dangerous in trend (price exited range)
- вќЊ Requires large capital (many orders)
- вљ пёЏ **Important:** If price exits the range, the bot may end up with a full bag of losing assets (bought everything, didn't sell).

---

## Algorithms on Traditional Markets vs Crypto

| Parameter | Traditional Markets | Crypto Markets |
|-----------|--------------------|----------------|
| **Trading hours** | 9:30-16:00 (exchange hours) | 24/7 |
| **Volatility** | 1-3% per day | 2-10% per day (depends on asset and market phase) |
| **Fees** | 0.01-0.1% | 0.02-0.1% |
| **Leverage** | Up to 100x (futures) | Up to 125x (crypto exchanges) |
| **Regulation** | SEC, CFTC, strict rules | Weak (depends on jurisdiction) |
| **HFT** | 60-70% of volume | 20-50% of volume (estimates vary, exact data is proprietary) |
| **Accessibility** | Qualified investors | Anyone with internet |

**Conclusion:** Crypto is more accessible, more volatile, but riskier. HFT share in crypto is estimated at 20-50% for centralized exchanges (CEX), but exact data is proprietary.

---

## How to Create Your First Algorithm

### Step 1: Choose a Strategy

**Questions:**
- What's my capital? ($100, $1,000, $10,000)
- How much time do I have? (full-time, 1 hour/day, once a week)
- What risk is acceptable? (1%, 5%, 10% of capital)

**Recommendations:**
- Capital < $1,000: DCA, Grid (low fees)
- Capital $1,000-10,000: Trend, counter-trend
- Capital > $10,000: Arbitrage, market making

### Step 2: Define Rules

**Template:**

```
IF [entry condition] в†’ THEN [action]
IF [exit condition] в†’ THEN [action]
IF [risk condition] в†’ THEN [action]
```

**Example (trend):**

```
IF price > MA(50) AND MA(50) > MA(200) в†’ BUY
IF price < MA(50) в†’ SELL
IF loss > 5% в†’ STOP-LOSS
```

### Step 3: Backtest on Historical Data

**Backtest** вЂ” testing a strategy on historical data to evaluate performance.

**Tools:**

**MT4/MT5 Terminals:**
- MQL4/MQL5 language
- Built-in strategy tester
- Expert Advisors (automated strategies)
- **Pros:** Powerful, many ready solutions
- **Cons:** Forex/CFD only, paid licenses

**TradingView:**
- Pine Script language
- Simple syntax (5-10 lines for basic strategy)
- Built-in backtester
- **Pros:** Free, many cryptocurrencies, cloud-based
- **Cons:** Limited logic vs Python

**Python Libraries:**
- Backtrader, Freqtrade, CCXT
- **Pros:** Full freedom, free
- **Cons:** Need coding, setup

**Ready Platforms:**
- **Veles:** Crypto algo trading, backtests, cloud bots вЂ” [try Veles](https://veles.finance/invite/washmallay) *(affiliate link)*
- **Gainium:** Grid, DCA, market making (free up to 2 bots)
- **3Commas:** DCA, Grid, Trailing
- **Antbot:** Copy trading, signals
- **Ginarea:** Visual strategy builder focused on futures

**What to check:**
- Returns (% per period)
- Drawdown (max peak-to-trough drop)
- Number of trades (statistical significance)
- Win rate (% of profitable trades)

### Step 4: Launch with Real Money

**Rules:**
1. Start small (10% of capital)
2. Monitor first trades
3. Keep a journal (why entered, why exited)
4. Don't change algorithm after 1-2 losing trades

### Step 5: Analyze and Optimize

**Metrics:**
- **Sharpe Ratio:** Return / risk (good > 1)
- **Max Drawdown:** Maximum drop (good < 20%)
- **Profit Factor:** Profit / Loss (good > 1.5)
- **Win Rate:** % of profitable trades (good > 50%)

**Important:** Don't over-optimize!

- If you change parameters to fit history в†’ algorithm won't work on new data
- Better a simple algorithm than an overfitted one

**Keeping a journal:**

Alongside the algorithm, it's recommended to keep a [trading journal](https://marketlab-academy.org/en/library/trading-journal-guide/) вЂ” record why you entered a trade, why you exited, what emotions you felt. This helps identify behavioral patterns and improve discipline.

---

## Risks of Algorithmic Trading

### 1. Technical Failure

**Problem:** Exchange down, internet lost, bot froze.

**Example:**
- Bot was supposed to sell at 5% loss
- Exchange didn't respond for 10 minutes
- Loss: 20% instead of 5%

**How to protect:**
- VPS (virtual private server) near exchange
- Backup internet (4G + wired)
- Stop-loss on exchange (not just in bot)

### 2. "Black Swan"

**Problem:** Unpredictable event (exchange collapse, war, Elon Musk tweet).

**Example:**
- FTX collapse (November 2022)
- BTC dropped from $21,000 to $16,000 in a day
- Algorithms weren't ready

**How to protect:**
- Diversification (not everything on one exchange)
- Position limits (no more 10% per asset)
- Manual control during crisis

### 3. Overfitting

**Problem:** Algorithm works perfectly on history, but not on real data.

**Example:**
- Backtest: +500% per year
- Reality: -50% per month

**How to protect:**
- Test on different periods (bull, bear, sideways)
- Don't change parameters after every losing trade
- Use out-of-sample data (didn't participate in optimization)

### 4. Competition

**Problem:** Other algorithms are faster, smarter, with more capital.

**Example:**
- Arbitrage opportunity disappears in 100ms
- HFT fund makes it, retail trader doesn't

**How to protect:**
- Choose niches where HFT is ineffective (long-term strategies)
- Use unique data (alternative sources)
- Focus on risk management, not speed

---

## Tools for Algo Trading

### For Beginners (No Code)

- **Veles:** Cloud bots, backtests, simple interface вЂ” [try Veles](https://veles.finance/invite/washmallay) *(affiliate link)*
- **Gainium:** Grid, DCA, market making (free up to 2 bots)
- **3Commas:** DCA, Grid, Trailing
- **Cryptohopper:** Ready strategies, marketplace
- **Antbot:** Signals, copy trading
- **TradingView:** Signals, alerts, Pine Script (gold standard for visual backtesting)

### For Advanced (Code)

- **Python + CCXT:** Library for exchanges (free)
- **Backtrader:** Backtesting (free)
- **Freqtrade:** Open-source crypto bot (free)

### For Pros

- **QuantConnect:** Platform for quants ($0-1,000/month)
- **Interactive Brokers API:** Traditional markets (commissions)
- **Own infrastructure:** Servers, direct connection (expensive)

---

## Summary

**Algorithmic trading** вЂ” using rules for automated trading. From "caveman's stick" to AI bots.

**Main rules:**
1. Simple algorithm is better than complex
2. Test on history, but don't over-optimize
3. Risk management is more important than returns
4. Algorithm doesn't replace thinking, it enhances it

**Who algo trading is for:**
- вњ… Traders who want to automate routine
- вњ… Investors for DCA and rebalancing
- вњ… Developers who love code + finance

**Who it's NOT for:**
- вќЊ Expecting a "money button" (algorithm is a tool, not magic)
- вќЊ Not ready to learn (code, statistics, risks)
- вќЊ Want 100% guarantees (they don't exist even with algorithm)

---

## FAQ

**Do I need to know how to code?**

No. There are ready platforms (3Commas, Cryptohopper). But coding gives more flexibility and control.

**How much capital do I need?**

From $100 for DCA/Grid. From $1,000 for trend strategies. From $10,000 for arbitrage.

**Can I make a living from algo trading?**

Theoretically yes, but it requires capital of $100,000+ and returns of 10-20% annually. For most, it's a supplement to main income.

**Important:** For retail traders with small capital ($1k-10k), trying to "make a living from it" immediately may lead to excessive risk and loss of deposit. However, you can start with a small amount, gradually grow your deposit, and build capital through profit reinvestment.

**What risk is acceptable?**

No more than 1-2% of capital per trade. Maximum drawdown вЂ” 20% (after that, review strategy).

**How to choose an exchange for algo trading?**

Criteria: low fees (0.02-0.1%), high liquidity, API for bots, reliability (Bybit, Binance, OKX).

**What is a backtest?**

Testing a strategy on historical data. Shows how the algorithm would have performed in the past. Doesn't guarantee future results.

**Can AI replace a trader?**

AI is a tool, like a calculator. It doesn't replace thinking, but speeds up analysis. Final decision is still up to the human.
