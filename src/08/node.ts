export interface Node {
  header: {
    childCount: number;
    metadataCount: number;
  };
  childNodes: Node[];
  metadata: number[];
}
