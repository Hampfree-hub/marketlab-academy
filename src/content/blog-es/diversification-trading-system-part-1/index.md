---
title: 'Diversificación y configuración del sistema de trading. Parte 1: Por qué diversificar'
description: 'Por qué el trader diversifica: activos, estrategias, plataformas. Cómo no poner todo en una cesta y reducir riesgos al operar y con bots.'
pubDate: '2026-02-02'
category: 'algo-trading'
---

La diversificación es repartir capital y riesgo: por activos, estrategias y plataformas. Una posición, un bot o un exchange pueden fallar; la diversificación no garantiza beneficio pero reduce la probabilidad de perderlo todo por un solo factor.

En esta parte — por qué diversificar y qué revisar primero. En la [Parte 2](/es/library/diversification-trading-system-part-2/) — cómo definir reglas de entrada/salida y configurar bots; en la [Parte 3](/es/library/diversification-trading-system-part-3/) — supervisión, ajustes y errores típicos.

## Por qué el trader diversifica

Concentrar el riesgo en un activo, una estrategia o una plataforma aumenta el impacto de una drawdown: si “falla” un elemento del sistema, todo el capital está en juego. Ejemplo: todo el capital en un altcoin — un crash de ese activo implica drawdown máximo en la cuenta; todo en un exchange — durante un downtime largo o problemas de retiro, el acceso a fondos se limita. La diversificación no elimina el riesgo pero lo reparte: el golpe es a una parte del capital, no a todo el depósito.

Una metáfora útil es el **conveyor**: varias líneas; una se para — las demás siguen. Varios bots y activos dan el mismo efecto: una línea cae — las demás continúan. El objetivo no es “lanzar todo a la vez” sino repartir capital y límites de forma consciente.

## Empezar con poco presupuesto

Puedes empezar con una cantidad pequeña — p. ej. 20 $. La idea es probar el sistema con poco presupuesto y luego escalar. Proporción 1:1: mitad para bots, mitad en reserva (margen). Así, si una parte hace drawdown, sigues teniendo colchón para reponer o gastos.

**Ejemplo:** 20 $ disponibles. 10 $ para bots, 10 $ en reserva. Puedes probar el sistema en muchos activos pero con límite de entradas simultáneas. En plataformas de algotrading (p. ej. [Veles](https://veles.finance/invite/washmallay) — cómodo para cantidades pequeñas) existe el **bloqueo por posiciones**: no entran más bots en una operación de los que permiten tus ajustes. Puedes tener 10, 20 o 30 bots en la lista, pero con bloqueo “1” solo trabaja uno a la vez — el que recibe la señal primero. Así reduces riesgo: no repartes el presupuesto en todos los activos a la vez sino que compruebas lógica y riesgo en una línea del conveyor. Cuando el sistema esté claro y los resultados estables, puedes subir poco a poco bloqueos y tamaño.

## Diversificación por activos

Mejor no tener todo el capital en un activo: las correlaciones entre monedas son altas pero no del 100 % — una drawdown de un activo golpea a una parte del portafolio, no a todo el depósito. Cuando un altcoin se hunde, otras posiciones (p. ej. BTC, ETH u otro activo) pueden comportarse distinto. Activos base como BTC y ETH son la base de muchos portafolios; más sobre bases del criptomercado en [Fundamentos de Bitcoin](/es/library/bitcoin-basics/). Conviene fijar de antemano porcentajes y límites por activo y no superarlos: p. ej. no más del 20–30 % del depósito en un activo, el resto repartido.

## Diversificación por estrategias y bots

No concentres todo el volumen en un bot o una estrategia: [DCA](/es/library/dca-strategy-crypto/) y [trading en grid](/es/library/grid-trading-crypto/) resuelven tareas distintas y se comportan distinto según el mercado. DCA promedia la entrada en el tiempo; grid opera en rango. En tendencia fuerte una estrategia puede hacer drawdown y otra beneficio; en lateral — al revés. Repartir capital entre varios bots y estrategias reduce la dependencia de una “línea del conveyor”. La conexión con reglas de capital está en [gestión del riesgo en trading cripto](/es/library/risk-management-crypto-trading-bots/).

## Diversificación por plataformas

Mejor no tener todo el volumen en un exchange: el uptime, los límites de retiro y la reputación importan. En downtime largo o problemas de retiro el acceso a fondos se limita; si todo está en una plataforma — el riesgo es mayor. Qué revisar al elegir y cómo valorar la fiabilidad — en el artículo sobre [uptime y downtime del exchange](/es/library/exchange-uptime-downtime/). Reseñas de exchanges (Bybit, Bitget, BingX, etc.) están previstas; incluirán criterios de comparación y consejos prácticos para empezar.

## Conclusión

La diversificación es parte de la configuración del sistema de trading, no un fin en sí. El objetivo es reducir el riesgo de perder todo el capital por un activo, una estrategia o una plataforma. Siguiente — [Parte 2: cómo construir y configurar el sistema](/es/library/diversification-trading-system-part-2/).
