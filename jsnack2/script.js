// Crea un array vuoto.Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.


numbersArray = [];

for (i = 0; i < 6; i++){
    let number = parseInt(prompt('Enter a number'));
    if (number % 2 === 1) {
        numbersArray.push(number);
    }
}

console.log(numbersArray);

