# Proyecto Portafolio

Portafolio personal de **Alejandro — Full Stack Engineer**. Sitio web moderno para presentar proyectos, experiencia, habilidades y contacto, con una interfaz cuidada, animaciones fluidas y arquitectura escalable.

## Características

- **Home interactivo** con hero isométrico, capítulos narrativos y scroll animado
- **Secciones dedicadas**: About, Projects, Experience, Skills, Architecture, Lab, Blog y Contact
- **Design system** propio con componentes reutilizables (Button, Card, Panel, Input, etc.)
- **Tema claro/oscuro** con tokens de diseño centralizados
- **Animaciones** con Framer Motion, GSAP y scroll suave con Lenis
- **SEO** configurado con `react-helmet-async`
- **Formularios** con React Hook Form + Zod
- **Estado global** con Zustand y datos asíncronos con TanStack Query

## Stack tecnológico

| Área | Tecnologías |
|------|-------------|
| Core | React 19, TypeScript, Vite 8 |
| Estilos | Tailwind CSS 4, CSS custom properties |
| Routing | React Router DOM 7 |
| Animación | Framer Motion, GSAP, Lenis |
| Estado | Zustand, TanStack Query |
| Formularios | React Hook Form, Zod |
| UI | Lucide React, Sonner |
| Calidad | ESLint, Prettier, Oxlint |

## Estructura del proyecto

```
src/
├── animations/       # Presets, variantes y animaciones de scroll
├── app/              # App root, providers y tema
├── components/
│   ├── common/       # Layout, SEO, transiciones, loading
│   ├── design-system/# Componentes UI reutilizables
│   └── hero/         # Hero header, gráfico isométrico, status bar
├── config/           # App, rutas y SEO
├── hooks/            # useTheme, useLenis, useMediaQuery
├── layouts/          # RootLayout, MainLayout
├── pages/            # Páginas de cada sección
├── router/           # Definición de rutas
├── services/         # Capa de API
├── store/            # Stores de Zustand
├── styles/           # Tokens, temas y utilidades CSS
├── types/            # Tipos compartidos
└── utils/            # Helpers (cn, formatDate, etc.)
```

## Requisitos

- Node.js 20+
- npm 10+

## Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/alejandro34710/Proyecto-Portafolio.git
cd Proyecto-Portafolio

# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview

# Lint y formato
npm run lint
npm run format
```

## Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia Vite en modo desarrollo |
| `npm run build` | Compila TypeScript y genera el build |
| `npm run preview` | Sirve el build de producción localmente |
| `npm run lint` | Ejecuta ESLint |
| `npm run format` | Formatea archivos con Prettier |

## Rutas

| Ruta | Sección |
|------|---------|
| `/` | Home |
| `/about` | Sobre mí |
| `/projects` | Proyectos |
| `/projects/:slug` | Detalle de proyecto |
| `/experience` | Experiencia |
| `/skills` | Habilidades |
| `/architecture` | Arquitectura |
| `/lab` | Lab |
| `/blog` | Blog |
| `/contact` | Contacto |

## Autor

**Alejandro** — Full Stack Engineer

- GitHub: [@alejandro34710](https://github.com/alejandro34710)

## Licencia

Proyecto privado. Todos los derechos reservados.
