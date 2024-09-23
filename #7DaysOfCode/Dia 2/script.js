const nome = prompt("Qual seu nome?")
const idade = prompt("Quantos aninhos?")
const linguagem = prompt("Qual linguagem de programação você está estudando?")
const resposta = prompt("Você gosta de estudar ela? Resposta 1 para SIM e 2 para NÃO")

const msg = `Ah, seu nome é ${nome}, que bonito! Além disso, você tem ${idade} anos e estuda ${linguagem}, legal!`;

alert(msg)
if (resposta == 1){
    alert("E que bom que gosta, divirta-se.")
}
if (resposta == 2){
    alert("E que pena que não gosta, tente estudar outra linguagem.")
}