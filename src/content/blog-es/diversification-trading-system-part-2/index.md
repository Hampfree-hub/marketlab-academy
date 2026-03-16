---
title: 'Configuración del Sistema. Parte 2'
description: 'Cómo construir y configurar un sistema de trading: reglas de entrada y salida, tamaño de posición, stop-losses, elección y configuración de bots.'
pubDate: '2026-02-24'
category: 'algo-trading'
---

Un sistema de trading es un conjunto de reglas: cuándo entrar y salir, cuánto arriesgar, cómo asignar capital. Sin reglas claras, las decisiones se vuelven emocionales e inconsistentes; con reglas es más fácil mantener la disciplina y evaluar resultados.

En esta parte — cómo construir un sistema básico y alinearlo con la diversificación de [Parte 1](https://marketlab-academy.org/es/library/diversification-trading-system-part-1/). En [Parte 3](https://marketlab-academy.org/es/library/diversification-trading-system-part-3/) — monitoreo, ajuste y errores comunes.

## Qué es un Sistema de Trading

Un sistema de trading son reglas explícitas en lugar de impulsos: cuándo entrar y salir, qué tamaño de posición permitir, dónde establecer stop-losses y take-profits. Sin tales reglas, las decisiones dependen del estado de ánimo y el ruido del mercado; una operación "por instinto" lleva a la siguiente y el resultado es difícil de evaluar. Con reglas puedes probar el sistema en historia ([backtests](https://marketlab-academy.org/es/library/what-are-backtests/)), comparar resultados con expectativas y ajustar parámetros si es necesario.

![Diagrama de flujo del sistema de trading: de la señal al resultado](./assets/trading-system-flowchart.png)
*Fig. 1. Diagrama de flujo del sistema de trading: reglas de entrada, tamaño de posición, stop-loss, salida*

Un sistema básico incluye: criterios de entrada y salida, tamaño de posición y riesgo por operación, elección y configuración de bots en línea con la diversificación por activos y plataformas de [Parte 1](https://marketlab-academy.org/es/library/diversification-trading-system-part-1/).

## Reglas de Entrada y Salida

Los criterios de entrada vienen del análisis técnico o la lógica de la estrategia: por ejemplo, nivel de soporte, señal de indicador o condición DCA/grid. Escríbelos claramente: "entramos en RSI < 30 y rebote desde el nivel," "DCA se activa cada N días en X% de caída de precio." Salida — por objetivos (take-profit) y stop-losses; no mantengas "con esperanza" si la regla ya se activó. Si el stop se activó — cierra según la regla, no "esperemos un rebote"; de lo contrario el riesgo sale de control. Antes de operar en vivo, prueba las reglas en historia — los backtests muestran cómo se habría comportado el sistema en el pasado y qué drawdowns son posibles.

## Tamaño de Posición y Riesgo por Operación

El riesgo por operación es la parte del depósito que estás dispuesto a perder en una operación; de ello dependen el tamaño de la posición y la distancia al stop-loss. Ejemplo: depósito de $1000, riesgo del 1% por operación — $10; con un stop-loss del 5% desde el precio de entrada, el tamaño de la posición no debe llevar a más de $10 de pérdida. Establece un máximo y no lo excedas. Así una mala operación no golpea todo el capital; una racha de pérdidas también está limitada. Muchos recomiendan no más del 1-2% por operación; con fuerte diversificación, un riesgo ligeramente mayor por idea puede ser aceptable si el riesgo general del portafolio está bajo control. Para nuestro enfoque ver [gestión de riesgo en trading cripto](https://marketlab-academy.org/es/library/risk-management-crypto-trading-bots/).

## Elección y Configuración de Bots

DCA y [trading de cuadrícula (grid)](https://marketlab-academy.org/es/library/grid-trading-crypto/) resuelven diferentes tareas: las condiciones de activación y los límites por bot se establecen por separado. DCA promedia la entrada en el tiempo; grid opera en un rango. Para conectarse a un exchange necesitarás claves API y comprensión de los límites de posición — paso a paso en [configuración de un bot en Bybit](https://marketlab-academy.org/es/library/bybit-trading-bot-setup/). No concentres todo el volumen en un bot: la asignación en varias estrategias y pares debe coincidir con la diversificación por activos y plataformas de la Parte 1. Antes del lanzamiento verifica: los límites de posición no exceden tu riesgo por operación y el riesgo general del portafolio.

## Resumen

Sistema = reglas de entrada/salida + tamaño de posición y riesgo + diversificación por activos, estrategias y plataformas. Siguiente — [Parte 3: ajuste para ti y errores comunes](https://marketlab-academy.org/es/library/diversification-trading-system-part-3/).

## FAQ

**¿Cuántas estrategias ejecutar a la vez?**

Comienza con 1-2. Cuando funcionen establemente — agrega más. 3-5 estrategias suele ser suficiente para comenzar.

**¿Cómo determinar el riesgo por operación?**

1-2% del depósito. Con gran diversificación, puedes subir ligeramente, pero el riesgo general del portafolio debe estar controlado.

**¿Necesito probar el sistema en historia?**

Sí, requerido. Los [backtests](https://marketlab-academy.org/es/library/what-are-backtests/) muestran drawdowns y comportamiento pasado del sistema.

**¿Qué gestión de riesgo para bots DCA?**

El riesgo se calcula en toda la posición (incluyendo promedios), no solo la primera entrada. Usualmente 1-2% del depósito.

**¿Puedo ejecutar DCA y grid en el mismo activo?**

Posible, pero difícil de gestionar. Mejor separar: o DCA o grid en un activo.
