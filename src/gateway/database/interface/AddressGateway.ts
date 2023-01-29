import { Address } from "../../../entity/Address";

export default interface AddressGateway {
    create(address: Address): Promise<Address>
}