let num = [5,8,9,7]

console.log(`Nosso vetor é ${num}`)

for( let pos=0 ; pos<num.length ; pos++ ){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}

num[4] = 1
console.log (num)
num.push(6)

for( let pos in num){
    console.log(`A posição ${pos} tem valor ${num[pos]}`)
}

let lugar = num.indexOf(4)
if(lugar == -1){
    console.log(`Valor não encontrado.`)
} else {
    console.log(`Valor esta na posição ${lugar}.`)
}