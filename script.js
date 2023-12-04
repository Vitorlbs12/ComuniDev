// Função para rolar suavemente para o topo da página
function scrollToTop() {
    // Compatibilidade com navegadores diferentes
    document.body.scrollTop = 0; // Para navegadores da Microsoft
    document.documentElement.scrollTop = 0; // Para outros navegadores
}

// Mostrar ou ocultar o botão com base na posição de rolagem
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

// EFEITO DE APARECER ELEMENTO AO DESCER



const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidenn')

elements.forEach((element) => myObserver.observe(element))