export function calculadora (n1, n2, op){
    if (op === '+'){
        return console.log(n1 + n2)
    }else if (op === '-'){
        return console.log(n1 - n2)
    }else if (op === '*'){
        return console.log(n1 * n2)
    }else if (op === '/'){
        return console.log(n1 / n2)
    }else{
        return console.log('Fora do escopo!')
    }
}
