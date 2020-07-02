import { PageInfo } from '../module/cat/cat.types'

export type Nullable<T> = T | null
export type Either<T, K> = T | K

export type Edge<Entity> = {
  node: Entity
  cursor: number
}

export type PaginatorResult<Entity> = {
  edges: Edge<Entity>[]
  pageInfo: PageInfo
}
