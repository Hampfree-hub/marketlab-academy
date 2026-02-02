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

## Limitations of Backtests

Past results do not guarantee future performance. Backtests do not account for:

- **Slippage** — Execution price vs expected, especially in fast or illiquid markets.
- **Liquidity changes** — Crises can reduce liquidity.
- **Psychology** — Fear and greed in real trading.
- **Fees and spreads** — Every trade has a cost.
- **Market structure shifts** — Regulators, technology, new participants.
- **Data errors** — Gaps, bad ticks, especially in older data.

Nevertheless, trading without any backtest is trading blind. Backtests provide a baseline, a rough expectation, and a filter for obviously bad ideas.

## Best Practices

1. **Enough data** — At least 1–2 years for daily timeframes, 6–12 months for intraday.
2. **Multiple regimes** — Test on bull markets, bear markets, sideways, high and low volatility.
3. **Realistic costs** — Include fees (e.g. 0.1% for crypto) and slippage in the backtester.
4. **Walk‑forward** — Optimize on one period, test on the next; repeat rolling forward.
5. **Statistical significance** — Enough trades (e.g. 30–50+), stable metrics, sensible profit factor and drawdown.
6. **Several assets** — If it only works on one asset, it may be luck.
7. **Keep a log** — Parameters, results, changes, and observations.
8. **Learn from bad results** — Losses in certain conditions are valuable information.

## Frequently Asked Questions

**How much data do I need?** For daily timeframes, at least 1–2 years; for intraday, 6–12 months. More is better if it covers different regimes.

**Can I trust backtest results?** They are a guide, not a guarantee. Always test on a demo account before using real money.

**Backtest is profitable, live is not. Why?** Common causes: overfitting, underestimated fees/slippage, changed market conditions, psychology. Revisit parameters, use realistic costs, and retest on other periods.

**How often should I retest?** After big parameter changes, when regime shifts, or periodically (e.g. quarterly). Also when live performance diverges strongly from the backtest.

**Does backtesting work for all strategies?** It works best for systematic, rule‑based strategies (e.g. indicators, algos). Less so for discretionary or news‑driven approaches without historical news data.

**Profitability vs stability?** For most traders, stability matters more: steady ~15% per year can be better than erratic 50%. Lower drawdowns and predictability usually beat peak returns.

**Should I backtest even if my strategy already works?** Yes. Backtesting helps clarify when it works best, optimize parameters, assess risk, and document logic.

**Bottom line:** Backtesting is not a cure‑all but an essential tool. Done well, it helps avoid costly mistakes and improves the odds of success. The backtest reflects the past; the market lives in the present. Always combine backtesting with demo trading and small live size.
