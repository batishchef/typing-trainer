export function typingSpeed(
  startCount,
  stopCount,
  referenceLineCharAmount,
  referenceLineWordAmout
) {
  const minuteDifference = (stopCount - startCount) / 60;

  const charactersPerMin = Math.round(
    referenceLineCharAmount / minuteDifference
  );
  const wordsPerMin = Math.round(referenceLineWordAmout / minuteDifference);

  return {
    charactersPerMin: charactersPerMin,
    wordsPerMin: wordsPerMin,
  };
}
