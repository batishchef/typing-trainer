import React from "react";
import styles from "./typingFieldPending.module.css";

const TypingFieldPending = () => {
  return (
    <main className={styles.typingField}>
      <input type="text" className={styles.input} disabled />

      <div className={styles.textBlock}>
        <div className={styles.sketelonText}></div>
        <div className={styles.sketelonText}></div>
        <div className={styles.sketelonText}></div>
      </div>
    </main>
  );
};

export default TypingFieldPending;
