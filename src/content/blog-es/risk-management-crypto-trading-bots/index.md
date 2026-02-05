---
title: 'Gestión de riesgo para bots de trading cripto'
description: 'Cómo gestionar riesgo en trading automatizado: tamaño de posición, stop-loss, límites de drawdown, diversificación y configuración segura.'
pubDate: '2026-01-25'
category: 'technical-analysis'
draft: true
---

La gestión de riesgo es la base de la supervivencia en trading — especialmente con bots. Un bot ejecuta exactamente lo que configuras, por lo que el control del riesgo sigue siendo responsabilidad del trader. Este borrador resume reglas prácticas.

## Qué es gestión de riesgo (en trading)

La **gestión de riesgo** es un conjunto de reglas para limitar pérdidas y proteger el capital frente a drawdowns grandes. En cripto, por volatilidad, es imprescindible.

## Reglas base (compatibles con bots)

No seguimos al pie de la letra el “1–2% por operación”: nuestro capital está repartido entre muchos activos y estrategias, así que más parte está “en trabajo”. El riesgo por idea es un poco mayor (~2,5%), pero con diversificación y reglas de salida claras hemos comprobado que el enfoque es al menos igual de seguro y ha ayudado a pasar varias correcciones. En cualquier caso:

1. **Límite de riesgo** por idea/ciclo. Define un máximo de pérdida por idea y no lo superes.
2. **Salida definida:** stop-loss o nivel de invalidación.
3. **Diversificación:** varios activos/estrategias, no todo en un bot.
4. **Límite de drawdown:** pausar bots si se alcanza.
5. **Leverage moderado** (o evitarlo al inicio).

## Ejemplo simple con $100

- $50 buffer (reserva)
- $50 para bots
  - p.ej. 5 bots × $10 para diversificar ejecución

## Checklist de seguridad de API

- permisos mínimos necesarios
- **retiros desactivados**
- restricción por IP si es posible
- rotación periódica de claves

## Backtesting

Antes de operar en real, valida reglas con **[backtesting](/es/library/what-are-backtests)** y luego prueba con tamaño pequeño.

