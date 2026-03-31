---
title: 'Veles: Plataforma de Automatización de Trading de Criptomonedas'
description: 'Veles Finance — plataforma cloud de algo trading desde $10. Bots Grid, DCA, backtests, estrategias. Comisión 20%, 7 exchanges, app Android/iOS.'
pubDate: '2026-03-10'
category: 'algo-trading'
---

**Veles** — plataforma en la nube para automatización de trading de criptomonedas. Permite crear bots de trading sin programar, probar estrategias en histórico y ejecutarlas 24/7. Si recién comienzas con automatización, recomendamos leer nuestra [introducción al algo trading](/es/library/algorithmic-trading-intro/) primero.

**Para quién:** Traders con pequeño capital (desde $10) que quieren automatizar trading sin aprender programación.

## Qué es Veles

**Veles Finance** es una plataforma SaaS (Software as a Service) para automatización de trading de criptomonedas. No necesitas instalar software, configurar servidores ni escribir código — todo funciona en la nube.

**Idea principal:** Hacer el algo trading accesible para traders con cualquier capital desde $10.

### Funciones Clave

1. **Bots Grid** — rejilla de órdenes de compra/venta en rango especificado
2. **Bots DCA** — promediado de posición en movimiento de precio
3. **Bots de Futuros** — trading con apalancamiento (long/short)
4. **Backtests** — simulador de trading en datos históricos
5. **Estrategias listas** — biblioteca de configuraciones de la comunidad, escaparate de bots listos
6. **Bot de Telegram** — notificaciones y monitoreo

### Exchanges Soportados

| Exchange | Spot | Futuros | Estado |
|----------|------|---------|--------|
| **Bybit** | ✅ | ✅ | Integración oficial |
| **Binance** | ✅ | ✅ | Soporte completo |
| **OKX** | ✅ | ✅ | Soporte completo |
| **Bitget** | ✅ | ✅ | Soporte completo |
| **HTX (Huobi)** | ✅ | ✅ | Soporte completo |
| **Gate.io** | ✅ | ✅ | Soporte completo |
| **BingX** | ✅ | ✅ | Soporte completo |

![Dashboard Veles](./assets/veles-dashboard.png)

**Importante:** Veles no almacena fondos — las operaciones van directamente a tu exchange vía claves API.

## Cómo Funciona Veles

### Arquitectura

```
Tú → Veles (nube) → Exchange (API) → Ejecución de órdenes
       ↓
   Backtests, estadísticas, notificaciones
```

