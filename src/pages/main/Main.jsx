import MainTextField from "../../components/mainTextField/MainTextField";
import styles from "./Main.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeText } from '../../redux/slices/textSlice'
import { resetWritten } from "../../redux/slices/writtenSlice";


const Main = () => {

    const dispatch = useDispatch()

    const textOptions = useSelector((state) => state.text.textOptions)

    function handleChangeSelect(event) {
        const currentTextName = event.target.value

        dispatch(changeText(currentTextName))
        dispatch(resetWritten())
    }

    const optionItems = textOptions
    .map(element =>
        <option key={Math.random()} value={element}>{element}</option>
        )

  return (
    <div className={styles.Main}>
      <select name="reference" id="reference-select" onChange={handleChangeSelect}>
                {optionItems}
            </select>
      <MainTextField />
    </div>
  );
};

export default Main;
