/* Descrição:
Tomando como base os exemplos anteriores da estrutura for e while, criar um ciclo que repita um bloco de 
instruções no seu simulador. 
A cada repetição, é necessário efetuar uma operação ou comparação para obter uma saída por alert ou console.
Recomendação:

Usamos a instrução “for” para realizar a repetição por um número fixo de vezes. 
Já o “while”, usamos quando quisermos repetir algo até que uma condição deixe de ser cumprida.

Exemplos:

Solicitar a quantidade de parcelas e exibir o valor de cada uma, caso sejam parcelas simples.


/* let valorDevido = parseInt(prompt("Qual o valor devido?"));
let quantidadeParcelas = parseInt(prompt("Insira a quantidade de parcelas que deseja parcelar"));


for (let i = 1; i <= 4; i++) {
    let resultado = valorDevido / quantidadeParcelas;
    console.log(quantidadeParcelas + "Parcelas de " + " = " + resultado);
} */




let valorDevido = parseInt(prompt("Qual o valor devido?"));
let quantidadeParcelas = parseInt(prompt("Insira a quantidade de parcelas que deseja parcelar"));


for (let i = 1; i <= 4; i++) {
    let resultado = valorDevido / quantidadeParcelas;
    console.log(quantidadeParcelas + "Parcelas de " + " = " + resultado);
}