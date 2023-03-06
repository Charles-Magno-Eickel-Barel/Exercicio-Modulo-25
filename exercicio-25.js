class Alunos {

    constructor() {
        this.alunos = [];
    }

    
    adicionarAluno(nome,nota) {
        this.alunos.push({
            nome: nome,
            nota: nota
        });
    }

    imprimirAlunosMaiorQueCinco() {
        for(let i = 0; i < this.alunos.length; i++) {
            if (this.alunos[i].nota >= 6) {
                console.log(`Aluno ${i + 1}: ${this.alunos[i].nome}, nota ${this.alunos[i].nota}`);
            }
        }
    }
}

const turma = new Alunos()
turma.adicionarAluno('Charles', 5);
turma.adicionarAluno('Taiane', 10);

turma.imprimirAlunosMaiorQueCinco();
