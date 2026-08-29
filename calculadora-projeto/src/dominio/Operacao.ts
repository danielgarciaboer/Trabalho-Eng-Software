export interface Operacao {
    executar(a: number, b: number): number;
}

export class Soma implements Operacao {
    executar(a: number, b: number): number { return a + b; }
}

export class Subtracao implements Operacao {
    executar(a: number, b: number): number { return a - b; }
}

export class Multiplicacao implements Operacao {
    executar(a: number, b: number): number { return a * b; }
}

export class Divisao implements Operacao {
    executar(a: number, b: number): number {
        if (b === 0) throw new Error("Divisão por zero");
        return a / b;
    }
}
