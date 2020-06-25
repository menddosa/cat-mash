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
import { Cat } from './cat.types'

@Resolver(Cat)
export default class CatResolvers {
  @Query(() => Cat)
  async ranking(@Ctx() ctx: Context, @Arg('id') cursor?: number) {
    try {
      return await ctx.prisma.cat.findMany({
        take: 4,
        ...(cursor && { cursor: { id: cursor }, skip: 1 }),
        orderBy: {
          elo: 'asc',
        },
      })
    } catch (error) {
      throw error
    }
  }

  // TODO: Calculate theses
  @FieldResolver()
  wins(@Root() cat: Cat) {
    return 1
  }

  @FieldResolver()
  loses(@Root() cat: Cat) {
    return 2
  }
  @FieldResolver()
  winRate(@Root() cat: Cat) {
    return 50.55
  }
}
