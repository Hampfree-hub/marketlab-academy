---
title: 'Prisma 5.5: Configuración de la Estrategia en la Plataforma Veles'
description: 'Analizamos la configuración de la estrategia propia Prisma 5.5 en la plataforma Veles: indicadores de entrada, filtros, gestión de la cuadrícula de órdenes y recomendaciones de pares.'
pubDate: '2026-02-28'
category: 'algo-trading'
---

**Prisma 5.5** es una estrategia propia de la plataforma [Veles](https://veles.finance/invite/washmallay) para el trading automatizado. En este artículo presentamos un desglose completo de la configuración: qué indicadores se utilizan para la entrada, cómo configurar la cuadrícula de órdenes y en qué pares ejecutarla.

**Importante:** Antes de utilizar cualquier estrategia, familiarícese con la [gestión de riesgos](/es/library/risk-management-crypto-trading-bots/) y la serie [Diversificación y Configuración del Sistema de Trading](/es/library/diversification-trading-system-part-1/).

## ¿Qué es Prisma 5.5?

Prisma 5.5 es una estrategia de trading de alta frecuencia diseñada para el volátil mercado cripto. Combina filtros de tendencia y osciladores para encontrar puntos de entrada óptimos para posiciones Long.

## Configuración de la Estrategia

### Parámetros Principales

| Parámetro | Valor |
|---|---|
| Dirección | Long |
| Exchange | Bybit / BingX / Bitget |
| Cuadrícula de órdenes | 25-30 órdenes |
| Cobertura | 15-20% |
| Desplazamiento de la 1ª orden | 0.2% |
| Martingala | 1.05 - 1.1 |

### Indicadores de Entrada (Filtros)

Para abrir una posición en Prisma 5.5 se utilizan los siguientes indicadores:

1. **[CMO (Chande Momentum Oscillator)](/es/library/chande-momentum-oscillator/)**
   • Período: 14
   • Niveles: ±50
   - Condición: CMO por debajo de −50 (zona de sobreventa) antes de entrar en Long, por encima de +50 — impulso al alza (zona de sobreventa)

2. **Bollinger Bands**
   - Período: 20, Desviación: 2
   - Condición: El precio toca o está por debajo de la banda inferior

3. **RSI (Relative Strength Index)**
   - Período: 14
   - Nivel: 30
   - Condición: RSI menor que 30

### Gestión de la Cuadrícula de Órdenes

La cuadrícula se configura teniendo en cuenta la volatilidad actual:
- **Paso de orden:** logarítmico, comenzando desde 0.5%
- **Coeficiente Martingala:** permite un retorno más rápido a las ganancias durante las reversiones de precios.

## En Qué Pares Lanzar

Se recomienda usar pares líquidos con alto volumen de operaciones:
- **TOP-10:** BTC/USDT, ETH/USDT, SOL/USDT.
- **Altcoins volátiles:** ARB/USDT, OP/USDT, LINK/USDT.

## Backtests Prisma 5.5

![Backtest anual BINGX KAS PRISMA 5.5](./assets/kas-prisma-strategy.png)

[✖️ 🌪 BINGX KAS PRISMA 5.5](https://veles.finance/share/Vsyhz)

![Backtest anual BINGX UNI PRISMA 5.5](./assets/uni-prisma-strategy.png)

[✖️ 🌪 BINGX UNI PRISMA 5.5](https://veles.finance/share/zslhm)

## Conclusión

Prisma 5.5 es una estrategia equilibrada para automatizar el trading en spot y futuros con un nivel de riesgo moderado. Es fundamental controlar los niveles de margen y cumplir con las reglas de diversificación para garantizar la estabilidad del sistema de trading.

Existen plataformas verificadas disponibles para comenzar a operar:
- **[Bybit](https://www.bybit.com/invite?ref=PWMD24)** — uno de los principales exchanges para trabajar con [bots de trading](/es/library/bybit-trading-bot-setup/).
- **[Bitget](https://www.bitget.com/referral/register?from=referral&clacCode=23EHR2VD)** — una plataforma con interfaz amigable y bonos para nuevos usuarios.
- **[BingX](https://bingxdao.com/invite/CUBDBG/)** — una opción popular para social trading y copy trading.

---

## Materiales Relacionados

**Fundamentos y Estrategias:** Prisma 5.5 es un nivel avanzado. Para principiantes, se recomienda comenzar con el [trading de spot](/es/library/what-is-spot-trading/) y la [estrategia básica ELDER 2.0](/es/library/spot-strategy-elder-20/).

**Herramientas y Automatización:** hay información disponible sobre [cómo funcionan los backtests](/es/library/what-are-backtests/) y cómo [configurar un bot en Bybit](/es/library/bybit-trading-bot-setup/). También se recomienda estudiar la [estrategia DCA](/es/library/dca-strategy-crypto/).

**Experiencia y Riesgos:** es de vital importancia comprender la [gestión de riesgos al trabajar con bots](/es/library/risk-management-crypto-trading-bots/) y vigilar la [diversificación](/es/library/diversification-trading-system-part-1/).
