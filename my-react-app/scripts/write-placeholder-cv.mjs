/**
 * Writes a minimal valid PDF to public/cv.pdf (no dependencies).
 * Replace that file with your real exported résumé when ready.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, "..", "public", "cv.pdf");

const text =
  "Placeholder CV - replace this file with your real PDF in my-react-app/public/cv.pdf";
const streamBody = `BT /F1 12 Tf 72 720 Td (${text}) Tj ET\n`;
const streamLen = Buffer.byteLength(streamBody, "utf8");

const objects = [
  "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
  "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
  "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >> >>\nendobj\n",
  `4 0 obj\n<< /Length ${streamLen} >>\nstream\n${streamBody}endstream\nendobj\n`,
];

let pdf = "%PDF-1.4\n";
const objOffsets = [];
for (const o of objects) {
  objOffsets.push(Buffer.byteLength(pdf, "binary"));
  pdf += o;
}

const xrefPos = Buffer.byteLength(pdf, "binary");
const pad = (n) => String(n).padStart(10, "0");
const count = 5;
let xref = `xref\n0 ${count}\n`;
xref += `${pad(0)} 65535 f \n`;
for (let i = 0; i < 4; i++) {
  xref += `${pad(objOffsets[i])} 00000 n \n`;
}
pdf += xref;
pdf += `trailer\n<< /Size ${count} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF`;

fs.writeFileSync(out, pdf, "binary");
const check = fs.readFileSync(out);
console.log("Wrote", out, check.length, "bytes", check.subarray(0, 8).toString());
