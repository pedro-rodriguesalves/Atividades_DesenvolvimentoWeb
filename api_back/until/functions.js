export function transformacao_texto(texto, funcao_transformacao) {
    if (funcao_transformacao == "lowercase") {
        return texto.toLowerCase();
    }else if (funcao_transformacao == "uppercase") {
        return texto.toUpperCase();
    }else
        return ("404 - Função de transformação não encontrada");
}

export function verificador(numeros, funcao_verificacao) {
    numeros = numeros.map(Number);
    if (funcao_verificacao == "minimum"){
        let min = numeros[0];
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] < min) {
                min = numeros[i];
            }
        }
        return min;     
    }else if (funcao_verificacao == "maximum"){
        let max = numeros[0];
        for (let i = 0; i < numeros.length; i++) {
            if (numeros[i] > max) {
                max = numeros[i];
            }
        }
        return max;     
    }else
        return ("404 - Função de verificação não encontrada");
}



