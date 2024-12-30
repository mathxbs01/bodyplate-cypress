export interface IUsuario {
  nmUsuario: string;
  nuCpf: string;
  txEmail: string;
  nuTelefone: string;
  txLocalAcesso: string;
  perfilAcessoId: number;
  empresaId: number;
  hostname: string;
  endpoint: string;
  txFoto: string;
}

export interface IPerfil {
  txPerfilAcesso: string;
  permissoes: [
    {
      flLista: boolean;
      flFiltra: boolean;
      flCria: boolean;
      flAtualiza: boolean;
      flDeleta: boolean;
      flExportaExcel: boolean;
      flExportaPdf: boolean;
      flExportaXml: boolean;
      telaId: number;
    }
  ];
}

export interface IMapaArea {
  nmMapaArea: string;
  localAcessoId: number;
  FlMapa: boolean;
  txDescricao: string;
  imagens: [
    {
      id: number;
      txMapaAreaImagem: string;
    }
  ];
}

export interface ILocalAcesso {
  nmLocalAcesso: string;
  txCodigo: string;
  txDescricao: string;
}

export interface IEmpresaPrincipal {
  nuCnpj: string;
  txRazaoSocial: string;
  nmFantasia: string;
  nuCep: string;
  txBairro: string;
  nuEndereco: number;
  txEndereco: string;
  sgEstado: string;
  nmContato: string;
  nuTelefone: string;
  txCategoria: string;
  txClasse: string;
  txImagem: string;
  txEmail: string;
  txEmailResponsavel: string;
  aeroportoId: number;
  txPais: string;
  txLogradouro: string;
  txCidade: string;
  flTipo: number;
  txObservacoes: string;
}

export interface IEmpresa {
  nuCnpj: string;
  txRazaoSocial: string;
  nmFantasia: string;
  nuCep: string;
  nuEndereco: number;
  txEndereco: string;
  txComplemento: string;
  sgEstado: string;
  nmContato: string;
  nuTelefone: string;
  nuRamal: string;
  txSetor: string;
  txEmail: string;
  flGrupoAgemar: boolean;
  flNacional: boolean;
  txBairro: string;
  txPais: string;
  txCidade: string;
  txObservacoes: string;
}

export interface IAeroporto {
  tipoEnum: number;
  statusEnum: number;
  origemEnum: number;
  txPais: string;
  nuCnpj: string;
  txAdministradora: string;
  txRazaoSocial: string;
  nmFantasia: string;
  txIcao: string;
  txIata: string;
  nuCep: string;
  sgEstado: string;
  txCidade: string;
  txLogradouro: string;
  txBairro: string;
  nuEndereco: number;
  txComplemento: string;
  nuTelefone: string;
  txEmail: string;
}
