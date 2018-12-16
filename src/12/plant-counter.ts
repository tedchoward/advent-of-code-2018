export function plantCounter(state: string, firstIndex: number) {
  return state.split('').reduce((count, char, index) => (char === '#' ? count + index + firstIndex : count), 0);
  // return state.replace(/[.]/g, '').split('').length;
}
