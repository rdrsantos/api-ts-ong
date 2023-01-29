import { Address } from "../../../entity/Address";
import AddressGateway from "../interface/AddressGateway";
import { db } from "../../../infra/db/DbConfigs";
import { OkPacket, RowDataPacket } from "mysql2";
import AddressQueries from "./queries/AddressQueries";

export default class AddressGatewayImpl implements AddressGateway {
    create(address: Address): Promise<Address> {
        return new Promise((resolve, reject) => {
            db.query<OkPacket>(
                AddressQueries.CREATE_NEW_ADDRESS,
              [address.street, address.distict, address.city, address.city, address.postalCode],
              (err, res) => {
                if (err) reject(err)
                else
                  resolve(address)
              }
            )
          })
    }
    
}