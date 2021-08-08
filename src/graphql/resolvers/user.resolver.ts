import { IResolvers } from 'graphql-tools'
import {
  UserResponse,
  MutationRegisterArgs,
  QueryGetUserByIdArgs,
} from '../generated'
import { userController } from '../../containers'

export const UserResolvers: IResolvers = {
  Query: {
    async getUserById (_: void, args: QueryGetUserByIdArgs): Promise<UserResponse> {
      const result = await userController.getAllUsers({ id: 'Hi' });
      return {
        token: "toto"
      }
    }
  },
  Mutation: {
    async register (_: void, args: MutationRegisterArgs): Promise<UserResponse> {
      return {
        token: "toto"
      }
    }
  }
}
