import { ObjectType, Field, Float, Int } from 'type-graphql'

@ObjectType()
export class Cat {
  @Field(() => Int)
  id: number
  @Field(() => String)
  image: string
  @Field(() => Number)
  elo: number
  @Field(() => Number)
  wins?: number
  @Field(() => Number)
  loses?: number

  @Field(() => Float)
  winRate?: number

  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
}

@ObjectType()
export class CatEdge {
  @Field(() => Cat)
  node: Cat
  @Field(() => Int)
  cursor: number
}

@ObjectType()
export class PageInfo {
  @Field(() => Boolean, { nullable: true })
  hasNextPage?: boolean

  @Field(() => Number)
  currentPage: number
}

@ObjectType()
export class CatConnection {
  @Field(() => [CatEdge])
  edges: CatEdge[]

  @Field(() => PageInfo)
  pageInfo: PageInfo
}

export type Edge<K> = {
  node: K
  cursor: number
}

export type Connection<K> = {
  edges: Edge<K>
  pageInfo: PageInfo
}
