# Parcela Web Site

Este sitio web está construido con Eleventy (11ty), un generador de sitios estáticos.

## Desarrollo

Para desarrollar localmente:

```bash
npm install
npm start
```

Esto iniciará un servidor de desarrollo en `http://localhost:8080` con recarga automática.

## Construcción

Para construir el sitio para producción:

```bash
npm run build
```

Los archivos generados estarán en la carpeta `_site`.

## Estructura

- `index.html`: Página principal
- `galeria.html`: Página de galería
- `assets/`: Archivos estáticos (imágenes, etc.)
- `.eleventy.js`: Configuración de Eleventy