---
title: 'Keltner Channel'
description: 'Keltner Channel — a volatility indicator based on EMA and ATR: settings, breakout zones, and use in spot trading strategies like Prisma 5.5.'
pubDate: '2026-02-19'
category: 'technical-analysis'
draft: true
---
**Keltner Channel** is a volatility-based indicator built around an Exponential Moving Average (EMA) with bands based on the Average True Range (ATR). In modern trading systems like Prisma 5.5, it is used as a volatility filter and a breakout signal.

## What is the Keltner Channel?

The indicator was first described by Chester Keltner in his 1960 book, "How To Make Money in Commodities." Later, it was refined by Linda Raschke and Robert Colby, who replaced the Simple Moving Average with an Exponential one and used the ATR to calculate the channel's width.

Unlike Bollinger Bands, which expand and contract sharply, the Keltner Channel is smoother because ATR (Average True Range) responds to volatility less aggressively than standard deviation.

## Indicator Structure

The classic Keltner Channel consists of three lines:
1. **Middle Line:** Exponential Moving Average (usually EMA 20).
2. **Upper Band:** EMA + (Multiplier * ATR).
3. **Lower Band:** EMA - (Multiplier * ATR).

Standard settings use an EMA period of 20 and a multiplier of 2.0.

## Keltner Channel Signals

### 1. Breakout and Trend
A close above the upper band often signals strong bullish momentum. A close below the lower band signals bearish. In strong trends, the price may "slide" along the channel boundaries for an extended period.

### 2. Mean Reversion
In a sideways market (flat), the channel boundaries act as support and resistance levels. Price breaking outside the channel tends to return to the EMA 20.

### 3. Volatility Filter
A narrowing of the channel indicates market calm (accumulation), which is usually followed by a strong move.

## Settings in Prisma 5.5

In the Prisma 5.5 strategy on the Veles platform, the Keltner Channel settings are optimized to catch local impulses on the 15-minute timeframe:
- **EMA Period:** 20
- **ATR Period:** 10
- **Multiplier:** 1.5
- **Timeframe:** M15

The indicator helps determine whether the price is in a "normal" distribution zone or whether a volatile breakout, suitable for entering a trade, is beginning.

## Comparison with Bollinger Bands

| Characteristic | Keltner Channel | Bollinger Bands |
|---|---|---|
| Basis | ATR (Average True Range) | Standard Deviation |
| Reaction | Smoother | Sharp, sensitive |
| Middle Line | EMA (exponential) | SMA (simple) |

## Conclusion

The Keltner Channel is a reliable volatility indicator that provides smoother noise filtering compared to Bollinger Bands. Using the indicator allows for effectively identifying the moments when a trend is forming and finding optimal entry points within algorithmic strategies. Proven platforms are available to start trading:

- **[Bybit](https://partner.bybit.com/b/marketlab)** — one of the leading exchanges for working with [trading bots](/en/library/bybit-trading-bot-setup/).
- **[Bitget](https://partner.bitget.com/bg/marketlab)** — a platform with a user-friendly interface and bonuses for new users.
- **[BingX](https://bingx.com/en-us/partner/MarketLab/)** — a popular platform for social trading and copy trading.

---

## Related Materials

**Basics and strategies:** studying [Bollinger Bands](/en/library/bollinger-bands/), [RSI (Relative Strength Index)](/en/library/technical-analysis-rsi/) and [ATR](/en/library/atr-and-atr-percent/) will help to better understand the principles of channel indicators.

**Tools and automation:** information is available on [how to set up a bot on Bybit](/en/library/bybit-trading-bot-setup/) and [what backtests are](/en/library/what-are-backtests/).

**Experience and risks:** it is critically important to understand [risk management when working with bots](/en/library/risk-management-crypto-trading-bots/) and to monitor [diversification](/en/library/diversification-trading-system-part-1/).
