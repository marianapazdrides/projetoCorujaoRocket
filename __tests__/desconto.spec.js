const desconto = require ("../src/descontos");

const massaDescontoAbsolutoParaEmailJSON = require("../vendors/massaUnidade")

let massaDatas = [
    [1000, 200, "2022-12-31T23:59:59.000Z", 800],
    [1000, 200, "2022-09-28T23:59:59.000Z", "Promoção expirada"],

]

test.each(massaDatas)("desconto absoluto ate uma data - lista", (valorCurso, descontoAbsoluto, textodataLimite, resultadoEsperado)=>{
    // Configura
    const dataLimite = new Date (textodataLimite);
    
    // Executa
    const aplicarUmValorDeDescontoAteUmaData = desconto.aplicarUmValorDeDescontoAteUmaData
    const resultadoAtual = aplicarUmValorDeDescontoAteUmaData (valorCurso, descontoAbsoluto, dataLimite)

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
})


test("desconto absoluto ate uma data", ()=>{
    // Configura
    const valorCurso = 1000;
    const descontoAbsoluto = 200;
    const dataLimite = new Date('2022-12-31T23:59:59.000Z');
    const resultadoEsperado = 800;

    // Executa
    const aplicarUmValorDeDescontoAteUmaData = desconto.aplicarUmValorDeDescontoAteUmaData
    const resultadoAtual = aplicarUmValorDeDescontoAteUmaData (valorCurso, descontoAbsoluto, dataLimite)

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
})

test("desconto percentual ate uma data", () => {
    // Configura
    const valorCurso = 1000;
    const descontoPercentual = 0.1;
    const dataLimite = new Date('2022-12-31T23:59:59.000Z');
    const resultadoEsperado = 900;

    // Executa
    const aplicarUmDescontoPercentualAteUmaData = desconto.aplicarUmDescontoPercentualAteUmaData
    const resultadoAtual = aplicarUmDescontoPercentualAteUmaData (valorCurso, descontoPercentual, dataLimite)

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado);
})

const massaDescontoPercentual = [
    [1000, 0.2, new Date ("2023-12-31T23:59:59.000Z"), 800],
    [2000, 0.1, new Date ("2021-12-31T23:59:59.000Z"), "Promoção expirada"],
    [5000, 0.5, new Date ("2022-12-31T23:59:59.000Z"), 2500]
]

test.each(massaDescontoPercentual)("Aplicar desconto %f * %f", (valorCurso, descontoPercentual, dataLimite, resultadoEsperado) => {
    const aplicarUmDescontoPercentualAteUmaData = desconto.aplicarUmDescontoPercentualAteUmaData;
    expect(aplicarUmDescontoPercentualAteUmaData(valorCurso, descontoPercentual, dataLimite)).toBe(resultadoEsperado)
});

test("desconto absoluto para um email", () => {
    // Configura
    const valorCurso = 1000;
    const descontoAbsoluto = 200;
    const emailCadastrado = "teste@teste.com";
    const resultadoEsperado = 800;

    // Executa 
    aplicarUmDescontoAbsolutoParaUmEmail = desconto.aplicarUmDescontoAbsolutoParaUmEmail
    const resultadoAtual = aplicarUmDescontoAbsolutoParaUmEmail (valorCurso, descontoAbsoluto, emailCadastrado)
    
    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado);    
});

test.each(massaDescontoAbsolutoParaEmailJSON.array.map(elemento => [
    elemento.valorCurso,
    elemento.descontoAbsoluto,
    elemento.emailCadastrado,
    elemento.resultadoEsperado
]))("Aplicar desconto %f - %f", (valorCurso, descontoAbsoluto, emailCadastrado, resultadoEsperado) => {
    expect(desconto.aplicarUmDescontoAbsolutoParaUmEmail(valorCurso, descontoAbsoluto, emailCadastrado)).toBe(resultadoEsperado)
})   

test("desconto percentual para um email", () => {
    // Configura
    const valorCurso = 1000;
    const descontoPercentual = 0.1;
    const emailCadastrado = "teste2@teste.com";
    const resultadoEsperado = 900;

    // Executa
    aplicarUmDescontoPercentualParaUmEmail = desconto.aplicarUmDescontoPercentualParaUmEmail
    const resultadoAtual = aplicarUmDescontoPercentualParaUmEmail (valorCurso, descontoPercentual, emailCadastrado)

    // Valida
    expect(resultadoAtual).toBe(resultadoEsperado);    
})