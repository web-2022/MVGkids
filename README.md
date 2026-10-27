# MVG kids

Juegos educativos para niños, hechos como web/PWA: se abren en el navegador y se pueden instalar en iPad o celular.

## Estructura

```
index.html            Portada con la lista de juegos
manifest.webmanifest  Datos para instalar la app
sw.js                 Funcionamiento sin internet
icon.svg              Ícono de la app
juegos/<id>/          Cada juego en su propia carpeta (por crear)
```

## Agregar un juego

1. Crea la carpeta `juegos/<id>/` con su `index.html`.
2. En `index.html` (lista `JUEGOS`), cambia `listo: false` a `listo: true` para ese juego.
3. Sube la versión en `sw.js` (`mvgkids-v2`, `v3`…).

## Publicar en GitHub Pages

Settings → Pages → Source: rama `main`, carpeta `/ (root)`. La app queda en
`https://web-2022.github.io/MVGkids/`.
