export function textPreparator(wordsArr, windowWidth) {
  const linesArr = [];

  const charAmount = windowWidth >= 970 ? 100 : 80;

  for (let [i, j] = [0, 0]; j < wordsArr.length; ) {
    if (linesArr[i] === undefined) {
      linesArr[i] = [wordsArr[j], j];
      j++;
    } else if (linesArr[i][0]?.length < charAmount) {
      linesArr[i][0] += " " + wordsArr[j];
      j++;
    } else {
      linesArr[i][0] += " ";
      linesArr[i][1] = j - linesArr[i][1];
      i++;
    }
  }

  return linesArr;
}
