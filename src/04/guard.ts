export class Guards {
  private _map = new Map<number, Guard>();

  getGuard(id: number) {
    if (!this._map.has(id)) {
      this._map.set(id, new Guard(id));
    }

    return this._map.get(id);
  }

  getAllGuards() {
    return [...this._map.values()];
  }
}

export class Guard {
  private _minutesSlept = 0;
  private _shiftDate: number;
  private _minuteFellAsleep: number;
  private _sleepLog: number[] = Array(60).fill(0);

  private _sleepiestMinute: number;

  get minutesSlept() {
    return this._minutesSlept;
  }

  constructor(readonly id: number) {}

  startShift(time: Date) {
    this._shiftDate = time.getUTCDate();
    this._minuteFellAsleep = undefined;
  }

  fallAsleep(time: Date) {
    this._minuteFellAsleep = time.getMinutes();
  }

  wakeUp(time: Date) {
    if (this._minuteFellAsleep == null) {
      throw new Error('Guard woke up but never fell asleep.');
    }

    for (let i = this._minuteFellAsleep, cnt = time.getMinutes(); i < cnt; i++) {
      this._sleepLog[i]++;
    }

    this._minutesSlept += time.getMinutes() - this._minuteFellAsleep;
    this._minuteFellAsleep = undefined;
  }

  calculateSleepiestMinute() {
    if (this._sleepiestMinute == null) {
      this._sleepiestMinute = this._sleepLog
        .map((count, index) => ({ count, index }))
        .sort((a, b) => b.count - a.count)[0].index;
    }

    return this._sleepiestMinute;
  }

  getSleepiestMinuteCount() {
    return this._sleepLog[this.calculateSleepiestMinute()];
  }
}
