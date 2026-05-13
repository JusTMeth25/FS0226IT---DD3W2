const colori = ['rosso', 'verde', 'giallo', 'blu', 'nero'];

for (const colore of colori) {
	console.log(colore);
}

console.log('*****************************************');

const persona = {
	nome: 'Mario',
	cognome: 'Rossi',
	eta: 25,
	ospite: true,
	dataArrivo: '20/07/2026',
	dataPartenza: '30/07/2026',
	stanza: 357,
};

for (const key in persona) {
	console.log(`${key}: ${persona[key]}`);
}

console.log('*****************************************');

// while - do/while
console.log('--- while ---');
let x = 11;
while (x <= 10) {
	console.log(x);
	x++;
}

console.log('--- do/while ---');
let y = 11;
do {
	console.log(y);
	y++;
} while (y <= 10);

// condizione di blocco non numerica
console.log('*****************************************');
const names = ['Mario', 'Dario', 'Giovanna', 'Nicola', 'Maria', 'Elena'];

let stop = false;
let i = 0;
while (stop === false) {
	console.log(names[i]);
	if (names[i] === 'Maria') {
		stop = true;
	}
	i++;
}

let alt = 'Maria';
let z = 0;
while (names[z] !== 'Maria') {
	console.log(names[z]);
	z++;
}

console.log('*****************************************');

const addNames = ['Pippo', 'Pluto', 'Paperino'];

for (let i = 0; i <= 2; i++) {
	console.log(`CICLO NUMERO ${i}`);
	names.push(addNames[i]);
	let b = 0;
	while (b < names.length) {
		console.log(names[b]);
		b++;
	}
}

console.log('*****************************************');
// break / continue
const numbers = [1, 25, 38, 12, 41, 75, 18, 53, 46];
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
	if (numbers[i] > 30) {
		console.log(`Trovato ${numbers[i]} che è maggiore di 30`);
		break;
	}
}

const students = [
	{
		name: 'Mario Rossi',
		iscritto: true,
	},
	{
		name: 'Aldo Bianchi',
		iscritto: false,
	},
	{
		name: 'Giovanna Neri',
		iscritto: false,
	},
	{
		name: 'Maria Verdi',
		iscritto: true,
	},
	{
		name: 'Nicola Gialli',
		iscritto: true,
	},
	{
		name: 'Elena Rossi',
		iscritto: false,
	},
	{
		name: 'Antonio Bianchi',
		iscritto: true,
	},
	{
		name: 'Francesca Verdi',
		iscritto: false,
	},
];

for (let i = 0; i < students.length; i++) {
	if (students[i].iscritto === true) continue;
	console.log(`Lo studente ${students[i].name} non risulta ancora iscritto`);
}

// Ciclo annidato
console.log('*****************************************');

let maggiore = 0;
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > maggiore) {
		maggiore = numbers[i];
	}
}
console.log(`Il numero maggiore è ${maggiore}`);

for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		console.log(`${i} x ${j} = ${i * j}`);
	}
}

// switch / case

const days = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

let today = 'Thursday';

switch (today) {
	case 'Monday':
		console.log('Oggi è lunedì');
		break;

	case 'Tuesday':
		console.log('Oggi è martedì');
		break;

	case 'Wednesday':
		console.log('Oggi è mercoledì');
		break;

	case 'Thursday':
		console.log('Oggi è giovedì');
		break;

	case 'Friday':
		console.log('Oggi è venerdì');
		break;

	case 'Saturday':
		console.log('Oggi è sabato');
		break;

	case 'Sunday':
		console.log('Oggi è domenica');
		break;
}

if (today === 'Monday') {
	console.log('Oggi è lunedì');
} else if (today === 'Tuesday') {
	console.log('Oggi è martedì');
} else if (today === 'Wednesday') {
	console.log('Oggi è mercoledì');
} else if (today === 'Thursday') {
	console.log('Oggi è giovedì');
} else if (today === 'Friday') {
	console.log('Oggi è venerdì');
} else if (today === 'Saturday') {
	console.log('Oggi è sabato');
} else {
	console.log('Oggi è domenica');
}

let price = 40;

switch (true) {
	case price <= 20:
		console.log(`Il prezzo dell'articolo è ${price}`);
		break;

	case price > 20 && price <= 50:
		console.log(
			`Il prezzo dell'articolo scontato è ${price - price * 0.1}`,
		);
		break;

	case price > 50 && price <= 80:
		console.log(
			`Il prezzo dell'articolo scontato è ${price - price * 0.15}`,
		);
		break;

	default:
		console.log(
			`Il prezzo dell'articolo scontato è ${price - price * 0.2}`,
		);
		break;
}

// Introduzione alla manipolazione del DOM (Document Object Model)
const colorsList = document.querySelector('.container main section:last-child ul');

for (let i = 0; i < colori.length; i++) {
    colorsList.innerHTML += `<li class="listElement">${colori[i]}</li>`;
}

console.log(colorsList.innerHTML);