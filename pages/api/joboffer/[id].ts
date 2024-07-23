import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

// POST /api/joboffer
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const jobOfferId = req.query.id as string;

  if (req.method === 'POST') {
    const { title, subtitle, description, active } = req.body;

    const result = await prisma.jobOffer.update({
      where: {
        id: jobOfferId,
      },
      data: { title, subtitle, description, active },
    });
    res.json(result);
  } else if (req.method === 'GET') {
    const result = await prisma.jobOffer.findUnique({
      where: {
        id: jobOfferId,
      },
    });
    res.json(result);
  } else if (req.method === 'DELETE') {
    const post = await prisma.jobOffer.update({
      where: { id: String(jobOfferId) },
      data: { deleted: true },
    });
    res.json(post);
  }
}
