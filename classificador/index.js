//  classifica o nível do herói baseado na quantidade de XP
function classificarHeroi(nome, xp) {
    let nivel;
  
    // Estruturas de decisão para determinar o nível do herói
    if (xp < 1000) {
      nivel = 'Ferro';

    } else if (xp >= 1001 && xp <= 2000) {
      nivel = 'Bronze';

    } else if (xp >= 2001 && xp <= 5000) {
      nivel = 'Prata';

    } else if (xp >= 5001 && xp <= 7000) {
      nivel = 'Ouro';

    } else if (xp >= 7001 && xp <= 8000) {
      nivel = 'Platina';

    } else if (xp >= 8001 && xp <= 9000) {
      nivel = 'Ascendente';

    } else if (xp >= 9001 && xp <= 10000) {
      nivel = 'Imortal';
      
    } else {
      nivel = 'Radiante';
    }
  
    // Exibindo a mensagem final de forma humana
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
  }
  
  // Exemplo de uso
  const nomeHeroi = prompt('Digite o nome do Herói:');
  const xpHeroi = parseInt(prompt('Digite a quantidade de experiência (XP) do Herói:'), 10);
  
  // Chamando a função para classificar o herói
  classificarHeroi(nomeHeroi, xpHeroi);
  