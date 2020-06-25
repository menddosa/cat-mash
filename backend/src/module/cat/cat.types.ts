import 'reflect-metadata'
import { ObjectType, Field, ID, InputType, Float } from 'type-graphql'
import { IsEmail } from 'class-validator'
import { Vote } from '../vote/vote.types'

@ObjectType()
export class Cat {
  @Field(() => ID)
  id: number
  @Field(() => String)
  image: string
  @Field(() => Number)
  elo: number
  @Field(() => Number)
  wins: Number
  @Field(() => Number)
  loses: Number

  @Field(() => Float)
  winRate: Number

  @Field(() => Date)
  createdAt: Date
  @Field(() => Date)
  updatedAt: Date
}

