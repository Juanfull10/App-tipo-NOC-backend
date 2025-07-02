# 📡 Backend - NOC (Network Operations Center)

Este proyecto es una aplicación backend desarrollada en **Node.js + TypeScript**, diseñada para ejecutar tareas automáticas de monitoreo y verificación de servicios en una arquitectura inspirada en **Clean Architecture**. Puede ser usada como parte de un sistema completo de monitoreo (NOC Dashboard).

---

## 📦 Tecnologías principales

- Node.js
- TypeScript
- Clean Architecture
- Cron (tareas programadas)
- Terminal logs / consola
- Modularización por capas (`domain`, `use-cases`, `presentation`, etc.)

---

![image](https://github.com/user-attachments/assets/f7442107-84c9-4a47-81ec-df04f3f3c8a1)

## 🧱 Estructura del proyecto

```bash
src/
├── app.ts                     # Punto de entrada principal
├── domain/
│   └── use-cases/             # Casos de uso (ej. check-service.ts)
├── presentation/
│   ├── server.ts              # Inicio de servidor si aplica
│   └── cron/                  # Tareas programadas (cron-services.ts)

