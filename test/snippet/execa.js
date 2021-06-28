import execa from 'execa';
import path from 'path';
import os from 'os';

const binPath = path.join('test/snippet/logger.js');

async function run() {
  const proc = execa.node(binPath);
  proc.stdout.on('data', content => {
    const arr = content.toString().split(os.EOL);
    for (const str of arr) {
      console.info(str);
    }
  });

  proc.stderr.on('data', content => {
    const arr = content.toString().split(os.EOL);
    for (const str of arr) {
      console.error(str);
    }
  });

  await proc;
}

run().catch(console.error);

