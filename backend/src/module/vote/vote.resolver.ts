import 'reflect-metadata'
import { Resolver, Query, Mutation, Ctx, Args } from 'type-graphql'
import { Context } from '../../context'
import { Vote, Battle, CreateVote } from './vote.types'

@Resolver(Vote)
export default class VoteResolvers {
  @Query(() => Battle)
  async getRandomBattle(@Ctx() ctx: Context) {
    try {
      const [first, second] = await ctx.prisma
        .queryRaw`SELECT * FROM prisma."Cat" ORDER BY random() LIMIT 2;`
      return {
        first,
        second,
      }
    } catch (error) {
      throw error
    }
  }

  // TODO: ADD CREATE VOTE
  @Mutation(() => Vote)
  async createVote(@Args() args: CreateVote, @Ctx() ctx: Context) {
    try {
      const { winner, loser } = args
      const vote = await ctx.prisma.vote.create({
        data: {
          winner: { connect: { id: winner } },
          loser: { connect: { id: loser } },
        },
      })
      return vote
    } catch (error) {
      throw error
    }
  }
}
