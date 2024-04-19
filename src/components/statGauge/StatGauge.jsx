import React from "react";
import styles from "./StatGauge.module.css";
import { useSelector } from "react-redux";


const StatGauge = () => {
    const typingSpeed = useSelector((state) => state.typingSpeed.value)

  return (
    <ul className={styles.gaugeList}>
      <li className={styles.gauge}>
        SPM:{" "}
        {typingSpeed.charactersPerMin !== 0
          ? typingSpeed.charactersPerMin
          : "-"}{" "}
        /{" "}
        {typingSpeed.averageCharactersPerMin.value !== 0
          ? typingSpeed.averageCharactersPerMin.value
          : "-"}
      </li>
      <li className={styles.gauge}>
        WPM: {typingSpeed.wordsPerMin !== 0 ? typingSpeed.wordsPerMin : "-"} /{" "}
        {typingSpeed.averageWordsPerMin.value !== 0
          ? typingSpeed.averageWordsPerMin.value
          : "-"}
      </li>
    </ul>
  );
};

export default StatGauge;
