import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read .env.local and find HF_TOKEN
const envPath = path.resolve(__dirname, '..', '.env.local');
const envContent = fs.readFileSync(envPath, 'utf8');
const lines = envContent.split('\n');
let token = '';
for (const line of lines) {
  const trimmed = line.trim();
  if (trimmed.startsWith('HF_TOKEN=')) {
    token = trimmed.substring(9).trim();
    break;
  }
}

if (!token) { console.error('HF_TOKEN not found'); process.exit(1); }
console.log('Token:', token.slice(0,5) + '...' + token.slice(-4));

// Try the newer inference endpoint via router.huggingface.co
const hostname = 'router.huggingface.co';
const data = JSON.stringify({
    inputs: "A premium luxury digital studio workspace, warm dark charcoal background, subtle gold lighting accents, abstract geometric shapes floating in dark void, warm cream tones, elegant professional atmosphere, cinematic lighting",
    parameters: { num_inference_steps: 4 }
});

const options = {
    hostname: hostname,
    path: '/hf-inference/models/black-forest-labs/FLUX.1-schnell',
    method: 'POST',
    headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data)
    },
    timeout: 60000
};

console.log('Requesting:', 'https://' + hostname + '/hf-inference/models/black-forest-labs/FLUX.1-schnell');

const req = https.request(options, (res) => {
    console.log('Status:', res.statusCode);
    const chunks = [];
    res.on('data', (chunk) => chunks.push(chunk));
    res.on('end', () => {
        const buf = Buffer.concat(chunks);
        if (res.statusCode === 200) {
            const outPath = path.resolve(__dirname, '..', 'public', 'images', 'ds-demo-hero.jpg');
            fs.writeFileSync(outPath, buf);
            console.log('Saved:', outPath, '(' + buf.length + ' bytes)');
        } else {
            console.log('Response:', buf.toString('utf8').slice(0,600));
        }
    });
});
req.on('error', (e) => console.error('Request error:', e.message));
req.write(data);
req.end();
