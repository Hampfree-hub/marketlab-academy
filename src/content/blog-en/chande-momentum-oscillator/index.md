---
title: 'Chande Momentum Oscillator (CMO) Indicator'
description: 'CMO: what it is, formula, overbought and oversold zones, buy and sell signals, connection with the ELDER strategy.'
pubDate: '2026-02-13'
category: 'technical-analysis'
draft: false
---

**Chande Momentum Oscillator (CMO)** is a technical indicator, a momentum oscillator developed by Tushar Chande. Unlike RSI or Stochastic, CMO measures momentum directly, using data on the sum of all price changes (up and down) over a certain period in its calculations.

## What is CMO and who is its author

The indicator was introduced by **Tushar Chande**, a well-known analyst and author of trading books, in 1994. The main task of CMO is to determine the "pure" momentum of price movement without additional smoothing, which makes it more sensitive to sharp market changes.

## How CMO works

The range of indicator values: **from -100 to +100**.

- Values above **+50** are considered an overbought zone.
- Values below **-50** are considered an oversold zone.

The central line is **0**. Crossing the zero mark is often used as a confirmation of a short-term trend change.

## Formula and calculation

The CMO formula compares the sum of all positive price changes ($S_{up}$) and the sum of all negative changes ($S_{down}$) for the selected period (usually 9 or 14):

$$CMO = \frac{S_{up} - S_{down}}{S_{up} + S_{down}} \times 100$$

## Indicator Signals

1. **Extreme values:** reaching levels +50 or -50 signals a possible stop or reversal of the trend.
2. **Zero line crossover:** when CMO rises above 0, it is a bullish signal; when it drops below 0 — bearish.
3. **Divergence:** a discrepancy between the direction of price movement and the indicator often precedes strong price movements.

## Use in ELDER 2.0 Strategy

In our [spot strategy ELDER 2.0](/en/library/spot-strategy-elder-20/), the CMO indicator is used as one of the three main filters:

- **Timeframe:** M15.
- **Entry condition:** CMO must be below **-50** (deep oversold zone) in combination with signals from Bollinger Bands and Stochastic.

## Summary

CMO is a powerful tool for determining trend strength and points of exhaustion. Its advantage is the absence of "double smoothing," which allows the trader to react faster to market impulses.

Proven platforms are available to start trading:

- **[Bybit](https://partner.bybit.com/b/marketlab)** — an excellent choice for working with [trading bots](/en/library/bybit-trading-bot-setup/).
- **[Bitget](https://partner.bitget.com/bg/marketlab)** — high liquidity and a user-friendly interface.
- **[BingX](https://bingx.com/en-us/partner/MarketLab/)** — support for many assets.

---

## Related Materials

**Basics and strategies:** study our flagship [ELDER 2.0 strategy](/en/library/spot-strategy-elder-20/), where CMO is a key filter. Also learn [how to start trading with a small deposit](/en/library/how-to-start-trading-small-deposit/).

**Tools and automation:** use [Stochastic Oscillator](/en/library/stochastic-oscillator/) and [Bollinger Bands](/en/library/bollinger-bands/) for comprehensive analysis. Step-by-step instructions on [setting up a trading bot on Bybit](/en/library/bybit-trading-bot-setup/) will help automate processes.

**Experience and risks:** do not forget about [risk management when working with bots](/en/library/risk-management-crypto-trading-bots/) and check out our [live deposit diary](/en/library/surviving-drawdown-diary/).

---

If you are interested in this strategy and want to follow the development of our project, visit the [About the Project](/en/about/) page — there we talk about our mission and how you can support our startup.
