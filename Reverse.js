function reverseWordsInSentence(sentence) {
    // We can split the sentence into words
    const words = sentence.split(' ');

    // We can Reverse each word and store them in a new array
    const reversedWords = words.map(word => reverseWord(word));

    // We can Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

function reverseWord(word) {
    // Split the word into characters, reverse them, and join them back together
    return word.split('').reverse().join('');
}

const input = "Associate Software Engineer";
const reversedSentence = reverseWordsInSentence(input);
console.log(reversedSentence); // Output: "sihT si a ynnus yad"
