const form = document.getElementById('formulario');
const modal = document.getElementById('meuModal');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  fetch('./send.php', {
    method: 'POST',
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        modal.style.display = 'flex';

        setTimeout(() => {
          modal.style.display = 'none';
          window.location.href = '../../index.html'; // ajuste se necessário
        }, 3000);
      } else {
        alert('Erro ao enviar o formulário.');
      }
    })
    .catch((error) => {
      console.error(error);
      alert('Erro ao enviar o formulário.');
    });
});
