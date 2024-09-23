// Front-End ou Back-End
const escolha1 = prompt('Qual área quer seguir? (FRONT-END ou BACK-END)')

//Se for front, react ou Vue?
if (escolha1 == 'FRONT-END'){
    prompt('Quer aprender REACT ou VUE?')
}
//Se for back, c# ou java?
else if (escolha1 == 'BACK-END'){
    prompt('Quer aprender C# ou JAVA?')
}
else {
    alert('Área inválida, recomece.')
}
// Especializar na área ou virar fullstack?
const especializar = prompt('Quer se especializar na área escolhida (1) ou se tornar Fullstack? (2)')

if (especializar == 1){
    alert('Legal, boa escolha.')
}
else if (especializar == 2){
    alert('Boa escolha e boa sorte.')
}

else {
    alert('Opção inválida, recomece.')
}

// Qual tecnologia quer se especializar?
let tecnologia = ''

let tec = prompt('Em quais tecnologias gostaria de se especializar?')
tecnologia = tecnologia + ', ' + tec

while (true){

const escolha = prompt('Legal, mais alguma? (SIM) ou (NÃO)')
    
    if (escolha == 'SIM'){
        let tec = prompt('Em quais tecnologias gostaria de se especializar?')
        tecnologia = tecnologia + tec
    }
    else if (escolha == 'NÃO') {
        const resposta = `Você quer se especializar em ${tecnologia}, legal!`
        alert(resposta)
        break
    }

    else (
        alert('Não entendi, tente novamente.')
    )
}
