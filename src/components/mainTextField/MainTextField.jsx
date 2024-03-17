import React, { useState, useRef} from 'react';
import styles from './MainTextField.module.css'
import { inputChecker } from '../../functions/inputChecker';
import { stopWatch } from '../../functions/stopWatch';

const MainTextField = ({refArr}) => {

    const [written, setWritten] = useState({
        text: '',
        length: 0,
        correctText: '',
        correctLength: 0,
        isCorrect: true,
        line: 0,
    })

    const [roundTime, setRoundTime] = useState(0)
    const startCount = useRef(0)
    const stopCount = useRef(0)

    
    const reference = refArr[written.line]

    function handleChangeWritten(event) {
        const currentInput = event.target.value

        if(currentInput === reference[0]) startCount.current = stopWatch();
        if(currentInput === reference) {
            stopCount.current = stopWatch()
            const timeDifference = Math.round(stopCount.current - startCount.current)
            setRoundTime(timeDifference)
        }

        setWritten(inputChecker(currentInput, reference, written))
    }

    return (
        <main className={styles.MainTextField}>
            <p className={styles.wordCounter}>{(roundTime !== 0)? roundTime : '-'} сек.</p>
            <form action="" className={styles.mainForm}>
                <input 
                type="text" 
                className={[styles.input, written.isCorrect ? styles.correctInput : styles.incorrectInput].join(' ')}
                value={written.text} 
                onChange={handleChangeWritten}
                autoFocus
                />
            </form>

            <p className={written.isCorrect ? styles.copyingText : styles.copyingTextError}>
                <span className={styles.pastText}>
                    {written.correctText}
                </span>
                {reference.substring(written.correctLength, reference.length)} <br/>
                {refArr[written.line + 1]} <br/>
                {refArr[written.line + 2]}
            </p>
        </main>
    );
};

export default MainTextField;