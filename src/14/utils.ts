export function separateDigits(num: number) {
  if (num < 10) {
    return [num];
  }

  return [Math.floor(num / 10), num % 10];
}
