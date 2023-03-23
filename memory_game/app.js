const cardArray = [
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	},
	{
		name: "fries",
		img: "images/fries.png",
	},
	{
		name: "cheeseburger",
		img: "images/cheeseburger.png",
	},
	{
		name: "hotdog",
		img: "images/hotdog.png",
	},
	{
		name: "ice-cream",
		img: "images/ice-cream.png",
	},
	{
		name: "milkshake",
		img: "images/milkshake.png",
	},
	{
		name: "pizza",
		img: "images/pizza.png",
	},
];

cardArray.sort(() => 0.5 - Math.random()); // (0.5 - Math.random()) - sort randomly

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
// const snakeDisplay = document.querySelector('#snake')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard() {
	for (let i = 0; i < cardArray.length; i++) {
		const card = document.createElement("img");
		card.setAttribute("src", "images/blank.png");
		card.setAttribute("data-id", i);
		card.addEventListener("click", flipCard); // if we click on a card, we will flip it
		gridDisplay.append(card);
	}

	// cardArray.forEach(element => {
	//     const card = document.createElement('img')
	//     console.log(card, element)
	// });

	// Array(3).fill('').forEach((v) => {
	//     const snakeImage = document.createElement('img')
	//     snakeImage.setAttribute('src', 'images/snake.png')
	//     snakeDisplay.append(snakeImage)
	// })
	// ----> create a empty Array and fill it in with snake images
}
createBoard();

function checkMatch() {
	const cards = document.querySelectorAll('img')
	console.log("check for match!");


	if (cardsChosenIds[0] == cardsChosenIds[1]) {
		alert('you have clicked the same image')
		// cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png')
		

	}

	if (cardsChosen[0] == cardsChosen[1]) {
		alert('you found a match!')
		cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
		cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
		cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
		cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
		cardsWon.push(cardsChosen)

	} else {
		cards[cardsChosenIds[0]].setAttribute('src','images/blank.png')
		cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png')
		alert('sorry, try again!')
	}
	
	resultDisplay.innerHTML = cardsWon.length

	cardsChosen = []
	cardsChosenIds = []

	if (cardsWon.length == cardArray.length / 2) {
		resultDisplay.innerHTML = 'congratulations, you found them all!'
	}
}


function flipCard() {
	let cardId = this.getAttribute("data-id");
	cardsChosen.push(cardArray[cardId].name);
	cardsChosenIds.push(cardId)
	this.setAttribute("src", cardArray[cardId].img);
	if (cardsChosen.length === 2) {
		setTimeout(checkMatch, 500);
	}
}
