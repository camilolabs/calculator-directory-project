const fs = require('fs');
const path = require('path');

function generateSimpleIco(width = 16, height = 16) {
  const ICONDIR_SIZE = 6;
  const ICONDIRENTRY_SIZE = 16;
  const BMP_HEADER_SIZE = 40;

  const xorSize = width * height * 4; // 32bpp BGRA
  const andRowBytes = Math.ceil(width / 32) * 4; // 1bpp rows padded to 4 bytes
  const andSize = andRowBytes * height;
  const bytesInRes = BMP_HEADER_SIZE + xorSize + andSize;
  const imageOffset = ICONDIR_SIZE + ICONDIRENTRY_SIZE;

  // ICONDIR
  const iconDir = Buffer.alloc(ICONDIR_SIZE);
  iconDir.writeUInt16LE(0, 0); // reserved
  iconDir.writeUInt16LE(1, 2); // type = 1 (icon)
  iconDir.writeUInt16LE(1, 4); // count = 1

  // ICONDIRENTRY
  const entry = Buffer.alloc(ICONDIRENTRY_SIZE);
  entry.writeUInt8(width, 0); // width
  entry.writeUInt8(height, 1); // height
  entry.writeUInt8(0, 2); // color count
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bit count
  entry.writeUInt32LE(bytesInRes, 8); // bytes in resource
  entry.writeUInt32LE(imageOffset, 12); // image offset

  // BITMAPINFOHEADER (for ICO, height is doubled to include AND mask)
  const bmp = Buffer.alloc(BMP_HEADER_SIZE);
  bmp.writeUInt32LE(BMP_HEADER_SIZE, 0); // biSize
  bmp.writeInt32LE(width, 4); // biWidth
  bmp.writeInt32LE(height * 2, 8); // biHeight (XOR + AND)
  bmp.writeUInt16LE(1, 12); // biPlanes
  bmp.writeUInt16LE(32, 14); // biBitCount
  bmp.writeUInt32LE(0, 16); // biCompression = BI_RGB
  bmp.writeUInt32LE(xorSize, 20); // biSizeImage
  bmp.writeInt32LE(0, 24); // biXPelsPerMeter
  bmp.writeInt32LE(0, 28); // biYPelsPerMeter
  bmp.writeUInt32LE(0, 32); // biClrUsed
  bmp.writeUInt32LE(0, 36); // biClrImportant

  // XOR mask: solid color (BGRA). We'll use a simple blue square.
  const xor = Buffer.alloc(xorSize);
  for (let i = 0; i < xorSize; i += 4) {
    xor[i] = 0xFF;     // B
    xor[i + 1] = 0x00; // G
    xor[i + 2] = 0x00; // R
    xor[i + 3] = 0xFF; // A (opaque)
  }

  // AND mask: all zeros (no transparency beyond alpha channel)
  const and = Buffer.alloc(andSize, 0x00);

  return Buffer.concat([iconDir, entry, bmp, xor, and]);
}

function main() {
  const outPath = path.join(process.cwd(), 'src', 'app', 'favicon.ico');
  const ico = generateSimpleIco(16, 16);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, ico);
  console.log(`Generated favicon.ico at ${outPath}`);
}

if (require.main === module) {
  main();
}