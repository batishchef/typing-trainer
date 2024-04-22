// export const textToWords = function (paragraph) {
//   const lines = paragraph.split(/\r?\n/);

//   let wordsArr = [];

//   lines.forEach((line, index) => {
//     const words = line.split(/\s+/);

//     if (index < lines.length - 1) {
//       words.forEach((word, wordIndex) => {
//         if (wordIndex < words.length - 1) {
//           wordsArr.push(word);
//         } else {
//           wordsArr.push(word + "\n");
//         }
//       });
//     } else {
//       wordsArr = wordsArr.concat(words);
//     }
//   });

//   return wordsArr;
// };
