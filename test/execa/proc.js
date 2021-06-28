import execa from 'execa';
import os from 'os';
import * as utils from '../utils.js';

export async function run() {
  const binPath = utils.getPath(import.meta, './logger.fixture.js');
  console.log('fork %j', binPath);

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

if (!global.jest) {
 run().catch(console.error);
}
