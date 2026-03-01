---
title: 'Keltner Channel'
description: 'Keltner Channel — a volatility indicator based on EMA and ATR: settings, breakout zones, and use in spot trading strategies like Prisma 5.5.'
pubDate: '2026-02-27'
category: 'technical-analysis'
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

The Keltner Channel is versatile and works in two modes. The choice depends on the current market state.

### 1. Mean Reversion (Primary Strategy)

In a sideways market (flat), the channel boundaries act as support and resistance levels. This is the **primary** strategy for Keltner Channel — similar to Bollinger Bands.

**How it works:**
- Price approaches upper band → expect a pullback down to EMA
- Price approaches lower band → expect a rebound up to EMA
- The middle line (EMA) serves as the Take Profit target

**Why it works:** ATR smooths sharp movements, making the channel more "calm" than Bollinger Bands. Price more often returns to the mean.

### 2. Breakout and Trend (Secondary Strategy)

A close above the upper band may signal strong bullish momentum. A close below the lower band signals bearish. In strong trends, the price may "slide" along the channel boundaries.

**Important:** Breakout is a more aggressive strategy. Use additional filters:
- Volume confirmation (volume should increase)
- Multiple candle closes outside the channel
- Confirmation from other indicators (RSI, MACD)

### 3. Volatility Filter
A narrowing of the channel indicates market calm (accumulation), which is usually followed by a strong move. After a "squeeze," either breakout or mean reversion is possible.

### 4. Trend Strength
The channel's slope angle shows the current trend strength. Steep slope upward — strong bullish trend, shallow — weak. If the channel is "horizontal" — no trend, market is flat.

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

## Practical Examples

### Example 1: Mean Reversion Entry (Primary Strategy)
BTC price approached the upper band and closed near it. RSI shows overbought (above 70). We enter short with a stop just above the upper band. Target — middle line (EMA 20).

### Example 2: Lower Band Rebound
In a sideways market, price touched the lower band. RSI is oversold (below 30). We enter long with a stop below the lower band. Target — middle line.

### Example 3: Breakout (Secondary Strategy)
Price broke above the upper band and closed above it with 50% volume increase. RSI confirms strength (above 50, rising). We enter long with a wider stop. Target — next resistance levels.

### Example 4: Position Exit
Trader entered a position with the trend. Price started moving along the upper band — this is a strong hold signal. Once price crosses the middle line in the opposite direction — close the position.

## Combining with Other Indicators

Keltner Channel is most effective combined with oscillators for signal confirmation:

| Indicator | For Mean Reversion | For Breakout |
|-----------|-------------------|--------------|
| **RSI** | Overbought (short) / Oversold (long) when touching band | Trend confirmation (above/below 50) |
| **Stochastic** | Same as RSI — overbought/oversold zones | — |
| **MACD** | Divergences | Trend confirmation |
| **Volume** | — | True breakout vs false (volume increases) |

### Strategy Example (Mean Reversion)
1. Price touches upper or lower band
2. Check RSI: above 70 (short) or below 30 (long)
3. Wait for confirming candle toward middle line
4. Enter with stop beyond the band
5. Target — middle line (EMA)

### Strategy Example (Breakout)
1. Price breaks band
2. Check volume: should increase by at least 30%
3. RSI confirms trend (above 50 for long, below for short)
4. Enter after retest of the band
5. Stop-loss — opposite band

## Risks and Limitations

**False signals:** In sideways markets with low volatility, frequent false breakouts are possible. Always use additional filters.

**Lag:** Like all moving average-based indicators, Keltner Channel lags. This is especially noticeable in fast moves.

**Doesn't work well in:**
- Sharp news moves (gaps)
- Extreme volatility periods
- Low-liquidity assets

**Risk management recommendations:**
- Don't risk more than 1-2% per trade
- Always set stop-loss
- Test on demo before real trading
- Consider overall portfolio risk

## Summary

Keltner Channel is a reliable volatility indicator with smoother reaction to market changes compared to Bollinger Bands. It's effective for trend identification, entry point finding, and filtering false signals in algorithmic strategies.

## FAQ

**Keltner Channel or Bollinger Bands — which is better?**

Depends on the task. Keltner Channel is better for calm markets and long-term strategies — it reacts less to random price spikes. Bollinger Bands are better for finding extremes and short-term volatility due to standard deviation sensitivity.

**What settings to use for day trading?**

For day trading on crypto, popular settings are: EMA 20, ATR 10, multiplier 2.0. For 15-minute timeframe in Prisma 5.5 strategy, a more conservative multiplier of 1.5 is used.

**How to identify a false breakout?**

A false breakout is when price closes outside the channel but quickly returns. Use additional indicators for confirmation: volume (should increase on true breakout), RSI (overbought/oversold), and candlestick patterns.

**Can Keltner Channel be used for scalping?**

Yes, but with caution. On low timeframes (M1-M5) there's a lot of noise. It's recommended to use with other filters and always backtest before real trading.

**Why does the channel narrow and what does it mean?**

Channel narrowing (also called "squeeze") indicates low volatility and position accumulation. After a quiet period, a strong move usually follows — breakout can be in either direction.
