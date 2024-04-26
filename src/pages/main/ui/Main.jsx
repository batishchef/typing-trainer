import TypingField from "../../../features/typingField/ui/TypingField";
import styles from "./main.module.css";
import TextSelector from "../../../features/textSelector/ui/TextSelector";
import { useSelector } from "react-redux";
import StatGauge from "../../../entities/statGauge/ui/StatGauge";


const Main = () => {
  const currentTextId = useSelector((state) => state.text.currentTextId)
  const selectedText = useSelector((state) => state.text[currentTextId].textHeader)

  return (
    <div className={styles.Main}>
      
      <TextSelector />
      <h1 className={styles.header}>{selectedText}</h1>
      <StatGauge />
      <TypingField />
    </div>
  );
};

export default Main;
