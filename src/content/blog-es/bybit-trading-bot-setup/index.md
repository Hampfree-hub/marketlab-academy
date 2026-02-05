---
title: 'Cómo configurar un bot de trading en Bybit'
description: 'Guía paso a paso: crear API keys de forma segura, conectar un bot, elegir estrategia y lanzar automatización en Bybit.'
pubDate: '2026-01-25'
category: 'algo-trading'
draft: true
---

Automatizar en Bybit permite operar 24/7 sin monitorear el mercado todo el tiempo. Esta guía es para conectar **plataformas o servicios externos** de bots a Bybit vía API; las herramientas integradas de Bybit en la web no requieren API keys. Puedes usar los bots integrados de Bybit o conectar bots de otras plataformas de automatización — por ejemplo [Veles](https://veles.finance/invite/washmallay) (enlace de referido: registrarte por él beneficia a ambos). Si conectas una plataforma externa y necesitas ayuda, escríbenos; contactos en la página [Sobre el proyecto](/es/about/).

Qué necesitas, cómo crear API keys, conectarlas a tu plataforma y qué errores evitar.

## Qué necesitas

- cuenta Bybit verificada
- fondos para trading y comisiones
- **API keys** (para conectar un bot o plataforma externa a Bybit)
- una estrategia (grid/DCA) y reglas de riesgo

## Paso 1: Cuenta y verificación

Regístrate y completa KYC para tener mejores límites y acceso a funciones.

## Paso 2: Depositar fondos

Deposita (habitualmente USDT/USDC) y transfiere al wallet de trading si hace falta.

## Paso 3: Crear API key (seguridad crítica)

En Bybit:

1. abre **API**
2. crea una clave nueva (p.ej. “Trading Bot”)
3. permisos:
   - ✅ trading (Spot/Margin, Futures si aplica)
   - ❌ **Withdrawals siempre desactivado**

Si puedes, restringe por IP (solo tu servidor).

## Paso 4: Conectar la API al bot

En la plataforma del bot:

- selecciona Bybit
- pega **API Key** y **API Secret**
- guarda y verifica conexión

## Paso 5: Configurar estrategia

Define:

- capital por bot
- parámetros de grid / DCA
- stop-loss / límites de riesgo

Para reglas de riesgo, ver **Gestión de riesgo para bots** (borrador).

## Errores comunes

1. habilitar retiros en la API
2. usar leverage extremo
3. operar pares sin liquidez
4. operar sin stops/límites

