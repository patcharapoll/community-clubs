import { Service } from "typedi";
import AuthService from "../services/auth";
import {
    LoginRequest,
} from '../interfaces'

@Service()
class AuthController {
  constructor(private readonly authService: AuthService) { }
  async login(_req: LoginRequest) {
    const result = await this.authService.login(_req);

    return result;
  }
}

export default AuthController;