import { Service } from "typedi";
import UserService from "../services/user.service";

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
}

export default UserController;