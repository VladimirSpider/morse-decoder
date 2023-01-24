const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const lettersArray = [];
    const finalLettersArray = [];

    const getLettersArray = (string) => {
        const arraySymbols = string.split('');

        let startIndex = 0;
        let endIndex = 10;
        while (endIndex <= arraySymbols.length) {
            const letterArray = arraySymbols.slice(startIndex, endIndex);
            startIndex += 10;
            endIndex += 10;
            lettersArray.push(letterArray);
        }
    }

    getLettersArray(expr);

    const newArray = lettersArray.map((letterSymbols) => {
        const morseLetter = letterSymbols.filter((item, index) => {
            if (item === '*') return item;

            if (item === '1') return item;

            if ((item === '0' && index !== 0 && ((letterSymbols[index - 1] !== '0' && letterSymbols[index + 1] !== '0') || index === letterSymbols.length - 1))) {
                return item;
            }
        });

        const readyMorseLetter = morseLetter.map((item, index) => {
            if (item === '*') return item;

            if (index !==0 && index % 2 !== 0) {
                return morseLetter[index - 1] + item;
            }
        });

        const endReadyMorseLetter = readyMorseLetter.filter((item) => !!item);

        const finalArray = endReadyMorseLetter.map((item) => {
            if (item === '*') return item;
            if (item === '10') return '.';
            if (item === '11') return '-';
        });

        return finalArray.join('');
    });

    newArray.forEach((item) => {
        if (item === '**********') {
            finalLettersArray.push(' ');
        } else {
            finalLettersArray.push(MORSE_TABLE[item]);
        };
    });

    return finalLettersArray.join('');

}

module.exports = {
    decode
}