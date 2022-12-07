function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    let fano = window.document.querySelector('#txtano')
    var res = window.document.querySelector('#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'homemcriança.jpg')
                //Criança
            } else if ( idade < 21) {
                img.setAttribute('src', 'hjovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homemadulto.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 11) {
                img.setAttribute('src', 'mulhercriança.jpg')
                 //Criança
                
            } else if ( idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulherjovem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulheradulta.jpg')
            } else {
                //Idosa
                img.setAttribute('src', 'idosa.jpg')
            }
                
            
        }
        
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
    
}

