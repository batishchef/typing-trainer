import TypingField from "../../../features/typingField/ui/TypingField";
import styles from "./main.module.css";
import TextSelector from "../../../features/textSelector/ui/TextSelector";
import { useSelector } from "react-redux";
import StatGauge from "../../../entities/statGauge/ui/StatGauge";


const Main = () => {
  const selectedText = useSelector((state) => state.text.currentTextHeader)


  return (
    <div className={styles.Main}>
      
      <TextSelector />
      <h1>{selectedText}</h1>
      <StatGauge />
      {/* {isError ? <div className="">ERRORRRRR</div> : <MainTextField />} */}
      <TypingField />
    </div>
  );
};

export default Main;
