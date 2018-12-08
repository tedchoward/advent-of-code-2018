import { Node } from './node';

export function parser(input: number[]) {
  let index = 0;
  return parseNode();

  function parseNode(): Node {
    const childCount = input[index];
    index += 1;
    const metadataCount = input[index];
    index += 1;

    const childNodes = [];
    for (let i = 0; i < childCount; i++) {
      childNodes.push(parseNode());
    }

    const metadata = [];
    for (const cnt = index + metadataCount; index < cnt; index++) {
      metadata.push(input[index]);
    }

    return {
      header: { childCount, metadataCount },
      childNodes,
      metadata
    };
  }
}
