/*
Objetivo- Quando clicar no botão mostrar a imagem de fundo correspondente

Passo 1 - Pegar o elemento HTML dos botões

Passo 2 - Identificar o clique

Passo 3 - Desmarcar o anterior

Passo 4 - Marcar o clicado

Passo 5 - Esconder a anterior

Passo 6 - Aparecer a imagem escolhida

*/

// Passo 1:

const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

// Passo 2:

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
    // Passo 3:
        desativarBotaoSelecionado();
        
    // Passo 4:
        selecionarBotaoCarrossel(botao);

    // Passo 5:
        esconderImagemAtiva();
    
    // Passo 6:
        mostrarImagemDeFundo(indice);

        
        
    })
})

function mostrarImagemDeFundo(indice){
    imagens[indice].classList.add('ativa');
}

function esconderImagemAtiva(){
    const imagemAtiva = document.querySelector('.ativa')
        imagemAtiva.classList.remove('ativa')
}

function selecionarBotaoCarrossel(botao){
    botao.classList.add('selecionado');
}

function desativarBotaoSelecionado(){
    const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');
}