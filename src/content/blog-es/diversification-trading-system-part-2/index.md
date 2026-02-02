---
title: 'Diversificación y configuración del sistema de trading. Parte 2: Cómo construir el sistema'
description: 'Cómo construir y configurar un sistema de trading: reglas de entrada y salida, tamaño de posición, stop loss, elección y configuración de bots.'
pubDate: '2026-02-02'
category: 'algo-trading'
---

Un sistema de trading es un conjunto de reglas: cuándo entrar y salir, cuánto arriesgar, cómo repartir el capital. Sin reglas claras las decisiones se vuelven emocionales e inconsistentes; con reglas es más fácil mantener disciplina y evaluar resultados.

En esta parte — cómo construir un sistema básico y alinearlo con la diversificación de la [Parte 1](/es/library/diversification-trading-system-part-1/). En la [Parte 3](/es/library/diversification-trading-system-part-3/) — supervisión, ajustes y errores típicos.

## Qué es un sistema de trading

Un sistema de trading son reglas explícitas en lugar de impulsos: cuándo entrar y salir, qué tamaño de posición permitir, dónde poner stop loss y take profit. Sin esas reglas las decisiones dependen del ánimo y el ruido del mercado; una operación “a sensación” arrastra a la siguiente y el resultado es difícil de evaluar. Con reglas puedes probar el sistema en historia ([backtests](/es/library/what-are-backtests/)), comparar con lo esperado y ajustar parámetros si hace falta. Un sistema básico incluye: criterios de entrada y salida, tamaño de posición y riesgo por operación, elección y configuración de bots según la diversificación por activos y plataformas de la [Parte 1](/es/library/diversification-trading-system-part-1/).

## Reglas de entrada y salida

Los criterios de entrada vienen del análisis técnico o la lógica de la estrategia: p. ej. nivel de soporte, señal de indicador o condición DCA/grid. Conviene escribirlos claro: “entramos con RSI < 30 y rebote del nivel”, “DCA se activa cada N días con caída de precio del X %”. Salida — por objetivos (take profit) y stop loss; no mantener “esperando” si la regla ya se cumplió. Si el stop se activa — cerrar por la regla, no “esperar el rebote”; si no, el riesgo se descontrola. Antes de ir en vivo, probar las reglas en historia — los backtests muestran cómo se habría comportado el sistema y qué drawdowns son posibles.

## Tamaño de posición y riesgo por operación

El riesgo por operación es la parte del depósito que estás dispuesto a perder en una operación; de ahí dependen el tamaño de posición y la distancia al stop loss. Ejemplo: depósito 1000 $, riesgo por operación 1 % — 10 $; con stop del 5 % respecto al precio de entrada, el tamaño de posición no debe implicar pérdida mayor de 10 $. Conviene fijar un máximo (p. ej. no más del 1–2 % del depósito por operación) y no superarlo. Así una operación mala no golpea todo el capital; una racha de pérdidas también queda limitada. Más sobre protección del capital en [gestión del riesgo en trading cripto](/es/library/risk-management-crypto-trading-bots/).

## Elección y configuración de bots

DCA y [trading en grid](/es/library/grid-trading-crypto/) resuelven tareas distintas: condiciones de activación y límites por bot se configuran por separado. DCA promedia la entrada en el tiempo; grid opera en rango. Para conectar con un exchange harán falta API keys y entender los límites de posiciones — paso a paso en [configuración del bot en Bybit](/es/library/bybit-trading-bot-setup/). No concentres todo el volumen en un bot: la repartición entre varias estrategias y pares debe cuadrar con la diversificación por activos y plataformas de la Parte 1. Antes de lanzar comprobar: los límites de posiciones no superan tu riesgo por operación ni el riesgo global del portafolio.

## Conclusión

Sistema = reglas de entrada/salida + tamaño de posición y riesgo + diversificación por activos, estrategias y plataformas. Siguiente — [Parte 3: ajustar a ti y errores típicos](/es/library/diversification-trading-system-part-3/).
