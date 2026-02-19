---
title: 'Indicador Chande Momentum Oscillator (CMO)'
description: 'CMO: qué es, fórmula, zonas de sobrecompra y sobreventa, señales de compra y venta, relación con la estrategia ELDER.'
pubDate: '2026-02-13'
category: 'technical-analysis'
draft: false
---

**Chande Momentum Oscillator (CMO)** es un indicador técnico, un oscilador de momentum desarrollado por Tushar Chande. A diferencia del RSI o el Estocástico, el CMO mide el momentum directamente, utilizando en sus cálculos los datos sobre la suma de todos los cambios de precio (hacia arriba y hacia abajo) durante un período determinado.

## Qué es el CMO y quién es su autor

El indicador fue presentado por **Tushar Chande**, reconocido analista y autor de libros sobre trading, en 1994. La tarea principal del CMO es determinar el impulso «puro» del movimiento del precio sin suavizado adicional, lo que lo hace más sensible a los cambios bruscos del mercado.

## Cómo funciona el CMO

El rango de valores del indicador: **de -100 a +100**.

- Los valores por encima de **+50** se consideran zona de sobrecompra.
- Los valores por debajo de **-50** se consideran zona de sobreventa.

La línea central es **0**. El cruce de la marca cero se utiliza a menudo como confirmación de un cambio en la tendencia a corto plazo.

## Fórmula y cálculo

La fórmula del CMO compara la suma de todos los cambios positivos de precio ($S_{up}$) y la suma de todos los cambios negativos ($S_{down}$) para el período seleccionado (normalmente 9 o 14):

$$CMO = \frac{S_{up} - S_{down}}{S_{up} + S_{down}} \times 100$$

## Señales del indicador

1. **Valores extremos:** alcanzar los niveles +50 o -50 señala una posible detención o reversión de la tendencia.
2. **Cruce de la línea cero:** cuando el CMO sube por encima de 0, es una señal alcista; cuando cae por debajo de 0, es bajista.
3. **Divergencia:** una discrepancia entre la dirección del movimiento del precio y del indicador a menudo precede a fuertes movimientos de precios.

## Uso en la estrategia ELDER 2.0

En nuestra [estrategia spot ELDER 2.0](/es/library/spot-strategy-elder-20/), el indicador CMO se utiliza como uno de los tres filtros principales:

- **Marco temporal:** M15.
- **Condición de entrada:** el CMO debe estar por debajo de **-50** (zona de sobreventa profunda) en combinación con señales de las Bandas de Bollinger y el Estocástico.

## Resumen

El CMO es una herramienta potente para determinar la fuerza de la tendencia y los puntos de agotamiento del movimiento. Su ventaja es la ausencia de «doble suavizado», lo que permite al trader reaccionar más rápidamente a los impulsos del mercado.

Para el trading automatizado usando CMO y otros indicadores, recomendamos usar plataformas probadas:

- [Bybit](https://www.bybit.com/ru-RU/invite?ref=PWMD24) – una excelente opción para bots de spot.
- [Bitget](https://www.bitget.com/ru/referral/register?from=referral&clacCode=23EHR2VD) – alta liquidez e interfaz amigable.
- [BingX](https://bingxdao.com/invite/CUBDBG/) – soporte para muchos activos.

---

## Materiales relacionados

**Conceptos básicos y estrategias:** estudie nuestra estrategia insignia [ELDER 2.0](/es/library/spot-strategy-elder-20/), donde el CMO es un filtro clave. También aprenda [cómo comenzar a operar con un depósito pequeño](/es/library/how-to-start-trading-small-deposit/).

**Herramientas y automatización:** utilice el [Oscilador Estocástico](/es/library/stochastic-oscillator/) y las [Bandas de Bollinger](/es/library/bollinger-bands/) para un análisis integral. Las instrucciones paso a paso sobre [cómo configurar un bot de trading en Bybit](/es/library/bybit-trading-bot-setup/) le ayudarán a automatizar los procesos.

**Experiencia y riesgos:** no olvide la [gestión de riesgos al trabajar con bots](/es/library/risk-management-crypto-trading-bots/) y consulte nuestro [diario de depósito en vivo](/es/library/surviving-drawdown-diary/).

---

Si le interesa esta estrategia y desea seguir el desarrollo de nuestro proyecto, visite la página [Sobre el Proyecto](/es/about/) — allí hablamos sobre nuestra misión y cómo puede apoyar nuestra startup.
