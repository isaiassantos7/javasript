let valores = [4, 5, 2, 1]
valores[4] = 8
console.log(valores)
for(var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

/*for(let pos in valores) {
    console.log(valores[pos])
}*/

