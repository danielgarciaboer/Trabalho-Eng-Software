import { Calculadora } from '../dominio/Calculadora';
import { Soma, Subtracao, Multiplicacao, Divisao } from '../dominio/Operacao';
import { HistoricoRepository } from '../persistencia/HistoricoRepository';

export class CalculadoraController {
    private calculadora: Calculadora;
    private repositorio: HistoricoRepository;

    constructor() {
        this.calculadora = new Calculadora();
        this.repositorio = new HistoricoRepository();
    }

    processarOperacao(a: number, b: number, tipo: string): number {
        let operacao;
        let simbolo = '';

        switch (tipo) {
            case 'soma': operacao = new Soma(); simbolo = '+'; break;
            case 'subtracao': operacao = new Subtracao(); simbolo = '-'; break;
            case 'multiplicacao': operacao = new Multiplicacao(); simbolo = '*'; break;
            case 'divisao': operacao = new Divisao(); simbolo = '/'; break;
            default: throw new Error("Operação inválida");
        }

        const resultado = this.calculadora.calcular(a, b, operacao);
        
        const registro = `${a} ${simbolo} ${b} = ${resultado}`;
        this.repositorio.salvar(registro);

        return resultado;
    }

    obterHistorico(): string[] {
        return this.repositorio.obterHistorico();
    }
}
