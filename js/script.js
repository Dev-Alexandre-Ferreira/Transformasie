
const toggleButton = document.querySelector('.tfMenuToggle');
const menu = document.querySelector('.tfHeaderMenu');

// Alterna o menu ao clicar no botão
toggleButton.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  const isClickInside =
    menu.contains(event.target) || toggleButton.contains(event.target);
  if (!isClickInside) {
    menu.classList.remove('active');
  }
});

// Fecha o menu ao rolar a página
window.addEventListener('scroll', () => {
  menu.classList.remove('active');
});

