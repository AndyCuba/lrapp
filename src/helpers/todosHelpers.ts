// Randomly shuffle words in string
const shuffleWords = (string: string): string => {
    const shuffledArray = string.split(" ").sort(() => 0.5 - Math.random());

    const shuffledString = shuffledArray.join(" ");

    return shuffledString;
};

const createDescription = (description: string): string | null => {
    const random = Math.random();

    if (random < 0.25) {
        const shuffledWords = shuffleWords(description);
        return shuffledWords;
    } else {
        return null;
    };
};

export {
    shuffleWords,
    createDescription
};