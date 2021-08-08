import { Service } from "typedi";
import User from "../models/user.model";
import UserRepository from "../repositories/user.repository";

@Service()
class UserService {
  constructor(private readonly userRepository: UserRepository) { }
  async getAllUsers(): Promise<User[]> {
    const result = await this.userRepository.getAllUsers();
    return result;
  }
}

export default UserService;