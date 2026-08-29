import { CalculadoraController } from './src/interface/CalculadoraController';

console.log("=== INICIANDO TESTES DA CALCULADORA ===\n");

const controller = new CalculadoraController();

console.log("Teste 1: Somar 10 e 5");
const resSoma = controller.processarOperacao(10, 5, 'soma');
console.log(`> Retorno do Controller: ${resSoma}\n`);

console.log("Teste 2: Subtrair 8 de 20");
const resSub = controller.processarOperacao(20, 8, 'subtracao');
console.log(`> Retorno do Controller: ${resSub}\n`);

console.log("Teste 3: Multiplicar 7 por 6");
const resMult = controller.processarOperacao(7, 6, 'multiplicacao');
console.log(`> Retorno do Controller: ${resMult}\n`);

console.log("Teste 4: Dividir 15 por 3");
const resDiv = controller.processarOperacao(15, 3, 'divisao');
console.log(`> Retorno do Controller: ${resDiv}\n`);

console.log("=== VERIFICANDO O BANCO DE DADOS (Persistência) ===");
const historico = controller.obterHistorico();
historico.forEach((registro, index) => {
    console.log(`[Registro ${index + 1}]: ${registro}`);
});
