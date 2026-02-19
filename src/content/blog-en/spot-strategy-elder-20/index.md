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

- Trading without leverage — no liquidation risk
- Position averaging instead of stop-losses
- Automation through [trading bots on exchanges](/en/library/bybit-trading-bot-setup/)
- Proven effectiveness in various market conditions

## The three pillars of the ELDER 2.0 strategy

### 1. Stochastic Oscillator — main signal

**Function:** Determining overbought and oversold zones for entry points. Read more about how the [Stochastic indicator](/en/library/stochastic-oscillator/) works in a separate article.

**Settings:** 14, 3, 3. Oversold zone: 20, Overbought zone: 80.

### 2. Bollinger Bands — volatility filter

**Function:** Confirming signals during price expansion moments. Learn more about [Bollinger Bands and their application](/en/library/bollinger-bands/).

**Settings:** Period 20, Deviation 2.0.

### 3. CMO (Chande Momentum Oscillator) — momentum filter

**Function:** Filtering out false signals. A detailed breakdown of the [CMO indicator](/en/library/chande-momentum-oscillator/) will help you better understand its role.

**Settings:** Period 14, Filtering zone: from -20 to +20.

## Strategy working algorithm

### Entry signal (opening/averaging)

We enter a trade when the following are met **simultaneously**:

- 1. Stochastic < 20
- 2. Price touches or is below the lower Bollinger Band
- 3. CMO < -20

### Exit signal (profit taking)

We close the position when:

- 1. Stochastic > 80
- 2. Price touches or is above the upper Bollinger Band
- 3. CMO > +20
- 4. Profit from the average entry price is ≥ 3-5%

## Exchange setup

The strategy can be launched on popular exchanges with trading bots:

- **[Bybit](https://www.bybit.com/ru-RU/invite?ref=PWMD24)** — convenient ready-made bots and low fees. The instruction on [how to set up a trading bot on Bybit](/en/library/bybit-trading-bot-setup/) will help you get started.
- **[Bitget](https://www.bitget.com/ru/referral/register?from=referral&clacCode=23EHR2VD)** — wide selection of copy trading strategies.
- **[BingX](https://bingxdao.com/invite/CUBDBG/)** — simple interface for beginners.

## Conclusion

The ELDER 2.0 spot strategy is a fundamental approach to working in the crypto market. The absence of liquidation risk makes it an ideal choice for automation. Remember about [risk management](/en/library/risk-management-crypto-trading-bots/) and always trade with funds you can afford to lose.

## Related materials

**Fundamentals and strategies:** Be sure to study [what is spot trading](/en/library/what-is-spot-trading/) and the [differences between spot, futures, and margin](/en/library/spot-trading-vs-futures-margin/). Also find out [how to start trading with a small amount](/en/library/how-to-start-trading-small-deposit/).

**Tools and experience:** Deepen your knowledge of indicators: [Stochastic Oscillator](/en/library/stochastic-oscillator/), [Bollinger Bands](/en/library/bollinger-bands/), and [CMO](/en/library/chande-momentum-oscillator/). Check out our [live deposit diary](/en/library/surviving-drawdown-diary/) and study the principles of [risk management](/en/library/risk-management-crypto-trading-bots/).
