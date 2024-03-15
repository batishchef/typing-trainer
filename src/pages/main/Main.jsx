import React from 'react';
import MainTextField from '../../components/mainTextField/MainTextField';
import styles from './Main.module.css'
import { textPreparator } from '../../functions/textPreparator';
import { texts } from '../../assets/texts/texts';

const Main = () => {
    const reference = texts.nabokov.theGift

    const windowWidth = window.innerWidth
    
    const refArr = textPreparator(reference, windowWidth)

    return (
        <div className={styles.Main}>
            <MainTextField refArr={refArr}/>
        </div>
    );
};

export default Main;