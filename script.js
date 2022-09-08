// //idade do dependetente é entre 13 e 17 anos
// let idadeDependente = Number(prompt("Qual a idade do seu dependente?"))
// if (idadeDependente>= 13 && idadeDependente<=17){
//     console.log("Seu dependente ja pode ter um cartão de credito vinculado ao seu")
// }else{
//     console("Consulte outras psossibilidades do Labank")
// }

// //ternario
// idadeDependente === 13 ? console.log("tem 13 anos") : console.log("não tem 13 anos")

// //cartão pelo ramal
// let cartaoRamal = Number(("escolha uma opção de 1 a 4"))

// switch(cartaoRamal){
//     case 1:
//         console.log("cartão facail escolhido");
//         break;
//     case 2:
//         console.log("cartão Black escolhido");
//         break;
//     case 3:
//         console.log("cartão platinum escolhido");  
//         break;
//     case 4:
//         console.log("cartão master gold escolhido");
//         break;
//     default:
//         console.log("escolha uma das 4 opção disponiveis");        
// }

//o numero é divisivel por dois e por 3
let divisivel = Number(prompt("Insira um numero"))
if(divisivel%2 === 0){
    console.log("seu numero e divisivel por 2")
    if(divisivel%3 === 0){
    console.log("seu numero e divisivel por 3")
    }else{
        console.log("este numero n é divisivel por 3")
    }
}else{
    if (divisivel%3===0){
    console.log("Este numero e divisivel por 3.")
    }else{
            console.log("este numero n é divisivel por 3")
        }
        console.log("este numero n é divisivel por 2")
    }

