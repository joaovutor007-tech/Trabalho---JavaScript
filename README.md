# Desafio do Pênalti ⚽

Projeto desenvolvido para a disciplina de Desenvolvimento Web do curso técnico. O objetivo é criar um mini-game interativo aplicando a manipulação do DOM em JavaScript.

---

## 📌 Sobre o Projeto
O **Desafio do Pênalti** é um jogo de chute a gol onde o jogador escolhe um dos três cantos da trave para chutar (Esquerda, Centro ou Direita). O goleiro sorteia uma posição aleatória para defender a cada rodada. 

Se o jogador chutar no canto onde o goleiro pulou, ocorre a defesa. Caso contrário, é gol!

---

## ⚙️ Funcionamento e Uso do `getElementById`
O projeto utiliza o método `document.getElementById` do JavaScript para conectar a interface HTML com a lógica do jogo:

1. **Captura de Eventos:** Identificação dos botões de chute (`canto-0`, `canto-1`, `canto-2`) para registrar a escolha do jogador.
2. **Animação e Movimento:** Alteração dinâmica das propriedades CSS (`style.left` e `style.bottom`) dos elementos `#goleiro` e `#bola` para simular o chute e a defesa em tempo real.
3. **Atualização da Interface:** Alteração dos textos do placar (`placar-gols`, `placar-defesas`) e das mensagens de status (`mensagem-status`) utilizando a propriedade `.innerText`.

---

## 🛠️ Tecnologias Utilizadas
- **HTML5:** Estrutura da trave, placar e botões.
- **CSS3:** Estilização do campo, trave com rede, efeitos visuais e posicionamento absoluto para as animações.
- **JavaScript:** Lógica de sorteio aleatório (`Math.random`), temporizadores (`setTimeout`) e manipulação do DOM via `getElementById`.

---

## 🚀 Como Executar
1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em qualquer navegador web.
