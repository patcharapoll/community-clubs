import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import schema from './graphql/schemasMap'
import { applyMiddleware } from 'graphql-middleware'
import {
  logResult,
  logInput,
  isLoggedIn
} from './middleware'

const PORT = 9000

const app = express()

const schemaWithMiddleware = applyMiddleware(
  schema,
  isLoggedIn,
  logInput,
  logResult
)

const server = new ApolloServer({
  schema: schemaWithMiddleware,
  context: ({ req }) => ({ req }),
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen(PORT, () => {
  console.log(`\n🚀      GraphQL is now running on http://localhost:${PORT}/graphql`)
})

export default app

