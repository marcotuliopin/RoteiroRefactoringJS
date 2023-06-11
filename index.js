const { readFileSync } = require('fs');

var Repositorio = require("./repositorio.js");
var ServicoCalculoFatura = require("./servico.js");
var gerarFaturaStr = require("./apresentacao.js")



// function gerarFaturaHTML(fatura, pecas, calc) {
//   let faturaHTML = `<html> \n<p> Fatura ${fatura.cliente} </p>\n`;
//   faturaHTML += `<ul>\n`;
//   for (let apre of fatura.apresentacoes) {
//     faturaHTML += `<li> ${getPeca(pecas, apre).nome}: ${formatarMoeda(calc.calcularTotalApresentacao(pecas, apre))} (${apre.audiencia} assentos) </li>\n`;
//   }
//   faturaHTML += `</ul>\n`;
//   faturaHTML += `<p> Valor total: ${formatarMoeda(calc.calcularTotalFatura(pecas, fatura.apresentacoes))} </p>\n`;
//   faturaHTML += `<p> Créditos acumulados: ${calc.calcularTotalCreditos(pecas, fatura.apresentacoes)} </p>\n`;
//   faturaHTML += `</html> \n`;
//   return faturaHTML;
// }

const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
// const faturaHTML = gerarFaturaHTML(faturas, pecas, calc);
console.log(faturaStr);
// console.log(faturaHTML);
