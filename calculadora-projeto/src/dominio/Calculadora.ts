import { Operacao } from './Operacao';

export class Calculadora {
    calcular(a: number, b: number, operacao: Operacao): number {
        return operacao.executar(a, b);
    }
}
