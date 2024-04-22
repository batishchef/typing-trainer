import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from "../../../features/typingField/model/textSlice";
import { fetchRandomLines } from "../../../shared/api/api";
import styles from './textSelector.module.css'

const TextSelector = () => {
  const dispatch = useDispatch();
  // const currentTextHeader = useSelector((state) => state.text.currentTextHeader);
  const textOptions = useSelector((state) => state.text.textOptions);

  useEffect(() => {
    dispatch(fetchRandomLines());
  }, [dispatch]);

  function handleButtonClick(event) {
    const currentTextName = event.target.value;
    dispatch(changeText(currentTextName));
  }

  // const buttonStylePicker() {
  //   if(currentTextHeader === value) {
      
  //   }
  // }


  const selectOptions = textOptions.map((element) => (
      <li key={Math.random()}>
        <button className={styles.optionButton} onClick={handleButtonClick} value={element}>
          {element}
        </button>
      </li>
    ));

  return (
    <ol className={styles.optionsList} name="reference" id="reference-select">
      {selectOptions}
    </ol>
  );
};

export default React.memo(TextSelector);
