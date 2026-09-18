// Seleção dos elementos usando getElementById
const elementoPlacarGols = document.getElementById("placar-gols");
const elementoPlacarDefesas = document.getElementById("placar-defesas");
const elementoMensagem = document.getElementById("mensagem-status");
const elementoGoleiro = document.getElementById("goleiro");
const elementoBola = document.getElementById("bola");

const btnCanto0 = document.getElementById("canto-0");
const btnCanto1 = document.getElementById("canto-1");
const btnCanto2 = document.getElementById("canto-2");
const btnReiniciar = document.getElementById("btn-reiniciar");

// Variáveis de controle
let gols = 0;
let defesas = 0;
let posicaoGoleiro = 0;
let emAnimacao = false;

// Sorteia o primeiro pulo do goleiro
sortearPosicaoGoleiro();

// Eventos dos botões de chute
btnCanto0.addEventListener("click", function() { chutar(0); });
btnCanto1.addEventListener("click", function() { chutar(1); });
btnCanto2.addEventListener("click", function() { chutar(2); });
btnReiniciar.addEventListener("click", reiniciarJogo);

function sortearPosicaoGoleiro() {
    posicaoGoleiro = Math.floor(Math.random() * 3);
}

function chutar(cantoEscolhido) {
    if (emAnimacao) return;
    emAnimacao = true;

    // Posições X em pixels dentro do gol (0: Esquerda, 1: Centro, 2: Direita)
    const posicoesBolaX = [20, 120, 220];
    const posicoesGoleiroX = [15, 114, 210];

    // 1. Animação da Bola indo até o gol
    elementoBola.style.bottom = "60px";
    elementoBola.style.left = posicoesBolaX[cantoEscolhido] + "px";

    // 2. Animação do Goleiro pulando para o canto sorteado
    elementoGoleiro.style.left = posicoesGoleiroX[posicaoGoleiro] + "px";

    // 3. Aguarda a animação terminar para calcular e exibir o resultado
    setTimeout(function() {
        if (cantoEscolhido === posicaoGoleiro) {
            defesas++;
            elementoPlacarDefesas.innerText = defesas;
            elementoMensagem.innerText = "❌ DEFESA DO GOLEIRO!";
            elementoMensagem.style.color = "#ff5252";
        } else {
            gols++;
            elementoPlacarGols.innerText = gols;
            elementoMensagem.innerText = "⚽ GOOOOOOL!";
            elementoMensagem.style.color = "#00e676";
        }

        // Aguarda mais um momento e reseta os emojis para a próxima jogada
        setTimeout(resetarPosicoes, 1200);
    }, 400);
}

function resetarPosicoes() {
    // Volta a bola e o goleiro para a posição inicial
    elementoBola.style.bottom = "-25px";
    elementoBola.style.left = "120px";
    elementoGoleiro.style.left = "114px";

    sortearPosicaoGoleiro();
    emAnimacao = false;
}

function reiniciarJogo() {
    gols = 0;
    defesas = 0;
    elementoPlacarGols.innerText = gols;
    elementoPlacarDefesas.innerText = defesas;
    elementoMensagem.innerText = "Escolha onde quer chutar!";
    elementoMensagem.style.color = "#ffea00";
    resetarPosicoes();
}