1. **[Registro](https://veles.finance/invite/washmallay?utm_source=marketlab-blog&utm_medium=article-link&utm_campaign=veles-platform-overview):** Crear cuenta en Veles *(enlace de afiliado)*
2. **Conexión del exchange:** Añadir claves API (¡solo trading, sin retiro!)
3. **Configuración del bot:** Elegir tipo de bot, estrategia, parámetros
4. **Inicio:** El bot comienza a operar 24/7
5. **Monitoreo:** Seguir vía interfaz web o bot de Telegram

![Conectando Exchange Veles](./assets/connecting-the-exchange.png)

### Conexión de Claves API

**Requisitos para Claves API:**

1. **Permisos:**
   - **Spot:** Trading en mercado spot
   - **Futuros:** Trading de futuros
   - **Retiro:** ❌ NO necesario (¡deshabilitar!)

2. **Seguridad:**
   - Guardar clave secreta al crear (¡se muestra solo una vez!)
   - Usar IPs de confianza de Veles (si el exchange lo requiere)
   - Elegir aplicación "Veles" al crear clave (acceso de por vida)

3. **IPs de Veles:**
   ```
   5.9.195.106-110, 5.9.200.58-62, 88.198.100.162-166
   ```

**Importante:** Una conexión puede usarse en múltiples bots.

## Tipos de Bots Veles

Veles soporta dos tipos principales de bots de trading:

### 1. Bots Grid (Rejilla)

**Principio:** Compra barato, vende caro en un rango especificado.

**Cómo funciona:**
- Estableces rango de precio (mín/máx)
- Veles coloca rejilla de órdenes de compra y venta
- En movimiento de precio, el bot fija ganancia en cada rejilla

**Configuración:**
- Rango de precio (mín/máx)
- Número de rejillas (5-100)
- Tamaño de posición por rejilla
- Stop-loss (opcional)
- Take-profit (opcional)

**Para quién:** Mercado lateral (flat), alta volatilidad.

![Creando Bot Veles](./assets/creating-a-grid-bot.png)

### 2. Bots DCA (Promediado)

**Principio:** Compra en intervalos regulares o en caída de precio. Aprende más sobre la estrategia de promediado en nuestra [guía de DCA en crypto](/es/library/dca-strategy-crypto/).

**Cómo funciona:**
- Estableces cantidad base de compra
- El bot compra en intervalos especificados (tiempo o % caída)
- En crecimiento de precio, fija ganancia

**Configuración:**
- Cantidad base de compra
- Intervalo (tiempo o % caída)
- Multiplicador (aumentar compra en caída)
- Take-profit (cuándo fijar ganancia)

**Para quién:** Inversiones a largo plazo, acumulación de posición.

### 3. Bots de Futuros

**Principio:** Trading con apalancamiento (long/short).

**Configuración:**
- Dirección (long/short)
- Apalancamiento (2-20x)
- Tamaño de posición
- Stop-loss / Take-profit

**Riesgos:** ¡Altos! Puedes perder más del depósito con mala gestión de riesgos.

**Para quién:** Traders experimentados, cobertura de posiciones.

## Estrategias Listas Veles

**Veles proporciona un escaparate de estrategias listas** — configuraciones de bots que puedes copiar y ejecutar sin profundo entendimiento de indicadores.

**Ejemplos de nuestro blog:**

### 1. Prisma 5.5

**Descripción:** Estrategia de alta frecuencia para altcoins volátiles. Usa combinación de osciladores para entrada en sobreventa.

**Indicadores:**
- RSI (Relative Strength Index)
- Stochastic RSI
- CMO (Chande Momentum Oscillator)

**Configuración:**
- Timeframe: 15 minutos
- Depósito: desde $10
- Riesgo: moderado (diversificación en 10-20 pares)

**Para quién:** Traders que quieren automatizar trading en altcoins volátiles.

**[Más sobre configuración de Prisma 5.5](/es/library/prisma-5-5-strategy-settings/)**

### 2. Elder 2.0 (Spot)

**Descripción:** Estrategia spot basada en tres filtros: tendencia, momentum, volatilidad. Nombrada por Alexander Elder.

**Indicadores:**
- MA (Moving Average) — filtro de tendencia
- CMO — momentum
- ATR% — volatilidad

**Configuración:**
- Timeframe: 1 hora
- Depósito: desde $10
- Riesgo: bajo (solo spot, sin apalancamiento)

**Para quién:** Inversores conservadores que quieren ganar en volatilidad sin riesgo de futuros.

**[Más sobre estrategia Elder 2.0](/es/library/spot-strategy-elder-20/)**

## Backtests

**Veles proporciona simulador de trading en datos históricos** — puedes probar una estrategia antes de ejecutar con dinero real.

![Configurando Backtest Veles](./assets/setting-up-a-backtest.png)

**Cómo funcionan los backtests:**
1. Eliges estrategia y parámetros
2. Especificas período de prueba (ej. 30 días)
3. Inicias simulación
4. Obtienes estadísticas: ganancia, drawdown, win rate

![Resultados Backtest Veles](./assets/backtest-results.png)

**Importante:** Los backtests muestran cómo habría funcionado la estrategia en el pasado, pero no garantizan retornos futuros.

## Comisiones

### Comisiones de Veles

**Veles no tiene tarifa de suscripción.** Pagas solo comisión de ganancia:

| Parámetro | Valor |
|-----------|-------|
| **Comisión** | 20% de ganancia de operación |
| **Máximo** | 50 USDT por mes (spot + futuros por separado) |
| **Mínimo** | $0 (si los bots no generan ganancia) |

**Ejemplo:**
- Ganancia mensual: 100 USDT
- Comisión Veles: 20 USDT (20%)
- **Ganancia neta:** 80 USDT

**Si los bots son no rentables:** No se cobra comisión.

### Pago de Comisiones

**Criptomonedas disponibles:**
- BTC (Bitcoin)
- TRX (Tron)
- MATIC (Polygon)
- BNB (Binance Coin)
- USDT (Tether)
- USDC (USD Coin)

**Bonos:**
- Hasta 5 USDT por completar tareas (creación de clave API, suscripciones, etc.)

## Pros y Contras Veles

### Pros

| Ventaja | Descripción |
|---------|-------------|
| **Sin tarifa de suscripción** | Comisión solo en ganancia (20%, máx $50/mes) |
| **Bajo umbral de entrada** | Puedes empezar desde $10 |
| **Simplicidad** | Interfaz clara para principiantes, no necesita código |
| **Nube** | No necesitas tener PC encendido 24/7 |
| **Backtests** | Puedes probar estrategia antes de lanzar |
| **Estrategias listas** | Escaparate de configuraciones de la comunidad |
| **Bot de Telegram + apps móviles** | Notificaciones y monitoreo 24/7 |
| **Multi-exchange** | 7+ exchanges en una plataforma |

### Contras

| Desventaja | Descripción |
|------------|-------------|
| **Centralización** | Dependencia de Veles (si servidores caen — bots no funcionan) |
| **Funcionalidad limitada** | No hay estrategias complejas (como en Python) |
| **Comisión 20%** | Puede ser alta con gran ganancia |
| **App móvil** | Funcionalidad básica (configuración vía web) |

## Para Quién Veles

### ✅ Adecuado si:

- Quieres automatizar trading pero no sabes programar
- Depósito: desde $10 (mínimo para bot)
- Operas en spot o futuros con apalancamiento moderado (hasta 5x)
- Listo para pagar 20% de ganancia (máx $50/mes)
- Quieres probar estrategias en histórico

### ❌ No adecuado si:

- Sabes programar en Python (mejor escribir tu propio bot)
- Depósito < $10 (no suficiente para lanzar bot)
- Necesitas estrategias complejas (HFT, arbitraje, ML)
- No confías en servicios en la nube (quieres control total)

---

### 8. App Móvil

**Veles tiene apps móviles para Android y iOS** — lanzadas en enero 2026 con soporte para notificaciones push.

**Funciones:**
- Ver bots activos y estadísticas
- Notificaciones push sobre operaciones y eventos
- Duplicar notificaciones del bot de Telegram
- Monitorear ganancias y pérdidas

![Estadísticas de Bot Activo Veles](./assets/active-bot-statistics-veles.png)

**Limitaciones:**
- Funcionalidad básica (configuración de bots vía interfaz web)

**Para quién:** Traders que quieren monitorear bots 24/7 sin acceso constante al PC.

## Alternativas Veles

| Plataforma | Pros | Contras | Para quién |
|------------|------|---------|------------|
| **Gainium** | Gratis hasta 2 bots, interfaz simple | Menos funciones, sin futuros | Principiantes, prueba |
| **Ginarea** | Constructor visual, futuros | Menos exchanges, sin backtests | Avanzados |
| **3Commas** | Muchas funciones, app móvil | Caro ($20-100/mes), backtests complejos | Experimentados |
| **Python + CCXT** | Libertad total, gratis | Necesita código, configuración de servidor | Desarrolladores |

## FAQ

**¿Cuánto dinero necesito para empezar?**

Mínimo: $10 (mínimo para bot).  
Óptimo: $100-500 para trading cómodo.

**¿Puedo perder más del depósito?**

En spot — no (máx -100% de posición).  
En futuros — sí, con trading apalancado y sin stop-loss.

**¿Veles funciona en Rusia?**

Sí, Veles está disponible en Rusia. Los exchanges (Bybit, Binance) también funcionan con restricciones.

**¿Necesito pagar impuestos?**

Sí, la ganancia de trading de criptomonedas está gravada (13% para residentes de Rusia). Veles proporciona exporte para contabilidad.

**¿Es seguro confiar las claves API a Veles?**

Sí, si las claves son solo para trading (sin retiro). Veles no puede retirar fondos — solo operar.

**¿Cuáles son las comisiones de Veles?**

20% de ganancia de operación, máximo 50 USDT por mes (spot + futuros por separado). Si los bots no generan ganancia — no se cobra comisión.

## Probar Veles

**[Registrarse en Veles](https://veles.finance/invite/washmallay?utm_source=marketlab-blog&utm_medium=article-link&utm_campaign=veles-platform-overview)** y empezar a automatizar trading hoy.

*Enlace de afiliado: el registro da beneficios tanto a nosotros como a ti.*

---

**Fuentes:**
- Veles Finance — documentación oficial
- Forklog — [Reseña de Plataforma Veles](https://forklog.com/exclusive/dlya-novichkov-i-profi-obzor-platformy-dlya-sozdaniya-torgovyh-botov-veles/)
- Comunidad Veles (Telegram, foro)
