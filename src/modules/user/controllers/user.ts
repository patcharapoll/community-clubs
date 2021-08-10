import { Service } from 'typedi';
import UserService from '../services/user';
import { CheckDuplicateUser } from '../interfaces'
import { UserAttributes, IUser } from '../models/user';


interface Request {
  id: string
}

interface Response {
  name: string
}

@Service()
class UserController {
  constructor(private readonly userService: UserService) { }
  async getAllUsers(_req: Request) {
    const result = await this.userService.getAllUsers();
    return result;
  }

  async findOne(_req: IUser) {
    const result = await this.userService.findOne(_req);
    return result;
  }
}

export default UserController;