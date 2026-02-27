---
title: 'What Are Backtests in Trading'
description: 'Learn what backtesting is, why it is critically important for traders, and how to properly test strategies on historical data.'
pubDate: '2025-06-03'
category: 'algo-trading'
---

Backtests are the foundation of any robust trading system. Without testing on historical data, it is impossible to objectively assess a strategy’s effectiveness before risking real capital. Professional traders and algorithmic systems rely on backtesting as a mandatory step in developing and optimizing strategies.

The article explains what backtesting is, how to do it correctly, which tools to use, and what pitfalls to avoid. It also covers why backtest results do not guarantee future profits yet remain essential for any serious trader.

## What Is a Backtest

**A backtest** is a simulation of a trading strategy on historical market data. It shows how an algorithm or discretionary system would have performed in the past: what drawdowns could have occurred and what returns could have been expected.

Testing helps identify strengths and weaknesses and optimize parameters (e.g. stop loss and take profit levels) before going live.

### Main Goals of Backtesting

1. **Evaluate strategy performance** — Did the strategy profit in the past? How stable was it?
2. **Optimize parameters** — Find better settings for indicators, stops, and targets. For example, with the [RSI indicator](/en/library/technical-analysis-rsi) traders can test different periods and overbought/oversold levels.
3. **Assess risk** — Max drawdown, losing streaks, and volatility of returns. Crucial for capital management.
4. **Check robustness** — Does the strategy work across trending, sideways, volatile, and calm markets?
5. **Compare strategies** — Objectively compare different approaches.

### Types of Backtests

- **Historical backtest** — Test on a fixed past period (e.g. 2–3 years).
- **Walk‑forward** — Optimize on one window, test on the next; reduces overfitting.
- **Monte Carlo** — Shuffle historical trades to estimate outcome distributions.
- **Stress testing** — Test in extreme conditions (crashes, pumps).

## How to Backtest

### 1. TradingView

TradingView uses **Pine Script** to define entry/exit logic. The Strategy Tester computes profitability, max drawdown, profit factor, and trade count. Good for visual, quick checks. Strategies based on [candlestick patterns](/en/library/what-are-doji-candles) such as doji can be tested together with other signals.

![Strategy tester window: equity curve, trade count, and win rate](./assets/Example-of-backtest-results.png)

### 2. Python (Backtrader, VectorBT, etc.)

Libraries like Backtrader or VectorBT allow deeper statistical analysis and testing on large datasets or portfolios. More flexible but requires coding.

### 3. Manual Backtesting

Scroll the chart back and step through bar by bar, logging each trade. Useful for learning and intuition, but time‑consuming and prone to bias.

## Importance of Optimization

Parameters are tuned from test results. The goal is not only maximum profit but a balance between return and risk.

### Overfitting Risk

**Overfitting** means the strategy is fitted too closely to history and fails live. Avoid it by: using walk‑forward tests, testing on different periods and assets, not optimizing too many parameters at once, and validating on out‑of‑sample data. For strategies based on the [MFI indicator](/en/library/money-flow-index), test various periods and overbought/oversold levels.

### What Is Parameter Optimization

Optimization is the process of finding the best values for strategy parameters. For example, when working with a strategy based on an indicator, you can test various indicator periods and overbought/oversold levels.

**Example of optimization:**
- Testing RSI period: 10, 12, 14, 16, 18, 20
- Testing overbought levels: 70, 75, 80
- Testing oversold levels: 20, 25, 30
- Finding the combination with the best profit/risk ratio

### Optimization Criteria

When optimizing, it's important to consider not only profit but also other metrics:

1. **Profit Factor** — ratio of total profit to total loss (should be > 1.5)
2. **Maximum Drawdown** — maximum capital decline (the lower, the better)
3. **Sharpe Ratio** — return to risk ratio (the higher, the better)
4. **Number of Trades** — should be sufficient for statistical significance (minimum 30-50)
5. **Win Rate** — important but not critical (even 40% can be profitable with proper profit/loss ratio)

## Limitations of Backtests

Past results do not guarantee future performance. Backtests do not account for:

- **Slippage** — Execution price vs expected, especially in fast or illiquid markets.
- **Liquidity changes** — Crises can reduce liquidity.
- **Psychology** — Fear and greed in real trading.
- **Fees and spreads** — Every trade has a cost.
- **Market structure shifts** — Regulators, technology, new participants.
- **Data errors** — Gaps, bad ticks, especially in older data.

### Factors Not Accounted for in Backtests

**1. Slippage**
In real trading, execution price may differ from expected. This is especially critical for:
- Fast markets (high volatility)
- Large volumes (market may not handle)
- Low-liquidity assets

**2. Liquidity Changes**
Historical data does not reflect market liquidity changes. In crisis situations, liquidity can drop sharply, making it impossible to execute trades at expected prices.

**3. Psychological Factor**
Backtest does not account for trader emotions:
- Fear of losses may lead to premature closing of profitable positions
- Greed may cause holding losing positions too long
- Stress affects decision-making

**4. Fees and Spreads**
Every trade costs money in real trading:
- Exchange/broker fees
- Spreads (difference between buy and sell price)
- For crypto — network fees

**5. Market Structure Changes**
Markets evolve:
- New participants change dynamics
- Regulatory changes affect behavior
- Technological changes (e.g., algorithmic trading) change market character

**6. Data May Be Inaccurate**
Historical data may contain:
- Data errors
- Data gaps
- Price inaccuracies (especially for older data)

