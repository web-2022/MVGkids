# MVG Learning (MVGkids)

Plataforma educativa para aprender jugando, de Inicial a Secundaria. Es una web/PWA: se abre en el navegador y se puede instalar en iPad o celular.

## Estructura

```
index.html            Menú principal: niveles y grados
manifest.json         Datos para instalar la app
service-worker.js     Funcionamiento sin internet
icons/                Íconos de la app (192 y 512 px)
```

## Páginas de cada grado (por crear)

El menú enlaza a estas páginas; se definen en la lista `courses` de `index.html`:

| Nivel      | Páginas |
|------------|---------|
| Inicial    | `3years/index3Year.html`, `4years/index4Year.html`, `5years/index5Year.html` |
| Primaria   | `index1Primary.html` … `index6Primary.html` |
| Secundaria | `index1Secondary.html` … `index5Secondary.html` |

## Publicar en GitHub Pages

Settings → Pages → Source: rama `main`, carpeta `/ (root)`. Quedará en
`https://web-2022.github.io/MVGkids/`.

Al publicar cambios grandes, sube la versión de `CACHE` en `service-worker.js`.
