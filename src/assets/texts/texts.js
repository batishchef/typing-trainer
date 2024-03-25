import originalTexts from './originalTexts.json'

export const texts = {
    ...originalTexts,
    ...sessionStorage
}