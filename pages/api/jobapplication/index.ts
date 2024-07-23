import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';
import dayjs from 'dayjs';

// POST /api/job application
// Required fields in body: title
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { fullname, email, phonenumber, positionId } = req.body;

    const existingCandidate = await prisma.candidate.findFirst({
      where: {
        email: email,
        phone: phonenumber,
      },
    });

    const candidate = existingCandidate
      ? existingCandidate
      : await prisma.candidate.create({
          data: { fullname, email, phone: phonenumber },
        });

    const result = await prisma.jobApplication.create({
      data: {
        candidateId: candidate.id,
        jobOfferId: positionId,
        createdAt: dayjs().toISOString(),
      },
    });
    res.json(result);
  } else if (req.method === 'GET') {
    const result = await prisma.jobApplication.findMany({});
    res.json(result);
  }
}
