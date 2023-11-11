let saldoFinal = calcular (150, 2)
let nivelRank = ""

function calcular(vitorias, derrotas){
	let saldoVitorias = vitorias - derrotas
    return saldoVitorias
}
if (saldoFinal <= 10){
    let nivelRank = "Ferro"   
}
else if(saldoFinal >= 11 && saldoFinal <= 20){
    nivelRank = "Bronze"    
}
else if(saldoFinal >= 21 && saldoFinal <= 50){
    nivelRank = "Prata"    
}
else if(saldoFinal >= 51 && saldoFinal <= 80){
    nivelRank = "Ouro"    
}
else if(saldoFinal >= 81 && saldoFinal <= 90){
    nivelRank = "Diamante"    
}
else if(saldoFinal >= 91 && saldoFinal <= 100){
    nivelRank = "Lendário"    
}
else if(saldoFinal >= 101){
    nivelRank = "Imortal"    
}
console.log("O saldo de vitórias é " + saldoFinal + " e está no rank de " + nivelRank)