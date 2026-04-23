# RSVP personalizado con Google Sheets

Este proyecto usa un formulario propio dentro de la invitacion y un backend opcional en Google Apps Script para:

- guardar respuestas en Google Sheets
- enviar una notificacion por correo

## 1. Crear la hoja

1. Crea una hoja nueva en Google Sheets.
2. Copia el ID desde la URL:

`https://docs.google.com/spreadsheets/d/ESTE_ES_EL_ID/edit`

## 2. Crear el script

1. Abre la hoja.
2. Ve a `Extensiones` -> `Apps Script`.
3. Reemplaza el contenido por [Code.gs](D:/Diego/Invitaciones/integrations/google-apps-script/Code.gs).
4. Cambia `SPREADSHEET_ID` por el ID real de tu hoja.
5. Guarda.

## 3. Publicar como Web App

1. Haz clic en `Implementar`.
2. Elige `Nueva implementacion`.
3. Tipo: `Aplicacion web`.
4. Ejecutar como: tu cuenta.
5. Acceso: `Cualquiera`.
6. Copia la URL terminada en `/exec`.

## 4. Configurar el sitio

Pega la URL en [rsvp-config.js](D:/Diego/Invitaciones/rsvp-config.js):

```js
window.RSVP_CONFIG = {
  endpoint: "AQUI_LA_URL_DE_TU_WEB_APP",
};
```

## 5. Ver las respuestas

Las respuestas quedan en Google Sheets y desde ahi puedes:

- revisarlas online
- descargarlas como Excel
