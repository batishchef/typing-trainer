import React from "react";
import styles from './RefLines.module.css'

const RefLines = ({
  referenceLine,
  correctLength,
  scndLine,
  thrdLine,
  isCorrect,
}) => {
  const correctText = referenceLine.substring(0, correctLength)
  const unwrittenText = referenceLine.substring(correctLength)

  return (
    <p className={isCorrect ? styles.copyingText : styles.copyingTextError}>
      <span className={styles.pastText}>{correctText}</span>
      {unwrittenText} <br />
      {scndLine} <br />
      {thrdLine}
    </p>
  );
};

export default RefLines;
