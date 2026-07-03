const fs = require('fs');
const path = require('path');
const https = require('https');

const envPath = path.resolve(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const token = envContent.split('\n').find(l => l.trim().startsWith('HF_TOKEN='))?.split('=')[1]?.trim();
if (!token) { console.error('HF_TOKEN not found'); process.exit(1); }
console.log('Token:', token.slice(0,5) + '...' + token.slice(-4));

const OUT = path.resolve(__dirname, '..', 'public', 'images');

function generate(filename, prompt) {
  return new Promise((resolve) => {
    const outPath = path.join(OUT, filename);
    if (fs.existsSync(outPath)) { console.log('SKIP', filename); resolve(); return; }
    
    const data = JSON.stringify({ inputs: prompt, parameters: { num_inference_steps: 4 } });
    const opts = {
      hostname: 'router.huggingface.co',
      path: '/hf-inference/models/black-forest-labs/FLUX.1-schnell',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
      timeout: 30000
    };
    const req = https.request(opts, (res) => {
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => {
        const buf = Buffer.concat(chunks);
        if (res.statusCode === 200) {
          fs.writeFileSync(outPath, buf);
          console.log('OK', filename, '(' + buf.length + ' bytes)');
        } else {
          console.log('FAIL', filename, res.statusCode, buf.toString('utf8').slice(0,120));
        }
        resolve();
      });
    });
    req.on('error', e => { console.log('ERR', filename, e.message); resolve(); });
    req.write(data);
    req.end();
  });
}

async function run() {
  const images = [
    ['ds-demo-work-1.jpg', 'Stunning 3D interactive web experience on dark screen, gold UI elements, geometric wireframe in warm gold, dark charcoal background, cinematic lighting'],
    ['ds-demo-work-2.jpg', 'AI neural network in warm gold tones, flowing data streams through dark space, glowing connections, deep charcoal background, cinematic'],
    ['ds-demo-services.jpg', 'Digital services: glowing gold nodes interconnected, floating code, 3D geometric shapes, dark charcoal void, cinematic lighting'],
    ['ds-demo-process.jpg', 'Five glowing gold steps in dark space connected by warm light trails, minimal geometric workflow visualization, deep charcoal'],
    ['ds-demo-about.jpg', 'Minimalist digital workspace, warm ambient gold lighting, abstract geometric shapes, dark charcoal, elegant professional cinematic'],
    ['ds-demo-contact.jpg', 'Abstract glowing golden portal in dark void, warm light emanating, minimal geometric frame, deep charcoal, cinematic'],
    ['ds-demo-bg-atmo.jpg', 'Warm abstract atmosphere, subtle golden gradients, deep charcoal to warm cream transition, cinematic environmental background']
  ];
  
  for (const [fn, prompt] of images) {
    console.log('GEN', fn + '...');
    await generate(fn, prompt);
    await new Promise(r => setTimeout(r, 1500));
  }
  console.log('DONE');
}

run();
