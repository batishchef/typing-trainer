import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../../../features/typingField/model/textSlice";
import styles from "./textSelector.module.css";
import { fetchAddLines, fetchNewText } from "../../../shared/api/api";

const TextSelector = () => {
  const dispatch = useDispatch();
  const textIdOptions = useSelector((state) => state.text.textOptions);
  const texts = useSelector((state) => state.text);

  function handleButtonClick(event) {
    const currentTextId = event.target.value;
    dispatch(changeText(currentTextId));

    if (!texts.hasOwnProperty(currentTextId)) {
      dispatch(fetchNewText(currentTextId));
    } else if(texts[currentTextId]?.textBody.length < 6) {
      dispatch(fetchAddLines(currentTextId))
    }
  }



  const selectOptions = Object.entries(textIdOptions).map((element) => {
    const [id, textHeader] = element
    return (
    <li key={Math.random()}>
      <button
        className={styles.optionButton}
        onClick={handleButtonClick}
        value={id}
      >
        {textHeader}
      </button>
    </li>
  )});

  return (
    <ol className={styles.optionsList} name="reference" id="reference-select">
      {selectOptions}
    </ol>
  );
};

export default React.memo(TextSelector);
