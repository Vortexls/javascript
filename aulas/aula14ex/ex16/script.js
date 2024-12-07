function calc(){
    let inicio = document.getElementById('inicio')
    const fim = document.getElementById('fim')
    const passo = document.getElementById('passo')
    const res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Preencha todo o formulário corretamente para continuar.')
    } else{
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p<=0){
            window.alert('Passo inválido! Considerando passo = 1')
            p = 1
        }
        if(i < f){ // Crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449}`
            }
        } else{ // Decrescente
            for(let c = i; c >= f; c-= p){
            res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
    


   
}