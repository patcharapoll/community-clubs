import { IResolvers } from 'graphql-tools'
import {
    AuthenticateResponse,
    MutationRegisterArgs,
    QueryLoginArgs,
} from '../generated'
import { authController } from '../../containers'
import {
    LoginRequest,
} from '../../core/auth/interfaces'

export const AuthResolvers: IResolvers = {
  Query: {
    async login (_: void, args: QueryLoginArgs): Promise<AuthenticateResponse> {
      console.log(args);
      const data: LoginRequest = {
          username: '',
          password: '',
          client_id: '',
      }
      const result = await authController.login(data);
      return {
        token: "toto"
      }
    }
  },
  Mutation: {
    async logout (_: void, args: MutationRegisterArgs): Promise<AuthenticateResponse> {
      return {
        token: "toto"
      }
    }
  }
}
