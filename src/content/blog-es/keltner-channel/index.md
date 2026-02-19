---
title: 'Canal de Keltner (Keltner Channel)'
description: 'Keltner Channel — indicador de volatilidad basado en EMA y ATR: configuración, zonas de ruptura y uso en estrategias spot como Prisma 5.5.'
pubDate: '2026-02-19'
category: 'technical-analysis'
draft: false
---

**El Canal de Keltner (Keltner Channel)** es un indicador de volatilidad construido alrededor de una Media Móvil Exponencial (EMA) con bandas basadas en el Average True Range (ATR). En los sistemas de trading modernos como Prisma 5.5, se utiliza como filtro de volatilidad y señal de ruptura.

## ¿Qué es el Canal de Keltner?

El indicador fue descrito por primera vez por Chester Keltner en su libro de 1960, "How To Make Money in Commodities". Más tarde fue perfeccionado por Linda Raschke y Robert Colby, quienes sustituyeron la Media Móvil Simple por una Exponencial y utilizaron el ATR para calcular el ancho del canal.

A diferencia de las Bandas de Bollinger, que se expanden y contraen de forma muy brusca, el Canal de Keltner es más "suave", ya que el ATR (rango verdadero promedio) reacciona a la volatilidad de forma menos agresiva que la desviación estándar.

## Estructura del indicador

Un Canal de Keltner clásico consta de tres líneas:
1. **Línea media:** Media Móvil Exponencial (normalmente EMA 20).
2. **Banda superior:** EMA + (Multiplicador * ATR).
3. **Banda inferior:** EMA - (Multiplicador * ATR).

Los ajustes estándar suelen implicar un periodo EMA 20 и un multiplicador de 2.0.

## Señales del Canal de Keltner

### 1. Ruptura y tendencia
Si el precio cierra por encima de la banda superior, suele indicar un fuerte impulso alcista. Si cierra por debajo de la banda inferior, indica un impulso bajista. En tendencias fuertes, el precio puede "cabalgar" a lo largo de los límites del canal durante mucho tiempo.

### 2. Reversión a la media
En un mercado lateral (rango), los límites del canal actúan como niveles de soporte y resistencia. Cuando el precio sale del canal, tiende a volver a la EMA 20.

### 3. Filtro de volatilidad
Un canal que se estrecha indica un mercado tranquilo (acumulación), al que suele seguir un fuerte movimiento de precios.

## Configuración en Prisma 5.5

En la estrategia Prisma 5.5 de la plataforma Veles, los ajustes del Canal de Keltner están optimizados para captar impulsos locales en un marco temporal de 15 minutos:
- **Periodo EMA:** 20
- **Periodo ATR:** 10
- **Multiplicador:** 1.5
- **Marco temporal:** M15

Aquí, el indicador ayuda al bot a determinar si el precio se encuentra dentro de una zona de distribución "normal" o si está comenzando una ruptura volátil adecuada para entrar en una operación.

## Diferencia con las Bandas de Bollinger

| Característica | Canal de Keltner | Bandas de Bollinger |
|---|---|---|
| **Base** | ATR (Average True Range) | Desviación Estándar |
| **Reacción** | Más suave | Brusca, sensible |
| **Línea media** | EMA (Exponencial) | SMA (Simple) |

## Resumen

El Canal de Keltner es una herramienta fiable para quienes buscan un equilibrio entre sensibilidad и estabilidad. Es excelente para estrategias de seguimiento de tendencias y bots automatizados, ayudando a filtrar el ruido del mercado.

**Materiales relacionados:** [Bandas de Bollinger](/es/library/bollinger-bands/), [RSI](/es/library/technical-analysis-rsi/), [Chande Momentum Oscillator](/es/library/chande-momentum-oscillator/), [Gestión de Riesgos](/es/library/risk-management-crypto-trading-bots/).


## Conclusión

El Canal de Keltner es un indicador de volatilidad fiable que proporciona una filtración del ruido de mercado más suave en comparación con las Bandas de Bollinger. El uso de este indicador permite identificar eficazmente los momentos de inicio de una tendencia y encontrar puntos de entrada óptimos dentro de las estrategias algorítmicas.

Existen plataformas verificadas disponibles para comenzar a operar:
- **[Bybit](https://partner.bybit.com/b/marketlab)** — uno de los principales exchanges para trabajar con [bots de trading](/es/library/bybit-trading-bot-setup/).
- **[Bitget](https://partner.bitget.com/bg/marketlab)** — una plataforma con interfaz amigable y bonos para nuevos usuarios.
- **[BingX](https://bingx.com/en-us/partner/MarketLab/)** — una opción popular para social trading y copy trading.

---

## Materiales Relacionados

**Fundamentos y Estrategias:** el estudio de las [Bandas de Bollinger](/es/library/bollinger-bands/), el [RSI](/es/library/rsi/) y la [EMA](/es/library/ema/) ayudará a comprender mejor los principios de los indicadores de canal.

**Herramientas y Automatización:** hay información disponible sobre [cómo configurar un bot en Bybit](/es/library/bybit-trading-bot-setup/) y utilizar la estrategia [Prisma 5.5](/es/library/prisma-5-5-strategy-settings/).

**Experiencia y Riesgos:** es de vital importancia comprender la [gestión de riesgos al trabajar con bots](/es/library/risk-management-crypto-trading-bots/) y vigilar la [diversificación](/es/library/diversification-trading-system-part-1/).
