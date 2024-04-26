import React from "react";
// import styles from "./typingField.module.css";


const TypingFieldRejected = () => {
  

  return (
    <main >
      <input
        type="text"
        // className={[
        //   styles.input,
        //   written.isCorrect ? styles.correctInput : styles.incorrectInput,
        // ].join(" ")}
        disabled
      />

      <h2>REJECTED!!!</h2>
    </main>
  );
};

export default TypingFieldRejected;
