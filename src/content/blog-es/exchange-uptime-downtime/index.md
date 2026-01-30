---
title: 'Qué son el uptime y el downtime de una exchange'
description: 'Uptime y downtime de una criptoexchange: qué son, cómo se mide la fiabilidad de la plataforma y qué tener en cuenta al elegir exchange para operar.'
pubDate: '2026-01-29'
category: 'fundamental-analysis'
---

Uptime y downtime son indicadores de disponibilidad del servicio: cuánto tiempo la exchange ha funcionado sin fallos y cuánto ha estado indisponible. Para el trader importan tanto la reputación de la plataforma como la fiabilidad de su infraestructura.

En el artículo se explica qué son uptime y downtime, cómo se calculan, qué revisar al elegir exchange y cómo reducir riesgos durante las caídas.

## Qué son uptime y downtime

**Uptime** es la fracción de tiempo en que el servicio estuvo disponible y funcionando con normalidad. **Downtime** es el tiempo en que el servicio estuvo indisponible o con limitaciones graves. En pocas palabras: uptime responde a “qué porcentaje del tiempo la exchange estuvo disponible”, downtime a “cuánto tiempo estuvo caída o muy limitada”.

Suelen expresarse en porcentaje sobre un periodo (mes, año) o en horas/minutos de indisponibilidad. Fórmula del uptime:

**Uptime (%) = (Tiempo en funcionamiento / Tiempo total del periodo) × 100**

Ejemplo: en un mes (720 horas) la exchange estuvo caída 3 horas. Uptime = (717 / 720) × 100 ≈ 99,58 %. Downtime = 3 horas o ~0,42 % del periodo.

### Qué cuenta como downtime

- Indisponibilidad total del sitio o la API (el usuario no puede entrar ni ejecutar peticiones).
- Indisponibilidad parcial: fallan solo algunas funciones (p. ej. solo spot o solo futuros), operaciones suspendidas con interfaz activa.
- Retrasos graves que hacen la ejecución de órdenes poco fiable o imposible en un tiempo razonable.

Los “cuelgues” breves de segundos pueden no aparecer en estadísticas públicas, pero si se repiten afectan a la calidad del trading. Entender la fiabilidad de la infraestructura ayuda a planificar el riesgo y a no concentrar posiciones críticas en una sola plataforma.

## Por qué al trader le importa el uptime de la exchange

Durante un downtime el trader no puede gestionar bien las posiciones: cerrar una operación, cambiar el stop-loss o cancelar una orden. El precio sigue moviéndose mientras la exchange está caída — con una posición abierta eso es riesgo directo. En un mercado volátil incluso una caída corta puede tener consecuencias no deseadas.

**Riesgos principales en caídas:**

- **No poder cerrar la posición** — el precio puede moverse en contra mientras la exchange está caída.
- **Slippage y peor ejecución** — al recuperarse el servicio, las órdenes pueden ejecutarse tarde y a peor precio.
- **Fallos de API** — los bots y scripts dejan de recibir datos y enviar órdenes; estrategias automáticas (incluidos [DCA](/es/library/dca-strategy-crypto/) o [grid](/es/library/grid-trading-crypto/)) no se ejecutan según lo previsto.
- **Sin acceso a fondos** — retiros y a veces transferencias internas no están disponibles durante la caída.

Cuanto mayor sea la parte del trading en una exchange y más críticas las posiciones, más importante es elegir plataformas con buen historial de uptime y comunicación clara en incidentes. Los principios generales de protección del capital se tratan en [gestión de riesgos en criptotrading con bots](/es/library/risk-management-crypto-trading-bots/).

## Cómo se mide la disponibilidad de las exchanges

La fiabilidad de la plataforma se valora con varias fuentes.

### Páginas de estado públicas

Muchas exchanges tienen una página de estado (status page) con el estado actual de los servicios (trading, API, retiros, interfaz web) e historial de incidentes. Así se ve la versión oficial: cuándo hubo fallo, qué sistemas se vieron afectados y cuándo se restableció el servicio.

### Informes de disponibilidad

Algunas exchanges publican informes mensuales o anuales con porcentajes de uptime por servicio. Sirven para comparar, pero la metodología puede variar (qué se considera “disponible”, qué regiones y nodos se incluyen).

### Servicios de monitorización externos

Servicios independientes hacen ping periódico a sitios y APIs de exchanges desde distintos puntos y construyen gráficos de disponibilidad. Ayudan a valorar el uptime “desde fuera”, pero la cobertura y frecuencia varían — conviene usarlos como una fuente más, no la única.

Al elegir exchange, conviene combinar: estado oficial, monitorización externa y comentarios de usuarios sobre incidentes recientes.

