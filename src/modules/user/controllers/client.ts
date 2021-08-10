import { Service } from "typedi";
import ClientService from "../services/client";
import { IClient } from '../models/client'

@Service()
class ClientController {
  constructor(private readonly clientService: ClientService) { }
  async findOne(_req: IClient) {
    const result = await this.clientService.findOne(_req);
    return result;
  }
}

export default ClientController;