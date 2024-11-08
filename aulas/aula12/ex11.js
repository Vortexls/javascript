var hora = 2
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 5 && hora < 12){
    console.log(`Bom dia!`)
} else if (hora >=13 && hora < 18){
    console.log(`Boa tarde!`)
} else if (hora >= 19 && hora < 0){
    console.log(`Boa noite!`)
} else {
    console.log(`Boa madrugada!`)
}