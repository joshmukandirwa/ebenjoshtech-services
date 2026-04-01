const cards = document.querySelectorAll('.card');
const overlay = document.querySelector('.overlay');

cards.forEach(card => {
    card.querySelector('.view-btn').addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        overlay.classList.add('active');
    });
});

overlay.addEventListener('click', () => {
    cards.forEach(card => card.classList.remove('active'));
    overlay.classList.remove('active');
});