---
title: 'Keltner Channel'
description: 'Keltner Channel — a volatility indicator based on EMA and ATR: settings, breakout zones, and use in spot trading strategies like Prisma 5.5.'
pubDate: '2026-02-19'
category: 'technical-analysis'
draft: false
---

**Keltner Channel** is a volatility-based indicator built around an Exponential Moving Average (EMA) with bands based on the Average True Range (ATR). In modern trading systems like Prisma 5.5, it is used as a volatility filter and a breakout signal.

## What is the Keltner Channel?

The indicator was first described by Chester Keltner in his 1960 book, "How To Make Money in Commodities." Later, it was refined by Linda Raschke and Robert Colby, who replaced the Simple Moving Average with an Exponential one and used the ATR to calculate the channel's width.

Unlike Bollinger Bands, which expand and contract very sharply, the Keltner Channel is smoother because the ATR (Average True Range) reacts to volatility less aggressively than standard deviation.

## Indicator Structure

A classic Keltner Channel consists of three lines:
1. **Middle Line:** Exponential Moving Average (usually EMA 20).
2. **Upper Band:** EMA + (Multiplier * ATR).
3. **Lower Band:** EMA - (Multiplier * ATR).

Standard settings typically involve an EMA 20 period and a 2.0 multiplier.

## Keltner Channel Signals

### 1. Breakout and Trend
If the price closes above the upper band, it often signals strong bullish momentum. If it closes below the lower band, it indicates bearish momentum. In strong trends, the price may "ride" along the channel boundaries for a long time.

### 2. Mean Reversion
In a range-bound (sideways) market, the channel boundaries act as support and resistance levels. When the price moves outside the channel, it tends to return to the EMA 20.

### 3. Volatility Filter
A narrowing channel indicates a quiet market (accumulation), which is usually followed by a strong price movement.

## Settings in Prisma 5.5

In the Prisma 5.5 strategy on the Veles platform, Keltner Channel settings are optimized for catching local impulses on a 15-minute timeframe:
- **EMA Period:** 20
- **ATR Period:** 10
- **Multiplier:** 1.5
- **Timeframe:** M15

Here, the indicator helps the bot determine if the price is within a "normal" distribution zone or if a volatile breakout suitable for entering a trade is beginning.

## Difference from Bollinger Bands

| Feature | Keltner Channel | Bollinger Bands |
|---|---|---|
| **Basis** | ATR (Average True Range) | Standard Deviation |
| **Reaction** | Smoother | Sharp, sensitive |
| **Middle Line** | EMA (Exponential) | SMA (Simple) |

## Conclusion

The Keltner Channel is a reliable tool for those seeking a balance between sensitivity and stability. It is excellent for trend-following strategies and automated bots, helping to filter out market noise.

You can start trading on verified exchanges:
- **[Bybit](https://www.bybit.com/ru-RU/invite?ref=PWMD24)** — an excellent choice for working with [trading bots](/en/library/bybit-trading-bot-setup/)
- **[Bitget](https://www.bitget.com/ru/referral/register?from=referral&clacCode=23EHR2VD)** — user-friendly interface and bonuses
- **[BingX](https://bingxdao.com/invite/CUBDBG/)** — social trading and copy trading

---

## Related Materials
**Basics and Strategies:** explore [Bollinger Bands](/en/library/bollinger-bands/), [RSI](/en/library/technical-analysis-rsi/), and [CMO](/en/library/chande-momentum-oscillator/). These indicators are often used together with the Keltner Channel.
**Tools and Automation:** The Keltner Channel is a key element of the [Prisma 5.5](/en/library/prisma-5-5-strategy-settings/) strategy. It is also useful to study [risk management](/en/library/risk-management-crypto-trading-bots/) when working with bots.

---
If you are interested in this topic and want to follow the development of the project, take a look at the [About Project](/en/about/) page — there we tell about our mission and how you can support the startup.
