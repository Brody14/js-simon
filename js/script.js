console.log("Billy Baron");

//Visualizzare in pagina 5 numeri casuali con alert.
const numbers = [];
console.log(numbers);

while (numbers.length < 5) {
	let number = randomNumber(1, 5000);
	numbers.push(number);
	console.log(numbers);
}

alert(numbers);

//Dopo che l’utente ha chiuso l’alert fate partire un timer di 30 secondi.
//Allo scadere dei 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente,
//tramite il prompt().

setTimeout (function () {
    let firstUserNumber = parseInt(prompt('Inserisci il primo numero'));
    let secondUserNumber = parseInt(prompt('Inserisci il secondo numero'));
    let thirdUserNumber = parseInt(prompt('Inserisci il terzo numero'));
    let fourthUserNumber = parseInt(prompt('Inserisci il quarto numero'));
    let fifthUserNumber = parseInt(prompt('Inserisci il quinto numero'));
    console.log(firstUserNumber, secondUserNumber, thirdUserNumber, fourthUserNumber, fifthUserNumber);
}, 300)


//Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali numeri sono stati individuati tramite console.log

//FUNZIONI//

function randomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	const number = Math.floor(Math.random() * (max - min + 1) + min);
	return number;
}
