import UserGatewayImpl from "../../gateway/database/implementation/UserGatewayImpl";
import UserGateway from "../../gateway/database/interface/UserGateway";
import { UserCrud } from "../../usecases/interface/UserCrud";
import UserCrudImpl from "../../usecases/UserCrudImpl";


export const userGatewayImpl: UserGateway = new UserGatewayImpl()
export const userCrudImpl: UserCrud = new UserCrudImpl(userGatewayImpl)