### Why Backtest Is Still Important

Nevertheless, trading without any backtest is trading blind. Backtests provide a baseline, a rough expectation, and a filter for obviously bad ideas.

## Best Practices

To get the most reliable results, you can follow these recommendations:

### 1. Use Sufficient Data Volume

**Minimum:** 1-2 years of historical data for daily timeframes, 6-12 months for intraday.

**Why it matters:** Short periods may not cover different market conditions (trends, sideways, crises).

### 2. Test on Different Periods

Don't limit yourself to one period. Test the strategy on:
- Bull market (growth)
- Bear market (decline)
- Sideways trend (flat)
- High volatility
- Low volatility

### 3. Account for Fees and Slippage

In backtester settings, it is recommended to specify:
- Realistic fees (e.g., 0.1% for cryptocurrencies)
- Slippage (0.05-0.2% depending on liquidity)
- Minimum trade size

### 4. Use Walk-Forward Analysis

Instead of optimizing on the entire period:
1. Optimize on the first period (e.g., first 6 months)
2. Test on the next period (next 6 months)
3. Repeat the process, "rolling" the window forward

This gives a more realistic performance estimate.

### 5. Check Statistical Significance

Make sure that:
- Number of trades is sufficient (minimum 30-50)
- Results are stable (not dependent on one or two lucky periods)
- Metrics are consistent (high profit + low drawdown + good Profit Factor)

### 6. Test on Multiple Assets

If a strategy works only on one asset — this may be coincidence. It is recommended to test on:
- Similar assets (e.g., different cryptocurrencies)
- Different sectors (if trading stocks)
- Different timeframes

### 7. Keep a Detailed Log

Record:
- Parameters of each strategy version
- Results of each test
- Changes made and their reasons
- Observations and insights

This will help understand the strategy evolution and avoid repeating mistakes.

### 8. Don't Ignore Bad Results

If a strategy shows losses under certain conditions — this is valuable information. Understanding weaknesses helps to:
- Improve the strategy
- Avoid trading in unfavorable conditions
- Manage risks correctly

## Frequently Asked Questions

**How much data do I need?** For daily timeframes, at least 1–2 years; for intraday, 6–12 months. More is better if it covers different regimes.

**Can I trust backtest results?** They are a guide, not a guarantee. Always test on a demo account before using real money.

**Backtest is profitable, live is not. Why?** Common causes: overfitting, underestimated fees/slippage, changed market conditions, psychology. Revisit parameters, use realistic costs, and retest on other periods.

**How often should I retest?** After big parameter changes, when regime shifts, or periodically (e.g. quarterly). Also when live performance diverges strongly from the backtest.

**Does backtesting work for all strategies?** It works best for systematic, rule‑based strategies (e.g. indicators, algos). Less so for discretionary or news‑driven approaches without historical news data.

**Profitability vs stability?** For most traders, stability matters more: steady ~15% per year can be better than erratic 50%. Lower drawdowns and predictability usually beat peak returns.

**Should I backtest even if my strategy already works?** Yes. Backtesting helps clarify when it works best, optimize parameters, assess risk, and document logic.

**Bottom line:** Backtesting is not a cure‑all but an essential tool. Done well, it helps avoid costly mistakes and improves the odds of success. The backtest reflects the past; the market lives in the present. Always combine backtesting with demo trading and small live size.

## FAQ

**How much data is needed for a backtest?**

For daily timeframes, a minimum of 1-2 years of historical data is recommended. For intraday (1-hour, 4-hour), 6-12 months is sufficient. The more data, the more reliable the results, but it's important that the data covers different market conditions.

**Can backtest results be trusted?**

Backtest results are a guide, not a guarantee. They show how a strategy performed in the past but do not guarantee future profits. It is recommended to test the strategy on a demo account before using real funds.

**What if a backtest shows profit, but the strategy is unprofitable in a real account?**

This is a common situation. Possible reasons:
- Overfitting – the strategy is tailored to historical data.
- Commissions and slippage were not accounted for in the backtest.
- Market conditions have changed.
- Psychological factors influence execution.

It is recommended to review the parameters, incorporate more realistic commissions, and test on other periods.

**How often should a strategy be re-tested?**

It is recommended to re-test a strategy:
- After significant changes in parameters.
- If market conditions have changed.
- Periodically (e.g., quarterly) to check relevance.
- If real account performance differs significantly from the backtest.

**Can backtesting be used for all strategies?**

Backtesting works best for:
- Systematic strategies with clear rules.
- Strategies based on technical indicators.
- Algorithmic strategies.

It is less effective for:
- Intuitive strategies.
- Strategies dependent on news (if historical news data is unavailable).
- Very long-term strategies (where decades of data are needed).

**What's more important: high profitability or stability?**

There is no single answer—it depends on your goals and risk tolerance. However, for most traders, stability is more important:
- A stable strategy with 15% annual returns is better than an unstable one with 50%.
- Low drawdown allows for better capital management.
- Predictability is more important than peak profitability.

**Should a strategy be backtested if it is already profitable?**

Yes. Even with a working strategy, a backtest helps to:
- Understand under what conditions it performs better/worse.
- Optimize parameters.
- Assess risks more objectively.
- Document the logic for future use.

## Conclusion

Backtesting is not a panacea, but a critically important tool for any serious trader. A properly conducted backtest helps to avoid costly mistakes and increase the chances of success in real trading. A backtest reflects the past; the market lives in the present. It is recommended to combine backtesting with demo account testing and real trading with small volumes.