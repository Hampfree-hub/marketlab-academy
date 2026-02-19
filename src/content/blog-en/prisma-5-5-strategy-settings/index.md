---
title: 'Prisma 5.5: Strategy Settings on the Veles Platform'
description: 'Breaking down the settings of the Prisma 5.5 proprietary strategy on the Veles platform: entry indicators, filters, order grid management, and pair recommendations.'
pubDate: '2026-02-19'
category: 'algo-trading'
draft: true
---

**Prisma 5.5** is a proprietary strategy from the [Veles](https://veles.finance/invite/washmallay) platform for automated trading. This article provides a full breakdown of the settings: which indicators are used for entry, how to set up the order grid, and which pairs to launch on.

**Important:** Before using any strategy, familiarize yourself with [risk management](/en/library/risk-management-crypto-trading-bots/) and the series [Diversification and Trading System Setup](/en/library/diversification-trading-system-part-1/).

## What is Prisma 5.5?

Prisma 5.5 is a high-frequency trading strategy designed for the volatile crypto market. It combines trend filters and oscillators to find optimal entry points for Long positions.

## Strategy Settings

### Main Parameters

| Parameter | Value |
|---|---|
| Direction | Long |
| Exchange | Bybit / BingX / Bitget |
| Order Grid | 25-30 orders |
| Overlap | 15-20% |
| First Order Offset | 0.2% |
| Martingale | 1.05 - 1.1 |

### Entry Indicators (Filters)

To open a position in Prisma 5.5, the following indicators are used:

1. **CCI (Commodity Channel Index)**
   * • Period: 14
   * • Level: -100
   * • Condition: CCI less than -100 (oversold zone)

2. **Bollinger Bands**
   * • Period: 20, Deviation: 2
   * • Condition: Price below the lower band

3. **RSI (Relative Strength Index)**
   * • Period: 14
   * • Level: 30
   * • Condition: RSI less than 30

### Order Grid Management

The grid is configured considering current volatility:
* • **Order Step:** logarithmic, starting from 0.5%
* • **Martingale Coefficient:** allows for a faster return to profit during price reversals.

## Recommended Pairs

It is recommended to use liquid pairs with high trading volume:
* • **TOP-10:** BTC/USDT, ETH/USDT, SOL/USDT.
* • **Volatile Altcoins:** ARB/USDT, OP/USDT, LINK/USDT.

## How to Launch Prisma 5.5 on Veles

1. Register on [Veles](https://veles.finance/invite/washmallay) and link your exchange API key.
2. Go to the **"Ready-made bots"** section and filter by author or the name Prisma 5.5.
3. Click **"Copy"**, select a trading pair, and specify the allocated deposit.
4. Check the parameters using the "Calculate" button and click **"Launch"**.

## Conclusion

Prisma 5.5 is a balanced strategy for those who want to automate spot or futures trading with moderate risk. Always monitor your margin level and don't forget about diversification.

---

If you are interested in this strategy and want to follow the development of our project, take a look at the [About Project](/en/about/) page — there we talk about our mission and how you can support the startup.
