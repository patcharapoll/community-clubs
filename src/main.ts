import express from 'express'
import { ApolloServer, AuthenticationError } from 'apollo-server-express'
import schema from './graphql/schemasMap'
import { applyMiddleware } from 'graphql-middleware'

import {
  logResult,
  logInput,
  isLoggedIn
} from './middleware'
import { GraphQLError } from 'graphql'

const PORT = 9000

const app = express()

const schemaWithMiddleware = applyMiddleware(
  schema,
  // isLoggedIn,
  logInput,
  logResult,
)

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  formatError: (err: GraphQLError) => {
    // Don't give the specific errors to the client.
    // if (err.originalError instanceof AuthenticationError) {
    //   return new Error('Different authentication error message!');
    // }
    if (err.message.startsWith('Database Error: ')) {
      return new Error('Internal server error');
    }
    // Otherwise return the original error. The error can also
    // be manipulated in other ways, as long as it's returned.
    // return new Error(err.originalError?.message);
    const { extensions, message }: any = err.originalError; 
    return {
      code: extensions.code,
      message,
      locations: err.locations,
      path: err.path
    };
  },
  context: ({ req }) => ({ req }),
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen(PORT, () => {
  console.log(`\n🚀      GraphQL is now running on http://localhost:${PORT}/graphql`)
})

export default app

