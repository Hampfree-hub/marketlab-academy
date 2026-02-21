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

El rango de valores del indicador: **de −100 a +100**.

- Los valores por encima de **+50** se consideran zona de sobrecompra.
- Los valores por debajo de **−50** se consideran zona de sobreventa.

La línea central es **0**. El cruce de la marca cero se utiliza a menudo como confirmación de un cambio en la tendencia a corto plazo.

## Fórmula y cálculo

La fórmula del CMO compara la suma de todos los cambios positivos de precio y la suma de todos los cambios negativos para el período seleccionado (normalmente 9 o 14):

$$CMO = \frac{S_{up} - S_{down}}{S_{up} + S_{down}} \times 100$$

Donde:
- **S_up** — suma de cambios positivos del precio de cierre durante N períodos
- **S_down** — suma de cambios negativos del precio de cierre durante N períodos (valor absoluto)

Si todas las velas fueron alcistas, CMO = +100. Si todas bajistas — CMO = −100. Cuanto más cerca esté el valor de cero, más débil es el impulso.

## Señales del indicador

### 1. Valores extremos
Alcanzar los niveles **+50** o **−50** señala una posible detención o reversión de la tendencia. Cuanto más cerca esté el valor de ±100, más fuerte es el impulso y mayor es la probabilidad de corrección.

### 2. Cruce de la línea cero
Cuando el CMO sube por encima de 0 — es una señal alcista (predominan las velas alcistas). Cuando cae por debajo de 0 — bajista (predominan las velas bajistas).

### 3. Divergencia
Una discrepancia entre la dirección del movimiento del precio y del indicador a menudo precede a fuertes movimientos de precios. Si el precio actualiza un mínimo pero el CMO no (divergencia alcista), es una señal de un posible giro al alza.

## CMO vs RSI vs Stochastic

| Característica | CMO | RSI | Stochastic |
|---|---|---|---|
| Rango | −100 … +100 | 0 … 100 | 0 … 100 |
| Suavizado | Ninguno | Doble (exponencial) | A través de media móvil %D |
| Sensibilidad | Alta | Moderada | Alta |
| Zonas extremas | ±50 | 30/70 | 20/80 |
| Mejor para | Impulsos bruscos, filtración | Identificación de tendencia | Rango, búsqueda de giros |

## Configuraciones recomendadas por timeframe

- **M15 (scalping):** período 9 — respuesta rápida a microimpulsos
- **H1 (intraday):** período 14 — configuración estándar, equilibrio entre sensibilidad y ruido
- **H4 (swing):** período 20 — filtración de ruido, trabajo con impulsos más significativos

## Uso en la estrategia ELDER 2.0

En la [estrategia spot ELDER 2.0](/es/library/spot-strategy-elder-20/), el indicador CMO se utiliza como uno de los tres filtros principales:

- **Marco temporal:** dependiendo de la configuración del bot (M15 / H1 / H4).
- **Condición de entrada:** el CMO debe estar por debajo de **−50** (zona de sobreventa profunda) en combinación con señales de las [Bandas de Bollinger](/es/library/bollinger-bands/) y el [Estocástico](/es/library/stochastic-oscillator/).
- **Condición de salida:** el CMO por encima de **+50** (zona de sobrecompra) en combinación con confirmación de otros indicadores.

| Indicador | Rol en ELDER 2.0 |
|---|---|
| Bollinger Bands | Filtro de volatilidad |
| CMO | Filtro de impulso (±50) |
| Stochastic | Disparador de entrada (20/80) |

## Consejos prácticos

- **No uses el CMO de forma aislada:** como cualquier oscilador, da señales falsas en tendencias fuertes. Combínalo con filtros de tendencia.
- **Divergencias en H4 y superiores** — las señales de reversión más confiables.
- **Salida brusca de la zona ±50** puede señalar el inicio de un nuevo impulso, no su finalización — confirma con volumen.

## FAQ

**¿Qué período de CMO es mejor para cripto?**
Para trading a corto plazo — 9 o 14. Para análisis a medio plazo — 20. Cuanto más corto sea el período, más sensible será el indicador al ruido.

**¿Por qué el CMO es mejor que el RSI?**
El CMO no usa doble suavizado, por lo que reacciona más rápido a los cambios de impulso. Esto es importante en las condiciones de alta volatilidad de las criptomonedas.

**¿Se puede usar el CMO para futuros?**
Sí, el CMO funciona en cualquier mercado. Sin embargo, la estrategia ELDER 2.0 está optimizada específicamente para [trading spot](/es/library/what-is-spot-trading/) sin apalancamiento.

## Resumen

El CMO es una herramienta potente para determinar la fuerza de la tendencia y los puntos de agotamiento del movimiento. Su ventaja es la ausencia de «doble suavizado», lo que permite al trader reaccionar más rápidamente a los impulsos del mercado.

Comienza a operar en exchanges probados:

- **[Bybit](https://www.bybit.com/es/invite?ref=PWMD24)** — una excelente opción para trabajar con [bots de trading](/es/library/bybit-trading-bot-setup/)
- **[Bitget](https://www.bitget.com/referral/register?from=referral&clacCode=23EHR2VD)** — interfaz amigable y bonificaciones
- **[BingX](https://bingxdao.com/invite/CUBDBG/)** — trading social y copytrading

---

## Materiales relacionados

**Conceptos básicos y estrategias:** asegúrate de estudiar nuestra estrategia insignia [ELDER 2.0](/es/library/spot-strategy-elder-20/), donde el CMO es un filtro clave. También aprende [cómo comenzar a operar con un depósito pequeño](/es/library/how-to-start-trading-small-deposit/).

**Herramientas y automatización:** utiliza el [Oscilador Estocástico](/es/library/stochastic-oscillator/) y las [Bandas de Bollinger](/es/library/bollinger-bands/) para un análisis integral. Las instrucciones paso a paso sobre [cómo configurar un bot de trading en Bybit](/es/library/bybit-trading-bot-setup/) te ayudarán a automatizar los procesos.

**Experiencia y riesgos:** no olvides la [gestión de riesgos al trabajar con bots](/es/library/risk-management-crypto-trading-bots/) y consulta nuestro [diario de depósito en vivo](/es/library/surviving-drawdown-diary/).

---
Si te interesa esta estrategia y deseas seguir el desarrollo de nuestro proyecto, visita la página [Sobre el Proyecto](/es/about/) — allí hablamos sobre nuestra misión y cómo puedes apoyar nuestra startup.
