let escolhaUsuario = prompt('Escolha Pedra, Papel ou Tesoura').toLowerCase();
console.log(escolhaUsuario);

let pedra = 'pedra';
let papel = 'papel';
let tesoura = 'tesoura';
let escolhaMaquina = tesoura;

// Pedra 
if(escolhaUsuario == pedra && escolhaMaquina == pedra){
    alert('Empate!!');
}else if(escolhaUsuario == pedra && escolhaMaquina == papel){
    alert(`Voce perdeu, ${papel} embrulha a ${pedra}`)
}else if(escolhaUsuario == pedra && escolhaMaquina == tesoura){
    alert(`Voce Venceu, ${pedra} quebra a ${tesoura}`)
}
// Papel 
if(escolhaUsuario == papel && escolhaMaquina == papel){
    alert('Empate!!');
}else if(escolhaUsuario == papel && escolhaMaquina == tesoura){
    alert(`Voce perdeu, ${tesoura} corta o ${papel}`)
}else if(escolhaUsuario == papel && escolhaMaquina == pedra){
    alert(`Voce Venceu, ${papel} embrulha ${pedra}`)
}

// Tesoura 

if(escolhaUsuario == tesoura && escolhaMaquina == tesoura){
    alert('Empate!!');
}else if(escolhaUsuario == tesoura && escolhaMaquina == papel){
    alert(`Voce Venceu, ${tesoura} corta o ${papel}`)
}else if(escolhaUsuario == tesoura && escolhaMaquina == pedra){
    alert(`Voce perdeu, ${pedra} quebra a ${tesoura}`)
}