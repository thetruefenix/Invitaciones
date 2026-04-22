# RSVP con Google Sheets + Gmail

Esta integracion recibe confirmaciones desde la web, las guarda en una hoja de Google Sheets y envia un correo a:

`diego.alvaradozarate@gmail.com`

## Pasos

1. Crea una hoja nueva en Google Sheets.
2. Ve a `Extensions` -> `Apps Script`.
3. Reemplaza el contenido del script por [Code.gs](D:/Diego/Invitaciones/integrations/google-apps-script/Code.gs).
4. Guarda el proyecto.
5. Haz clic en `Deploy` -> `New deployment`.
6. Elige `Web app`.
7. Ejecutar como: tu cuenta de Google.
8. Acceso: `Anyone`.
9. Copia la URL del deployment.

## Conectar la web

Pega la URL en [rsvp-config.js](D:/Diego/Invitaciones/rsvp-config.js):

```js
window.RSVP_CONFIG = {
  endpoint: "AQUI_LA_URL_DE_TU_WEB_APP",
};
```

## Resultado

- Cada confirmacion se agrega a la hoja `Invitados`
- Se envia una notificacion por Gmail al correo configurado
- Puedes revisar la hoja desde tu computador y exportarla como Excel si lo necesitas
