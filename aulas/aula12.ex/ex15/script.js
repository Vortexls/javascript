function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('ano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 ||  Number(fano.value) > ano){
        window.alert('Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var sexo = 'N/A'
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            sexo = 'Masculino'
            if (idade >= 0 || idade <= 12){

            } else if (idade <= 17){

            } else if (idade<= 60){

            } else if (idade > 60){

            }
        } else if (fsex[1].checked){
            sexo = 'Feminino'
            if (idade >= 0 || idade <= 12){

            } else if (idade <= 17){

            } else if (idade<= 60){

            } else if (idade > 60){

            }
        }
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
    }

}