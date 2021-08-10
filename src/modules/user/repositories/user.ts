import { Service } from 'typedi';
import UserModel, { UserAttributes, IUser } from '../models/user';
import { CheckDuplicateUser } from '../interfaces'

@Service()
class UserRepository {
  private readonly users: UserAttributes[] = [];

  async getAllUsers(): Promise<UserAttributes[]> {
    const data = await UserModel.findAll({})
    return data;
  }

  async findOne(_req: IUser): Promise<UserAttributes | null> {
    const data = await UserModel.findOne({
        where: {
            client_id: _req.client_id,
            username: _req.username,
        }
    })
  
    return data
  }
}

export default UserRepository;