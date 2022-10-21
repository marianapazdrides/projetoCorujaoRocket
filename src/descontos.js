// Regra de Negócio
// Calcular o valor de qualquer curso aplicando o valor de um
// desconto fornecido até uma data limite

let aplicarUmValorDeDescontoAteUmaData = (valorCurso, descontoAbsoluto, dataLimite) => {

    let dataDeHoje = new Date();
    // let dataDeHoje = calendario.getDate()+'/'+(calendario.getMonth()+1)+'/'+calendario.getFullYear();

    if (dataDeHoje <= dataLimite) {
        return valorCurso - descontoAbsoluto
    } else {
        return "Promoção expirada"
    }
}

// Regra de Negócio
// Calcular o valor de qualquer curso aplicando um
// desconto percentual fornecido até uma data limite

let aplicarUmDescontoPercentualAteUmaData = (valorCurso, descontoPercentual, dataLimite) => {

    let dataDeHoje = new Date();
    // let dataDeHoje = calendario.getDate()+'/'+(calendario.getMonth()+1)+'/'+calendario.getFullYear();

    if (dataDeHoje <= dataLimite) {
        return valorCurso - (valorCurso*descontoPercentual)
    } else {
        return "Promoção expirada"
    }
}

// Regra de Negócio
// Calcular o valor de qualquer curso aplicando um
// desconto absoluto fornecido para um e-mail

let aplicarUmDescontoAbsolutoParaUmEmail = (valorCurso, descontoAbsoluto, emailCadastrado) => {
    
    let email = emailCadastrado

    if (emailCadastrado = email ) {
        return valorCurso - descontoAbsoluto
    } else {
        return "Não há desconto disponível para o email informado"
    }

}

// Regra de Negócio
// Calcular o valor de qualquer curso aplicando um
// desconto percentual fornecido para um Email

let aplicarUmDescontoPercentualParaUmEmail = (valorCurso, descontoPercentual, emailCadastrado) => {

    let email = emailCadastrado

    if (emailCadastrado = email) {
        return valorCurso - (valorCurso*descontoPercentual)
    } else {
        return "Não há desconto disponível para o email informado"
    }
}


module.exports = {
    aplicarUmValorDeDescontoAteUmaData,
    aplicarUmDescontoPercentualAteUmaData,
    aplicarUmDescontoAbsolutoParaUmEmail,
    aplicarUmDescontoPercentualParaUmEmail
}