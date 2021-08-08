import { IResolvers } from 'graphql-tools'
import { merge } from 'lodash'
import { UserResolvers } from './resolvers/user.resolver'
import { AuthResolvers } from './resolvers/auth.resolver'

const resolverMap: IResolvers = merge(UserResolvers, AuthResolvers)
export default resolverMap
