import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

// POST /api/joboffer
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, active } = req.body;

    const result = await prisma.user.create({
      data: { name, email, active },
    });
    res.json(result);
  } else if (req.method === 'GET') {
    const result = await prisma.user.findMany({});
    res.json(result);
  }
}
