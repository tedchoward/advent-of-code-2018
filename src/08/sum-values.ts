import { Node } from './node';

export function sumValues(root: Node): number {
  if (root.header.childCount === 0) {
    return root.metadata.reduce((a, b) => a + b, 0);
  }

  return root.metadata
    .map(index => {
      const child = root.childNodes[index - 1];
      if (child != null) {
        return sumValues(child);
      }

      return 0;
    })
    .reduce((a, b) => a + b, 0);
}
