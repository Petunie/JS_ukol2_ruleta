// ------ RESENI ------

const rouletteNumber = Number(prompt('Zadejte Vase cislo'));
let result = '';

if (rouletteNumber === 0) {
    result = 'Vase cislo je nula. Cislo neni sude, liche, cervene ani cerne.';    
} else if ((rouletteNumber >= 1 && rouletteNumber <=10) || (rouletteNumber >= 19 && rouletteNumber <=28)) {
    if (rouletteNumber % 2 === 0) {
        result =  `Vase cislo ${rouletteNumber} je sude a cerne.`;
    } else {
        result = `Vase cislo ${rouletteNumber} je liche a cervene.`;
    }
} else if ((rouletteNumber >= 11 && rouletteNumber <= 18) || (rouletteNumber >= 29 && rouletteNumber <= 36)) {
    if (rouletteNumber % 2 === 0) {
        result = `Vase cislo ${rouletteNumber} je sude a cervene.`;
    } else {
        result = `Vase cislo ${rouletteNumber} je liche a cerne.`;
    } 
} else {
    result = 'Neplatne cislo.';
}

document.body.innerHTML += result;

