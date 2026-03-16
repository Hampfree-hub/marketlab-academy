---
title: 'Prisma 5.5: Configuración de la Estrategia en la Plataforma Veles'
description: 'Analizamos la configuración de la estrategia propia Prisma 5.5 en la plataforma Veles: indicadores de entrada, filtros, gestión de la cuadrícula de órdenes y recomendaciones de pares.'
pubDate: '2026-02-28'
category: 'algo-trading'
---

**Prisma 5.5** es una estrategia propia de la plataforma [Veles](https://veles.finance/invite/washmallay) para el trading automatizado. En este artículo presentamos un desglose completo de la configuración: qué indicadores se utilizan para la entrada, cómo configurar la cuadrícula de órdenes y en qué pares ejecutarla.

**Importante:** Antes de utilizar cualquier estrategia, familiarícese con la [gestión de riesgos](https://marketlab-academy.org/es/library/risk-management-crypto-trading-bots/) y la serie [Diversificación y Configuración del Sistema de Trading](https://marketlab-academy.org/es/library/diversification-trading-system-part-1/).

## ¿Qué es Prisma 5.5?

Prisma 5.5 es una estrategia de trading de alta frecuencia diseñada para el volátil mercado cripto. Combina filtros de tendencia y osciladores para encontrar puntos de entrada óptimos para posiciones Long.

## Configuración de la Estrategia

Cabe señalar que los parámetros, al igual que la configuración de otras estrategias de Marketlab, son bastante flexibles y pueden ajustarse según su gestión de riesgos.

### Indicadores de Entrada (Filtros)

Para abrir una posición en Prisma 5.5 se utilizan los siguientes indicadores:

1. **[CMO (Chande Momentum Oscillator)](https://marketlab-academy.org/es/library/chande-momentum-oscillator/)**
   • Período: 14
   • Niveles: ±50
   - Condición: CMO por debajo de −50 (zona de sobreventa) antes de entrar en Long, por encima de +50 — impulso al alza (zona de sobreventa)

2. **[Bollinger Bands](https://marketlab-academy.org/es/library/bollinger-bands/)**
   - Período: 20, Desviación: 2
   - Condición: El precio toca o está por debajo de la banda inferior

3. **[RSI (Relative Strength Index)](https://marketlab-academy.org/es/library/technical-analysis-rsi/)**
   - Período: 14
   - Nivel: 30
   - Condición: RSI menor que 30

### Gestión de la Cuadrícula de Órdenes

La cuadrícula se configura teniendo en cuenta la volatilidad actual. El paso de órdenes es estándar para la mayoría de estrategias, pero puede ajustarse según su estilo de trading. El coeficiente de martingala permite un retorno más rápido a las ganancias durante las reversiones de precios.

## En Qué Pares Lanzar

Se recomienda usar pares líquidos con alto volumen de operaciones:
- **TOP-10:** BTC/USDT, ETH/USDT, SOL/USDT.
- **Altcoins volátiles:** ARB/USDT, OP/USDT, LINK/USDT.

## Backtests Prisma 5.5

![Backtest anual BINGX KAS PRISMA 5.5](./assets/kas-prisma-strategy.png)

[✖️ 🌪 BINGX KAS PRISMA 5.5](https://veles.finance/share/Vsyhz)

![Backtest anual BINGX UNI PRISMA 5.5](./assets/uni-prisma-strategy.png)

[✖️ 🌪 BINGX UNI PRISMA 5.5](https://veles.finance/share/zslhm)

## Resumen

Prisma 5.5 es una estrategia equilibrada para automatizar el trading en spot y futuros con un nivel de riesgo moderado. Es fundamental controlar los niveles de margen y cumplir con las reglas de diversificación para garantizar la estabilidad del sistema de trading.

Existen plataformas verificadas disponibles para comenzar a operar:
- **Bybit** — uno de los principales exchanges para trabajar con [bots de trading](https://marketlab-academy.org/es/library/bybit-trading-bot-setup/).
- **[Bitget](https://www.bitget.com/referral/register?from=referral&clacCode=23EHR2VD)** — una plataforma con interfaz amigable y bonos para nuevos usuarios.
- **BingX** — una opción popular para social trading y copy trading.

---

## FAQ

**¿Qué depósito se necesita para Prisma 5.5?**

El mínimo recomendado es $10-20. Para riesgo moderado, $1000–2000 por par es mejor. No inviertas todo tu depósito — diversifica entre varias estrategias.

**¿En qué pares funciona mejor la estrategia?**

Pares líquidos TOP-10 (BTC, ETH, SOL) tienen menos deslizamiento. Altcoins volátiles (ARB, OP, LINK) — mayores rendimientos, pero también mayores riesgos.

**¿Necesito monitorear el bot después de iniciarlo?**

Sí. Aunque la estrategia es automatizada, necesitas monitorear los niveles de margen, drawdowns y situaciones de emergencia del mercado. Verifica posiciones una vez al día.

**¿Por qué la estrategia es solo Long?**

Prisma 5.5 usa osciladores para entrar en zonas de sobreventa — esto solo funciona para rebotes hacia arriba. La versión Short requiere indicadores diferentes.

**¿Cuánto se puede ganar con Prisma 5.5?**

Según backtests — 100–300% anuales. Los rendimientos reales dependen del mercado, configuración y gestión de riesgos. Esperar drawdowns de 20–40%.

---

