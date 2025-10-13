export function triangulo_check(n1, n2, n3){
    if ( n1 + n2 > n3 && n1 + n3 > n2 && n2 + n3 > n1){
        if ( n1 === n2 && n2 === n3){
            return console.log('Equilateral!')
        }else if ( n1 == n2 || n1 == n3 || n2 == n3){
            return console.log('Isosceles!')
        }else{
            return console.log('Scalene!')
        }

    }else{
        return console.log('None')
    }
}
