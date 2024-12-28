const noBtn = document.getElementById('noBtn');
const angryEmoji = document.getElementById('angryEmoji');

function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;
  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.left = newX + 'px';
  noBtn.style.top = newY + 'px';
}

moveNoButton(); // Move the button initially

noBtn.addEventListener('click', () => {
  moveNoButton(); 

  angryEmoji.style.display = 'block';
  angryEmoji.style.left = (noBtn.offsetLeft + noBtn.offsetWidth) + 'px'; 
  angryEmoji.style.top = noBtn.offsetTop + 'px'; 

  noBtn.textContent = '😡 No Way! 😡'; 
});