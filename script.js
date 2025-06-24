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

const mapImage = document.getElementById('map-image');
const fileInput = document.getElementById('upload-map');

fileInput.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (event) {
    mapImage.src = event.target.result;
  };
  reader.readAsDataURL(file);
});