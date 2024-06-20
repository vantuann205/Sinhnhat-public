const showCardBtn = document.getElementById('showCardBtn');
const closeCardBtn = document.getElementById('closeCardBtn');
const card = document.getElementById('card');
const overlay = document.querySelector('.overlay');

showCardBtn.addEventListener('click', function() {
    card.classList.add('show');
    overlay.style.display = 'block'; // Display the overlay
});

closeCardBtn.addEventListener('click', function() {
    card.classList.remove('show');
    overlay.style.display = 'none'; // Hide the overlay
});
