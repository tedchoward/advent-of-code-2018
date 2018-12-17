const PATTERN = /(>|<|\^|v)/;

class Track {
  private _rows: string[];
  private _carts: Cart[] = [];

  get carts() {
    return this._carts;
  }

  constructor(track: string) {
    this._rows = track.split(/\n/);
    for (let y = 0, numRows = this._rows.length; y < numRows; y++) {
      const row = this._rows[y];
      for (let x = 0, numCols = row.length; x < numCols; x++) {
        const loc = row[x];
        if (PATTERN.test(loc)) {
          const [_, dir] = PATTERN.exec(loc);
          this._carts.push(new Cart(x, y, dir as Direction));
        }
      }
    }

    const onlyTrack = track.replace(/<|>/g, '-').replace(/\^|v/g, '|');
    this._rows = onlyTrack.split(/\n/);
  }

  getLocation(col: number, row: number): TrackLocation {
    return this._rows[row][col] as TrackLocation;
  }

  tick() {
    this._carts.sort((a, b) => {
      const rowDiff = b.row - a.row;
      if (rowDiff !== 0) {
        return rowDiff;
      }

      return b.col - a.col;
    });

    const points = new Map(this._carts.map<[string, Cart]>(c => [`${c.col},${c.row}`, c]));

    let cnt = this._carts.length;
    while (--cnt >= 0) {
      const cart = this._carts[cnt];
      const loc = this.getLocation(cart.col, cart.row);
      const collision = cart.move(loc, points);
      if (collision) {
        console.log(`Collision detected at ${cart.col},${cart.row} [${this.getLocation(cart.col, cart.row)}]`);
      }
    }

    this._carts = this._carts.filter(c => !c.crashed);

    if (this._carts.length === 1) {
      const cart = this._carts[0];
      return cart;
    }

    return null;
  }

  print() {
    console.log(this._rows.join('\n'));
  }
}

type Direction = '>' | '<' | '^' | 'v';
type Turn = 'left' | 'straight' | 'right';
type TrackLocation = '|' | '-' | '\\' | '/' | '+';

class Cart {
  private _nextTurn: Turn = 'left';
  crashed = false;

  get col() {
    return this._col;
  }

  get row() {
    return this._row;
  }

  constructor(private _col: number, private _row: number, private _direction: Direction) {}

  move(location: TrackLocation, points: Map<string, Cart>) {
    const { row, col } = this;
    this.adjust(location);
    this.increment();

    if (points.has(`${this._col},${this._row}`)) {
      this.crashed = true;
      points.get(`${this._col},${this._row}`).crashed = true;
      return true;
    }

    points.delete(`${col},${row}`);
    points.set(`${this._col},${this._row}`, this);
    return false;
  }

  private getNextTurn() {
    const nextTurn = this._nextTurn;
    switch (nextTurn) {
      case 'left':
        this._nextTurn = 'straight';
        break;
      case 'straight':
        this._nextTurn = 'right';
        break;
      case 'right':
        this._nextTurn = 'left';
        break;
      default:
        throw new Error('Invalid State');
    }

    return nextTurn;
  }

  private adjust(location: TrackLocation) {
    switch (location) {
      case '\\':
        switch (this._direction) {
          case '>':
            this._direction = 'v';
            break;
          case '<':
            this._direction = '^';
            break;
          case 'v':
            this._direction = '>';
            break;
          case '^':
            this._direction = '<';
            break;
        }
        break;

      case '/':
        switch (this._direction) {
          case '>':
            this._direction = '^';
            break;
          case '<':
            this._direction = 'v';
            break;
          case 'v':
            this._direction = '<';
            break;
          case '^':
            this._direction = '>';
            break;
        }
        break;

      case '+': {
        const turn = this.getNextTurn();
        switch (turn) {
          case 'left':
            switch (this._direction) {
              case '>':
                this._direction = '^';
                break;
              case '<':
                this._direction = 'v';
                break;
              case 'v':
                this._direction = '>';
                break;
              case '^':
                this._direction = '<';
                break;
            }
            break;
          case 'right':
            switch (this._direction) {
              case '>':
                this._direction = 'v';
                break;
              case '<':
                this._direction = '^';
                break;
              case 'v':
                this._direction = '<';
                break;
              case '^':
                this._direction = '>';
                break;
            }
            break;
        }
      }
    }
  }

  private increment() {
    switch (this._direction) {
      case '>':
        this._col += 1;
        break;
      case '<':
        this._col -= 1;
        break;
      case 'v':
        this._row += 1;
        break;
      case '^':
        this._row -= 1;
        break;
      default:
        throw new Error(`Invalid Direction: ${this._direction}`);
    }
  }
}

export function detectCollisions(state: string) {
  const track = new Track(state);
  console.log('starting with', track.carts.length, 'carts');
  let lastCart: Cart = null;
  while ((lastCart = track.tick()) == null) {}
  return lastCart;
}
