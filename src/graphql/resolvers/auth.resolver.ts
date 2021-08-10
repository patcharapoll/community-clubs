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
      // const data123 = await clientController.findOne({client_id: '555', client_secret: '234'});

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
