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

//////////////////////////////////////////////

class Servicos {
  constructor(titulo, texto) {
    this.titulo = titulo;
    this.texto = texto;
  }

  abrirModal() {
    document.getElementById(' modalTitulo').innerText = this.titulo;
    document.getElementById('modalTexto').innerHTML = this.texto;
    document.getElementById('modal').style.display = 'block';
  }
}

// Banco de dados dos serviços
const servicos = {
  1: new Servicos(
    'Assessoria Financeira',
    'Analisamos todos os meses suas vendas, custos, despesas, lucro e fluxo de caixa. Solução ideal para médio/longo prazo, dividida em 3 camadas: <ul> <li>Relatórios: organizamos seus números e registros para você ler o seu negócio.</li> <li>Análises: interpretamos seus números para lhe dizer exatamente o que significam.</li> <li>Estratégias: quais os planos de ação você deve seguir?</li>  </ul> ',
  ),
  2: new Servicos(
    'Palestras & Worshops',
    'Oferecemos palestras e cursos sobre diferentes temas relacionados a planejamento e educação financeira. As palestras podem durar entre uma e três horas e buscamos dialogar com o público durante ou depois, a depender de como o cliente preferir. Alguns temas que podemos desenvolver são: <ul> <li>Orçamento pessoal: como criar e seguir um orçamento eficaz.</li> <li>Fundamentos de educação financeira: conceitos básicos para melhorar sua saúde financeira.</li> <li>Estratégias para economizar dinheiro no dia a dia.</li>  <li>O que o dinheiro representa para você?</li> </ul> ',
  ),

  3: new Servicos(
    'Mentoria Individual',
    '<p>Transforme sua relação com as finanças!</p> <p>Oferecemos consultoria individual personalizada para ajudá-lo a organizar e planejar sua vida financeira de forma prática e eficiente. Alcance seus objetivos, elimine preocupações e construa um futuro mais tranquilo com o suporte de especialistas dedicados ao seu sucesso.  </p> ',
  ),

  4: new Servicos(
    'Programa de Preparação para Longevidade',
    ' Esse programa tem como objetivo promover uma Longevidade Saudável e bem-sucedida, de modo que as pessoas possam se preparar para os desafios e oportunidades que surgem ao longo da vida. <p> O programa abrange uma variedade de áreas, fornecendo recursos, informações e suporte para que os indivíduos possam ter uma vida plena e satisfatória, tais como: </p> <ul> <li> saúde e bem estar (físico e emocional)  </li> <li> Relacionamento e conexões sociais </li> <li>   aprendizado contínuo & criatividade </li> <li> planejamento financeiro. </li>  <p> Assim, com uma equipe multidisciplinar formada por médico,nutrólogo, advogado e economista conseguimos desenvolver temas de forma que as pessoas comecem a pensar nessa Longevidade com um novo olhar bem como oferecer aos RHs uma ferramenta para realizar processos de sucessão com maior êxito. </p> ',
  ),

  5: new Servicos(
    'Mentoria em grupo',
    ' Você deseja alcançar suas metas financeiras e construir um futuro sólido? Se a resposta for sim, a nossa Mentoria em Grupo de Educação Financeira é o caminho ideal para você! <p>Essa mentoria reúne pessoas com objetivos financeiros semelhantes, formando um grupo motivado a aprender, crescer e conquistar o sucesso financeiro. </p> <p>Com a orientação de especialistas em finanças pessoais, você terá acesso a um ambiente colaborativo e de aprendizado, preparado para ajudá-lo a enfrentar os desafios do mundo financeiro com mais segurança e confiança. </p> <p>Ps.: Você pode formar seu grupo exclusivo </p> ',
  ),
};
// Abrir modal ao clicar nos cards
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    const servico = servicos[id];
    if (servico) {
      servico.abrirModal();
    }
  });
});

function fecharModal() {
  document.getElementById('modal').style.display = 'none';
  document.body.classList.remove('modal-aberto'); // 🔥 ESSENCIAL
}

// Abrir modal
document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-id');
    const servico = servicos[id];
    if (servico) {
      servico.abrirModal();
    }
  });
});

// Fechar ao clicar no "X"
document.getElementById('fecharModal').addEventListener('click', fecharModal);

// Fechar ao clicar fora da área do modal
window.addEventListener('click', (event) => {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    fecharModal();
  }
});

// Fechar ao pressionar a tecla ESC
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    fecharModal();
  }
});
