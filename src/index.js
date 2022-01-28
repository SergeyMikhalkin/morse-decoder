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
    let words = expr.split("**********");
    let Morse = []; // converted to Morse
    let result = ''; // result string

    // convert from '1' and '0' to '.' and '-'
    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j += 2) {
            let symbol;
            let pair = words[i].slice(j, j + 2);
            if(pair == '10') symbol = '.';
            if(pair == '11') symbol = '-';
            if(pair == '00') symbol = ' ';
            Morse.push(symbol);
        }
        if(i != words.length - 1) Morse.push('|'); // white space between words
    }
    
    for(let i = 0; i < Morse.length; i += 5) {
        if(Morse[i] == '|') {
            i++;
            result = result + ' '; // add white space
        } 
        let decodedWord = Morse.slice(i, i + 5).join('').trim();
        result = result + MORSE_TABLE[decodedWord];
    }
    return result;
}

module.exports = {
    decode
}