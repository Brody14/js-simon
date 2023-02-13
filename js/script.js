//console.log("Billy Baron");

//Visualizzare in pagina 5 numeri casuali con alert.
const numbers = [];
const userNumbers = [];
//console.log(numbers);

while (numbers.length < 5) {
	let number = randomNumber(1, 5000);
    if(!numbers.includes(number)){
        numbers.push(number);
    }
	//console.log(numbers);
}

alert(numbers);

//Dopo che l’utente ha chiuso l’alert fate partire un timer di 30 secondi.
//Allo scadere dei 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
//tramite il prompt().

setTimeout (function () {
    for(let i = 0; i < 5; i++) {
        let askNumber = parseInt(prompt('Inserisci il numero'));
        userNumbers.push(askNumber)
    } 
    //console.log(userNumbers)
    
    //Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali numeri sono stati individuati tramite console.log
    
    const areEqual = compareArray();
    //console.log(areEqual)

    console.log('Ne hai ricordati', areEqual.length, 'ecco quali:' +  areEqual)

}, 30000)




//FUNZIONI//

function randomNumber(min, max) {
    min = Math.ceil(min);
	max = Math.floor(max);
	const number = Math.floor(Math.random() * (max - min + 1) + min);
	return number;
}

function compareArray() {
    const areEqual = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let r = 0; r < userNumbers.length; r++) {

            if (numbers[i] === userNumbers[r]) {
                areEqual.push(numbers[i]);
            }
        }
    }
    return areEqual;
}
