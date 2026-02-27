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

The range of indicator values: **from −100 to +100**.

- Values above **+50** are considered an overbought zone.
- Values below **−50** are considered an oversold zone.

The central line is **0**. Crossing the zero mark is often used as a confirmation of a short-term trend change.

## Formula and calculation

The CMO formula compares the sum of all positive price changes and the sum of all negative changes for the selected period (usually 9 or 14):

$$CMO = \frac{S_{up} - S_{down}}{S_{up} + S_{down}} \times 100$$

Where:
- **S_up** — sum of positive closing price changes over N periods
- **S_down** — sum of negative closing price changes over N periods (absolute value)

If all candles were rising, CMO = +100. If all falling — CMO = −100. The closer the value to zero, the weaker the momentum.

## Indicator Signals

### 1. Extreme values
Reaching levels **+50** or **−50** signals a possible stop or reversal of the trend. The closer the value to ±100, the stronger the momentum and the higher the probability of correction.

### 2. Zero line crossover
When CMO rises above 0 — it is a bullish signal (rising candles dominate). When it drops below 0 — bearish (falling candles dominate).

### 3. Divergence
A discrepancy between the direction of price movement and the indicator often precedes strong price movements. If price updates a low but CMO does not (bullish divergence), it is a signal of a possible upward reversal.

## CMO vs RSI vs Stochastic

| Feature | CMO | RSI | Stochastic |
|---|---|---|---|
| Range | −100 … +100 | 0 … 100 | 0 … 100 |
| Smoothing | None | Double (exponential) | Via %D moving average |
| Sensitivity | High | Moderate | High |
| Extreme zones | ±50 | 30/70 | 20/80 |
| Best for | Sharp impulses, filtering | Trend identification | Range, reversal hunting |

## Recommended settings by timeframe

- **M15 (scalping):** period 9 — quick response to micro-impulses
- **H1 (intraday):** period 14 — standard setting, balance between sensitivity and noise
- **H4 (swing):** period 20 — noise filtering, working with more significant impulses

## Use in ELDER 2.0 Strategy

In the [spot strategy ELDER 2.0](/en/library/spot-strategy-elder-20/), the CMO indicator is used as one of the three main filters:

- **Timeframe:** depending on bot settings (M15 / H1 / H4).
- **Entry condition:** CMO must be below **−50** (deep oversold zone) in combination with signals from [Bollinger Bands](/en/library/bollinger-bands/) and [Stochastic](/en/library/stochastic-oscillator/).
- **Exit condition:** CMO above **+50** (overbought zone) in combination with confirmation from other indicators.

| Indicator | Role in ELDER 2.0 |
|---|---|
| Bollinger Bands | Volatility filter |
| CMO | Momentum filter (±50) |
| Stochastic | Entry trigger (20/80) |

## Practical tips

- **Do not use CMO in isolation:** like any oscillator, it gives false signals in strong trends. Combine with trend filters.
- **Divergences on H4 and higher** — the most reliable reversal signals.
- **Sharp exit from the ±50 zone** may signal the start of a new impulse, not its completion — confirm with volume.

## FAQ

**What CMO period is best for crypto?**
For short-term trading — 9 or 14. For medium-term analysis — 20. The shorter the period, the more sensitive the indicator to noise.

**Why is CMO better than RSI?**
CMO does not use double smoothing, so it reacts faster to momentum changes. This is important in the high volatility conditions of cryptocurrencies.

**Can CMO be used for futures?**
Yes, CMO works on any markets. However, the ELDER 2.0 strategy is optimized specifically for [spot trading](/en/library/what-is-spot-trading/) without leverage.

## Summary

CMO is a powerful tool for determining trend strength and points of exhaustion. Its advantage is the absence of "double smoothing," which allows the trader to react faster to market impulses.

Start trading on proven exchanges:

- **[Bybit](https://www.bybit.com/en/invite?ref=PWMD24)** — an excellent choice for working with [trading bots](/en/library/bybit-trading-bot-setup/)
- **[Bitget](https://www.bitget.com/referral/register?from=referral&clacCode=23EHR2VD)** — user-friendly interface and bonuses
- **[BingX](https://bingxdao.com/invite/CUBDBG/)** — social trading and copy trading

---

## Related Materials

**Basics and strategies:** be sure to study our flagship [ELDER 2.0 strategy](/en/library/spot-strategy-elder-20/), where CMO is a key filter. Also learn [how to start trading with a small deposit](/en/library/how-to-start-trading-small-deposit/).

**Tools and automation:** for comprehensive analysis use [Stochastic Oscillator](/en/library/stochastic-oscillator/) and [Bollinger Bands](/en/library/bollinger-bands/). Step-by-step instructions on [setting up a trading bot on Bybit](/en/library/bybit-trading-bot-setup/) will help automate processes.

**Experience and risks:** do not forget about [risk management when working with bots](/en/library/risk-management-crypto-trading-bots/) and check out our [live deposit diary](/en/library/surviving-drawdown-diary/).

---
If you are interested in this strategy and want to follow the development of our project, visit the [About the Project](/en/about/) page — there we talk about our mission and how you can support our startup.


## Conclusion

Chande Momentum Oscillator (CMO) is a versatile oscillator that provides traders with deep insights into market momentum. Its ability to react quickly to price changes and identify overbought/oversold conditions makes it a valuable addition to any trading strategy.

By using CMO in conjunction with other technical analysis tools, such as moving averages or Bollinger Bands, traders can significantly improve their trading decisions and enhance adaptability to changing market conditions. As with any indicator, practice and understanding its limitations are key to success.

## Related Materials

**Fundamentals and Strategies:** After mastering the basics, be sure to study our flagship [ELDER 2.0 strategy](/en/library/spot-strategy-elder-20/), specifically designed for the spot market. Also, understand [the difference between spot, margin, and futures](/en/library/spot-trading-vs-futures-margin/).

**Tools and Automation:** To increase efficiency, use technical indicators like the [Stochastic Oscillator](/en/library/stochastic-oscillator/) and [Bollinger Bands](/en/library/bollinger-bands/). A step-by-step guide on [setting up a trading bot on Bybit](/en/library/bybit-trading-bot-setup/) will help automate processes.

**Experience and Risks:** Learn [how to start trading with a small deposit](/en/library/how-to-start-trading-small-deposit/) and be sure to study the basics of [risk management](/en/library/risk-management-crypto-trading-bots/) and check out the [live deposit diary](/en/library/surviving-drawdown-diary/).

