import { Service } from "typedi";
import { ClientAttributes, IClient } from "../models/client";
import ClientRepository from "../repositories/client";
import { CheckClientIdRequest } from '../interfaces'

@Service()
class ClientService {
  constructor(private readonly clientRepository: ClientRepository) { }
  async findOne(_req: IClient): Promise<ClientAttributes | null> {
    const result = await this.clientRepository.findOne(_req);

    return result;
  }
}

export default ClientService;