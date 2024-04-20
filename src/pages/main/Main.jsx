import { useEffect } from "react";
import MainTextField from "../../components/mainTextField/MainTextField";
import styles from "./Main.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeText,
  changeToRandom,
  fetchRandomLines
  } from "../../redux/slices/textSlice";
import { resetWritten } from "../../redux/slices/writtenSlice";

const Main = () => {
  const dispatch = useDispatch();

  const textOptions = useSelector((state) => state.text.textOptions);

  // const random = useSelector(
  //   (state) => state.text.otherTexts.randomText.textBody
  // );

  // const isError = useSelector(
  //   (state) => state.text.otherTexts.randomText.error
  // );

  useEffect(() => {
    dispatch(fetchRandomLines());
  }, [dispatch]);

  function handleChangeSelect(event) {
    const currentTextName = event.target.value;

    switch (currentTextName) {
      case "random":
        dispatch(changeToRandom());
        break;
      default:
        dispatch(changeText(currentTextName));
    }
    dispatch(resetWritten());
  }

  const optionItems = textOptions.map((element) => (
    <option key={Math.random()} value={element}>
      {element}
    </option>
  ));

  return (
    <div className={styles.Main}>
      <select
        name="reference"
        id="reference-select"
        onChange={handleChangeSelect}
      >
        {optionItems}
      </select>

      {/* {isError ? <div className="">ERRORRRRR</div> : <MainTextField />} */}
      <MainTextField />
    </div>
  );
};

export default Main;
