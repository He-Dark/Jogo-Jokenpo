
let jogarNovamente = true;

while (jogarNovamente){

// Usuário digita alguma das 3 opções.
    let escolhaUsuario = prompt('Escolha Pedra, Papel ou Tesoura').toLowerCase();
    console.log(escolhaUsuario); //Exibe no console a escolha do usuário.


    // Validação de entrada

    if (escolhaUsuario !== 'pedra' && escolhaUsuario !== 'papel' && escolhaUsuario !== 'tesoura') {
            alert('Escolha inválida.\nPor favor, digite Pedra 🪨, Papel 🧻 ou Tesoura ✂️');
    } else {
            
        const escolhas = ['pedra', 'papel', 'tesoura'];
        let escolhaMaquina = escolhas[Math.floor(Math.random() * 3)]; // Máquina escolhe aleatoriamente
            
        if (escolhaUsuario === escolhaMaquina) {
            alert(`A Máquina escolheu: ${escolhaMaquina}\nVocê escolheu: ${escolhaUsuario}\n EMPATEEEEEE!`)
        } else if (
        (escolhaUsuario === 'pedra' && escolhaMaquina !== 'papel') || 
        (escolhaUsuario === 'papel' && escolhaMaquina !== 'tesoura') || 
        (escolhaUsuario === 'tesoura' && escolhaMaquina !== 'pedra')){
            alert(`A Máquina escolheu: ${escolhaMaquina}\nVocê escolheu: ${escolhaUsuario}\n Você GANHOU!`);
        } else {
            alert(`A Máquina escolheu: ${escolhaMaquina}\nVocê escolheu: ${escolhaUsuario}\n Você PERDEU!`);
        }    

        // Perguntar se o usuário quer jogar novamente
        let resposta = prompt('Deseja jogar novamente? (sim ou não)').toLowerCase();
        if (resposta !== 'sim') {
            jogarNovamente = false; // O usuário escolheu não jogar novamente
        }    
    }
}

alert('Obrigado por jogar!');