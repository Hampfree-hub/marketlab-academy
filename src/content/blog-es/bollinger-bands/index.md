---
title: 'Bandas de Bollinger en el trading de criptomonedas'
description: 'Qué son las bandas de Bollinger: cómo se construyen, zonas de sobrecompra y sobreventa, combinación con RSI y Williams %R.'
pubDate: '2026-02-10'
category: 'technical-analysis'
draft: true
---

Las bandas de Bollinger son un indicador de volatilidad: línea media (media móvil) y dos bandas por encima y por debajo, cuya distancia depende de la desviación estándar del precio. Ayudan a valorar el "recorrido" del movimiento y a buscar rebotes en los límites del canal. En este artículo: cómo se calculan las bandas, cómo leer los toques de la banda superior e inferior y cómo combinarlas con [RSI](/es/library/technical-analysis-rsi/) y [Williams %R](/es/library/williams-percent-range-r/).

## Qué son las bandas de Bollinger

**Bandas de Bollinger** es un indicador de tres líneas en el gráfico de precio. La línea media es una media móvil (normalmente simple, SMA) del periodo elegido. Las bandas superior e inferior se dibujan a una distancia de la media igual a un múltiplo de la desviación estándar del precio en ese mismo periodo. Así, las bandas se ensanchan cuando sube la volatilidad y se estrechan cuando baja.

El indicador fue desarrollado por John Bollinger en los años 80. La idea es que el precio se mueve la mayor parte del tiempo dentro de las bandas, y la salida o el toque de los límites suele preceder a una reversión o corrección. En artículos de análisis técnico y [señales de trading](/es/library/what-are-trading-signals/) las bandas de Bollinger se clasifican con los indicadores de volatilidad junto con [ATR](/es/library/atr-and-atr-percent/).

## Cómo se calculan las bandas de Bollinger

El cálculo se basa en tres magnitudes.

**Línea media (Middle Band):** media móvil simple (SMA) del precio de cierre del periodo N. Lo más habitual N = 20.

**Desviación estándar:** se calcula sobre las mismas N velas del precio de cierre. Mide cuánto se desvía el precio de su media.

**Bandas superior e inferior:** línea media más/menos (K × desviación estándar). Suele usarse K = 2. Es decir, banda superior = SMA(20) + 2 × StdDev(20), inferior = SMA(20) − 2 × StdDev(20).

La configuración típica es 20 periodos y multiplicador 2. En [timeframes](/es/library/timeframes-trading/) menores a veces se usa un periodo más corto (p. ej. 15) para que el indicador reaccione antes.

## Interpretación: zonas de sobrecompra y sobreventa

El toque o salida por la **banda inferior** suele interpretarse como sobreventa: el precio ha bajado respecto a su media reciente. Muchos traders lo ven como una zona posible de rebote al alza. El toque de la **banda superior** es sobrecompra, con posible corrección a la baja.

Importante: en tendencia fuerte el precio puede "caminar la banda" — mantenerse junto al límite superior en subida o al inferior en bajada. En esos casos el toque de la banda no es por sí solo señal de reversión. Conviene buscar confirmación con [RSI](/es/library/technical-analysis-rsi/) o [Williams %R](/es/library/williams-percent-range-r/) y niveles de soporte/resistencia.

**Estrechamiento de bandas (squeeze):** cuando las bandas se estrechan mucho, baja la volatilidad. Tras el estrechamiento suele venir un movimiento fuerte en una dirección. Las bandas no indican la dirección, solo la posibilidad de un repunte. La dirección de entrada se toma del tendencia u otros indicadores.

![Bandas de Bollinger en el gráfico: límites superior e inferior del canal, toques y rebotes del precio](./assets/bollinger-bands.png)

## Señales de compra y venta

Enfoque clásico de señales:

- **Posible compra:** el precio toca o rompe la banda inferior, luego revierte y cierra dentro de las bandas. La confirmación puede ser rebote de [RSI](/es/library/technical-analysis-rsi/) desde sobreventa o salida de [Williams %R](/es/library/williams-percent-range-r/) de la zona por debajo de −80.
- **Posible venta:** el precio toca o rompe la banda superior, luego revierte y cierra dentro de las bandas. Confirmación: debilitamiento del momentum en RSI o %R.

Un solo indicador puede dar señales falsas: p. ej. precio en la banda inferior pero tendencia aún bajista. Combinar bandas de Bollinger con osciladores y, si aplica, [estrategias de tendencia lateral](/es/library/sideways-trend-strategies/) mejora el filtrado.

## Combinación con otros indicadores

- **Bandas de Bollinger + RSI:** RSI muestra sobrecompra/sobreventa, las bandas la desviación extrema del precio respecto a la media. La coincidencia (p. ej. RSI &lt; 30 y toque de banda inferior) refuerza la probabilidad de rebote.
- **Bandas de Bollinger + Williams %R:** como en el artículo de [Williams %R](/es/library/williams-percent-range-r/), %R y las bandas ayudan a detectar momentos en que el precio se ha alejado mucho de la media y el oscilador confirma el extremo.
- **Bandas de Bollinger + volumen:** un pico de volumen en el rebote desde la banda inferior o superior puede confirmar la fuerza de la reversión.

No conviene cargar el gráfico: 2–3 indicadores suelen bastar. Más sobre combinaciones en [señales de trading](/es/library/what-are-trading-signals/) y [backtests](/es/library/what-are-backtests/).

## Uso en criptotrading

El mercado cripto es muy volátil. Las bandas en pares cripto suelen ensancharse mucho en movimientos fuertes y estrecharse en lateral. Los valores 20 y 2 pueden servir; en scalping en [timeframes cortos](/es/library/timeframes-trading/) a veces se reduce el periodo. Conviene probar la configuración en histórico con [backtests](/es/library/what-are-backtests/) para el activo y estilo elegidos.

En mercado lateral los rebotes en los límites de las bandas se ven mejor. En tendencia conviene usar las bandas como zonas de posible corrección y alinear la dirección de la operación con la tendencia.

## Resumen

- Bandas de Bollinger: línea media (SMA) y dos bandas a distancia K × desviación estándar. Estándar periodo 20, multiplicador 2.
- Toque de banda inferior — posible sobreventa; superior — sobrecompra. En tendencia el precio puede ir largo tiempo junto a la banda.
- El estrechamiento de bandas anuncia posible repunte de volatilidad; la dirección la marcan la tendencia u otros indicadores.
- La combinación con RSI, Williams %R y, si hace falta, volumen mejora el filtrado de señales.
