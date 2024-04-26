import React, { useEffect, useRef, useState } from "react";
import styles from "./typingFieldFulfilled.module.css";
import { inputChecker } from "../../lib/inputChecker";
import { useDispatch, useSelector } from "react-redux";
import { updatePerMin } from "../../model/typingSpeedSlice";
import { typingSpeed } from "../../lib/typingSpeed";
import { updateLine, resetIsTextChanged } from "../../model/textSlice";
import RefLines from "../../../../entities/refLines/ui/RefLines";
import { fetchAddLines } from "../../../../shared/api/api";

const TypingFieldFulfilled = () => {
  const dispatch = useDispatch();
  const currentTextId = useSelector(
    (state) => state.text.currentTextId
  );
  const isTextChanged = useSelector((state) => state.text.isTextChanged);
  const refArr = useSelector((state) => state.text[currentTextId].textBody);
  const currentLine = useSelector(
    (state) => state.text[currentTextId].currentLine
  );

  const referenceLine = refArr[currentLine][0];
  const referenceLineWordAmout = refArr[currentLine][1];
  const stopWatch = useRef({ start: 0, finish: 0 });
  const [written, setWritten] = useState({
    text: "",
    length: 0,
    correctText: "",
    correctLength: 0,
    isCorrect: true,
  });
  const timeNow = () => Date.now() / 1000;

  useEffect(() => {
    if (refArr.length - currentLine < 7) {
      dispatch(fetchAddLines(currentTextId));
    }
  }, [refArr, dispatch, currentLine, currentTextId]);

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
      stopWatch.current.start = timeNow();
    }
    if (currentInput === referenceLine) {
      stopWatch.current.finish = timeNow();

      dispatch(updateLine(currentTextId));

      dispatch(
        updatePerMin(
          typingSpeed(
            stopWatch.current.start,
            stopWatch.current.finish,
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

export default TypingFieldFulfilled;
