export function scoreFinder(initialValue: string, matchValue: string) {
  const matchSize = matchValue.length;
  const matchAry = matchValue.split('').map(n => parseInt(n, 10));
  const ary = initialValue.split('').map(n => parseInt(n, 10));

  let elf1 = 0;
  let elf2 = 1;
  let matchIndex = 0;

  while (true) {
    const score = ary[elf1] + ary[elf2];
    if (score > 9) {
      ary.push(1);
      ary.push(score % 10);
    } else {
      ary.push(score);
    }

    elf1 = (elf1 + ary[elf1] + 1) % ary.length;
    elf2 = (elf2 + ary[elf2] + 1) % ary.length;

    matchIndex = ary.indexOf(matchAry[0], matchIndex);
    if (matchIndex + matchSize < ary.length) {
      let cnt = matchSize;
      let match = true;
      while (--cnt >= 0) {
        if (ary[matchIndex + cnt] !== matchAry[cnt]) {
          match = false;
          break;
        }
      }

      if (match) {
        break;
      } else {
        matchIndex += 1;
      }
    }

    // if (ary.length % 1000000 === 0) {
    //   console.log('list size', ary.length);
    // }
  }

  return matchIndex;
}
