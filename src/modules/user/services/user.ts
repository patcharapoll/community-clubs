import { Service } from 'typedi';
import { UserAttributes, IUser } from '../models/user';
import { CheckDuplicateUser } from '../interfaces'
import UserRepository from '../repositories/user';

@Service()
class UserService {
  constructor(private readonly userRepository: UserRepository) { }
  async getAllUsers(): Promise<UserAttributes[]> {
    const result = await this.userRepository.getAllUsers();
    return result;
  }

  async findOne(_req: IUser): Promise<UserAttributes | null> {
    const result = await this.userRepository.findOne(_req);
    return result;
  }
}

export default UserService;