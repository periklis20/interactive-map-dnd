const grid =
document.querySelector('.grid');

for (let i = 0; i < 400; i++) {
    const cell =
document.createElement('div');
    cell.classList.add('grid-cell');
    cell.addEventListener('click', () => {
        alert(`clicked cell ${i + 1}`);
    });
    grid.appendChild(cell);
}