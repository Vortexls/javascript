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
            if (idade >= 0 && idade <= 12){
                img.setAttribute('src', 'imagens/criança-m.png')
            } else if (idade <= 17){
                img.setAttribute('src', 'imagens/jovem-m.png')
            } else if (idade<= 60){
                img.setAttribute('src', 'imagens/adulto-m.png')
            } else if (idade > 60){
                img.setAttribute('src', 'imagens/idoso-m.png')
            }
        } else if (fsex[1].checked){
            sexo = 'Feminino'
            if (idade >= 0 && idade <= 12){
                img.setAttribute('src', 'imagens/criança-f.png')
            } else if (idade <= 17){
                img.setAttribute('src', 'imagens/jovem-f.png')
            } else if (idade<= 60){
                img.setAttribute('src', 'imagens/adulto-f.png')
            } else if (idade > 60){
                img.setAttribute('src', 'imagens/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${sexo} com ${idade} anos`
        res.appendChild(img)
    }

}