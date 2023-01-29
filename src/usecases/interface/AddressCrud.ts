import { Address } from "../../entity/Address";

export interface AddressCrud {
    create(address: Address): Promise<Address>
}