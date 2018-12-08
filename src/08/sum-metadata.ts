import { Node } from './node';

export function sumMetadata(root: Node): number {
  return (
    root.metadata.reduce((a, b) => a + b, 0) + root.childNodes.map(node => sumMetadata(node)).reduce((a, b) => a + b, 0)
  );
}
