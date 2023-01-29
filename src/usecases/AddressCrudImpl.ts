import { Address } from "../entity/Address";
import { AddressCrud } from "./interface/AddressCrud";
import AddressGateway from "../gateway/database/interface/AddressGateway";

export default class AddressCrudImpl implements AddressCrud {

    private addressGateway: AddressGateway

    constructor(addressGateway: AddressGateway) {
        this.addressGateway = addressGateway; 
      }

    async create(address: Address): Promise<Address> {
        const addressCreated = await this.addressGateway.create(address);
        return addressCreated;
    }

}