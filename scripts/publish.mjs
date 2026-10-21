import { copyFileSync, mkdirSync } from 'node:fs';
// The published V7 is a static HTML page; keep its editable JSON alongside it.
mkdirSync('public/content', { recursive: true });
copyFileSync('content/site.json', 'public/content/site.json');
console.log('Published CMS JSON to public/content/site.json');
