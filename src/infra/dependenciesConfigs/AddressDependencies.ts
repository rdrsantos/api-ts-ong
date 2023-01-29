import AddressGatewayImpl from "../../gateway/database/implementation/AddressGatewayImpl"
import AddressGateway from "../../gateway/database/interface/AddressGateway"
import AddressCrudImpl from "../../usecases/AddressCrudImpl"
import { AddressCrud } from "../../usecases/interface/AddressCrud"

export const addressGatewayImpl: AddressGateway = new AddressGatewayImpl()
export const addressCrudImpl: AddressCrud = new AddressCrudImpl(addressGatewayImpl)