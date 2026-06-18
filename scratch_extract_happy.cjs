const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'src', 'assets', 'happy_customers.svg');
if (fs.existsSync(svgPath)) {
  const content = fs.readFileSync(svgPath, 'utf8');
  const match = content.match(/xlink:href=["']data:image\/(png|jpeg|webp|jpg);base64,([^"']+)["']/);
  if (match) {
    const ext = match[1];
    const base64Data = match[2];
    const outDir = 'C:/Users/admin/.gemini/antigravity-ide/brain/8537813d-0dad-40d4-b554-50ee0be6279c';
    const outPath = path.join(outDir, 'happy_customers.' + ext);
    fs.writeFileSync(outPath, Buffer.from(base64Data, 'base64'));
    console.log('Successfully wrote happy_customers image to:', outPath);
  } else {
    console.log('No base64 image tag found in happy_customers.svg');
  }
} else {
  console.log('happy_customers.svg does not exist');
}
