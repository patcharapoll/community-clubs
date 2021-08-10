import { Service } from "typedi";
import {
    LoginRequest,
    LoginResponse,
} from '../interfaces'
import {
    generateRefreshToken,
    generateAccessToken,
} from '../../../utils/tokenGenerator'

@Service()
class AuthService {
//   constructor(private readonly userRepository: UserRepository) { }
  async login(req: LoginRequest): Promise<LoginResponse> {
    try {
        const { username, password, client_id } = req

        // Find user in database
        const mockUser = {
            username: '10121',
            client_id : '1234',
            role: 'customer'
        }

        if (mockUser) {
            // const compare = findUser.comparePassword(password)
            // compare pass

            const refreshToken = generateRefreshToken()
            const expireRefreshToken = new Date()

            expireRefreshToken.setDate(expireRefreshToken.getDate() + 2)
            // findUser.update({ refresh_token: refreshToken, refresh_token_expire: expireRefreshToken })

            return {
                ok: true,
                message: 'Login success.',
                token: generateAccessToken({ username: mockUser.username, role: mockUser.role }),
                expires_id: '5m',
                refresh_token: refreshToken,
                tokenType: 'Bearer',
            }
        } else {
          throw new Error('Login failed.')
        }
    } catch (err) {
        throw new Error(err.message)
    }
  }
}

export default AuthService;