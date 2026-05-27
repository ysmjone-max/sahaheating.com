const fs = require('fs');
async function dl(url, name) {
  try {
    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } });
    if(res.ok) {
      const arr = await res.arrayBuffer();
      fs.writeFileSync('public/' + name, Buffer.from(arr));
      console.log('Downloaded', name);
    } else {
      console.log('Failed', name, res.status);
    }
  } catch (e) {
    console.log('Error', name, e.message);
  }
}
async function run() {
  await dl('https://upload.wikimedia.org/wikipedia/en/e/e8/Gas_Safe_Register_logo.svg', 'gassafe.svg');
  await dl('https://upload.wikimedia.org/wikipedia/en/1/15/Worcester_Bosch_logo.svg', 'worcester.svg');
  await dl('https://upload.wikimedia.org/wikipedia/en/b/ba/Baxi_logo.svg', 'baxi.svg');
  await dl('https://idealheating.com/assets/images/ideal-heating-logo.svg', 'ideal.svg');
}
run();
