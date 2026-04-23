const SHEET_NAME = "Invitados";
const SPREADSHEET_ID = "1HtNIZh58YLlMmj4vEuZrrxELvprOWQjMPpObvUlo0rg";
const NOTIFICATION_EMAIL = "diego.alvaradozarate@gmail.com";

function doPost(e) {
  try {
    const data = normalizePayload_(e && e.parameter ? e.parameter : {});
    const sheet = getSheet_();

    sheet.appendRow([
      new Date(),
      data.nombre,
      data.apellido,
      data.telefono,
      data.correo,
      data.confirmacion,
      data.mensaje,
      data.source,
    ]);

    sendNotification_(data);
    return jsonResponse_({
      ok: true,
      message: "Confirmacion guardada correctamente.",
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      message: error.message || "No fue posible guardar la confirmacion.",
    });
  }
}

function doGet() {
  return jsonResponse_({
    ok: true,
    message: "RSVP endpoint activo.",
  });
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Fecha registro",
      "Nombre",
      "Apellido",
      "Telefono",
      "Correo",
      "Confirmacion",
      "Mensaje",
      "Origen",
    ]);
  }

  return sheet;
}

function normalizePayload_(payload) {
  const nombre = String(payload.nombre || "").trim();
  const apellido = String(payload.apellido || "").trim();
  const telefono = String(payload.telefono || "").trim();
  const correo = String(payload.correo || "").trim();
  const confirmacion = String(payload.confirmacion || "").trim();
  const mensaje = String(payload.mensaje || "").trim();
  const source = String(payload.source || "website").trim();

  if (!nombre) {
    throw new Error("Falta el nombre.");
  }

  if (!apellido) {
    throw new Error("Falta el apellido.");
  }

  if (!telefono) {
    throw new Error("Falta el telefono.");
  }

  if (!correo) {
    throw new Error("Falta el correo.");
  }

  if (!confirmacion) {
    throw new Error("Falta la confirmacion.");
  }

  return {
    nombre,
    apellido,
    telefono,
    correo,
    confirmacion,
    mensaje,
    source,
  };
}

function sendNotification_(data) {
  const subject = "Nueva confirmacion: " + data.nombre + " " + data.apellido;
  const body = [
    "Se registro una nueva respuesta en la invitacion.",
    "",
    "Nombre: " + data.nombre,
    "Apellido: " + data.apellido,
    "Telefono: " + data.telefono,
    "Correo: " + data.correo,
    "Confirmacion: " + data.confirmacion,
    "Mensaje: " + (data.mensaje || "(sin mensaje)"),
    "Origen: " + data.source,
  ].join("\n");

  GmailApp.sendEmail(NOTIFICATION_EMAIL, subject, body);
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
