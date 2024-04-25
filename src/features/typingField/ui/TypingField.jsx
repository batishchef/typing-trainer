import React, { useEffect, useRef, useState } from "react";
import styles from "./typingField.module.css";
import { inputChecker } from "../lib/inputChecker";
import { useDispatch, useSelector } from "react-redux";
import { updatePerMin } from "../model/typingSpeedSlice";
import { typingSpeed } from "../lib/typingSpeed";
import { updateLine, resetIsTextChanged } from "../model/textSlice";
import RefLines from "../../../entities/refLines/ui/RefLines";
import { fetchAddLines } from "../../../shared/api/api";

const TypingField = () => {
  const currentTextHeader = useSelector(
    (state) => state.text.currentTextHeader
  );
  const isTextChanged = useSelector((state) => state.text.isTextChanged);
  const refArr = useSelector((state) => state.text[currentTextHeader].textBody);
  const dispatch = useDispatch();
  const startCount = useRef(0);
  const stopCount = useRef(0);
  const currentLine = useSelector(
    (state) => state.text[currentTextHeader].currentLine
  );
  const referenceLine = refArr[currentLine][0];
  const referenceLineWordAmout = refArr[currentLine][1];
  const needUpdated = useSelector(
    (state) => state.text[currentTextHeader].needUpdated
  );
  const [written, setWritten] = useState({
    text: "",
    length: 0,
    correctText: "",
    correctLength: 0,
    isCorrect: true,
  });
  const timeNow = () => Date.now() / 1000;

  useEffect(() => {
    if (needUpdated && false) {
      const remainArr = refArr.slice(currentLine);
      dispatch(fetchAddLines(remainArr));
    }
  }, [needUpdated, currentLine, dispatch, refArr]);

  useEffect(() => {
    if (isTextChanged) {
      setWritten({
        text: "",
        length: 0,
        correctText: "",
        correctLength: 0,
        isCorrect: true,
      });
      dispatch(resetIsTextChanged());
    }
  }, [isTextChanged, dispatch]);

  function handleChangeWritten(event) {
    const currentInput = event.target.value;

    if (currentInput === referenceLine[0]) {
      startCount.current = timeNow();
    }
    if (currentInput === referenceLine) {
      stopCount.current = timeNow();

      dispatch(updateLine(currentTextHeader));

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
    setWritten(() => newWritten);
  }

  const scndLine =
    currentLine + 1 < refArr.length ? refArr[currentLine + 1][0] : undefined;
  const thrdLine =
    currentLine + 2 < refArr.length ? refArr[currentLine + 2][0] : undefined;

  return (
    <main className={styles.typingField}>
      <form
        action=""
        className={styles.inputForm}
        onSubmit={(e) => e.preventDefault()}
      >
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

      <RefLines
        referenceLine={referenceLine}
        correctLength={written.correctLength}
        scndLine={scndLine}
        thrdLine={thrdLine}
        isCorrect={written.isCorrect}
      />
    </main>
  );
};

export default TypingField;
