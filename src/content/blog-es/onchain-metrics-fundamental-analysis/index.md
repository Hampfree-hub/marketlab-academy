---
title: 'Métricas On-Chain: MVRV, SOPR, Ballenas'
description: 'Cómo usar datos on-chain en análisis fundamental. MVRV, SOPR, flujos de exchanges, zonas de liquidación. Para traders intermedios y principiantes — sin simplificación excesiva.'
pubDate: '2026-03-11'
category: 'fundamental-analysis'
---

El análisis on-chain es trabajar con datos de la blockchain misma: transacciones, carteras, movimientos de activos. Si el análisis técnico muestra *cómo* se mueve el precio, el on-chain explica *por qué* sucede. Para traders, las métricas on-chain son parte del análisis fundamental: ayudan a evaluar contexto de ciclo, zonas de sobrecalentamiento o subvaluación y comportamiento de grandes jugadores. Este artículo cubre métricas clave a rastrear y cómo no sobreestimar su rol.

## Por Qué los Traders Necesitan Datos On-Chain

Blockchain es un libro público: todas las transferencias, saldos y movimientos de monedas están registrados allí. El análisis on-chain revela rastros de grandes jugadores, zonas de acumulación y señales que aparecen en el gráfico con retraso o no aparecen en absoluto. No reemplaza el análisis técnico, pero lo complementa: ayuda a elegir timing de entrada o salida, tamaño de posición y nivel de agresividad. El on-chain establece contexto de ciclo y sentimiento de participantes; los puntos específicos de entrada y salida aún se buscan por niveles, indicadores y volumen en el gráfico.

**Ventajas del análisis on-chain:**
- Transparencia: todos los datos de blockchain pública
- Menos retraso que el gráfico: grandes transferencias visibles inmediatamente
- Contexto: entender quién mueve el mercado (ballenas, retail, exchanges)
- Filtro de señales falsas: AT + on-chain = menos entradas falsas

**Limitaciones:**
- No todas las transacciones son señales (hay transferencias internas, OTC)
- Los datos pueden retrasarse varios bloques
- Métricas agregadas suavizan la imagen
- Requiere interpretación en contexto

## Cinco Métricas On-Chain para Contexto Fundamental

### 1. Flujos de Exchanges (Entradas/Salidas)

Grandes transferencias en blockchain a menudo establecen dirección del mercado.

- **Monedas fluyendo a exchanges** — oferta "para venta" aumenta; corrección o presión de precio posible.
- **Monedas saliendo de exchanges a carteras** — acumulación; participantes menos dispuestos a vender, liquidez "bloqueada."

Servicios como Glassnode o CryptoQuant muestran saldos de exchanges y flujos. No cada transacción grande es señal: hay transferencias internas, market-makers, arbitraje. Mire tendencia y volumen, no transacción individual.

**Ejemplo:** Si 50,000+ BTC salieron de exchanges en una semana, esta es señal de acumulación. Si 30,000+ BTC llegaron — posible presión de precio.

### 2. MVRV (Market Value to Realized Value)

MVRV compara capitalización de mercado con valor "realizado" de monedas (por precio del último movimiento). Esencialmente — cuánto valora el mercado el activo por encima o debajo del precio promedio de adquisición.

- **MVRV < 1** — precio de mercado debajo de "realizado"; muchos manteniendo en pérdida. A menudo interpretado como zona de subvaluación o capitulación.
- **MVRV > 3-3.5** — sobrecalentamiento fuerte; muchos en ganancia, tentación de tomar ganancias crece. Riesgo de corrección mayor.

MVRV no da punto exacto de "compra/venta," pero establece contexto: en zona MVRV < 1 es más sabio buscar setups largos y no sobrecargar short; en MVRV > 3 — más cuidadoso añadiendo a long y atento a signos de distribución en gráfico.

![Gráfico MVRV de Bitcoin con Zonas de Subvaluación y Sobrecalentamiento](./assets/MVRV_Bitcoin.png)

**Datos históricos:**
- Fondo 2018: MVRV ≈ 0.8
- Pico 2021: MVRV ≈ 3.8
- Fondo 2022 (FTX): MVRV ≈ 0.9

### 3. SOPR (Spent Output Profit Ratio)

SOPR muestra si los participantes están vendiendo en ganancia o pérdida (por precio promedio de outputs "gastados").

