import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svgContent = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="funui_bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#6366F1"/>
      <stop offset="100%" stop-color="#4338CA"/>
    </linearGradient>
    <linearGradient id="funui_sheen" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0.05"/>
    </linearGradient>
    <linearGradient id="funui_mark" x1="24" y1="10" x2="24" y2="38" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#EEF2FF"/>
    </linearGradient>
    <filter id="funui_shadow" x="6" y="8" width="36" height="36" filterUnits="userSpaceOnUse">
      <feDropShadow dx="0" dy="2" stdDeviation="1.5" flood-color="#1E1B4B" flood-opacity="0.4"/>
    </filter>
  </defs>
  <rect width="48" height="48" rx="12" fill="url(#funui_bg)"/>
  <rect x="1" y="1" width="46" height="46" rx="11" stroke="url(#funui_sheen)" stroke-width="2"/>
  <g filter="url(#funui_shadow)">
    <path d="M10.5 10.5C18.1075 17.5803 29.8925 17.5803 37.5 10.5C30.4197 18.1075 30.4197 29.8925 37.5 37.5C29.8925 30.4197 18.1075 30.4197 10.5 37.5C17.5803 29.8925 17.5803 18.1075 10.5 10.5Z" fill="url(#funui_mark)"/>
  </g>
</svg>`;

function createIco(images) {
  const count = images.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = icon
  header.writeUInt16LE(count, 4);

  const dirEntries = [];
  const buffers = [];

  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(img.buffer.length, 8);
    entry.writeUInt32LE(offset, 12);

    dirEntries.push(entry);
    buffers.push(img.buffer);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...buffers]);
}

async function run() {
  const root = process.cwd();
  const publicDir = path.join(root, 'public');
  const appDir = path.join(root, 'src', 'app');

  console.log('Rendering raster sizes from SVG...');
  const svgBuf = Buffer.from(svgContent);

  const [png16, png32, png48, png180, png192, png512] = await Promise.all([
    sharp(svgBuf).resize(16, 16).png().toBuffer(),
    sharp(svgBuf).resize(32, 32).png().toBuffer(),
    sharp(svgBuf).resize(48, 48).png().toBuffer(),
    sharp(svgBuf).resize(180, 180).png().toBuffer(),
    sharp(svgBuf).resize(192, 192).png().toBuffer(),
    sharp(svgBuf).resize(512, 512).png().toBuffer(),
  ]);

  const icoBuf = createIco([
    { width: 16, height: 16, buffer: png16 },
    { width: 32, height: 32, buffer: png32 },
    { width: 48, height: 48, buffer: png48 },
  ]);

  // 1. Write public assets
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgContent, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuf);
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), png16);
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), png32);
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), png180);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), png192);
  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), png512);

  // 2. Write app router conventions
  fs.writeFileSync(path.join(appDir, 'icon.svg'), svgContent, 'utf8');
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuf);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), png180);

  // 3. Web manifest
  const manifest = {
    name: 'Funui Studio',
    short_name: 'Funui Studio',
    description: 'The modern UI library with customizable React and Tailwind CSS components, blocks, and templates.',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ],
    theme_color: '#4F46E5',
    background_color: '#ffffff',
    display: 'standalone'
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2), 'utf8');

  // 4. Update Storybook favicons
  const sbDirs = [
    path.join(publicDir, 'storybook'),
    path.join(publicDir, 'storybook', 'sb-common-assets')
  ];
  for (const dir of sbDirs) {
    if (fs.existsSync(dir)) {
      fs.writeFileSync(path.join(dir, 'favicon.svg'), svgContent, 'utf8');
      fs.writeFileSync(path.join(dir, 'favicon.ico'), icoBuf);
    }
  }

  // Remove test file if exists
  const testFile = path.join(root, 'scripts', 'test-favicon.mjs');
  if (fs.existsSync(testFile)) {
    fs.unlinkSync(testFile);
  }

  console.log('All favicons and manifest generated successfully!');
}

run().catch(console.error);

