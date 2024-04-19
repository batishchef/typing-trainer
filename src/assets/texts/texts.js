import originalTexts from "./originalTexts.json";
import { textToWords } from "../../functions/textToWords";
import { textPreparator } from "../../functions/textPreparator";

// export async function fetchRandomWords() {
//   const response = await fetch("https://random-word-api.vercel.app/api?words=60");
//   const randomWords = await response.json();
//   return textPreparator(randomWords, window.innerWidth);
// }

const initialWordsArr = textToWords(originalTexts.theGift.textBody);

export const inititaLinesArr = textPreparator(initialWordsArr, window.innerWidth);