- **SOPR > 1** — toma de ganancias; muchos vendedores en ganancia, mercado puede enfriarse.
- **SOPR < 1** — ventas en pérdida; a menudo asociado con capitulación y posible rebote.

Como MVRV, SOPR es mejor usarlo como filtro de sentimiento, no único disparador. Combinación con análisis técnico (niveles, volumen, [RSI](/es/library/technical-analysis-rsi/)) da decisiones más estables.

**Variaciones:**
- **aSOPR (adjusted SOPR)** — excluye transacciones menores a 1 hora (ruido)
- **SOPR por grupos** — separado para ballenas (>1000 BTC), tiburones (100-1000 BTC), retail

### 4. Zonas de Riesgo en Futuros (Liquidaciones)

En mercados de futuros, se acumulan posiciones bajo las cuales "cuelgan" liquidaciones. Analizar estas zonas ayuda a evaluar riesgo de movimientos bruscos.

- **Muchas posiciones largas bajo amenaza de liquidación** — en caída de precio, posible liquidación en cascada y aceleración de caída.
- **Shorts al borde de liquidación** — en subida, posible short-squeeze y rebote brusco hacia arriba.

Datos de liquidaciones disponibles, por ejemplo, en Coinglass. Útil considerar al elegir tamaño de posición y stop-losses, no como reemplazo de propio sistema de trading.

**Ejemplo:** Si $500M de liquidaciones de shorts acumulados en nivel $95,000, en breakout above $95,000 posible salto brusco a $98,000-100,000 debido a reacción en cadena de cierres de posiciones.

### 5. Actividad de Grandes Tenedores

Rastrear carteras de grandes tenedores y flujos hacia nuevos proyectos muestra hacia dónde se mueve el capital. Grandes inversores acumulando activo — posible señal de interés; retiro masivo hacia nuevo token — cambio de foco. Tales datos disponibles en Nansen, Arkham y servicios similares. Interpretar con precaución: "ballenas" pueden crear rastros falsos o actuar en intereses de market-making.

**Clasificación de tenedores:**
- **Ballenas:** >1,000 BTC (o equivalente)
- **Tiburones:** 100-1,000 BTC
- **Peces:** 10-100 BTC
- **Retail:** <10 BTC

## Servicios de Análisis On-Chain

![Cómo Funciona el Análisis On-Chain: Diagrama](./assets/How_onchain_analysis_works.png)

**Glassnode:**
- Métricas: MVRV, SOPR, saldos de exchanges, direcciones activas
- Precios: gratis (básico), $29/mes (advanced)
- **Para:** inversores a largo plazo, analistas

**CryptoQuant:**
- Métricas: reservas de exchanges, flujos, ballenas, futuros
- Precios: gratis (básico), $29/mes (pro)
- **Para:** traders, day trading

**Nansen:**
- Métricas: carteras de ballenas, smart money, nuevos tokens
- Precios: $199/mes (premium)
- **Para:** usuarios avanzados, cazadores de alpha

**Arkham Intelligence:**
- Métricas: rastreo de carteras, conexiones entre direcciones
- Precios: gratis (básico), $99/mes (pro)
- **Para:** investigadores, periodistas

**Token Terminal:**
- Métricas: ingresos de protocolos, P/E, usuarios activos
- Precios: gratis (básico), $29/mes (pro)
- **Para:** analistas fundamentales DeFi

## NuNet: Métricas Agregadas para Análisis Rápido

**NuNet** es un agregador de métricas on-chain que simplifica el análisis para traders. En lugar de mirar 10+ métricas por separado, NuNet las combina en indicadores únicos.

**Indicadores clave de NuNet:**

**1. URC (Universal Risk Characteristic):**
- Rango: 0-100
- < 20: zona de acumulación (comprar)
- 20-50: zona neutral
- > 80: zona de sobrecalentamiento (vender)

**2. BTC Power:**
- Muestra dominancia de Bitcoin
- Subiendo → altcoins debilitándose
- Bajando → altcoins creciendo (altseason)

**3. ETH/BTC Ratio:**
- Relación de precio ETH a BTC
- Subiendo → altseason
- Bajando → dominancia BTC

**Ventajas de NuNet:**
- ✅ Ahorro de tiempo (1 métrica en lugar de 10)
- ✅ Menos parálisis por análisis
- ✅ Señales rápidas de entrada/salida

