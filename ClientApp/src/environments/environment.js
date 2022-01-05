"use strict";
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = void 0;
exports.environment = {
    apiUrl: 'https://localhost:44321/api/',
    production: false,
    imagensUrl: '',
    paginaInicialNavegacao: 1,
    SIGLASISTEMA: 'CEMV',
    contadorPagina: 1,
    publishFolder: 'HCEMV',
    version: '0.0.1',
    apiVersion: '0.0.1',
    ambiente: 'D',
    sucessoExclusao: 'Registro excluído com sucesso!',
    falhaExclusao: 'Erro ao tentar excluir o registro.',
    sucessoInclusaoEdicao: 'Registro salvo com sucesso!',
    falhaInclusaoEdicao: 'Erro ao tentar salvar o registro',
    campoObrigatorio: 'Campo obrigatório',
    peloMenosUmCampoObrigatorio: 'Por favor, selecione ao menos um filtro.',
    dataMaiorQue: 'Data Inicial não pode ser maior do que a Data Final',
    carregamento: 'Carregando...',
    erroCarregamento: 'Erro ao carregar registro'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
//# sourceMappingURL=environment.js.map