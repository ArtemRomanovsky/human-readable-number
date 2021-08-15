function toReadable(number) {
    let hundreds = '';
    let tens = '';
    let units = '';
    let finalResultHundreds = '';
    let finalResultTens = '';
    let finalResultUnits = '';
    let finalResult = '';
    const stringNumber = number.toString();

    if (stringNumber.length >= 3 && stringNumber.length < 4) {
        hundreds = parseInt(stringNumber[0]);
        tens = parseInt(stringNumber[1]);
        units = parseInt(stringNumber[2]);
    }
    if (stringNumber.length >= 2 && stringNumber.length < 3) {
        tens = parseInt(stringNumber[0]);
        units = parseInt(stringNumber[1]);
    }
    if (stringNumber.length === 1) {
        units = parseInt(stringNumber[0]);
    }

    if (hundreds > 0 && hundreds < 10) {
        finalResultHundreds = ((getRightNumber(hundreds)) + ' hundred');
    }

    if (tens > 1 && tens < 10) {
        finalResultTens = getRightTens(tens);
        finalResultUnits = getRightNumber(units);
        if (units === 0) {
            finalResultTens = getRightTens(tens);
            finalResultUnits = '';
        }
    }

    if (tens === 1) {
        finalResultTens = getValueFromTenToNineteen(units);
    }

    if (tens === 0) {
        finalResultTens = '';
        finalResultUnits = getRightNumber(units);
        if (units === 0) {
            finalResultUnits = '';
        }

    }

    finalResult = finalResultHundreds + ' ' + finalResultTens + ' ' + finalResultUnits;
    return finalResult;
}

function getRightNumber(number) {
    switch (number) {
        case 0: return 'zero';
        case 1: return 'one';
        case 2: return 'two';
        case 3: return 'three';
        case 4: return 'four';
        case 5: return 'five';
        case 6: return 'six';
        case 7: return 'seven';
        case 8: return 'eight';
        case 9: return 'nine';
        // case 10: return 'десять';
        default: return null;
    }
}

function getRightTens(number) {
    switch (number) {
        case 0: return 'zero';
        // case 1: return 'one';
        case 2: return 'twenty';
        case 3: return 'thirty';
        case 4: return 'forty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
        // case 10: return 'десять';
        default: return null;
    }

}

function getValueFromTenToNineteen(number) {
    switch (number) {
        case 0: return 'ten';
        case 1: return 'eleven';
        case 2: return 'twenty';
        case 3: return 'thirteen';
        case 4: return 'fourteen';
        case 5: return 'fifteen';
        case 6: return 'sixteen';
        case 7: return 'seventeen';
        case 8: return 'eighteen';
        case 9: return 'nineteen';
        // case 10: return 'десять';
        default: return null;
    }

}

function getValueFromTenToNinety(number) {
    switch (number) {
        case 0: return '';
        case 1: return 'ten';
        case 2: return 'twenty';
        case 3: return 'thirteen';
        case 4: return 'fourty';
        case 5: return 'fifty';
        case 6: return 'sixty';
        case 7: return 'seventy';
        case 8: return 'eighty';
        case 9: return 'ninety';
        default: return null;
    }

}

console.log(toReadable(800));