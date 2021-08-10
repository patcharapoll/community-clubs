import { Service } from "typedi";
import ClientModel, { ClientAttributes, IClient } from "../models/client";

@Service()
class ClientRepository {
  private readonly clients: ClientAttributes[] = [];

  async findOne(_req: IClient): Promise<ClientAttributes | null> {
    const data = await ClientModel.findOne({
        where: {
            client_id: _req.client_id,
            client_secret: _req.client_secret,
        }
    })

    return data;
  }
}

export default ClientRepository;