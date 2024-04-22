import TypingField from "../../../features/typingField/ui/TypingField";
import styles from "./Main.module.css";
import TextSelector from "../../../features/textSelector/ui/TextSelector";
import { useSelector } from "react-redux";


const Main = () => {
  const selectedText = useSelector((state) => state.text.currentTextHeader)


  return (
    <div className={styles.Main}>
      
      <TextSelector />
      <h1>{selectedText}</h1>
      {/* {isError ? <div className="">ERRORRRRR</div> : <MainTextField />} */}
      <TypingField />
    </div>
  );
};

export default Main;
