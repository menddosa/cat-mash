import { ObjectType, Field, ID } from "type-graphql"
import { Cat } from "../cat/cat.types"

@ObjectType()
export class Vote {
  @Field(() => ID)
  id: number
  @Field(() => Cat)
  winner: Cat
  @Field(() => Cat)
  loser: Cat

  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
}

@ObjectType()
export class Battle {
  @Field(() => Cat)
  first: Cat
  @Field(() => Cat)
  second: Cat
}
