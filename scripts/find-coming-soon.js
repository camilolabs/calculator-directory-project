const fs = require('fs');
const path = require('path');

function readFile(rel) {
  const p = path.resolve(process.cwd(), rel);
  return fs.readFileSync(p, 'utf8');
}

// Extract the object slice for calculatorConfigs
function extractConfigsSlice(text) {
  const startIdx = text.indexOf('export const calculatorConfigs');
  if (startIdx === -1) throw new Error('calculatorConfigs export not found');
  const braceStart = text.indexOf('{', startIdx);
  let depth = 0;
  let end = braceStart;
  for (let i = braceStart; i < text.length; i++) {
    const ch = text[i];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  return text.slice(braceStart, end + 1);
}

// Get calculator config keys from the slice
function getConfigIds(textSlice) {
  const ids = new Set();
  const re = /^\s*(?:"([^"\n]+)"|([a-z0-9-]+))\s*:\s*\{/gm;
  let m;
  while ((m = re.exec(textSlice)) !== null) {
    const key = m[1] || m[2];
    // Skip obvious non-calculator keys if any (none expected in slice)
    ids.add(key);
  }
  return ids;
}

// Extract calculators from calculator-data.ts
function getAllCalculators(dataText) {
  const calculators = [];
  // Find each calculators: [ ... ] block
  const blockRe = /calculators:\s*\[/g;
  let blockMatch;
  while ((blockMatch = blockRe.exec(dataText)) !== null) {
    const start = blockMatch.index;
    // Find matching closing bracket ']' for this array
    let depth = 0;
    let end = start;
    for (let i = start; i < dataText.length; i++) {
      const ch = dataText[i];
      if (ch === '[') depth++;
      else if (ch === ']') {
        depth--;
        if (depth === 0) { end = i; break; }
      }
    }
    const arrayText = dataText.slice(start, end + 1);
    // Split into objects by '},' boundary (roughly)
    const objTexts = arrayText.split(/\},\s*\{/).map((t) => t.replace(/^.*\{/, '{'));
    for (const objText of objTexts) {
      const idMatch = objText.match(/id:\s*"([^"]+)"/);
      const nameMatch = objText.match(/name:\s*"([^"]+)"/);
      const catMatch = objText.match(/category:\s*"([^"]+)"/);
      if (idMatch && catMatch) {
        calculators.push({ id: idMatch[1], name: nameMatch ? nameMatch[1] : idMatch[1], category: catMatch[1] });
      }
    }
  }
  // Deduplicate in case of overlaps
  const dedup = new Map();
  for (const c of calculators) {
    dedup.set(`${c.category}:${c.id}`, c);
  }
  return Array.from(dedup.values());
}

function main() {
  const dataText = readFile('src/lib/calculator-data.ts');
  const configsText = readFile('src/lib/calculator-configs.ts');

  const slice = extractConfigsSlice(configsText);
  const configIds = getConfigIds(slice);
  const calculators = getAllCalculators(dataText);

  const missing = calculators.filter(c => !configIds.has(c.id));

  const result = missing.map(c => ({
    id: c.id,
    name: c.name,
    category: c.category,
    path: `/calculators/${c.category}/${c.id}`,
  }));

  const outDir = path.resolve(process.cwd(), 'tmp');
  try { fs.mkdirSync(outDir); } catch {}
  const outFile = path.join(outDir, 'coming-soon.json');
  fs.writeFileSync(outFile, JSON.stringify({ count: result.length, items: result }, null, 2), 'utf8');

  console.log(`Found ${result.length} calculators without config.`);
  for (const r of result) {
    console.log(`${r.category}/${r.id} -> ${r.path}`);
  }
  console.log(`\nWritten: ${outFile}`);
}

main();