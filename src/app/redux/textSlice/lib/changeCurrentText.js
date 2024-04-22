import { textPreparator } from "../../../../shared/lib/textPreparator";
import { textToWords } from "../../../../shared/lib/textToWords";
import originalTexts from "../../../texts/originalTexts.json";

export const changeCurrentText = function (newTextHeader) {
  if (newTextHeader === "random") {

  } else {
    const wordsArr = textToWords(originalTexts[newTextHeader].textBody);

    return {
      textBody: textPreparator(wordsArr, window.innerWidth),
      textHeader: newTextHeader,
    };
  }
};