**Desventajas de NuNet:**
- ❌ Menos profundidad de análisis
- ❌ Suscripción paga ($49/mes)
- ❌ Funciona solo para BTC y ETH

**Cómo usar:**
- NuNet para contexto rápido (5 minutos)
- Glassnode/CryptoQuant para análisis profundo (30-60 minutos)

## Métricas para Altcoins: Qué Vigilar

Las altcoins tienen su especificidad. Aquí están las métricas clave:

### 1. TVL (Total Value Locked)

**Qué es:** Valor total de tokens bloqueados en protocolo DeFi.

**Dónde verificar:** DefiLlama, Token Terminal

**Interpretación:**
- TVL subiendo → interés en protocolo creciendo
- TVL bajando → usuarios yéndose

**Ejemplo:**
- Uniswap TVL: $3B → $4B (+33%)
- Conclusión: interés en protocolo creciendo, se puede considerar long token UNI

### 2. Revenue (Ingresos del Protocolo)

**Qué es:** Comisiones generadas por protocolo.

**Dónde verificar:** Token Terminal, DefiLlama

**Interpretación:**
- Ingresos subiendo → protocolo ganando
- Ingresos bajando → interés declining

**P/E Ratio (Price-to-Earnings):**
- Market cap / Ingresos anuales
- P/E < 10: subvaluado
- P/E > 50: sobrevaluado

**Ejemplo:**
- AAVE: Market Cap $1.5B, Ingresos $50M/año
- P/E = 30 (valuación media)

### 3. Direcciones Activas

**Qué es:** Número de direcciones únicas usando protocolo.

**Dónde verificar:** Glassnode, Dune Analytics

**Interpretación:**
- Direcciones subiendo → adopción creciendo
- Direcciones bajando → interés declining

**Ejemplo:**
- Arbitrum: 100,000 → 200,000 direcciones/día (+100%)
- Conclusión: adopción masiva, se puede considerar long ARB

### 4. Token Unlocks

**Qué es:** Calendario de desbloqueos de tokens para equipo, inversores, comunidad.

**Dónde verificar:** TokenUnlocks.app, trackers de vesting

**Interpretación:**
- Desbloqueo grande en 7 días → riesgo de presión de precio
- Sin desbloqueos por 3+ meses → seguro

**Ejemplo:**
- Aptos: 11.1M tokens desbloqueados 15 de octubre
- Precio: -20% en semana después de desbloqueo

## Ejemplos Prácticos: Cómo Usar On-Chain en Trading

### Ejemplo 1: Comprando en el Fondo (Noviembre 2022)

**Situación:** Colapso de FTX, pánico en mercado.

**Señales on-chain:**
- MVRV: 0.95 (< 1, zona de capitulación) ✅
- SOPR: 0.85 (< 1, pérdidas masivas) ✅
- Reservas de exchanges: +200,000 BTC por semana (pánico) ❌
- Actividad de ballenas: salida de exchanges 50,000 BTC ✅

**Decisión:**
- 3 de 4 señales indican fondo
- Entrada: $16,000-17,000
- Stop-loss: $15,000
- Take-profit: $25,000 (50%+)

**Resultado:**
- Fondo: $15,500 (noviembre 2022)
- 3 meses después: $30,000 (+93%)

### Ejemplo 2: Vendiendo en el Pico (Noviembre 2021)

**Situación:** BTC actualiza máximo histórico.

**Señales on-chain:**
- MVRV: 3.8 (> 3, zona de sobrecalentamiento) ❌
- SOPR: 1.5 (> 1, toma de ganancias masiva) ❌
- Reservas de exchanges: +100,000 BTC en 2 semanas (ballenas vendiendo) ❌
- Actividad de ballenas: salida masiva a stablecoins ❌

**Decisión:**
- 4 de 4 señales indican sobrecalentamiento
- Tomar ganancias: $65,000-69,000
- Mover a stablecoins (USDT, USDC)

**Resultado:**
- Pico: $69,000 (noviembre 2021)
- 12 meses después: $15,500 (-77%)

### Ejemplo 3: Altseason (2024)

**Situación:** BTC subiendo, dominancia bajando.

**Señales on-chain:**
- BTC Power: bajando de 55% a 45% ✅
- ETH/BTC Ratio: subiendo de 0.05 a 0.08 ✅
- TVL de altcoins: +50% por mes ✅
- Direcciones activas de altcoins: +100% ✅

