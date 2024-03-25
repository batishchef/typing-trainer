import React, { useState, useRef, useEffect} from 'react';
import styles from './MainTextField.module.css'
import { inputChecker } from '../../functions/inputChecker';
import { stopWatch } from '../../functions/stopWatch';

const MainTextField = ({refArr}) => {

    const [written, setWritten] = useState(
        {
            text: '',
            length: 0,
            correctText: '',
            correctLength: 0,
            isCorrect: true,
            line: 0,
        }
    )

    const [typingSpeed, setTypingSpeed] = useState({
        charactersPerMin: 0,
        wordsPerMin: 0
    })
    const startCount = useRef(0)
    const stopCount = useRef(0)

    useEffect(() => {
        setWritten(
            {
                text: '',
                length: 0,
                correctText: '',
                correctLength: 0,
                isCorrect: true,
                line: 0,
            }
        )
    }, [refArr])

    
    const reference = refArr[written.line][0]
    const referenceWordAmout = refArr[written.line][1]

    function handleChangeWritten(event) {
        const currentInput = event.target.value

        if(currentInput === reference[0]) {startCount.current = stopWatch(); console.log('start')}
        if(currentInput === reference) {
            stopCount.current = stopWatch()
            console.log('end')
            const minuteDifference = (stopCount.current - startCount.current) / 60
            console.log(minuteDifference)
            setTypingSpeed({
                charactersPerMin: Math.round(reference.length / minuteDifference),
                wordsPerMin: Math.round(referenceWordAmout / minuteDifference)
            })
        }

        setWritten(inputChecker(currentInput, reference, written))
    }

    return (
        <main className={styles.main}>
            <ul className={styles.gaugeList}>
                <li className={styles.gauge}>
                    SPM: {(typingSpeed.charactersPerMin !== 0)? typingSpeed.charactersPerMin : '-'}
                </li>
                <li className={styles.gauge}>
                    WPM: {(typingSpeed.wordsPerMin !== 0)? typingSpeed.wordsPerMin : '-'}
                </li>
            </ul>
            <form action="" className={styles.inputForm}>
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
                {refArr[written.line + 1][0]} <br/>
                {refArr[written.line + 2][0]}
            </p>
        </main>
    );
};

export default MainTextField;