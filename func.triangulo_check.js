function triangulo_check(n1, n2, n3){
    if ( n1 + n2 > n3 && n1 + n3 > n2 && n2 + n3 > n1){
        if ( n1 === n2 && n2 === n3){
            return 'Equilateral!'
        }else if ( n1 == n2 || n1 == n3 || n2 == n3){
            return 'Isosceles!'
        }else{
            return 'Scalene!'
        }

    }else{
        return 'None'
    }
}

