export function textPreparator(initialText, windowWidth) {
    // const segmenter = new Intl.Segmenter([], { granularity: 'word' });
    // const segmentedInitial = segmenter.segment(initialText);
    // const initialWords = [...segmentedInitial].filter(s => s.isWordLike).map(s => s.segment);

    const initialWords = initialText.replace(/\s+/g, ' ').trim().split(' ')

    const preparedText = [];

    const charAmount = windowWidth >= 970? 100 : 80

    
    for(let [i,j] = [0, 0]; j < initialWords.length;) {
        if(preparedText[i] === undefined) {
            preparedText[i] = [initialWords[j], j]
            j++
        } else if(preparedText[i][0]?.length < charAmount) {
            preparedText[i][0] += ' ' + initialWords[j]
            j++
            } else {
                preparedText[i][0] += ' '
                preparedText[i][1] = j - preparedText[i][1]
                i++
            }
    }

    return preparedText
}