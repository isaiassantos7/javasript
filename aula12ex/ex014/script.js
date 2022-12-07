function carregar() {
    var msg = window.document.querySelector('#msg');
    var img = window.document.querySelector('#foto');
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/fotomanha.jpg'
        window.document.body.style.background = '#bd77425'
        msg.innerHTML = `Bom dia <br> Agora são ${hora} horas`
        

    } else if (hora >= 12 && hora < 18) {
        // Boa tarde
        img.src ='imagens/fototarde.jpg'
        window.document.body.style.background = '#e0a859' 
        msg.innerHTML = `Boa tarde <br> Agora são ${hora} horas`
    } else {
        // Boa noite
        img.src = 'imagens/fotonoite.jpg'
        window.document.body.style.background = '#1a5a79'
        msg.innerHTML = `Boa noite <br> Agora são ${hora} horas`
    }
    
}
