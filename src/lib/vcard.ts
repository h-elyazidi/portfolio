export function downloadVCard() {
  const vcard = `BEGIN:VCARD
VERSION:3.0
N:EL YAZIDI
FN:Habib EL YAZIDI
TITLE:Software Engineering & Startup Operations
TEL;TYPE=CELL:+212 6 11 39 89 41
EMAIL:m.habibelyazidi@gmail.com
URL:https://linkedin.com/in/habib-el-yazidi
NOTE:
END:VCARD`;

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Habib_EL_YAZIDI.vcf";
  a.click();
  URL.revokeObjectURL(url);
}
