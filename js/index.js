// Adiciona funcionalidade de scroll suave para o menu "Início"
const inicio = document.getElementById('menu-inicio');
inicio.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Adiciona funcionalidade de scroll suave para os itens do menu
const sobre = document.getElementById('menu-sobre');
sobre.addEventListener('click', function() {
    const section = document.getElementById('sobre-nos');
    const headerHeight = document.getElementById('header').offsetHeight;
    const sectionPosition = section.offsetTop - headerHeight;
    
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
});

const services = document.getElementById('menu-services');
services.addEventListener('click', function() {
    const section = document.getElementById('services');
    const headerHeight = document.getElementById('header').offsetHeight;
    const sectionPosition = section.offsetTop - headerHeight;
    
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
});

const benefits = document.getElementById('menu-benefits');
benefits.addEventListener('click', function() {
    const section = document.getElementById('benefits');
    const headerHeight = document.getElementById('header').offsetHeight;
    const sectionPosition = section.offsetTop - headerHeight;
    
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
});

const contato = document.getElementById('menu-contato');
contato.addEventListener('click', function() {  
    const section = document.getElementById('contato');
    const headerHeight = document.getElementById('header').offsetHeight;
    const sectionPosition = section.offsetTop - headerHeight;
    
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
});

// Adiciona funcionalidade de scroll suave para o botão "Saiba Mais" do banner hero
const btnHero = document.getElementById('btn-hero');
btnHero.addEventListener('click', function() {
    const section = document.getElementById('services');
    const headerHeight = document.getElementById('header').offsetHeight;
    const sectionPosition = section.offsetTop - headerHeight;
    
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
});

// Evita envio reset da página pós envio do formulário
const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    enviaFormulario();
});

// Função que exibe mensagem de agradecimento e reseta o formulário
function enviaFormulario() {
    const nome = document.getElementById('nome').value;
    form.reset();
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Em breve entraremos em contato.`);
}

function irParaSimulador() {
    const pagAtual = window.location.pathname;
    if (pagAtual === '/simulador.html') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        window.location.href = '/simulador.html';
    }
}

const btnSimulador = document.getElementsByClassName('btn-simulador');
if (btnSimulador.length > 0) {
    btnSimulador[0].addEventListener('click', function() {
        irParaSimulador();
    });
}

const btnSimuladorFormulario = document.getElementById('btn-simulador-formulario');
if (btnSimuladorFormulario) {
    btnSimuladorFormulario.addEventListener('click', function() {
        irParaSimulador();
    });
}
