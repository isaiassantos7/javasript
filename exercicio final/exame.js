let numeros = []
let txtn = window.document.querySelector('#txtn')
let select = window.document.querySelector('#select')
let res = window.document.querySelector('#res')


function eNumero(t) {
    if(Number(t) >= 1 && Number(t) <= 100) {
        return true
    } else {
        return false 
    }
}

function inSelect(t, s) {
    if(s.indexOf(Number(t)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(eNumero(txtn.value) && !inSelect(txtn.value, numeros)) {
        numeros.push(Number(txtn.value))
        let item = document.createElement('option')
        item.text = `Valor ${txtn.value} adicionado`
        select.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já registrado')
    } 
    txtn.value = ''
    txtn.focus()
    
} 
       

        
     
function resultados() {
    if(numeros.length == 0) {
        window.alert('Adicione numeros para prosseguir')
        
    } else {
        let maior = numeros[0]
        let menor = numeros[0]
        let soma = 0 
        let media = 0
        for(let pos in numeros) {
            soma += numeros[pos]
        }
        for(let pos in numeros) {
            if (numeros[pos] > maior)
            maior = numeros[pos]
            if (numeros[pos] < menor)
            menor = numeros[pos]
        } 
        media = soma / numeros.length
        res.innerHTML = `<p>Temos o total de  ${numeros.length} numeros`
        res.innerHTML += `<p> O primeiro valor informado foi ${numeros[0]}`
        res.innerHTML += `<p> O maior valor informado foi ${maior}`
        res.innerHTML += `<p> O menor valor informado foi ${menor}`

        res.innerHTML += `<p>A soma de todos os numeros cadastrados é ${soma}`
        res.innerHTML += `<p> A média desses numeros é ${media}`
    }  
}
    
function limpar() {
    select.innerHTML = ''
    res.innerHTML = ''
    txtn.value == ''
    
    
}

    
    
        
        
    
    
    
    
    
