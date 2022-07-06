export class Parcela {
    #numero; //da parcela
    #valor;
    #juros; 
    #amortizacao;
    #saldo;

    constructor(numero,valor,juros,amorizacao,saldo) {
        this.#numero = numero;
        this.#valor = valor;
        this.#juros = juros;
        this.#amortizacao = amorizacao;
        this.#saldo = saldo;
    }
}