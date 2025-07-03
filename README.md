# 📡 Backend - NOC (Network Operations Center)

Este proyecto es una aplicación backend desarrollada en **Node.js + TypeScript**, diseñada para realizar tareas automáticas de monitoreo de servicios. Utiliza una arquitectura basada en **Clean Architecture**, lo que permite un sistema escalable, mantenible y bien estructurado.

---

## 🧱 Arquitectura limpia implementada

El proyecto sigue los principios de **Clean Architecture**, separando claramente cada responsabilidad:


## 🧱 Estructura del proyecto

```bash
src/
├── app.ts                          # Punto de entrada principal
├── domain/
│   ├── entities/                   # Modelos de dominio (interfaces puras)
│   ├── repository/                 # Contratos (interfaces) que definen qué debe hacer la capa de datos
│   ├── use-cases/                  # Casos de uso: lógica de negocio
│   └── datasources/               # Interfaces para fuentes de datos específicas
├── infrastructure/                # Implementaciones de repositorios y fuentes de datos reales (ej: APIs, archivos)
├── presentation/
│   ├── server.ts                   # Arranque del servidor
│   └── cron/                       # Tareas programadas (ej: chequeo de servicios)
├── logs/                          # Carpeta para almacenar logs del sistema
└── tsconfig.json
```
![image](https://github.com/user-attachments/assets/f7442107-84c9-4a47-81ec-df04f3f3c8a1)