**Decisión:**
- Rotación de BTC a altcoins
- Comprar: ETH, SOL, AVAX, ARB
- Stop-loss: -15%
- Take-profit: +50-100%

**Resultado:**
- ETH: +80% en 2 meses
- SOL: +150% en 2 meses
- ARB: +200% en 2 meses

## Limitaciones del Análisis On-Chain

**Importante entender:**

1. **No todas las transacciones son señales**
   - Transferencias internas entre carteras
   - Operaciones OTC (fuera de exchanges)
   - Market-making

2. **Los datos pueden retrasarse**
   - MVRV, SOPR: 1-2 días de retraso
   - Reservas de exchanges: tiempo real, pero no todos los exchanges transparentes

3. **Las métricas agregadas suavizan la imagen**
   - MVRV para toda la red ≠ MVRV para ballenas
   - Mire métricas por grupos de tenedores

4. **Manipulaciones posibles**
   - Ballenas pueden crear rastros falsos
   - Transferencias masivas a exchanges ≠ siempre venta

**Cómo reducir riesgos:**
- Combinar 3+ métricas (no depender de una)
- Usar con análisis técnico (niveles, volumen)
- Verificar contexto (noticias, narrativas)
- Vigilar tendencia a largo plazo (no entrar en pánico por señal única)

## Resumen

El análisis on-chain es herramienta poderosa para entender contexto de mercado y comportamiento de grandes jugadores. Combínelo con análisis técnico para imagen completa.

**Conclusiones clave:**
- On-chain muestra "por qué" se mueve el precio, AT muestra "cómo"
- Métricas clave: MVRV, SOPR, flujos de exchanges, actividad de ballenas
- Use NuNet para contexto rápido, Glassnode para análisis profundo
- Combine 3+ métricas para confirmación
- No dependa únicamente de on-chain para entrada/salida

Más sobre tokenomics: [Qué es Tokenomics](/es/library/what-is-tokenomics/).

## FAQ

**¿Qué son las métricas on-chain?**

Datos de la blockchain misma: transacciones, saldos de carteras, flujos de exchanges, actividad de tenedores. Muestran qué están haciendo los participantes dentro de la red.

**¿Dónde verificar métricas on-chain?**

- Glassnode: MVRV, SOPR, saldos de exchanges
- CryptoQuant: reservas de exchanges, flujos, ballenas
- Nansen: carteras de ballenas, smart money
- TokenUnlocks: calendarios de desbloqueo de tokens
- DefiLlama: TVL para protocolos DeFi

**¿Cómo interpretar MVRV?**

- MVRV < 1: subvaluación (muchos en pérdida) — considerar comprar
- MVRV 1-2: zona neutral
- MVRV > 3: sobrecalentamiento (muchos en ganancia) — considerar tomar ganancias

**¿Qué indican los flujos de exchanges?**

- Salida de exchanges: acumulación (alcista)
- Entrada a exchanges: posible venta (bajista)
- Mire tendencia, no transacción individual

**¿Puedo operar solo con on-chain?**

No. On-chain no da puntos exactos de entrada. Use con análisis técnico: on-chain para contexto, AT para timing.

**¿Con qué frecuencia verificar métricas on-chain?**

- Activos Top-10: una vez por semana
- Activos Top-100: una vez cada 2 semanas
- Antes de eventos importantes: siempre verificar (desbloqueos, upgrades, regulaciones)

**¿Qué es SOPR?**

Spent Output Profit Ratio — muestra si los vendedores están en ganancia o pérdida. SOPR > 1: toma de ganancias, SOPR < 1: ventas en pérdida (capitulación).

**¿Son confiables las señales de movimientos de ballenas?**

No siempre. Las ballenas pueden crear rastros falsos o actuar en intereses de market-making. Combine con otras métricas y contexto.

**¿Qué es NuNet?**

Agregador de métricas on-chain que combina múltiples métricas en indicadores únicos (URC, BTC Power, ETH/BTC Ratio). Bueno para contexto rápido, menos profundidad que métricas individuales.

**¿Cómo usar on-chain para altcoins?**

Vigile TVL (DefiLlama), ingresos (Token Terminal), direcciones activas (Glassnode), desbloqueos de tokens (TokenUnlocks.app). Combine con dominancia de BTC y ratio ETH/BTC para timing de altseason.
