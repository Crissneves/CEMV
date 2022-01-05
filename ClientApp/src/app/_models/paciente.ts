export interface Paciente {
    animalId: number;
    nome: string;
    ativo: boolean;
    idade: number;
    peso?: number;
    dataCadastro: Date;
    foto?: string;
    tutorId?: number;
    especieId?: number;
    racaId?: number;
    pelagemId?: number;
    corId?: number;
    sexoId?: number;
    comoChegoouId?: number;
    idPorte?: number;
    dataNascimento?: Date;
    isdataNascimentoEstimada?: boolean;
    pedigree?: string;
    chip?: string;
    cci?: string;
    isMorto?: boolean;
    isCastrado?: boolean;
    observacoes?: string;
    usuarioCadastroId?: string;
}
