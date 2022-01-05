"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CadastroRouting = void 0;
var not_found_component_1 = require("../navegacao/not-found/not-found.component");
var cadastrar_cor_component_1 = require("./cor/cadastrar-cor/cadastrar-cor.component");
var listar_cor_component_1 = require("./cor/listar-cor/listar-cor.component");
var cadastroRoutingConfig = [
    { path: 'cor', component: listar_cor_component_1.ListarCorComponent },
    { path: 'cadastrar-cor', component: cadastrar_cor_component_1.CadastrarCorComponent },
    /* NotFound: Precisa ser a última rota a ser declarada */
    { path: '**', component: not_found_component_1.NotFoundComponent }
];
var CadastroRouting = /** @class */ (function () {
    function CadastroRouting() {
    }
    return CadastroRouting;
}());
exports.CadastroRouting = CadastroRouting;
//# sourceMappingURL=cadastro.route.js.map