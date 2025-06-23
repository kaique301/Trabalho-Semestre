let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.style.top = '-70px'; 
    } else {
        header.style.top = '0';
    }

    lastScrollTop = scrollTop;
});


const carrossel = document.querySelector(".carrossel");
const btnEsquerda = document.querySelector(".carrossel-btn.esquerda");
const btnDireita = document.querySelector(".carrossel-btn.direita");

let indice = 0;

btnDireita.addEventListener("click", () => {
  if (indice < carrossel.children.length - 1) {
    indice++;
  } else {
    indice = 0; 
  }
  atualizarCarrossel();
});

btnEsquerda.addEventListener("click", () => {
  if (indice > 0) {
    indice--;
  } else {
    indice = carrossel.children.length - 1; 
  }
  atualizarCarrossel();
});

function atualizarCarrossel() {
  carrossel.style.transform = `translateX(-${indice * 100}%)`;
}

function expandirCard(card) {
  // Fecha todos os cards primeiro
  document.querySelectorAll('.destino').forEach(item => {
    item.classList.remove('expandido');
  });
  
  // Alterna o card clicado
  card.classList.add('expandido');
  
  // Rolagem suave
  setTimeout(() => {
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 10);
}

function fecharCard(event, botao) {
  event.stopPropagation();
  const card = botao.closest('.destino');
  card.classList.remove('expandido');
}
