<script>
  const input = document.querySelector('input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  }

  function createBoxes(amount) {
    destroyBoxes(); 

    const boxSize = 30;
    let boxHTML = '';

    for (let i = 0; i < amount; i++) {
      const size = boxSize + i * 10;
      const color = getRandomHexColor();
      boxHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    }

    boxesContainer.insertAdjacentHTML('beforeend', boxHTML);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }

  createBtn.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    } else {
      alert('Please enter a number between 1 and 100.');
    }
  });

  destroyBtn.addEventListener('click', destroyBoxes);
</script>