import React, { useRef } from "react";
import styles from "./MainTextField.module.css";
import { inputChecker } from "../../functions/inputChecker";
import { useDispatch, useSelector } from "react-redux";
import { updateWritten } from "../../redux/slices/writtenSlice";
import { updatePerMin } from "../../redux/slices/typingSpeedSlice";

const MainTextField = () => {
  const written = useSelector((state) => state.written.value);

  const refArr = useSelector((state) => state.text.currentText.textBody);

  const typingSpeed = useSelector((state) => state.typingSpeed.value);

  const dispatch = useDispatch();

  const startCount = useRef(0);
  const stopCount = useRef(0);

  const referenceLine = refArr[written.line][0];
  const referenceLineWordAmout = refArr[written.line][1];

  function timeNow() {
    return Date.now() / 1000;
  }

  function handleChangeWritten(event) {
    const currentInput = event.target.value;

    if (currentInput === referenceLine[0]) {
      startCount.current = timeNow();
    }
    if (currentInput === referenceLine) {
      stopCount.current = timeNow();
      const minuteDifference = (stopCount.current - startCount.current) / 60;
      console.log(minuteDifference);

      const charactersPerMin = Math.round(
        referenceLine.length / minuteDifference
      );
      const wordsPerMin = Math.round(referenceLineWordAmout / minuteDifference);

      dispatch(
        updatePerMin({
          charactersPerMin: charactersPerMin,
          wordsPerMin: wordsPerMin,
        })
      );
    }

    const newWritten = inputChecker(currentInput, referenceLine, written);
    dispatch(updateWritten(newWritten));
  }

  return (
    <main className={styles.main}>
      <ul className={styles.gaugeList}>
        <li className={styles.gauge}>
          SPM:{" "}
          {typingSpeed.charactersPerMin !== 0
            ? typingSpeed.charactersPerMin
            : "-"}
        </li>
        <li className={styles.gauge}>
          WPM: {typingSpeed.wordsPerMin !== 0 ? typingSpeed.wordsPerMin : "-"}
        </li>
      </ul>
      <form action="" className={styles.inputForm}>
        <input
          type="text"
          className={[
            styles.input,
            written.isCorrect ? styles.correctInput : styles.incorrectInput,
          ].join(" ")}
          value={written.text}
          onChange={handleChangeWritten}
          autoFocus
        />
      </form>

      <p
        className={
          written.isCorrect ? styles.copyingText : styles.copyingTextError
        }
      >
        <span className={styles.pastText}>{written.correctText}</span>
        {referenceLine.substring(
          written.correctLength,
          referenceLine.length
        )}{" "}
        <br />
        {refArr[written.line + 1][0]} <br />
        {refArr[written.line + 2][0]}
      </p>
    </main>
  );
};

export default MainTextField;