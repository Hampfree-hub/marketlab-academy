---
title: 'What Is a Trailing Stop and How to Use It'
description: 'Trailing stop: a stop-loss that follows price. How it works, how to set it. Pros, cons, and common mistakes when using it in trading.'
pubDate: '2026-01-24'
category: 'technical-analysis'
---

# What Is a Trailing Stop and How to Use It

Many traders give back profits not because of a bad entry, but because they never set a stop-loss or take-profit. What if there were a way to lock in gains without capping upside? That tool exists: the trailing stop.

## Trailing Stop in Cryptocurrency

In volatile crypto markets, exiting well can matter more than entering well. One of the most effective tools for protecting profits is the trailing stop (trailing stop loss).

Unlike a fixed stop-loss, which stays at one level, the trailing stop moves with price. As the asset rises, the stop moves up. If price reverses, the stop holds and eventually triggers, closing the trade near the high.

![Trailing stop chart: price rises, stop follows; profit locked in on reversal](./assets/what-is-trailing-stop.png)

## How a Trailing Stop Works

The main difference from a regular stop is behaviour: a normal stop is fixed; a trailing stop moves with price, keeping a defined distance but not limiting further upside. That makes it useful for risk management and profit protection.

Example: you buy at $100 and set a trailing stop with a $10 step. As price moves to $105, $110, $115, the stop moves up, staying $10 below the highest price. At $115, the stop is at $105. If price falls to $105, the sell order executes. The trailing stop does not cap gains but “locks in” profit at a chosen distance, so a pullback does not erase it.

Mechanically, the system tracks the entry price and the highest price reached afterwards. When price falls by the set amount from that high, the sell is triggered — often as a market order. This matters especially for illiquid assets, where slippage can be large.

On most exchanges you set either a percentage or a fixed distance. The platform then tracks price, moves the stop, and triggers the order when the condition is met. You can leave the position open without watching the chart.

Implementation varies by platform. Some exchanges support built-in trailing stops; others only offer fixed stops, so you use a bot or external service that implements the logic.

There is no single “best” trailing stop. Tighter steps lock in profit more quickly but may close the trade on minor wicks; wider steps allow more upside but may give back more in a reversal. It depends on strategy and should be tested.

## Features of the Trailing Stop

The trailing stop is triggered by a change in the recent high or low, not by a static price. When price rises, the stop moves up; when it corrects, the stop stays put until price hits the trigger. That makes it well suited for trend-following and taking profit near local tops.

The step size (in points or percent) strongly affects behaviour. A narrow step can close the trade too early on noise; a wide one can preserve more profit but also lose more in a sharp reversal.

Trailing stops can be executed as market orders (fast, but possible slippage) or via a bot (more flexibility, custom logic). When setting a trailing stop, consider both the parameters and your overall strategy. It works best in trending markets where you want to stay in the move without closing too early.

Until it triggers, the trailing stop is not visible in the order book. Unlike a limit order, it does not appear in the book, which can make it less exposed to stop-hunting.

Using a trailing stop well helps lock in profits across different volatility regimes. If you trade crypto, it is worth testing it, including with bots. For checking how strategies with stops perform, [backtesting](/en/library/what-are-backtests/) is useful; for exit timing, the [RSI](/en/library/technical-analysis-rsi/) can complement your approach. The [Williams %R oscillator](/en/library/williams-percent-range-r/) can also help identify reversal zones.
