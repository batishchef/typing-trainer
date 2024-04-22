import { useEffect } from "react";
import MainTextField from "../../../features/mainTextField/ui/MainTextField";
import styles from "./Main.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeText
} from "../../../features/mainTextField/model/textSlice";
import { fetchRandomLines } from "../../../shared/api/api";

const Main = () => {
  const dispatch = useDispatch();

  const textOptions = useSelector((state) => state.text.textOptions);

  useEffect(() => {
    dispatch(fetchRandomLines());
  }, [dispatch]);

  function handleChangeSelect(event) {
    const currentTextName = event.target.value;
    dispatch(changeText(currentTextName))
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
