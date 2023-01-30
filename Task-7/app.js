const colors = ['tomato', 'lightseagreen', 'aqua', 'magenta', 'lightsalmon'];

const numSquares = Math.floor(Math.random() * 90) + 10;

for (let i = 0; i < numSquares; i++) {
	const color = colors[Math.floor(Math.random() * colors.length)];
	const square = document.createElement('div');
	square.classList.add('square');
	square.style.backgroundColor = color;
	document.body.appendChild(square);
}
