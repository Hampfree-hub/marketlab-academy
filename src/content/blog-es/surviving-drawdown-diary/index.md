---
title: 'Cómo sobrevivimos al drawdown: diario de una cuenta en vivo'
description: 'Cuando Bitcoin cae y el depósito se reduce: nuestro plan de supervivencia, por qué no promediamos a la baja sin plan y cómo pasar el drawdown sin romper el sistema. Cuenta en vivo, drawdown real.'
pubDate: '2026-02-05'
category: 'technical-analysis'
---

En el contexto del mercado cripto actual — de nuevo una montaña rusa — el tema de sobrevivir al drawdown suena muy actual. En el momento de escribir, Bitcoin está bastante por debajo del máximo histórico y la volatilidad es alta; los analistas comparan la profundidad de la corrección con ciclos pasados, pero la base del mercado es otra: más dinero institucional, flujos a productos regulados. Es en este mercado vivo, nervioso pero estructurado, donde estamos viviendo nuestro drawdown — no en el vacío, sino en tiempo real.

El drawdown es cuando la cuenta retrocede desde un pico reciente. En este artículo: cómo lo atravesamos en una cuenta en vivo: qué hacemos, qué no hacemos y por qué no rompemos el sistema.

**Cuenta en vivo, drawdown real, cabeza fría.**

## Cuando Bitcoin cae y el depósito se reduce

El mercado no tiene por qué subir. Cuando Bitcoin y los altcoins caen, el balance de la cuenta cae desde el pico — eso es drawdown. Es inevitable si estás en posiciones o estrategias que mantienen exposición. Lo importante es no entrar en pánico ni cambiar las reglas sobre la marcha: decidir de antemano qué escenario es aceptable y dónde paras el sistema.

## Nuestra situación: qué pasa con las cuentas

