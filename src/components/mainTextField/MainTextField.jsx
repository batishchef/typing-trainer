import React, { useEffect, useRef } from "react";
import styles from "./MainTextField.module.css";
import { inputChecker } from "../../functions/inputChecker";
import { useDispatch, useSelector } from "react-redux";
import { updateWritten } from "../../redux/slices/writtenSlice";
import { updatePerMin } from "../../redux/slices/typingSpeedSlice";
import StatGauge from "../statGauge/StatGauge";
import { typingSpeed } from "../../functions/typingSpeed";
import { fetchAddLines, updateLine } from "../../redux/slices/textSlice";

const MainTextField = () => {
  const written = useSelector((state) => state.written.value);
  const refArr = useSelector((state) => state.text.currentText.textBody);
  // const refHeader = useSelector((state) => state.text.currentText.textHeader);
  const dispatch = useDispatch();
  const startCount = useRef(0);
  const stopCount = useRef(0);
  const currentLine = useSelector(
    (state) => state.text.currentText.currentLine
  );
  const referenceLine = refArr[currentLine][0];
  const referenceLineWordAmout = refArr[currentLine][1];
  const needUpdated = useSelector(
    (state) => state.text.currentText.needUpdated
  );
  const timeNow = () => Date.now() / 1000;

  useEffect(() => {
    if (needUpdated) {
      const remainArr = refArr.slice(currentLine);
      dispatch(fetchAddLines(remainArr));
    }
  }, [needUpdated, currentLine, dispatch, refArr]);

  function handleChangeWritten(event) {
    const currentInput = event.target.value;

    if (currentInput === referenceLine[0]) {
      startCount.current = timeNow();
    }
    if (currentInput === referenceLine) {
      stopCount.current = timeNow();

      dispatch(updateLine());

      dispatch(
        updatePerMin(
          typingSpeed(
            startCount.current,
            stopCount.current,
            referenceLine.length,
            referenceLineWordAmout
          )
        )
      );
    }

    const newWritten = inputChecker(currentInput, referenceLine, written);
    dispatch(updateWritten(newWritten));
  }

  return (
    <main className={styles.main}>
      <StatGauge />
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
        {refArr[currentLine + 1][0]} <br />
        {refArr[currentLine + 2][0]}
      </p>
    </main>
  );
};

export default MainTextField;
