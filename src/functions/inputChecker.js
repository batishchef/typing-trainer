export function inputChecker(currentInput, reference, written) {
    const currentLength = currentInput.length
    const typedReference = reference.substring(0, currentLength)

    if(currentInput === reference) {
        return (
            {
                text: '',
                length: 0,
                correctText: '',
                correctLength: 0,
                isCorrect: true,
                line: written.line + 1
            }
        )
    }

    if(currentInput === typedReference) {
        return (
            {
                ...written,
                text: currentInput,
                length: currentLength,
                correctText: currentInput,
                correctLength: currentLength,
                isCorrect: true
            }
        )
    }

    return (
        {
            ...written,
            text: currentInput,
            length: currentLength,
            isCorrect: false
        }
    )
}