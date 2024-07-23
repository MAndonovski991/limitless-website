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
    const { title, subtitle, description, active } = req.body;

    const result = await prisma.jobOffer.create({
      data: { title, subtitle, description, active },
    });
    res.json(result);
  } else if (req.method === 'GET') {
    const { activeOnly } = req.query;

    const result = await prisma.jobOffer.findMany({
      where: {
        deleted: false,
        active: activeOnly != undefined ? true : undefined,
      },
      include: {
        jobApplications: {
          include: {
            candidate: activeOnly != undefined ? false : true,
          },
        },
      },
      orderBy: {
        dateCreated: 'desc',
      },
    });
    res.json(result);
  }
}
