import MainTextField from '../../components/mainTextField/MainTextField';
import styles from './Main.module.css'
import { textPreparator } from '../../functions/textPreparator';
import {texts}  from '../../assets/texts/texts';
import { useState } from 'react';

const Main = () => {
    const [chosenText, setChosenText] = useState(
        {
            textName: 'theGift',
            textBody: textPreparator(texts['theGift'][0], window.innerWidth)
        }
    )

    function handleChangeSelect(event) {
        const currentTextName = event.target.value
        setChosenText(
            {
                textName: currentTextName,
                textBody: textPreparator(texts[currentTextName][0], window.innerWidth)
            }
        )
    }

    const optionItems = Object.keys(texts)
    .map(element =>
        <option key={Math.random()} value={element}>{texts[element][1]}</option>
        )

    return (
        <div className={styles.Main}>
            <select name="reference" id="reference-select" value={chosenText.textName} onChange={handleChangeSelect}>
                {optionItems}
            </select>
            <MainTextField refArr={chosenText.textBody}/>
        </div>
    );
};

export default Main;