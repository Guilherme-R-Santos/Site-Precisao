
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

// Adiciona funcionalidade de scroll suave para o menu "Início"
const inicio = document.getElementById('menu-inicio');
inicio.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Adiciona funcionalidade de scroll suave para os outros itens do menu
const sobre = document.getElementById('menu-sobre');
sobre.addEventListener('click', function() {
    const section = document.getElementById('sobre-nos');
    section.scrollIntoView({
        behavior: 'smooth'
    });
});

// Adiciona funcionalidade de scroll suave para o menu "Serviços"
const servicos = document.getElementById('menu-servicos');
servicos.addEventListener('click', function() {
    const section = document.getElementById('servicos');
    section.scrollIntoView({
        behavior: 'smooth'
    });
});

// Adiciona funcionalidade de scroll suave para o menu "Serviços"
const contato = document.getElementById('menu-contato');
contato.addEventListener('click', function() {  
    const section = document.getElementById('contato');
    section.scrollIntoView({
        behavior: 'smooth'
    });
});