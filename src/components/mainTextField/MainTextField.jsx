import React, { useState } from 'react';
import styles from './MainTextField.module.css'

const MainTextField = ({refArr}) => {

    const [written, setWritten] = useState({
        text: '',
        length: 0,
        correctText: '',
        correctLength: 0,
        isCorrect: true,
        line: 0
    })

    
    function handleChangeWritten(e) {
        const curInput = e.target.value
        const curLength = e.target.value.length

        if(curInput === refArr[written.line].substring(0, curLength)) {
            switch (curInput) {
                case refArr[written.line]: {
                    setWritten({
                        text: '',
                        length: 0,
                        correctText: '',
                        correctLength: 0,
                        isCorrect: true,
                        line: written.line + 1
                    })
                    break
                }

                default: {
                    setWritten({
                        ...written,
                        text: curInput,
                        length: curLength,
                        correctText: curInput,
                        correctLength: curLength,
                        isCorrect: true
                    })
                }
            }
        } else {
            setWritten({
                ...written,
                text: curInput,
                length: curLength,
                isCorrect: false
            })
        }
    }

    return (
        <div className={styles.MainTextField}>
          <form action="" className={styles.mainForm}>

                <input 
                type="text" 
                className={[styles.input, written.isCorrect ? styles.correctInput : styles.incorrectInput].join(' ')}
                value={written.text} 
                onChange={handleChangeWritten}
                autoFocus
                />

                <p className={written.isCorrect ? styles.noErrorInText : styles.errorInText}>

                    <span className={styles.pastText}>
                        {written.correctText}
                    </span>

                    {refArr[written.line].substring(written.correctLength, refArr[written.line].length)}
                </p>

                <p>{refArr[written.line + 1]}</p>
                <p>{refArr[written.line + 2]}</p>

            </form>
        </div>
    );
};

export default MainTextField;