import DataLoader from 'dataloader'
import { Cat } from './cat.types'
import { filter } from 'lodash'
import { prisma } from '../../context'

export const loaders = {
  wins: new DataLoader<Cat, number>(async data =>
    Promise.all(
      data.map(async (cat: Cat) => {
        return await prisma.vote.count({ where: { winnerId: cat.id } })
      })
    )
  ),

  loses: new DataLoader<Cat, number>(async data =>
    Promise.all(
      data.map(async (cat: Cat) => {
        return await prisma.vote.count({ where: { loserId: cat.id } })
      })
    )
  ),

  winRate: new DataLoader<Cat, number>(async data =>
    Promise.all(
      data.map(async (cat: Cat) => {
        const votes = await prisma.vote.findMany({
          where: { OR: [{ winnerId: cat.id }, { loserId: cat.id }] },
        })
        if (!votes.length) return 0
        const wins = filter(votes, ({ winnerId }) => winnerId === cat.id).length
        const winRate = (wins / votes.length) * 100
        return Math.round(winRate * 100) / 100
      })
    )
  ),
}
