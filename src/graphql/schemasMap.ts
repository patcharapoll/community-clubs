import 'graphql-import-node'
import * as userTypeDefs from './schemas/user.graphql'
import * as emptyTypeDefs from './schemas/empty.graphql'
import * as authTypeDefs from './schemas/auth.graphql'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolversMap'
import { GraphQLSchema } from 'graphql'
import directiveResolvers from '../middleware/directives'

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [
    emptyTypeDefs,
    userTypeDefs,
    authTypeDefs,
  ],
  resolvers,
  directiveResolvers,
})
export default schema
