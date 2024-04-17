import originalTexts from './originalTexts.json'

fetch('https://random-word-api.vercel.app/api?words=30')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    });


export const texts = {
    ...originalTexts,
}
