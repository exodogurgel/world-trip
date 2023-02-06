import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(404).end()
  }

  const continents = await prisma.continent.findMany({
    select: {
      slug: true,
      banner_url: true,
      name: true,
      description: true,
    },
  })

  return res.json(continents)
}
