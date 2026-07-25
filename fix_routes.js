const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src').filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let updated = content
    .replace(/\"\/ruang-rupa/g, '"/demo/ruang-rupa')
    .replace(/\"\/kopi-semesta/g, '"/demo/kopi-semesta')
    .replace(/\"\/rapi-barbershop/g, '"/demo/rapi-barbershop')
    .replace(/href=\{\`\/\$\{item.slug\}\`\}/g, 'href={`/demo/${item.slug}`}');
    
  if (content !== updated) {
    fs.writeFileSync(f, updated, 'utf8');
    console.log('Updated ' + f);
  }
});
