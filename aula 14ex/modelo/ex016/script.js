
function contar() {
let ini = window.document.querySelector('#inicio')
var fim = window.document.querySelector('#fimtxt')
var passo = window.document.querySelector('#pulatxt')
let res = window.document.querySelector('#res')

if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossível contar !'
    window.alert('[ERRO] Faltam Dados') 
} else {
    res.innerHTML = 'Contando: <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        p = 1
    }

    if (i < f ){
        for(let c = i; c <= f; c += p) {
        res.innerHTML += `👉 ${c} `
         }
        res.innerHTML += `\u{1F3C1}`
    } else {
        for(var c = i; c >= f; c -= p) {
            res.innerHTML += ` 👉 ${c} `
        }
        res.innerHTML += `\u{1F3C1}`
    }
    
        
    

}   

    




}