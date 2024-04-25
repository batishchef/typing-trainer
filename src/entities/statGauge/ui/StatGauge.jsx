import React from "react";
import styles from "./statGauge.module.css";
import { useSelector } from "react-redux";

const StatGauge = () => {
  const charactersPerMin = useSelector(
    (state) => state.typingSpeed.value.charactersPerMin
  );
  const averageCharactersPerMin = useSelector(
    (state) => state.typingSpeed.value.averageCharactersPerMin.value
  );
  const wordsPerMin = useSelector(
    (state) => state.typingSpeed.value.wordsPerMin
  );
  const averageWordsPerMin = useSelector(
    (state) => state.typingSpeed.value.averageWordsPerMin.value
  );
    
  return (
    <ul className={styles.gaugeList}>
      <li className={styles.gauge}>
        SPM: {charactersPerMin !== 0 ? charactersPerMin : "-"} /{" "}
        {averageCharactersPerMin !== 0 ? averageCharactersPerMin : "-"}
      </li>
      <li className={styles.gauge}>
        WPM: {wordsPerMin !== 0 ? wordsPerMin : "-"} /{" "}
        {averageWordsPerMin !== 0 ? averageWordsPerMin : "-"}
      </li>
    </ul>
  );
};

export default React.memo(StatGauge);
