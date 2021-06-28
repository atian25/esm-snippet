import { dirname } from 'dirname-filename-esm';
import path from 'path';

export function getPath(meta, ...p) {
  return path.resolve(dirname(meta), ...p);
}
