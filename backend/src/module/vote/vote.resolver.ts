import 'reflect-metadata'
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  Ctx,
  FieldResolver,
  Root,
} from 'type-graphql'
import { Context } from '../../context'
import { Vote, Battle } from './vote.types'

@Resolver(Vote)
export default class VoteResolvers {
  @Query(() => Battle)
  async getRandomBattle(@Ctx() ctx: Context) {
    try {
      const [first, second] = await ctx.prisma.queryRaw`SELECT * FROM prisma."Cat" ORDER BY random() LIMIT 2;`
      return {
        first,
        second
      }
    } catch (error) {
      throw error
    }
  }

  // TODO: ADD CREATE VOTE
}
