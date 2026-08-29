# Trabalho de Engenharia de Software

Este repositório contém a estruturação de dois projetos desenvolvidos para a disciplina de Engenharia de Software:

1. **Plataforma de Apoio (Estilo Patreon):** Estrutura de pacotes baseada em Arquitetura Lógica e de Implantação, desenvolvida em TypeScript.
2. **Calculadora (Arquitetura Lógica):** Um projeto prático demonstrando o total desacoplamento de responsabilidades usando o padrão de camadas (Interface, Domínio e Persistência).

---

## 🧮 Como executar a Calculadora localmente

O projeto da calculadora foi desenvolvido em TypeScript para demonstrar a separação de código. Você pode executá-la de duas formas: no navegador (com interface visual) ou direto pelo terminal.

### Pré-requisitos
- Ter o **Node.js** instalado no seu computador.

### Opção 1: Executando no Navegador (Interface Web)
Para testar a calculadora com a tela interativa de botões:
1. Abra o terminal e navegue até a pasta da calculadora:
   ```bash
   cd calculadora-projeto
   ```
2. Inicie o servidor do projeto usando o Vite:
   ```bash
   npx vite src/interface
   ```
   *(**Nota:** Não é necessário baixar ou instalar o Vite manualmente. O comando `npx` já vem embutido no Node.js e faz o download e execução do Vite automaticamente)*

3. Acesse o link gerado no seu navegador (geralmente `http://localhost:5173/TelaCalculadora.html`).

### Opção 2: Executando no Terminal (Modo Texto)
Para testar rapidamente apenas a lógica matemática (Domínio) e a simulação de banco de dados (Persistência):
1. Abra o terminal na pasta da calculadora:
   ```bash
   cd calculadora-projeto
   ```
2. Execute o script de testes automatizados:
   ```bash
   npx tsx teste.ts
   ```
