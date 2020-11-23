let form = document.querySelector('#app');
let question = document.querySelector('#question');
let answer = document.querySelector('#answer');
let answers = [
	'It is certain.',
	'It is decidedly so.',
	'Without a doubt.',
	'Yes - definitely.',
	'You may rely on it.',
	'As I see it, yes.',
	'Most likely.',
	'Outlook good.',
	'Yes.',
	'Signs point to yes.',
	'Reply hazy, try again.',
	'Ask again later.',
	'Better not tell you now.',
	'Cannot predict now.',
	'Concentrate and ask again.',
	"Don't count on it.",
	'My reply is no.',
	'My sources say no.',
	'Outlook not so good.',
	'Very doubtful.',
];

form.addEventListener('submit', submitHandler, false);

function submitHandler(event) {
	event.preventDefault();

	if (!question.value.length) return;

	answer.innerHTML =
		'<p>' + sanitizeHTML(question.value) + '</p>' + getAnswer() + '</p>';

	question.value = '';
	question.focus();
}

function getAnswer() {
	return shuffle(answers.slice())[0];
}

function shuffle(array) {
	let currentIndex = array.length;
	let tempValue, randIndex;

	while (0 !== currentIndex) {
		randIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		tempValue = array[currentIndex];
		array[currentIndex] = array[randIndex];
		array[randIndex] = tempValue;
	}
	return array;
}

function sanitizeHTML(str) {
	let temp = document.createElement('div');
	temp.textContent = str;
	return temp.innerHTML;
}
