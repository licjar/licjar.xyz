import fs from 'node:fs';

// 実際の地図画像に合わせて書き換えてください
const MAP_IMAGE_PATH = '../map.svg';
const W = 2520.631; 
const H = 1260.315;  

const csvData = fs.readFileSync('src/data/cities.csv', 'utf-8');
const cities = csvData.trim().split('\n').map(line => {
  const [n, name, latStr, lngStr] = line.split(',');
  return { name, lat: parseFloat(latStr), lng: parseFloat(lngStr) };
});

const circles = cities.map(city => {
  const x = W * (city.lng + 180) / 360;
  const y = H * (90 - city.lat) / 180;
  
  return `<circle cx="${x}" cy="${y}" r="3" fill="red" opacity="0.6">
            <title>${city.name}</title>
          </circle>`;
}).join('\n');

const html = `
<!DOCTYPE html>
<html lang="ja">
<head><meta charset="UTF-8"><title>Cities Map Test</title></head>
<body style="margin: 0; background-color: #222;">
  <div style="position: relative; width: ${W}px; height: ${H}px;">
    <img src="${MAP_IMAGE_PATH}" width="${W}" height="${H}" style="position: absolute; top: 0; left: 0;"/>
    <svg width="${W}" height="${H}" style="position: absolute; top: 0; left: 0;">
      ${circles}
    </svg>
  </div>
</body>
</html>
`;

fs.writeFileSync('scripts/output/map_test_output.html', html);