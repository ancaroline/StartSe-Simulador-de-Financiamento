import {Parcela} from './parcela.js';

class Financiamento {
    #taxaJuros; //Juros mensais
    #prazo; //em meses
    #parcelas = [];

    constructor(valor, entrada, tavaJuros, prazo) {
        this.taxaJuros = taxaJuros;
        this.#prazo = prazo;
        //composição - financiamento possui ou tem parcelas
        this.#parcelas = push (new Parcela(0,0,0,0,valor - entrada));
    }
}