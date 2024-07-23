import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma'


// POST /api/user
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const userId = req.query.id as string;

    if (req.method === "POST") {
        const { name, email, active } = req.body;
    
        const result = await prisma.user.update({
            where: {
                id: userId
            },
            data: { name, email, active },
        });
        res.json(result);
    } else if (req.method === "GET") {
        const result = await prisma.user.findUnique({
            where: {
              id: userId,
            },
          });
        res.json(result);
    } else if (req.method === "DELETE") {
        const post = await prisma.user.delete({
            where: { id: String(userId) },
        });
        res.json(post);
      }
}