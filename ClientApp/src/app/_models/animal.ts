import { Cor } from "./cor";

export interface Animal {
 
  AnimalId: number;
  Nome: string;
  //TutorId: number;
  //EspecieId: number;
  //RacaId: number;

//  byte? PelagemId

//  short? CorId

//  byte? SexoId

  ComochegouId: number;

//  byte? PorteId

  Datanascimento?: Date;  

//         bool Indicadorestimada  

  Pedigree: string;
  Chip: string;  
  Cci: string;

//         bool Indicadormorto  

//         bool Indicadorcastrado  

  Observacoes: string;
  Foto: string;
  Datacadastro?: Date;

//         short ? UsuariocadastroId  


//         virtual Comochegou Comochegou  

  Cor: Cor[];  

//         virtual Especie Especie  

//         virtual Raca Raca  

//         virtual Tutor Tutor  

//         virtual Usuario Usuariocadastro  
         
}
