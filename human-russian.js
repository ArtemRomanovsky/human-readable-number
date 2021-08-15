function toReadable(number) {
    let finalResultThousands = '';
    let preResultThousands = '';
    let finalResultHundreds = '';
    let preResultHundreds = '';
    let finalResultUnits = '';
    let finalResult = '';
    const stringNumber = number.toString();
    const thousands = parseInt(stringNumber[0]);
    const hundreds = parseInt(stringNumber[1]);
    const units = parseInt(stringNumber[2]);
    if (thousands > 4 && thousands < 10) {
        preResultThousands = getRightNumber(thousands);
        finalResultThousands = (preResultThousands + 'сот');
    }

    if (thousands < 5 || thousands > 9) {
        finalResultThousands = getThousandFromOnetoFour(thousands);
    }

    if (hundreds > 4 && hundreds < 10) {
        preResultHundreds = getRightNumber(hundreds);
        finalResultHundreds = (preResultHundreds + 'десят');
    }

    if (hundreds < 5 || hundreds > 9) {
        finalResultHundreds = getHundredsFromOnetoFour(hundreds);
    }
    if (units > 0 && units < 10) {
        finalResultUnits = getRightNumber(units);
    }
    finalResult = finalResultThousands + ' ' + finalResultHundreds + ' ' + finalResultUnits;
    return finalResult;
}

function getRightNumber(number) {
    switch (number) {
        case 0: return 'ноль';
        case 1: return 'один';
        case 2: return 'два';
        case 3: return 'три';
        case 4: return 'четыре';
        case 5: return 'пять';
        case 6: return 'шесть';
        case 7: return 'семь';
        case 8: return 'восемь';
        case 9: return 'девять';
        // case 10: return 'десять';
        default: return null;
    }

}

function getThousandFromOnetoFour(number) {
    switch (number) {
        case 0: return 'ноль';
        case 1: return 'сто';
        case 2: return 'двести';
        case 3: return 'триста';
        case 4: return 'четыреста';
        default: return null;
    }
}


function getHundredsFromOnetoFour(number) {
    switch (number) {
        case 0: return 'ноль';
        case 1: return 'десять';
        case 2: return 'двадцать';
        case 3: return 'тридцать';
        case 4: return 'сорок';
        default: return null;
    }

}

console.log(toReadable(221));
