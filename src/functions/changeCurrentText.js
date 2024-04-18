import { textPreparator } from "./textPreparator";
import { textToWords } from "./textToWords";
import originalTexts from '../assets/texts/originalTexts.json'

export const changeCurrentText = function(newTextHeader) {
    const wordsArr = textToWords(originalTexts[newTextHeader].textBody)

    return {
        textBody: textPreparator(wordsArr, window.innerWidth),
        textHeader: newTextHeader
    }
}