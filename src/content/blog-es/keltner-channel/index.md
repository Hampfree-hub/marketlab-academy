---
title: 'Canal de Keltner (Keltner Channel)'
description: 'Keltner Channel — indicador de volatilidad basado en EMA y ATR: configuración, zonas de ruptura y uso en estrategias spot como [Prisma 5.5](/es/library/prisma-5-5-strategy-settings/).'
pubDate: '2026-02-27'
category: 'technical-analysis'
---

**El Canal de Keltner (Keltner Channel)** es un indicador de volatilidad construido alrededor de una Media Móvil Exponencial (EMA) con bandas basadas en el Average True Range (ATR). En los sistemas de trading modernos como [Prisma 5.5](/es/library/prisma-5-5-strategy-settings/), se utiliza como filtro de volatilidad y señal de ruptura.

## ¿Qué es el Canal de Keltner?

El indicador fue descrito por primera vez por Chester Keltner en su libro de 1960, "How To Make Money in Commodities". Más tarde fue perfeccionado por Linda Raschke y Robert Colby, quienes sustituyeron la Media Móvil Simple por una Exponencial y utilizaron el ATR para calcular el ancho del canal.

A diferencia de las Bandas de Bollinger, que se expanden y contraen bruscamente, el Canal de Keltner es más «suave», ya que el ATR (Average True Range) reacciona a la volatilidad de forma menos agresiva que la desviación estándar.

## Estructura del indicador

El Canal de Keltner clásico consta de tres líneas:

1. **Línea central:** Media Móvil Exponencial (habitualmente EMA 20).
2. **Banda superior:** EMA + (Multiplicador * ATR).
3. **Banda inferior:** EMA - (Multiplicador * ATR).

La configuración estándar utiliza un periodo EMA de 20 y un multiplicador de 2.0.

## Señales del Canal de Keltner

### 1. Ruptura y tendencia

Un cierre por encima de la banda superior a menudo indica un fuerte impulso alcista. Un cierre por debajo de la banda inferior indica movimiento bajista. En tendencias fuertes, el precio puede «deslizarse» a lo largo de los límites del canal durante un período prolongado.

### 2. Retorno a la media

En un mercado lateral (rango), los límites del canal actúan como niveles de soporte y resistencia. El precio que sale de los límites del canal tiende a volver a la EMA 20.

### 3. Filtro de volatilidad

Un estrechamiento del canal indica calma en el mercado (acumulación), que generalmente va seguido de un movimiento fuerte.

## Configuración en [Prisma 5.5](/es/library/prisma-5-5-strategy-settings/)

En la estrategia Prisma 5.5 en la plataforma Veles, la configuración del Canal de Keltner está optimizada para capturar impulsos locales en el marco temporal de 15 minutos:

- **Periodo EMA:** 20
- **Periodo ATR:** 10
- **Multiplicador:** 1.5
- **Marco temporal:** M15

El indicador ayuda a determinar si el precio se encuentra en la zona de distribución «normal» o si está comenzando una ruptura volátil adecuada para entrar en una operación.

## Comparación con las Bandas de Bollinger

| Característica | Canal de Keltner | Bandas de Bollinger |
|---|---|---|
| Base | ATR (Average True Range) | Desviación estándar |
| Reacción | Más suave | Brusca, sensible |
| Línea central | EMA (exponencial) | SMA (simple) |

## Conclusión

El Canal de Keltner es un indicador de volatilidad fiable que proporciona un filtrado más suave del ruido del mercado en comparación con las Bandas de Bollinger. El uso del indicador permite identificar eficazmente los momentos en que se forma una tendencia y encontrar puntos de entrada óptimos en el marco de las estrategias algorítmicas. Existen plataformas probadas disponibles para empezar a operar:

- **[Bybit](https://www.bybit.com/invite?ref=PWMD24)** — uno de los principales exchanges para trabajar con [bots de trading](/es/library/bybit-trading-bot-setup/).
- **[Bitget](https://www.bitget.com/referral/register?from=referral&clacCode=23EHR2VD)** — una plataforma con una interfaz intuitiva y bonos para nuevos usuarios.
- **[BingX](https://bingxdao.com/invite/CUBDBG/)** — una plataforma popular para el trading social y el copy trading.

---

## Materiales relacionados

**Conceptos básicos y estrategias:** el estudio de las [Bandas de Bollinger](/es/library/bollinger-bands/), el [RSI (Relative Strength Index)](/es/library/technical-analysis-rsi/) y el [ATR](/es/library/atr-and-atr-percent/) ayudará a comprender mejor los principios de los indicadores de canal.

**Herramientas y automatización:** hay información disponible sobre [cómo configurar un bot en Bybit](/es/library/bybit-trading-bot-setup/) y [qué son los backtests](/es/library/what-are-backtests/).

**Experiencia y riesgos:** es de vital importancia comprender la [gestión de riesgos al trabajar con bots](/es/library/risk-management-crypto-trading-bots/) y monitorizar la [diversificación](/es/library/diversification-trading-system-part-1/).
