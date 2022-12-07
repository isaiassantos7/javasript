function tabuada() {
    var txtn = window.document.querySelector('#txtn')
    var tab = window.document.querySelector('#seltab')
    if (txtn.value.length == 0) {
        window.alert('ERRO')
    } else {
        var n = Number(txtn.value)
        tab.innerHTML = ''
    
       for(var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            item.value = `tab ${c}`
            tab.appendChild(item)
        }
    }
}
            

    
    

