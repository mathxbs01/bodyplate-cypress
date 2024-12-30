import {
  IAeroporto,
  IEmpresa,
  IEmpresaPrincipal,
  ILocalAcesso,
  IMapaArea,
  IPerfil,
  IUsuario,
} from "../../models/payloadFixtureModel/IpayloadFixture.model";

export interface IPayloadFixtures {
  aeroporto: IAeroporto;
  empresaPrincipal: IEmpresaPrincipal;
  localAcesso: ILocalAcesso;
  localAcessoMapaArea: ILocalAcesso;
  localAcessoUsuario: ILocalAcesso;
  empresaInternacional: IEmpresa;
  empresaNacional: IEmpresa;
  empresaUsuario: IEmpresa;
  perfil: IPerfil;
  perfilUsuario: IPerfil;
  usuario: IUsuario;
  usuarioGestaoUsuario: IUsuario;
  mapaArea: IMapaArea;
}
