const LOG_ENTRY_PATTERN = /^\[(.*)\] (.*)$/;
const GUARD_ID_PATTERN = /^\[.*\] Guard #(\d+) begins shift$/;
const FALLS_ASLEEP_PATTERN = /^\[.*\] falls asleep$/;
const WAKES_UP_PATTERN = /^\[.*\] wakes up$/;

let lastGuardId = -1;

export enum EntryType {
  GuardId,
  FallAsleep,
  WakeUp
}

export function parseEntry(entry: string) {
  if (GUARD_ID_PATTERN.test(entry)) {
    return new GuardIdEntry(entry);
  }

  if (FALLS_ASLEEP_PATTERN.test(entry)) {
    return new FallAsleepEntry(entry);
  }

  if (WAKES_UP_PATTERN.test(entry)) {
    return new WakeUpEntry(entry);
  }

  throw new Error(`Cannot determine type for Entry: '${entry}`);
}

export abstract class LogEntry {
  readonly type: EntryType;
  readonly timestamp: Date;
  readonly message: string;
  readonly guardId: number;

  constructor(entryString: string) {
    const [match, timestamp, message] = LOG_ENTRY_PATTERN.exec(entryString);
    this.timestamp = new Date(`${timestamp}Z`);
    this.message = message;
    this.guardId = this.getGuardId();
  }

  protected getGuardId() {
    return lastGuardId;
  }
}

export class GuardIdEntry extends LogEntry {
  readonly type = EntryType.GuardId;

  constructor(entryString: string) {
    super(entryString);
  }

  getGuardId() {
    const [match, id] = /^Guard #(\d+) begins shift$/.exec(this.message);
    lastGuardId = parseInt(id, 10);
    return lastGuardId;
  }
}

export class WakeUpEntry extends LogEntry {
  readonly type = EntryType.WakeUp;
  public get minute() {
    return this.timestamp.getMinutes();
  }
}

export class FallAsleepEntry extends LogEntry {
  readonly type = EntryType.FallAsleep;
  public get minute() {
    return this.timestamp.getMinutes();
  }
}
