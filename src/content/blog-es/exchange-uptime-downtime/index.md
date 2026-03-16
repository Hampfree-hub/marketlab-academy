---
title: 'Tiempo de Actividad e Inactividad de Exchange Explicado'
description: 'Tiempo de actividad y inactividad de exchange: qué es, cómo se mide la confiabilidad, qué buscar al elegir plataforma de trading.'
pubDate: '2026-02-19'
category: 'fundamental-analysis'
---

Tiempo de actividad (uptime) y tiempo de inactividad (downtime) son métricas de disponibilidad de servicio: cuánto tiempo operó el exchange sin fallos y cuánto tiempo estuvo no disponible. Para traders, tanto la reputación de plataforma como la confiabilidad de infraestructura importan.

Este artículo cubre qué son uptime y downtime, cómo se calculan, qué buscar al elegir exchange y cómo reducir riesgos durante interrupciones.

## Qué es Uptime y Downtime

**Uptime** — porción de tiempo cuando servicio estuvo disponible y operó normalmente. **Downtime** — tiempo cuando servicio no estuvo disponible u operó con limitaciones serias. Simplemente: uptime responde "qué porcentaje de tiempo estuvo disponible el exchange," downtime — "cuánto tiempo no funcionó o tuvo interrupciones."

Ambas métricas usualmente expresadas en porcentajes por período (mes, año) o en horas/minutos de tiempo de inactividad. Fórmula de uptime:

**Uptime (%) = (Tiempo de Operación / Tiempo Total de Período) × 100**

Por ejemplo, en un mes (720 horas) el exchange no estuvo disponible por 3 horas. Uptime = (717 / 720) × 100 ≈ 99.58%. Correspondientemente, downtime — 3 horas o about 0.42% de período.

### Qué Cuenta como Downtime

- Inactividad completa de sitio web o API (usuario no puede iniciar sesión o ejecutar solicitud).
- Inactividad parcial: funciones individuales no funcionan (ej. solo spot o solo futuros), trading detenido con interfaz funcionando.
- Retrasos severos (lags) haciendo ejecución de órdenes no confiable o imposible en tiempo razonable.

Breves "congelamientos" técnicos por pocos segundos pueden no aparecer en estadísticas públicas, pero con repetición frecuente también afectan calidad de trading. Entender confiabilidad de infraestructura ayuda a planificar distribución de riesgos y no mantener posiciones críticas en plataforma única.

## Por Qué Traders Deben Verificar Uptime de Exchange

Durante downtime, trader no puede gestionar posiciones completamente: cerrar operación, cambiar stop-loss o cancelar orden. Precio continúa moviéndose durante este tiempo — con posición abierta esto es riesgo directo. En mercado volátil, incluso interrupción corta puede llevar a consecuencias indeseables.

**Principales riesgos durante interrupciones:**

