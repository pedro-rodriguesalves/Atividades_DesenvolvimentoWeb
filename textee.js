import {somador} from './func_soma.js'
import {calculadora} from './func.calc.js'
import {triangulo_check} from './func.triangulo_check.js'

somador(1,2)
somador(3,2)
calculadora(1, 1, '+')
calculadora(1, 1, '-')
calculadora(1, 1, '*')
calculadora(1, 1, '/')
triangulo_check(2, 2, 2)
triangulo_check(10, 10, 10)
triangulo_check(3, 4, 4)
triangulo_check(4, 3, 4)
triangulo_check(4, 4, 3)
triangulo_check(10, 10, 2)
triangulo_check(3, 4, 5)
triangulo_check(10, 11, 12)
triangulo_check(5, 4, 2)
triangulo_check(0, 0, 0)
triangulo_check(3, 4, -5)
triangulo_check(1, 1, 3)
triangulo_check(2, 4, 2)