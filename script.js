let count = 1
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();

}, 3000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;


};


document.addEventListener('DOMContentLoaded', () => {
    const trilho = document.getElementById('trilho');
    const slides = document.querySelectorAll('.slide-vet');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');

    let contador = 0;
    const size = 50; // Cada movimento é 50% (porque vemos 2 fotos)

    // 1. Clonar os dois primeiros slides para o final
    const primeiroClone = slides[0].cloneNode(true);
    const segundoClone = slides[1].cloneNode(true);
    trilho.appendChild(primeiroClone);
    trilho.appendChild(segundoClone);

    function mover() {
        trilho.style.transition = "transform 0.5s ease-in-out";
        trilho.style.transform = `translateX(${-contador * size}%)`;
    }

    btnNext.addEventListener('click', () => {
        if (contador >= slides.length) return; // Trava para evitar cliques duplos rápidos
        contador++;
        mover();
    });

    btnPrev.addEventListener('click', () => {
        if (contador <= 0) return;
        contador--;
        mover();
    });

    // 2. O Segredo: Listener para detectar quando a transição termina
    trilho.addEventListener('transitionend', () => {
        // Se chegou no clone da primeira imagem
        if (contador === slides.length) {
            trilho.style.transition = "none"; // Desativa animação
            contador = 0; // Volta pro zero real
            trilho.style.transform = `translateX(0%)`;
        }
        // Se voltou antes da primeira imagem
        if (contador < 0) {
            // Lógica para volta infinita (opcional, requer clonar o final pro início também)
        }
    });
});


const todasPerguntas = document.querySelectorAll(".faqs");
todasPerguntas.forEach((faq) =>{
    const botaozinho = faq.querySelector(".abref");
    const resposta = faq.querySelector(".resposta");
    const up = faq.querySelector(".up");
    const down = faq.querySelector(".down");
    const pergunta = faq.querySelector(".pergunta");

    let respostaAberta = window.getComputedStyle(resposta).display === "block";

    botaozinho.addEventListener("click", () => {
        if (respostaAberta) {
            resposta.style.display = "none";
            up.style.display = "none";
            down.style.display = "block";
            pergunta.style.background = "#fff";
            pergunta.style.color = "#000";

            respostaAberta = false;
        }
        else{
            resposta.style.display = "block";
            up.style.display = "block";
            down.style.display = "none";
            pergunta.style.background = "#3b1f67";
            pergunta.style.color = "#fff";


            respostaAberta = true;
        }
    })
});
