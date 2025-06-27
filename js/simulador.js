// Simulador de Taxas de Condomínio
document.getElementById('taxa-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const valorCondominio = parseFloat(document.getElementById('valor-condominio').value);
    const percentualTaxa = parseFloat(document.getElementById('percentual-taxa').value);
    const numeroMeses = parseInt(document.getElementById('numero-meses').value);
    const sectionResultados = document.getElementById('resultados');
    sectionResultados.style.visibility = 'visible';

    // Cálculos
    const valorMensalTaxa = (valorCondominio * percentualTaxa) / 100;
    const totalTaxas = valorMensalTaxa * numeroMeses;

    // Comparativo com taxas padrão
    const comparativos = [5, 10, 15].map(taxa => {
        const valorMensal = (valorCondominio * taxa) / 100;
        const total = valorMensal * numeroMeses;
        return { taxa, valorMensal, total };
    });

    // Adiciona o resultado do usuário
    comparativos.push({ taxa: percentualTaxa, valorMensal: valorMensalTaxa, total: totalTaxas });

    // Atualiza a tabela
    const tabelaResultados = document.getElementById('tabela-resultados');
    tabelaResultados.innerHTML = ''; // Limpa a tabela antes de adicionar novos resultados
    comparativos.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.taxa}%</td>
            <td>R$ ${item.valorMensal.toFixed(2)}</td>
            <td>R$ ${item.total.toFixed(2)}</td>
        `;
        tabelaResultados.appendChild(row);
    });

    // Atualiza o gráfico
    const ctx = document.getElementById('grafico').getContext('2d');
    const labels = comparativos.map(item => `${item.taxa}%`);
    const valoresMensais = comparativos.map(item => item.valorMensal);
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Valor Mensal da Taxa (R$)',
                data: valoresMensais,
                backgroundColor: '#d420c5',
                borderColor: '#f30505',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Exibe o botão de contato
    const btnContato = document.getElementById('btn-contato');
    btnContato.style.visibility = 'visible';

});

// Botão Home
const btnHome = document.getElementById('btn-home');
btnHome.addEventListener('click', function() {
    const pagAtual = window.location.pathname;
    if (pagAtual === '/index.html') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        window.location.href = '/index.html';
    }
});

// Controle do Modal
const btnContato = document.getElementById('btn-contato');
const modal = document.getElementById('modal-contato');
const closeModal = document.querySelector('.close-modal');

btnContato.addEventListener('click', function() {
    modal.style.display = 'flex'; // Alterado para 'flex'
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Envio do formulário
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulação de envio (substitua por código real)
    console.log('Formulário enviado:', {
        nome: this.nome.value,
        email: this.email.value,
        telefone: this.telefone.value,
        mensagem: this.mensagem.value
    });
    
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    modal.style.display = 'none';
    this.reset();
});