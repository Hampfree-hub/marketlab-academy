---
title: 'Prisma 5.5: Strategy Settings on the Veles Platform'
description: 'Breaking down the settings of the Prisma 5.5 proprietary strategy on the Veles platform: entry indicators, filters, order grid management, and pair recommendations.'
pubDate: '2026-02-28'
category: 'algo-trading'
---

**Prisma 5.5** is a proprietary strategy from the [Veles](https://veles.finance/invite/washmallay) platform for automated trading. This article provides a full breakdown of the settings: which indicators are used for entry, how to set up the order grid, and which pairs to launch on.

**Important:** Before using any strategy, familiarize yourself with [risk management](https://marketlab-academy.org/en/library/risk-management-crypto-trading-bots/) and the series [Diversification and Trading System Setup](https://marketlab-academy.org/en/library/diversification-trading-system-part-1/).

## What is Prisma 5.5?

Prisma 5.5 is a high-frequency trading strategy designed for the volatile crypto market. It combines trend filters and oscillators to find optimal entry points for Long positions.

## Strategy Settings

It should be noted that the parameters, like the settings of other Marketlab strategies, are quite flexible and can be adjusted to suit your risk management.

### Entry Indicators (Filters)

To open a position in Prisma 5.5, the following indicators are used:

1. **[CMO (Chande Momentum Oscillator)](https://marketlab-academy.org/en/library/chande-momentum-oscillator/)**
   • Period: 14
   • Levels: ±50
   • Condition: CMO below −50 (oversold zone) before Long entry, above +50 — upward momentum (oversold zone)

2. **[Bollinger Bands](https://marketlab-academy.org/en/library/bollinger-bands/)**
   - Period: 20, Deviation: 2
   - Condition: Price below the lower band

3. **[RSI (Relative Strength Index)](https://marketlab-academy.org/en/library/technical-analysis-rsi/)**
   - Period: 14
   - Level: 30
   - Condition: RSI less than 30

### Order Grid Management

The grid is configured considering current volatility. Order step is standard for most strategies, but can be adjusted to suit your trading style. The martingale coefficient allows for a faster return to profit during price reversals.

## Which Pairs to Launch On

It is recommended to use liquid pairs with high trading volume:
- **TOP-10:** BTC/USDT, ETH/USDT, SOL/USDT.
- **Volatile altcoins:** ARB/USDT, OP/USDT, LINK/USDT.

## Backtests Prisma 5.5

![Annual backtest BINGX KAS PRISMA 5.5](./assets/kas-prisma-strategy.png)

[✖️ 🌪 BINGX KAS PRISMA 5.5](https://veles.finance/share/Vsyhz)

![Annual backtest BINGX UNI PRISMA 5.5](./assets/uni-prisma-strategy.png)

[✖️ 🌪 BINGX UNI PRISMA 5.5](https://veles.finance/share/zslhm)

## Summary

Prisma 5.5 is a balanced strategy for automating spot and futures trading with a moderate level of risk. It is essential to monitor margin levels and adhere to diversification rules to ensure the stability of the trading system.

Proven platforms are available to start trading:
- **Bybit** — a leading exchange for working with [trading bots](https://marketlab-academy.org/en/library/bybit-trading-bot-setup/).
- **[Bitget](https://www.bitget.com/referral/register?from=referral&clacCode=23EHR2VD)** — a platform with a user-friendly interface and bonuses for new users.
- **BingX** — a popular choice for social trading and copy trading.

---

## FAQ

**What deposit is needed for Prisma 5.5?**

Recommended minimum is $10-20. For moderate risk, $1000–2000 per pair is better. Don't invest your entire deposit — diversify across multiple strategies.

**Which pairs does the strategy work best on?**

Liquid TOP-10 pairs (BTC, ETH, SOL) have less slippage. Volatile altcoins (ARB, OP, LINK) — higher returns, but also higher risks.

**Do I need to monitor the bot after launching?**

Yes. Although the strategy is automated, you need to monitor margin levels, drawdowns, and emergency market situations. Check positions once a day.

**Why is the strategy Long only?**

Prisma 5.5 uses oscillators to enter oversold zones — this only works for rebounds upward. Short version requires different indicators.

**How much can you earn on Prisma 5.5?**

According to backtests — 100–300% annually. Real returns depend on market, settings, and risk management. Expect drawdowns of 20–40%.

---

