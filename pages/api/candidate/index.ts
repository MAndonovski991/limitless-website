import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'

// POST /api/candidate
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        const { fullname, email, phonenumber } = req.body;

        const existingCandidate = await prisma.candidate.findFirst({
            where: {
                email: email,
                phone: phonenumber
            }
        })
    
        const result = existingCandidate ? 
        existingCandidate : await prisma.candidate.create({
            data: { fullname, email, phone: phonenumber },
        });
        res.json(result);
    } else if (req.method === "GET") {
        const result = await prisma.candidate.findMany({
            include: {
                jobs: {
                    include: {
                        jobOffer: true
                    }
                }
            }
        });
        res.json(result);
    }
}