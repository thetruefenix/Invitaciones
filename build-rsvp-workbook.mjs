import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const projectRoot = "D:/Diego/Invitaciones";
const outputDir = path.join(projectRoot, "outputs");
const outputPath = path.join(outputDir, "invitados-rsvp.xlsx");

const csv = [
  "Fecha registro,Nombre,Apellido,Contacto,Confirmacion,Mensaje,Origen",
].join("\n");

const workbook = await Workbook.fromCSV(csv, { sheetName: "Invitados" });

await fs.mkdir(outputDir, { recursive: true });
const exported = await SpreadsheetFile.exportXlsx(workbook);
await exported.save(outputPath);

console.log(outputPath);
