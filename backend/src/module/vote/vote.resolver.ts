import { Resolver, Query, Mutation, Ctx, Args } from 'type-graphql'
import EloRating from 'elo-rating'
import { Context } from '../../context'
import { Vote, Battle, CreateVote } from './vote.types'

@Resolver(Vote)
export default class VoteResolvers {
  @Query(() => Battle)
  async getRandomBattle(@Ctx() ctx: Context): Promise<Battle> {
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

  @Mutation(() => Vote)
  async createVote(
    @Args() args: CreateVote,
    @Ctx() ctx: Context
  ): Promise<Vote> {
    try {
      const { winner, loser } = args

      const winnerCat = await ctx.prisma.cat.findOne({ where: { id: winner } })
      const loserCat = await ctx.prisma.cat.findOne({ where: { id: winner } })
      if (!winnerCat || !loserCat) throw new Error('cat-not-found')

      const { playerRating, opponentRating } = EloRating.calculate(
        winnerCat.elo,
        loserCat.elo
      )

      await ctx.prisma.cat.update({
        where: { id: winner },
        data: { elo: playerRating },
      })
      await ctx.prisma.cat.update({
        where: { id: loser },
        data: { elo: opponentRating },
      })

      const vote = await ctx.prisma.vote.create({
        data: {
          winner: { connect: { id: winner } },
          loser: { connect: { id: loser } },
        },
        include: { winner: true, loser: true },
      })
      return vote
    } catch (error) {
      throw error
    }
  }
}
