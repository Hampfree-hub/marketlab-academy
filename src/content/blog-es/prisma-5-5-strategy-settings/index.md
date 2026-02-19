---
title: 'Prisma 5.5: Configuración de la Estrategia en la Plataforma Veles'
description: 'Analizamos la configuración de la estrategia propia Prisma 5.5 en la plataforma Veles: indicadores de entrada, filtros, gestión de la cuadrícula de órdenes y recomendaciones de pares.'
pubDate: '2026-02-19'
category: 'algo-trading'
draft: true
---

**Prisma 5.5** es una estrategia propia de la plataforma [Veles](https://veles.finance/invite/washmallay) para el trading automatizado. En este artículo presentamos un desglose completo de la configuración: qué indicadores se utilizan para la entrada, cómo configurar la cuadrícula de órdenes y en qué pares ejecutarla.

**Importante:** Antes de utilizar cualquier estrategia, familiarícese con la [gestión de riesgos](/es/library/risk-management-crypto-trading-bots/) y la serie [Diversification y Configuración del Sistema de Trading](/es/library/diversification-trading-system-part-1/).

## ¿Qué es Prisma 5.5?

Prisma 5.5 es una estrategia de trading de alta frecuencia diseñada para el volátil mercado cripto. Combina filtros de tendencia и osciladores para encontrar puntos de entrada óptimos para posiciones Long.

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

Para abrir una posición en Prisma 5.5 se используют los siguientes indicadores:

1. **CCI (Commodity Channel Index)**
   * • Período: 14
   * • Nivel: -100
   * • Condición: CCI menor que -100 (zona de sobreventa)

2. **Bollinger Bands**
   * • Período: 20, Desviación: 2
   * • Condición: El precio toca o está por debajo de la banda inferior

3. **RSI (Relative Strength Index)**
   * • Período: 14
   * • Nivel: 30
   * • Condición: RSI menor que 30

### Gestión de la Cuadrícula de Órdenes

La cuadrícula se configura teniendo en cuenta la volatilidad actual:
* • **Paso de órdenes:** logarítmico, comenzando desde 0.5%
* • **Coeficiente de martingala:** permite volver a beneficios más rápidamente durante las reversiones de precio.

## Pares Recomendados

Se recomienda utilizar pares líquidos con alto volumen de trading:
* • **TOP-10:** BTC/USDT, ETH/USDT, SOL/USDT.
* • **Alcoins Volátiles:** ARB/USDT, OP/USDT, LINK/USDT.

## Cómo Iniciar Prisma 5.5 en Veles

1. Regístrese en [Veles](https://veles.finance/invite/washmallay) и vincule su clave API del exchange.
2. Vaya a la sección **"Bots listos"** и filtre por autor o el nombre Prisma 5.5.
3. Haga clic en **"Copiar"**, seleccione un par de trading и especifique el depósito asignado.
4. Verifique los parámetros con el botón "Calcular" и haga clic en **"Iniciar"**.

## Conclusión

Prisma 5.5 es una estrategia equilibrada para quienes desean automatizar el trading spot o de futuros con un riesgo moderado. Supervise siempre su nivel de margen и no olvide la diversificación.

---

Если вам интересна эта стратегия и вы хотите следить за развитием нашего проекта, загляните на страницу [Sobre el proyecto](/es/about/) — там мы рассказываем о нашей миссии и о том, как можно поддержать стартап.
