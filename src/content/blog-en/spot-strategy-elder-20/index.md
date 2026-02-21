---
title: 'The Famous ELDER 2.0 Spot Strategy with Settings'
description: 'Proven ELDER 2.0 strategy with averaging: Stochastic, Bollinger, CMO settings for spot bots in the crypto market.'
pubDate: '2026-02-13'
category: 'algo-trading'
draft: false
---

**ELDER 2.0 spot strategy** is an automated trading system on the spot market with position averaging, based on three key indicators. The strategy has proven its effectiveness over years of practical use in algorithmic trading.

## Why ELDER 2.0?

This strategy was developed for working on the [spot market](/en/library/what-is-spot-trading/), where there is no liquidation risk. The key idea is to enter a position in small parts when overbought/oversold signals appear and average down on pullbacks.

**Advantages of the approach:**

- Trading without leverage — no liquidation risk
- Position averaging instead of stop-losses
- Automation via [exchange trading bots](/en/library/bybit-trading-bot-setup/)
- Proven effectiveness in various market conditions

## Three Pillars of the ELDER 2.0 Strategy

### 1. Stochastic Oscillator — the main signal

**Function:** Identifying overbought and oversold zones for entry points. Read more about how the [Stochastic indicator](/en/library/stochastic-oscillator/) works in a separate article.

**Settings:** 14, 3, 3. Oversold zone: 20, Overbought zone: 80.

### 2. Bollinger Bands — volatility filter

**Function:** Signal confirmation during price stretches. Learn more about [Bollinger Bands and their application](/en/library/bollinger-bands/).

**Settings:** Period 20, Deviation 2.0.

### 3. CMO (Chande Momentum Oscillator) — momentum filter

**Function:** Filtering out false signals. A detailed breakdown of the [CMO indicator](/en/library/chande-momentum-oscillator/) will help to better understand its role.

**Settings:** Period 14, Filtration zone: from −50 to +50.

## Strategy Algorithm

### Entry signal (opening/averaging)

Enter a trade when the following conditions are met **simultaneously**:
1. Stochastic < 20
2. Price touches or is below the lower Bollinger Band
3. CMO < −50

### Exit signal (profit-taking)

Close the position when:
1. Stochastic > 80
2. Price touches or is above the upper Bollinger Band
3. CMO > +50
4. Profit from the average entry price is ≥ 3–5%

## Capital Management

### Deposit distribution

- **Base order:** 5% of the deposit
- **Safety orders:** from 5% to 15% depending on the drawdown depth
- **Maximum number of safety orders:** 4–6 orders
- **Reserve:** 20–30% of the deposit

### Averaging steps

Recommended intervals:
- 1st averaging: −5% from entry
- 2nd averaging: −10%
- 3rd averaging: −15%
- 4th averaging: −20%

## Recommended Timeframes and Assets

- **Timeframe:** 4 hours (4H) — optimal. 1 hour (1H) — more aggressive.
- **Assets:** BTC, ETH, and TOP-20 coins by capitalization.

## Setting Up on Exchanges

The strategy can be launched on popular exchanges with trading bots:

- **[Bybit](https://www.bybit.com/en/invite?ref=PWMD24)** — convenient ready-made bots and low fees. Instructions on [setting up a trading bot on Bybit](/en/library/bybit-trading-bot-setup/) will help to get started.
- **[Bitget](https://www.bitget.com/referral/register?from=referral&clacCode=23EHR2VD)** — a wide selection of copy trading strategies.
- **[BingX](https://bingxdao.com/invite/CUBDBG/)** — simple interface for beginners.

## Conclusion

The ELDER 2.0 spot strategy is a fundamental approach to working in the crypto market without liquidation risk. Position averaging and three-factor signal filtering provide system stability in various market conditions. Proven platforms are available for strategy automation:

- **[Bybit](https://www.bybit.com/en/invite?ref=PWMD24)** — one of the leading exchanges for working with [trading bots](/en/library/bybit-trading-bot-setup/).
- **[Bitget](https://www.bitget.com/referral/register?from=referral&clacCode=23EHR2VD)** — a platform with a user-friendly interface and bonuses for new users.
- **[BingX](https://bingxdao.com/invite/CUBDBG/)** — a popular platform for social trading and copy trading.

---

## Related Materials

**Basics and strategies:** it is recommended to study [what spot trading is](/en/library/what-is-spot-trading/) and the [differences between spot, futures, and margin](/en/library/spot-trading-vs-futures-margin/). Information is also available on [how to start trading with a small deposit](/en/library/how-to-start-trading-small-deposit/).

**Tools and experience:** in-depth study of indicators: [Stochastic Oscillator](/en/library/stochastic-oscillator/), [Bollinger Bands](/en/library/bollinger-bands/), and [CMO](/en/library/chande-momentum-oscillator/). A [live deposit diary](/en/library/surviving-drawdown-diary/) and [risk management](/en/library/risk-management-crypto-trading-bots/) principles are available.

---
If you are interested in this strategy and want to follow the development of our project, visit the [About the Project](/en/about/) page — there we talk about our mission and how you can support our startup.
