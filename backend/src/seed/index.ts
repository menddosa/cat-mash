import { prisma } from '../context'
import cats from './data.json'

const seed = async () => {
  for (const cat of cats) {
    await prisma.cat.create({
      data: { image: cat.url }
    })
  }
}

seed().catch(err => {
  throw err;
}).finally(() => {
  prisma.disconnect();
});