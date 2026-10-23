import { readFile, access, readdir } from 'node:fs/promises';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const base = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(base, 'dist');
for (const file of ['app.js', 'work.js', 'episodes.js', 'fx.js']) {
  const result = spawnSync(process.execPath, ['--check', path.join(dist,file)], { encoding: 'utf8' });
  if (result.status !== 0) throw new Error(result.stderr);
}
const files = await readdir(dist);
let checked = 0;
for (const file of files.filter(name => name.endsWith('.html'))) {
  const html = await readFile(path.join(dist,file),'utf8');
  for (const [,url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (/^(?:#|https?:|mailto:|about:)/.test(url)) continue;
    await access(path.join(dist,url.split(/[?#]/)[0]));
    checked++;
  }
  for (const [,anchor] of html.matchAll(/href="#([^"]+)"/g)) {
    if (!html.includes(`id="${anchor}"`)) throw new Error(`Broken anchor #${anchor} in ${file}`);
  }
}
const fonts = await readFile(path.join(dist,'assets/fonts/fonts.css'),'utf8');
for (const [,file] of fonts.matchAll(/url\(([^)]+)\)/g)) await access(path.join(dist,'assets/fonts',file));
console.log(`Build verified: JavaScript syntax, ${checked} local asset/page references, section anchors, and all local fonts.`);