- **Incapacidad de cerrar posición** — precio puede moverse contra posición abierta mientras exchange no disponible.
- **Deslizamiento y ejecución a peor precio** — después de restauración, órdenes pueden ejecutarse con retraso y a precio desfavorable.
- **Fallos de API** — bots de trading y scripts dejan de recibir datos y enviar órdenes; estrategias automatizadas (incluyendo [DCA](https://marketlab-academy.org/es/library/dca-strategy-crypto/) o [grid](https://marketlab-academy.org/es/library/grid-trading-crypto/)) no se ejecutan según plan.
- **Pérdida de acceso a fondos** — durante interrupción, retiros y a veces transferencias entre cuentas no disponibles.

Mayor share de trading a través de exchange y más críticas las posiciones — más importante elegir plataformas con alto historial de uptime y comunicación adecuada durante incidentes.

**Importante:** No mantenga todos los fondos en un exchange. Distribuya activos a través de múltiples plataformas y carteras frías.

## Cómo se Mide Disponibilidad de Exchange

Confiabilidad de plataforma evaluada desde múltiples fuentes.

### Páginas de Estado Públicas

Muchos exchanges mantienen página de estado donde se muestra estado actual de servicios (trading, API, retiros, interfaz web) e historial de incidentes. De ellas puede ver versión oficial: cuándo ocurrió interrupción, qué sistemas afectados y cuándo trabajo restaurado.

**Ejemplos:**
- Binance: status.binance.com
- Bybit: status.bybit.com
- Kraken: status.kraken.com

### Reportes de Disponibilidad

Algunos exchanges publican reportes mensuales o anuales con porcentajes de uptime para servicios principales. Tales cifras útiles para comparación, pero metodología de cálculo puede diferir (qué exactamente contado como "disponible," qué regiones y nodos considerados).

### Servicios de Monitoreo de Terceros

Servicios independientes consultan periódicamente sitios web y APIs de exchanges desde diferentes puntos mundialmente y construyen gráficos de disponibilidad. Ayudan a evaluar uptime "desde fuera," pero cobertura y frecuencia de verificación varían por servicio — datos deben tomarse como adicional, no única fuente.

**Ejemplos:**
- DownDetector — quejas de usuarios en tiempo real
- CryptoStatus — monitoreo de exchanges y carteras crypto

Al elegir exchange, razonable combinar: mirar estado oficial, monitoreo externo y reseñas de usuarios sobre incidentes recientes. Para trading automatizado, importante elegir plataformas con 99.5%+ de uptime — tales disponibles en lista de exchanges soportados en [Veles](https://veles.finance/invite/washmallay).

## Causas Típicas de Downtime

**Mantenimiento programado** — actualizaciones de sistema, migración, expansión de capacidad. Usualmente anunciados con anticipación y conducidos durante horas de baja actividad. Breves ventanas de inactividad consideradas planificadas.

**Sobrecarga** — aumento brusco de tráfico (pump, caída, listing de activo popular) lleva a lags, timeouts o inactividad completa. Calidad de arquitectura y escalabilidad se manifiesta en tales momentos.

**Ataques DDoS** — sobrecarga intencional de infraestructura. Exchanges grandes usualmente tienen protección, pero ataques pueden causar fallos a corto plazo o locales.

**Incidentes internos** — fallos de equipo, errores en actualizaciones, factor humano. Por ellos juzgado calidad de operaciones y velocidad de respuesta de equipo.

**Intervenciones regulatorias** — bloqueos por autoridades, requisitos de detener trading para regiones específicas.

## Tabla: Uptime de Exchanges Populares (2025)

| Exchange | Uptime (2025) | Página de Estado | Incidentes | Downtime |
|----------|---------------|-----------------|-----------|----------|
| **Binance** | 99.95% | status.binance.com | 0 | ~4 horas/año |
| **Bybit** | 99.9% | status.bybit.com | 1 | ~9 horas/año |
| **Bitget** | 99.8% | status.bitget.com | 2 | ~18 horas/año |
| **OKX** | 99.85% | status.okx.com | 1 | ~13 horas/año |
| **BingX** | 99.7% | status.bingx.com | 3 | ~26 horas/año |
| **Kraken** | 99.9% | status.kraken.com | 1 | ~9 horas/año |
| **Coinbase** | 99.95% | status.coinbase.com | 0 | ~4 horas/año |

**Datos para 2025.** Fuentes: páginas de estado oficiales de exchanges.

**Qué significan porcentajes:**
- **99.9% (tres nueves):** ~9 horas de downtime por año — buen indicador para exchange crypto
- **99.95%:** ~4 horas de downtime por año — excelente indicador
- **99.99% (cuatro nueves):** ~53 minutos de downtime por año — nivel de finanzas tradicionales

**Conclusiones:**
- Binance, Coinbase — líderes en confiabilidad (99.95%)
- Bybit, Kraken — buen balance (99.9%)
- Bitget, OKX — aceptable (99.8%)
- BingX — requiere plataformas de respaldo (99.7%)

## Cómo Compensan Exchanges por Interrupciones

**Importante:** Políticas de compensación pueden cambiar. Siempre verifique información actual en sitios web oficiales de exchanges.

**Principios generales:**

### Binance

**Compensación por:**
- Interrupción >30 minutos
- Incapacidad de cerrar posición
- Errores técnicos en lado de exchange

**Formato:**
- Vouchers para comisiones de trading
- Tokens BNB (raramente)

**Dónde verificar:** Canal Oficial de Anuncios de Binance

### Bybit

**Compensación por:**
- Interrupción >1 hora
- API no disponible >30 minutos

**Formato:**
- Bonos a cuenta de trading
- Cashback en comisiones

**Dónde verificar:** Anuncios de Bybit

### Bitget

**Compensación por:**
- Interrupción >2 horas
- Incapacidad de retirar fondos

**Formato:**
- USDT de bono
- Tasas aumentadas en Earn

**Dónde verificar:** Centro de Soporte de Bitget

### BingX

**Compensación por:**
- Interrupción >1 hora
- Liquidaciones durante interrupción

**Formato:**
- Vouchers de comisiones
- Fondo de seguros (caso por caso)

**Dónde verificar:** Centro de Ayuda de BingX

### OKX

**Compensación por:**
- Interrupción >30 minutos
- Errores de ejecución de órdenes

**Formato:**
- Tokens OKB
- Cashback en comisiones

**Dónde verificar:** Soporte de OKX

## Cómo Obtener Compensación

**Instrucción paso a paso:**

### Paso 1: Guardar Evidencia

**Qué necesario:**
- Capturas de pantalla de errores (404, 503, timeout)
- Logs de API (si usa bots)
- Tiempo de interrupción (inicio, fin)
- Pérdidas (ganancia no realizada, pérdidas)

**Ejemplo:**
```
Tiempo: 2024-03-15 14:30-16:00 UTC
Error: API timeout (código 504)
Pérdidas: Incapacidad de cerrar long de BTC, pérdida de $500
```

### Paso 2: Contactar Soporte

**Dónde:**
- Ticket de soporte en exchange
- Twitter/X (apelación pública)
- Canal de Telegram de exchange

**Qué escribir:**
- Descripción de problema
- Duración de interrupción
- Evidencia adjunta
- Monto de compensación

**Plantilla:**
```
Asunto: Compensación por interrupción 15.03.2024

Hola,

Durante interrupción de exchange (14:30-16:00 UTC) no pude cerrar posición.
Adjunto capturas de errores y cálculo de pérdidas.

Solicito compensación de $500.

Capturas: [adjuntas]
Logs de API: [adjuntos]

Atentamente,
[Su nombre]
```

### Paso 3: Esperar Respuesta

**Tiempos:**
- Binance: 3-5 días hábiles
- Bybit: 2-4 días hábiles
- Bitget: 5-7 días hábiles
- BingX: 3-5 días hábiles
- OKX: 2-4 días hábiles

**Si denegado:**
- Solicitar apelación
- Contactar redes sociales (presión pública funciona)
- Dejar reseña en Trustpilot, Reddit

## Checklist: Cómo Elegir Exchange Confiable

**Al elegir exchange, verifique:**

### Criterios técnicos

- [ ] Uptime >99.5% en último año
- [ ] Página de estado pública
- [ ] Historial de incidentes <5 por año
- [ ] Protección DDoS (Cloudflare, AWS Shield)
- [ ] Servidores de respaldo (distribución geo)

### Criterios financieros

- [ ] Proof of Reserves
- [ ] Fondo de seguros >$100M
- [ ] Política de compensación (transparente)
- [ ] Auditoría de terceros

### Criterios de reputación

- [ ] Tiempo en mercado >3 años
- [ ] Equipo público
- [ ] Licencias (FinCEN, FCA, ASIC)
- [ ] Reseñas de usuarios (Trustpilot >4.0)

### Para trading automatizado

- [ ] API uptime >99.5%
- [ ] Límites de tasa adecuados (1000+ solicitudes/minuto)
- [ ] Soporte WebSocket
- [ ] Testnet disponible
- [ ] Soporte en lista de [Veles](https://veles.finance/invite/washmallay)

**Requisitos mínimos:**
- Uptime: 99.5%+
- Edad: 3+ años
- Reservas: Proof of Reserves
- Compensación: política transparente

**Elección óptima:**
- Binance, Bybit — para mayoría de traders
- Bitget, OKX — para alternativa
- BingX — solo como plataforma de respaldo

## Resumen

Uptime y downtime de exchange son métricas clave de confiabilidad. Elija plataformas con alto historial de uptime y comunicación transparente durante incidentes.

**Conclusiones clave:**
- Uptime muestra confiabilidad de exchange, downtime — frecuencia de fallos
- Verifique páginas de estado, monitoreo de terceros, reseñas de usuarios
- Diversifique a través de múltiples exchanges y carteras frías
- Para trading automatizado, elija plataformas con 99.5%+ de uptime
- Conozca políticas de compensación de sus exchanges

Más sobre trading automatizado: [Estrategia DCA](https://marketlab-academy.org/es/library/dca-strategy-crypto/), [Trading Grid](https://marketlab-academy.org/es/library/grid-trading-crypto/).

## FAQ

**¿Qué es uptime de exchange?**

Porcentaje de tiempo que exchange operó normalmente sin fallos. 99.9% uptime significa ~9 horas de downtime por año.

**¿Qué se considera buen uptime?**

- 99.9%: bueno para exchange crypto
- 99.95%: excelente
- 99.99%: nivel de finanzas tradicionales (grado bancario)

**¿Dónde verificar uptime de exchange?**

- Página de estado oficial (status.binance.com, status.bybit.com)
- Monitores de terceros (DownDetector, CryptoStatus)
- Reseñas de usuarios en Reddit, Trustpilot

**¿Qué hacer durante interrupción de exchange?**

- Verificar página de estado para información oficial
- Contactar soporte vía ticket
- Monitorear Twitter/X para actualizaciones
- No entrar en pánico — mayoría de interrupciones resueltas en horas

**¿Puedo obtener compensación por downtime?**

Sí, muchos exchanges compensan por interrupciones >30-60 minutos. Contacte soporte con evidencia (capturas, logs, cálculo de pérdidas).

**¿Cómo protegerme de downtime de exchange?**

- Diversificar a través de múltiples exchanges
- Mantener fondos de emergencia en cartera fría
- Usar órdenes stop-loss
- Monitorear posiciones regularmente

**¿Es 99.7% uptime bueno?**

Aceptable, pero no excelente. 99.7% = ~26 horas de downtime por año. Para trading serio, mejor elegir plataformas 99.9%+.

**¿Qué es downtime de API?**

Período cuando API de exchange no responde. Afecta bots de trading, estrategias automatizadas, apps de terceros. Usualmente más corto que downtime de sitio web.

**¿Debo retirar durante interrupción?**

Si interrupción prolongada (>6 horas) y sin comunicación de equipo — considerar retirar después de restauración. Pero usualmente interrupciones resueltas en 1-2 horas.

**¿Cómo reportar interrupción de exchange?**

- Publicar en Twitter/X etiquetando exchange
- Dejar reseña en Trustpilot
- Reportar a soporte vía ticket
- Compartir experiencia en Reddit (r/CryptoCurrency)
