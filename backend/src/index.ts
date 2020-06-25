import 'reflect-metadata'
import * as tq from 'type-graphql'
import { GraphQLServer } from 'graphql-yoga'
import { createContext } from './context'
import VoteResolvers from './module/vote/vote.resolver'
import CatResolvers from './module/cat/cat.resolver'

const app = async () => {
  const schema = await tq.buildSchema({
    resolvers: [CatResolvers, VoteResolvers],
  })

  new GraphQLServer({
    schema,
    context: createContext(),
  }).start(() => console.log('🚀 Server ready at: http://localhost:4000'))
}

app()
