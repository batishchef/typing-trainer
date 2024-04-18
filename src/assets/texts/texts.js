import originalTexts from "./originalTexts.json";
import { textToWords } from "../../functions/textToWords";
import { textPreparator } from "../../functions/textPreparator";

// const randomWords = fetch("https://random-word-api.vercel.app/api?words=30")
//   .then((response) => {
//     return response.json();
//   })

const wordsArr = textToWords(originalTexts.theGift.textBody);

export const linesArr = textPreparator(wordsArr, window.innerWidth);
