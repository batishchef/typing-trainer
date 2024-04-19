import { textPreparator } from "./textPreparator";
import { textToWords } from "./textToWords";
import originalTexts from "../assets/texts/originalTexts.json";
// import { fetchRandomWords } from "../assets/texts/texts";

export const changeCurrentText = function (newTextHeader) {
  if (newTextHeader === "random") {
    // return {
    //   textBody: textPreparator(fetchRandomWords(), window.innerWidth),
    //   textHeader: newTextHeader,
    // };
  } else {
    const wordsArr = textToWords(originalTexts[newTextHeader].textBody);

    return {
      textBody: textPreparator(wordsArr, window.innerWidth),
      textHeader: newTextHeader,
    };
  }
};