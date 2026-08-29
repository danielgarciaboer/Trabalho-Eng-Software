export class HistoricoRepository {
    private historico: string[] = [];

    salvar(registro: string): void {
        this.historico.push(registro);
        // Simulando persistência em banco ou arquivo
        console.log("Salvo na persistência:", registro);
    }

    obterHistorico(): string[] {
        return this.historico;
    }
}
