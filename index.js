// Importa o módulo 'readline' para permitir a entrada e saída no terminal
const readline = require('readline');

// Cria uma interface de leitura para o terminal, com entrada (input) e saída (output) padrão
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Solicita ao usuário o nome do aventureiro
rl.question('Digite o nome do seu aventureiro: ', (nomeAventureiro) => {
  console.log(`Seja bem-vindo, ${nomeAventureiro}`);
  
  // Solicita ao usuário a quantidade de XP do personagem
  rl.question('Digite quanto seu personagem tem de XP: ', (numero) => {
    // Converte a entrada para número decimal usando parseFloat
    const quantExp = parseFloat(numero);

    // Verifica se a entrada é um número válido
    if (isNaN(quantExp)) {
      console.log("O valor digitado não é válido."); // Mensagem de erro para entrada inválida
    }
    // Determina o rank com base no valor de XP
    else if (quantExp <= 1000) {
      console.log("O herói está no rank Ferro"); // Rank para XP entre 0 e 1000
    }
    else if (quantExp >= 1001 && quantExp <= 2000) {
      console.log("O herói está no rank Bronze"); // Rank para XP entre 1001 e 2000
    }
    else if (quantExp >= 2001 && quantExp <= 5000) {
      console.log("O herói está no rank Prata"); // Rank para XP entre 2001 e 5000
    }
    else if (quantExp >= 5001 && quantExp <= 7000) {
      console.log("O herói está no rank Ouro"); // Rank para XP entre 5001 e 7000
    }
    else if (quantExp >= 7001 && quantExp <= 8000) {
      console.log("O herói está no rank Diamante"); // Rank para XP entre 7001 e 8000
    }
    else if (quantExp >= 8001 && quantExp <= 9000) {
      console.log("O herói está no rank Ascendente"); // Rank para XP entre 8001 e 9000
    }
    else if (quantExp >= 9001 && quantExp <= 10000) {
      console.log("O herói está no rank Imortal"); // Rank para XP entre 9001 e 10000
    }
    else if (quantExp >= 10001) {
      console.log("O herói está no rank Radiante"); // Rank para XP acima de 10000
    }

    // Fecha a interface de leitura, finalizando a interação com o usuário
    rl.close();
  });
});
