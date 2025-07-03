# 📡 Backend - NOC (Network Operations Center)

🚀 ¿Qué hace esta app?
Verifica servicios o endpoints automáticamente con tareas cron.

Registra logs y resultados en consola o archivos.

Sigue principios de separación de responsabilidades.

Es base para integrarse con dashboards u otros sistemas.

📦 Tecnologías
Node.js

TypeScript

Clean Architecture

Tareas programadas (cron jobs)

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


Terminal logs / Archivos de logs
![image](https://github.com/user-attachments/assets/f7442107-84c9-4a47-81ec-df04f3f3c8a1)
![image](https://github.com/user-attachments/assets/03251cdc-6baa-4ebd-8d29-0bc8fdf2fe7b)



