// Script to copy SEO data for production builds
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Ensure the server directory exists
const serverDir = path.join(__dirname, '..', 'server');
if (!fs.existsSync(serverDir)) {
  fs.mkdirSync(serverDir, { recursive: true });
}

// Copy the SEO data from client to server for bundling
const sourcePath = path.join(__dirname, '..', 'client', 'src', 'data', 'seo-data.ts');
const targetPath = path.join(__dirname, '..', 'server', 'seo-data-bundled.ts');

try {
  // Copy the file
  fs.copyFileSync(sourcePath, targetPath);
  console.log('✅ SEO data copied successfully for production build');
} catch (error) {
  console.error('❌ Failed to copy SEO data:', error);
  process.exit(1);
}