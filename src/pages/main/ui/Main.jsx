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
      <div className={styles.nav}>в разработке</div>
      <div className={styles.textHeader}><h1 className={styles.header}>{selectedText}</h1></div>
      <div className={styles.stat}><StatGauge /></div>
      <div className={styles.textField}><TypingField /></div>
      {/* <div className={styles.footer}><TextSelector /></div>       */}
      
      
      
      
    </div>
  );
};

export default Main;
