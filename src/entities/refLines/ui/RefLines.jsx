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
      {scndLine && true ? scndLine : ''} <br />
      {thrdLine && true ? thrdLine : ''}
    </p>
  );
};

export default RefLines;
