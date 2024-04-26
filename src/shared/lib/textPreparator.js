export function textPreparator(wordsArr, windowWidth) {
  const linesArr = [];

  const charAmount = windowWidth >= 970 ? 100 : 80;

  let [i, j] = [0, 0]

  while(j < wordsArr.length) {
    if (linesArr[i] === undefined) {
      linesArr[i] = [wordsArr[j] + ' ', 1];
      j++;
    } else if (linesArr[i][0]?.length < charAmount) {
      linesArr[i][0] += wordsArr[j] + ' ';
      linesArr[i][1] += 1;
      j++;
    } else {
      i++;
    }
  }

  return linesArr;
}
