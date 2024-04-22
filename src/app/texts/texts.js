import originalTexts from "./originalTexts.json";
import { textToWords } from "../../shared/lib/textToWords";
import { textPreparator } from "../../shared/lib/textPreparator";

const initialWordsArr = textToWords(originalTexts.theGift.textBody);

export const inititaLinesArr = textPreparator(initialWordsArr, window.innerWidth);
