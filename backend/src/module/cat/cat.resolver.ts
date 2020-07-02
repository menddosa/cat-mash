import {
  Resolver,
  Query,
  Arg,
  Ctx,
  FieldResolver,
  Root,
  Int,
} from 'type-graphql'
import { Context } from '../../context'
import { Cat, CatConnection } from './cat.types'
import { loaders } from './cat.loaders'
import { Paginator } from '../../utils/paginator'
import { getPagination } from '../../utils/methods'

@Resolver(Cat)
export default class CatResolvers {
  @Query(() => CatConnection)
  async ranking(
    @Ctx() ctx: Context,
    @Arg('page', () => Int, { nullable: true }) page?: number
  ): Promise<CatConnection> {
    try {
      const cats = await ctx.prisma.cat.findMany({
        ...(page && { ...getPagination(page) }),
        orderBy: {
          elo: 'desc',
        },
      })

      return new Paginator<Cat>().paginate(cats, page)
    } catch (error) {
      throw error
    }
  }

  @FieldResolver()
  wins(@Root() cat: Cat): Promise<number> {
    return loaders.wins.load(cat)
  }

  @FieldResolver()
  loses(@Root() cat: Cat): Promise<number> {
    return loaders.loses.load(cat)
  }

  @FieldResolver()
  winRate(@Root() cat: Cat): Promise<number> {
    return loaders.winRate.load(cat)
  }
}