## Causas típicas del downtime

**Mantenimiento programado** — actualizaciones de sistemas, migraciones, ampliación de capacidad. Suele anunciarse y hacerse en ventanas de baja actividad. La indisponibilidad breve planificada sigue siendo downtime.

**Sobrecarga** — un pico de tráfico (bomba, crash, listado de un activo muy demandado) provoca lag, timeouts o indisponibilidad total. La calidad de la infraestructura se pone a prueba en esos momentos.

**Ataques DDoS** — sobrecarga deliberada de la infraestructura. Las exchanges grandes suelen tener protección, pero los ataques pueden causar caídas breves o locales.

**Incidentes internos** — fallos de hardware, despliegues incorrectos, factor humano. Reflejan la calidad operativa y la velocidad de respuesta.

**Factores externos** — problemas del proveedor cloud, caídas de red, sanciones o bloqueos en algunas regiones. No siempre dependen de la exchange pero afectan la disponibilidad para parte de los usuarios.

Entender las causas ayuda a valorar la gravedad del incidente y con qué frecuencia puede repetirse algo similar. Para estrategias que dependen de que la exchange funcione de forma estable (p. ej. [trading en grid](/es/library/grid-trading-crypto/) o [backtests](/es/library/what-are-backtests/) seguidos de despliegue en vivo), el uptime y el historial de incidentes son criterios importantes al elegir plataforma.

## Qué revisar al elegir una exchange

Al elegir una plataforma para operar con cripto conviene tener en cuenta no solo comisiones y pares, sino también la fiabilidad.

**Uptime e historial de incidentes** — con qué frecuencia y durante cuánto tiempo ha estado caída la exchange en el último año. Una caída corta puede ser excepcional; caídas repetidas o largas son una señal de alerta.

**Transparencia** — existencia de página de estado, publicación de informes y postmortems (qué falló y qué se hizo). La voluntad de explicar los incidentes indica procesos maduros.

**Comunicación en caídas** — con qué rapidez y claridad la plataforma informa (web, redes, email). Eso influye en la capacidad de reaccionar (p. ej. no abrir nuevas posiciones o mover la actividad a otra exchange).

**Canales de respaldo** — poder operar por app móvil si falla la web o al revés. Para trading algorítmico: estabilidad de la API y documentación sobre límites y restricciones bajo carga.

También ayuda no concentrar todo el capital en una sola plataforma y no depender de un único punto de fallo.

## Resumen

Uptime y downtime indican cuán estable es una exchange. Para el trader es importante saber que durante una caída no puede gestionar posiciones con normalidad y los bots dejan de funcionar. La fiabilidad se valora con páginas de estado, informes y monitorización externa; al elegir exchange, conviene mirar historial de incidentes, transparencia y comunicación en caídas. Reducir riesgos ayuda diversificar plataformas y una gestión sensata del capital.

## FAQ

**¿Qué es el uptime en pocas palabras?**

Uptime es la fracción de tiempo en que el servicio (p. ej. una exchange) estuvo disponible y funcionando con normalidad. Se expresa en porcentaje: 99,9 % de uptime significa ~0,1 % de downtime en el periodo.

**¿Por qué es peligroso el downtime de la exchange para el trader?**

Durante el downtime no se puede entrar en la cuenta, cerrar posición, cambiar el stop ni cancelar una orden. El precio puede ir en contra y los bots dejan de ejecutar estrategias. Por eso importan tanto la estabilidad de la exchange como una gestión razonable del riesgo.

**¿Cómo saber el uptime de una exchange?**

Revisar la página de estado oficial de la exchange y los informes de disponibilidad (si se publican), y los datos de servicios de monitorización independientes. Una sola fuente no basta — conviene contrastar varias.

**¿Por qué las exchanges caen en bombas o crashes?**

Un pico repentino de tráfico sobrecarga servidores y red. La preparación de la infraestructura para picos de carga se pone a prueba en esos momentos; las plataformas más resilientes tienen caídas más cortas y menos frecuentes.

**¿Qué hacer si la exchange está caída y tengo una posición abierta?**

Tener un plan de antemano: p. ej. órdenes de stop duplicadas en otra plataforma (si se opera el mismo activo allí), o limitar el tamaño de posición en una sola exchange.

**¿Hay que tener en cuenta el uptime al elegir exchange para bots?**

Sí. Los bots dependen de la API; en downtime o lag fuerte las órdenes no se ejecutan a tiempo y las estrategias (DCA, grid, etc.) se rompen. La estabilidad de la API y el historial de caídas son criterios importantes para el trading algorítmico.
