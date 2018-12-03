const CLAIM_EXPRESSION = /^#(\d+)\W?@\W?(\d+),(\d+):\W(\d+)x(\d+)$/;

export class Claim {
  hasOverlap = false;

  id: string;
  left: number;
  top: number;
  width: number;
  height: number;

  constructor(claim: string) {
    const [_, id, left, top, width, height] = CLAIM_EXPRESSION.exec(claim);
    this.id = id;
    this.left = parseInt(left, 10);
    this.top = parseInt(top, 10);
    this.width = parseInt(width, 10);
    this.height = parseInt(height, 10);
  }

  overlap(claim: Claim) {
    this.hasOverlap = true;
    claim.hasOverlap = true;
  }
}
