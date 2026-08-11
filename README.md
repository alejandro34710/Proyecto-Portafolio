# Proyecto Portafolio

Portafolio personal de **Alejandro — Full Stack Product Engineer**. La experiencia presenta producto, frontend, backend, datos, cloud e inteligencia artificial como partes de un mismo sistema profesional.

## Dirección visual

- Design system semántico con interpretaciones completas light/dark.
- Identidad tecnológica azul/cian, superficies de profundidad controlada y líneas técnicas.
- Home editorial con hero, proyectos seleccionados, capabilities, stack, proceso, perfil y contacto.
- Casos de estudio con metadata, arquitectura y disclosure para productos privados.
- Navegación bilingüe ES/EN, responsive real y soporte para `prefers-reduced-motion`.

## Stack

| Área        | Tecnologías                           |
| ----------- | ------------------------------------- |
| Core        | React 19, TypeScript, Vite 8          |
| Estilos     | Tailwind CSS 4, CSS custom properties |
| Routing     | React Router DOM 7                    |
| Motion      | Motion, Framer Motion, GSAP, Lenis    |
| Estado      | Zustand                               |
| Formularios | React Hook Form, Zod                  |
| UI          | Lucide React, Sonner                  |
| Calidad     | ESLint, Prettier, TypeScript          |

## Rutas activas

| Ruta              | Sección                 |
| ----------------- | ----------------------- |
| `/`               | Narrativa principal     |
| `/projects`       | Trabajo seleccionado    |
| `/projects/:slug` | Caso de estudio         |
| `/experience`     | Experiencia verificable |
| `/stack`          | Stack y capacidades     |
| `/about`          | Perfil y principios     |
| `/contact`        | Canales de contacto     |

## Assets y placeholders

- `public/Formas/`: visuales técnicos propios usados como material de exploración y soporte.
- `public/Referencias/`: referencias de dirección artística; no se cargan en producción.
- Los mockups que aparecen cuando un proyecto no tiene `cover`, `poster` o `video` son composiciones CSS/HTML temporales y están marcados como representaciones de producto privado.
- Los campos `null` de `src/data/projects.ts`, `src/data/experience.ts` y `src/config/contact.config.ts` son placeholders explícitos. Deben sustituirse únicamente por información real; el sitio no inventa métricas, experiencia ni enlaces.

## Desarrollo

```bash
npm install
npm run dev
npm run build
npm run lint
```

Proyecto privado. Todos los derechos reservados.
