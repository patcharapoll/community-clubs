import { IResolvers } from 'graphql-tools'
import {
    AuthenticateResponse,
    MutationRegisterArgs,
    QueryLoginArgs,
} from '../generated'
import { authController, clientController } from '../../containers'
import {
    LoginRequest,
} from '../../modules/auth/interfaces'

export const AuthResolvers: IResolvers = {
  Query: {
    async login (_: void, args: QueryLoginArgs): Promise<AuthenticateResponse> {
        const data: LoginRequest = {
          username: args.username,
          password: args.password,
          client_id: '',
      }
      const result = await authController.login(data);
      return {
        token: result.token,
        message: result.message || null,
        expires_id: result.expires_id,
        refresh_token: result.refresh_token!,
        tokenType: result.tokenType,
      }
    }
  },
  Mutation: {
    async logout (_: void, args: MutationRegisterArgs): Promise<any> {
      return {
        token: "toto"
      }
    }
  }
}
