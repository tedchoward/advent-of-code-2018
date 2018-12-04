import { parseEntry, EntryType } from './log-entry';
import { Guards } from './guard';

export function findSleepiestGuard(log: string[]) {
  const guards = buildGuardsLog(log);

  const guard = guards.getAllGuards().sort((a, b) => b.minutesSlept - a.minutesSlept)[0];
  const minute = guard.calculateSleepiestMinute();

  return { guard: guard.id, minute };
}

export function findSleepiestMinute(log: string[]) {
  const guards = buildGuardsLog(log);

  const guard = guards.getAllGuards().sort((a, b) => b.getSleepiestMinuteCount() - a.getSleepiestMinuteCount())[0];

  return { guard: guard.id, minute: guard.calculateSleepiestMinute() };
}

function buildGuardsLog(log: string[]) {
  const guards = new Guards();

  log.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  const logEntries = log.map(parseEntry);

  for (const entry of logEntries) {
    switch (entry.type) {
      case EntryType.GuardId:
        guards.getGuard(entry.guardId).startShift(entry.timestamp);
        break;
      case EntryType.FallAsleep:
        guards.getGuard(entry.guardId).fallAsleep(entry.timestamp);
        break;
      case EntryType.WakeUp:
        guards.getGuard(entry.guardId).wakeUp(entry.timestamp);
        break;
    }
  }

  return guards;
}
