import { PaginatorResult } from './types'
import { take } from 'lodash'
import { DEFAULT_PAGE_SIZE, DEFAULT_PAGE } from './constant'

export class Paginator<Entity> {
  public paginate(
    entities: Entity[],
    page = DEFAULT_PAGE,
    pageSize = DEFAULT_PAGE_SIZE
  ): PaginatorResult<Entity> {
    const hasNextPage = entities.length > pageSize
    const edges = take(entities, DEFAULT_PAGE_SIZE)

    return {
      edges: edges.map(edge => ({
        node: edge,
        // @ts-ignore
        cursor: edge.id,
      })),
      pageInfo: {
        hasNextPage,
        // @ts-ignore
        currentPage: page,
      },
    }
  }
}
