// Ex5.7-shortest_words

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


const shortestWordLength = (str) => {
    const regex = /\w+/g;
    const wordsArray = str.match(regex);
    const compareWordsLength = (word1, word2) => {
        if (word1.length < word2.length) {
            return word1;
        } else {
            return word2;
        }
    }
    return wordsArray.reduce(compareWordsLength).length;

}



console.log(shortestWordLength('what do you want'));
