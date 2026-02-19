---
title: 'The famous ELDER 2.0 spot strategy with settings'
description: 'Proven ELDER 2.0 strategy with averaging: Stochastic, Bollinger, CMO settings for spot bots in the crypto market.'
pubDate: '2026-02-13'
category: 'algo-trading'
---

**ELDER 2.0 spot strategy** is an automated trading system on the spot market with position averaging, based on three key indicators. The strategy has proven its effectiveness over years of practical use in algorithmic trading.

## Why ELDER 2.0?

This strategy was developed for working on the [spot market](/en/library/what-is-spot-trading/), where there is no liquidation risk. The key idea is to enter a position in small parts when overbought/oversold signals appear and average down on pullbacks.

**Advantages of the approach:**

* • Trading without leverage — no liquidation risk
* • Position averaging instead of stop-losses
* • Automation via [exchange trading bots](/en/library/bybit-trading-bot-setup/)
* • Proven effectiveness across various market conditions

## Three Pillars of the ELDER 2.0 Strategy

### 1. Stochastic Oscillator — the main signal

**Function:** Identifying overbought and oversold zones for entry points. Read more about the [Stochastic indicator](/en/library/stochastic-oscillator/) in a separate article.

**Settings:** 14, 3, 3. Oversold zone: 20, Overbought zone: 80.

### 2. Bollinger Bands — volatility filter

**Function:** Confirming signals during price stretches. Learn more about [Bollinger Bands and their application](/en/library/bollinger-bands/).

**Settings:** Period 20, Deviation 2.0.

### 3. CMO (Chande Momentum Oscillator) — momentum filter

**Function:** Cutting off false signals. A detailed breakdown of the [CMO indicator](/en/library/chande-momentum-oscillator/) will help you better understand its role.

**Settings:** Period 14, Filtration zone: from -20 to +20.

## Strategy Algorithm

### Entry Signal (Opening/Averaging)

Enter a trade when the following conditions are met **simultaneously**:

1. Stochastic < 20
2. Price touches or is below the lower Bollinger Band
3. CMO < -20

### Exit Signal (Profit Taking)

Close the position when:

1. Stochastic > 80
2. Price touches or is above the upper Bollinger Band
3. CMO > +20
4. Profit from the average entry price ≥ 3-5%

## Exchange Setup

The strategy can be launched on popular exchanges with trading bots:

* • **[Bybit](https://www.bybit.com/en-US/invite?ref=PWMD24)** — user-friendly ready-made bots and low fees. The [Bybit trading bot setup guide](/en/library/bybit-trading-bot-setup/) will help you get started.
* • **[Bitget](https://www.bitget.com/en/referral/register?from=referral&clacCode=23EHR2VD)** — a wide selection of copy-trading strategies.
* • **[BingX](https://bingxdao.com/invite/CUBDBG/)** — simple interface for beginners.

## Conclusion

The ELDER 2.0 spot strategy is a fundamental approach to the crypto market. The absence of liquidation risk makes it an ideal choice for automation. Remember [risk management](/en/library/risk-management-crypto-trading-bots/) and always trade with funds you can afford to lose.

## Related Materials

**Basics and Strategies:** Be sure to study [what spot trading is](/en/library/what-is-spot-trading/) and the [differences between spot, futures, and margin](/en/library/spot-trading-vs-futures-margin/). Also, find out [how to start trading with a small amount](/en/library/how-to-start-trading-small-deposit/).

**Tools and Experience:** Deepen your knowledge of indicators: [Stochastic Oscillator](/en/library/stochastic-oscillator/), [Bollinger Bands](/en/library/bollinger-bands/), and [CMO](/en/library/chande-momentum-oscillator/). Check out our [surviving drawdown diary](/en/library/surviving-drawdown-diary/) and study the principles of [risk management](/en/library/risk-management-crypto-trading-bots/).

If you are interested in this strategy and want to follow the development of our project, take a look at the [About Project](/en/about/) page — there we talk about our mission and how you can support the startup.
