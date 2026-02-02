---
title: 'Métricas on-chain como parte del análisis fundamental: MVRV, SOPR, reservas en exchanges y flujos de ballenas'
description: 'Cómo usar datos on-chain en el análisis fundamental. MVRV, SOPR, flujos de monedas a y desde exchanges, zonas de liquidación. Para traders intermedios y principiantes — sin simplificar de más.'
pubDate: '2026-01-31'
category: 'fundamental-analysis'
---

El análisis on-chain es trabajar con datos del propio blockchain: transacciones, wallets, flujos de activos. Si el análisis técnico muestra *cómo* se mueve el precio, on-chain explica *por qué* ocurre. Para el trader, las métricas on-chain son parte del análisis fundamental: ayudan a valorar el contexto del ciclo, zonas de sobrecalentamiento o infravaloración y el comportamiento de los grandes jugadores. En este artículo: métricas clave a seguir y cómo no sobrevalorar su papel.

## Por qué el trader usa datos on-chain

El blockchain es un libro público: ahí quedan registrados todos los movimientos, balances y flujos de monedas. El análisis on-chain revela huellas de grandes jugadores, zonas de acumulación y señales que en el gráfico aparecen tarde o no aparecen. No sustituye al análisis técnico sino que lo complementa: ayuda a elegir cuándo entrar o salir, tamaño de posición y nivel de agresividad. On-chain da contexto de ciclo y sentimiento de participantes; los puntos de entrada y salida se siguen buscando por niveles, indicadores y volumen en el gráfico.

## Cinco métricas on-chain para el contexto fundamental

### 1. Flujos de monedas a y desde exchanges

Los grandes movimientos on-chain suelen marcar la dirección del mercado.

- **Monedas entrando a exchanges** — crece la oferta “para vender”; es posible corrección o presión vendedora.
- **Monedas saliendo de exchanges a wallets** — acumulación; los participantes venden menos, la liquidez se “encierra”.

Servicios como Glassnode o CryptoQuant muestran balances y flujos de exchanges. No toda transferencia grande es señal: hay movimientos internos, market makers, arbitraje. Mirar tendencia y volumen, no una sola transacción.

### 2. MVRV (Market Value to Realized Value)

MVRV compara la capitalización de mercado con el valor “realizado” de las monedas (al precio del último movimiento). En esencia: cuánto valora el mercado el activo por encima o por debajo del precio medio de compra.

- **MVRV < 1** — precio de mercado por debajo del “realizado”; muchos mantienen en pérdidas. Suele leerse como infravaloración o capitulación.
- **MVRV > 3–3,5** — fuerte sobrecalentamiento; muchos en beneficio, sube el incentivo a tomar beneficios. El riesgo de corrección es mayor.

MVRV no da un punto exacto de compra/venta pero da contexto: en MVRV < 1 es más sensato buscar setups largos y no cargar cortos; en MVRV > 3 — más cautela al añadir al largo y atento a señales de distribución en el gráfico.

### 3. SOPR (Spent Output Profit Ratio)

SOPR muestra si los participantes venden en beneficio o en pérdida (según el precio medio de los outputs “gastados”).

- **SOPR > 1** — toma de beneficios; muchos vendedores en beneficio, el mercado puede enfriarse.
- **SOPR < 1** — ventas en pérdida; a menudo ligado a capitulación y posible rebote.

Como MVRV, SOPR se usa mejor como filtro de sentimiento, no como único disparador. Combinar con análisis técnico (niveles, volumen, [RSI](/es/library/technical-analysis-rsi/)) da decisiones más sólidas.

### 4. Zonas de riesgo en futuros (liquidaciones)

En mercados de futuros se acumulan posiciones con liquidaciones “colgando” por encima o por debajo. Analizar estas zonas ayuda a valorar el riesgo de movimientos bruscos.

- **Muchos largos cerca de liquidación** — una caída puede desencadenar liquidaciones en cascada y acelerar la bajada.
- **Cortos cerca de liquidación** — una subida puede provocar short squeeze y rebote fuerte al alza.

Datos de liquidaciones hay, por ejemplo, en Coinglass. Útil para dimensionar posición y stop loss, no como sustituto de tu sistema de trading.

### 5. Actividad de grandes holders

Seguir wallets de grandes holders y flujos a nuevos proyectos muestra hacia dónde va el capital. Grandes inversores acumulando un activo — posible señal de interés; salida masiva a un nuevo token — cambio de foco. Esos datos están en Nansen, Arkham y similares. Interpretar con cuidado: las “ballenas” pueden crear pistas falsas o actuar en interés del market making.

## Limitaciones de los datos on-chain

El análisis on-chain es potente pero no perfecto. Una transferencia grande puede ser un movimiento interno o OTC, no una señal de mercado. Los datos a veces van con retraso; métricas agregadas (MVRV, SOPR) suavizan el cuadro. Para reducir riesgo, combina métricas on-chain con [análisis técnico](/es/library/technical-analysis-rsi/) y [volumen](/es/library/money-flow-index/) — así la estrategia depende menos de un solo grupo de señales y es más robusta ante trampas del mercado.

## Cómo integrar on-chain en tu proceso

1. **Recopilar datos** — Glassnode, CryptoQuant, Nansen, Dune Analytics: transacciones, reservas en exchanges, MVRV, SOPR.
2. **Buscar contexto** — infravaloración (MVRV < 1), acumulación (salida de exchanges), riesgo de liquidaciones en futuros.
3. **Vincular con análisis técnico** — p. ej. MVRV < 1 y monedas saliendo de exchanges → buscar setups largos por niveles e indicadores; SOPR > 1 y entrada masiva a exchanges → más cautela con nuevos largos, comprobar señales de distribución.
4. **Comprobar en historia** — si usas [backtests](/es/library/what-are-backtests/), puedes usar condiciones on-chain como filtro de periodos (p. ej. solo ir largo cuando MVRV está por debajo de un umbral).

Los datos on-chain no sustituyen al gráfico ni a los indicadores, sino que ayudan a decidir con más criterio: quién mueve el mercado, dónde se concentra la liquidez y en qué fase del ciclo estás. Junto con análisis fundamental y técnico, on-chain ayuda no solo a seguir tendencias sino a valorar mejor riesgos y oportunidades.

## FAQ

**¿Qué es MVRV en pocas palabras?**  
MVRV (Market Value to Realized Value) compara la capitalización de mercado actual con el valor “realizado” de las monedas (al precio del último movimiento). MVRV < 1 — muchos mantienen en pérdidas, suele leerse como infravaloración; MVRV > 3 — fuerte sobrecalentamiento, mayor riesgo de corrección.

**¿Dónde ver reservas en exchanges y flujos?**  
Servicios como Glassnode, CryptoQuant y similares muestran balances de exchanges y flujos de monedas a y desde exchanges. Datos de liquidaciones en futuros — p. ej. Coinglass.

**¿On-chain sustituye al análisis técnico?**  
No. On-chain complementa al análisis técnico: da contexto de ciclo y sentimiento de participantes. Los puntos de entrada y salida se siguen buscando por niveles, indicadores y volumen en el gráfico.