No estamos intentando "pintar una historia bonita a toro pasado" — es una foto en vivo. En la cuenta de [Bybit](https://www.bybit.com/invite?ref=PWMD24&utm_source=marketlab-blog&utm_medium=article-link&utm_campaign=surviving-drawdown-diary) el drawdown ya se nota, pero sigue dentro de nuestros parámetros de riesgo: los límites de caída máxima de capital no se han alcanzado y el sistema no exige desenrollar de urgencia. Hace poco se disparó un stop-loss en un activo — no "nos salvó" del drawdown global de la cuenta, pero limitó el daño a nivel local y mostró que la disciplina de gestión de riesgo también funciona en mercado bajista.

El factor clave que por ahora nos mantiene a flote es la diversificación: parte de las estrategias no se solapan por activos y timeframes, parte corre en otros exchanges y con otro apalancamiento. Un colchón extra lo da la cuenta en [BingX](https://www.bitget.com/ru/referral/register?clacCode=23EHR2VD&utm_source=marketlab-blog&utm_medium=article-link&utm_campaign=surviving-drawdown-diary) (enlace de referido: registrarte por él apoya el proyecto), a la que escalamos hace relativamente poco: ahí corre la estrategia [ORACLE 1.1](https://marketlab-academy.org/es/library/oracle-strategy/) — en la práctica un módulo aparte con su propio perfil de drawdown y periodos de recuperación. El objetivo del artículo es mostrar con honestidad: sí, hay drawdown; sí, es desagradable; pero es parte del escenario que teníamos previsto, no un cisne negro.

## Nuestro plan de supervivencia

En resumen, qué hacemos cuando la cuenta está en drawdown:

- **No promediamos a la baja sin plan** — no compramos "en la caída" solo porque da miedo o porque "está barato". Promediar a la baja es una decisión aparte con reglas claras (tamaño, límites, stops).
- **Comprobamos que el sistema cumple las reglas** — stops en su sitio, límites de riesgo no superados, bots dentro de sus parámetros.
- **No lo apagamos todo por emoción** — si una estrategia está pensada para el drawdown (p. ej. grid en rango o diversificación por activos), parar por pánico puede fijar el peor momento.
- **Miramos el riesgo global del portafolio** — cómo se combina el drawdown en distintos activos y estrategias. Para asignación de capital y riesgo: [gestión de riesgo con bots](https://marketlab-academy.org/es/library/risk-management-crypto-trading-bots/) y la serie [Diversificación y configuración del sistema de trading](https://marketlab-academy.org/es/library/diversification-trading-system-part-1/).


**Transparencia:** mantenemos un [diario de trading público en TMM](https://tradermake.money/ru/trader/Marketlab/?ref=Jx9LLm) — ahí podés ver nuestras estadísticas reales: número de operaciones, win rate, curva de capital. Es un experimento de apertura: mostramos no solo éxitos sino también drawdowns.

## Drawdown que no queremos "promediar"

Promediar a la baja (añadir en la caída) puede ser parte de una estrategia — p. ej. DCA con reglas. Pero "promediar" solo porque el precio cayó y quieres bajar el precio medio de entrada es un juego peligroso: puedes meter más en un activo en caída y aumentar pérdidas. No usamos el promedio como reacción al drawdown; cuando añadimos, es con reglas y límites definidos de antemano.

## Cómo sobrevivir al drawdown sin romper el sistema

Para que el drawdown no se convierta en un sistema roto, trabajamos con un marco por niveles: el drawdown se mide en % del equity con bandas definidas — normal, elevado, crítico. Para cada nivel hay acciones definidas: dónde solo reducimos tamaño, dónde apagamos parte de las estrategias y dónde asumimos la derrota en un bloque concreto. Así no lo apagamos todo en el peor momento emocional ni promediamos sin control.

Qué hacemos, paso a paso:

1. **Fijar límites de antemano** — drawdown máximo en la cuenta o por estrategia al que paramos o revisamos parámetros.
2. **No cambiar las reglas en el pánico** — no desactivar stops, no subir apalancamiento ni "doblar" solo porque el mercado fue en contra.
3. **Mantener la diversificación** — muchos activos y estrategias reducen la dependencia de un solo movimiento; parte del portafolio puede estar en drawdown y otra en trabajo o en beneficio. Tener fuentes distintas (otros exchanges, otras estrategias) reduce la presión psicológica de una sola cuenta "en rojo".
4. **Separar sistema vs error** — si el drawdown es resultado del funcionamiento normal del sistema en una fase desfavorable del mercado, reducimos riesgo pero no reescribimos la lógica por emoción; si el drawdown viene de un error claro (exceso de apalancamiento, stops saltados, intervención manual contra las reglas), corregimos eso primero.
5. **Revisar el plan de vez en cuando** — recordar para qué horizonte y qué riesgo está pensado el sistema. Ayuda a no tomar decisiones por una vela o un día.

Después de un drawdown conviene repasar: qué funcionó, qué no, si se superaron límites. Así el sistema no se rompe, se afina.

## Resumen

En resumen: los puntos clave están arriba; úsalos como checklist práctico y combínalos con gestión de riesgos.

## FAQ

**¿Qué porcentaje de drawdown es normal?**

Para estrategias conservadoras — 10–15%, para moderadas — 15–25%, para agresivas — hasta 30–40%. Lo clave es establecer el límite de antemano y no excederlo.

**¿Cuándo debo apagar el bot?**

Cuando el drawdown alcance el límite prefijado (ej., 20% del depósito). No antes — por emociones, y no después — para no perder todo el depósito.

**¿Qué hago si quiero apagar todo?**

Respira. El drawdown es parte del sistema, no un error. Revisa la diversificación: si otras estrategias están en beneficios, el portafolio general puede estar bien. No tomes decisiones por una vela.

**¿Por qué no se puede promediar siempre?**

Promediar aumenta tu posición en un activo que ya cae. Sin reglas claras, esto lleva rápidamente a pérdidas mayores. Promedia solo según el plan, con límites.

**¿Cómo saber si el drawdown es un error o normal?**

Revisa: se excedieron los límites de riesgo, funcionaron los stops, hubo intervención manual. Si el sistema trabajó según las reglas — es una fase normal del mercado.

## Conclusión

El drawdown es una parte normal del trading. En una cuenta en vivo lo atravesamos siguiendo el plan: no promediamos sin reglas, no lo apagamos todo de golpe, mantenemos límites y diversificación. El objetivo no es mostrar "crecimiento perpetuo" sino un sistema robusto que aguanta subidas y bajadas sin convertir el drawdown en catástrofe. Sobrevivir al drawdown con la cabeza fría y conservar el sistema para el siguiente ciclo de mercado.
