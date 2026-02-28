---
title: 'La famosa estrategia spot ELDER 2.0 con configuración'
description: 'Estrategia ELDER 2.0 probada con promediación: configuraciones de Stochastic, Bollinger, CMO para bots de spot en el mercado cripto.'
pubDate: '2026-02-28'
category: 'algo-trading'
---

**La estrategia spot ELDER 2.0** es un sistema de trading automatizado en el mercado spot con promediación de posiciones, basado en tres indicadores clave. La estrategia ha demostrado su eficacia a lo largo de años de uso práctico en el trading algorítmico.

## ¿Por qué elegir ELDER 2.0?

Esta estrategia fue desarrollada para trabajar en el [mercado spot](/es/library/what-is-spot-trading/), donde no existe el riesgo de liquidación. La idea central es entrar en la posición en pequeñas partes cuando aparecen señales de sobrecompra/sobreventa y promediar durante las caídas de precio.

**Ventajas del enfoque:**

- Trabajo sin apalancamiento — sin riesgo de liquidación
- Promediación de posiciones en lugar de stop-loss
- Automatización a través de [bots de trading en exchanges](/es/library/bybit-trading-bot-setup/)
- Eficacia confirmada en diversas condiciones de mercado

## Los tres pilares de la estrategia ELDER 2.0

### 1. Stochastic Oscillator — señal principal

**Función:** Determinación de zonas de sobrecompra y sobreventa para los puntos de entrada. Lee más sobre el funcionamiento del [indicador Stochastic](/es/library/stochastic-oscillator/) en un artículo dedicado.

**Configuración:** 14, 3, 3. Zona de sobreventa: 20, Zona de sobrecompra: 80.

### 2. Bollinger Bands — filtro de volatilidad

**Función:** Confirmación de señales en momentos de expansión del precio. Aprende más sobre las [Bandas de Bollinger y su aplicación](/es/library/bollinger-bands/).

**Configuración:** Período 20, Desviación 2.0.

### 3. CMO (Chande Momentum Oscillator) — filtro de impulso

**Función:** Filtrado de señales falsas. Un análisis detallado del [indicador CMO](/es/library/chande-momentum-oscillator/) ayudará a entender mejor su rol.

**Configuración:** Período 14, Zona de filtrado: de −50 a +50.

## Algoritmo de funcionamiento de la estrategia

### Señal de entrada (apertura/promediación)

Entramos en la operación cuando se cumplen **simultáneamente**:

1. Stochastic < 20
2. El precio toca o está por debajo de la banda inferior de Bollinger
3. CMO < −50

### Señal de salida (toma de ganancias)

Cerramos la posición cuando:

1. Stochastic > 80
2. El precio toca o está por encima de la banda superior de Bollinger
3. CMO > +50
4. La ganancia desde el precio promedio de entrada es ≥ 3–5%

## Gestión de capital

### Distribución del depósito

- **Orden base:** 5% del depósito
- **Órdenes de promediación:** del 5% al 15% según la profundidad de la caída
- **Número máximo de promediaciones:** 4–6 órdenes
- **Reserva:** 20–30% del depósito

### Pasos de promediación

Intervalos recomendados:
- 1ª promediación: −5% desde la entrada base
- 2ª promediación: −10%
- 3ª promediación: −15%
- 4ª promediación: −20%

## Marcos de tiempo y activos recomendados

- **Timeframe:** 4 horas (4H) — óptimo. 1 hora (1H) — más agresivo.
- **Activos:** BTC, ETH, y monedas del TOP-20 por capitalización.

## Backtests ELDER 2.0

![Backtest anual ELDER 2.0 BB SPOT LONG INJ](./assets/inj-elder-strategy.png)

[ELDER 2.0 BB SPOT LONG INJ](https://veles.finance/share/QyjWG)

![Backtest anual ELDER 2.0 BB SPOT LONG HYPE](./assets/hype-elder-strategy.png)

[ELDER 2.0 BB SPOT LONG HYPE](https://veles.finance/share/8yj24)

## Configuración en exchanges

La estrategia puede ejecutarse en exchanges populares con bots de trading:

- **[Bybit](https://www.bybit.com/es/invite?ref=PWMD24)** — bots listos para usar y comisiones bajas. La instrucción para [configurar un bot de trading en Bybit](/es/library/bybit-trading-bot-setup/) te ayudará a empezar.
- **[Bitget](https://www.bitget.com/referral/register?from=referral&clacCode=23EHR2VD)** — amplia selección de estrategias de copytrading.
- **[BingX](https://bingxdao.com/invite/CUBDBG/)** — interfaz sencilla para principiantes.

## Conclusión

La estrategia spot ELDER 2.0 es un enfoque fundamental para operar en el mercado cripto. La ausencia de riesgo de liquidación la convierte en la opción ideal para la automatización. Recuerda la [gestión de riesgos](/es/library/risk-management-crypto-trading-bots/) y opera siempre con fondos que puedas permitirte perder.

## Materiales relacionados

**Fundamentos y estrategias:** Asegúrate de estudiar [qué es el trading spot](/es/library/what-is-spot-trading/) y las [diferencias entre spot, futures y margen](/es/library/spot-trading-vs-futures-margin/). También descubre [cómo empezar el trading con una pequeña cantidad](/es/library/how-to-start-trading-small-deposit/).

**Herramientas y experiencia:** Profundiza tus conocimientos sobre los indicadores: [Stochastic Oscillator](/es/library/stochastic-oscillator/), [Bollinger Bands](/es/library/bollinger-bands/) y [CMO](/es/library/chande-momentum-oscillator/). Mira nuestro [diario de depósito en vivo](/es/library/surviving-drawdown-diary/) y estudia los principios de [gestión de riesgos](/es/library/risk-management-crypto-trading-bots/).

---
Si estás interesado en esta estrategia y quieres seguir el desarrollo de nuestro proyecto, echa un vistazo a la página [Sobre el proyecto](/es/about/) — allí hablamos de nuestra misión y de cómo puedes apoyar a la startup.
