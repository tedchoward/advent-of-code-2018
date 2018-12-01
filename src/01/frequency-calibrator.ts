/**
 * Calculates the resulting frequency
 * @param input A string of newline(\n) separated changes (e.g. +1, -3)
 * @returns the adjusted frequency and first duplicate
 */
export function frequencyCalibrator(input = '0', history = new Set<number>([0]), start = 0) {
  let firstDuplicate: number;

  const adjustedFrequency = input
    .split(/\n/)
    .map(v => parseInt(v, 10))
    .reduce((prev, curr) => {
      const retval = prev + curr;
      if (firstDuplicate == null) {
        if (history.has(retval)) {
          firstDuplicate = retval;
        } else {
          history.add(retval);
        }
      }

      return retval;
    }, start);

  return { adjustedFrequency, firstDuplicate };
}

/**
 * Runs the frequencyCalibrator repeatedly until a duplicate frequency is detected
 * @param input A string of newline(\n) separated changes (e.g. +1, -3)
 * @returns the first duplicate frequency found
 */
export function duplicateDetector(input = '0') {
  const history = new Set<number>([0]);
  let firstDuplicate: number;
  let adjustedFrequency = 0;

  while (firstDuplicate == null) {
    const result = frequencyCalibrator(input, history, adjustedFrequency);
    adjustedFrequency = result.adjustedFrequency;
    firstDuplicate = result.firstDuplicate;
  }

  return firstDuplicate;
}
