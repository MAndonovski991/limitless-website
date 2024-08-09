// import { PrismaClient } from '@prisma/client';
const p = require('@prisma/client');
const prisma = new p.PrismaClient();

async function main() {
  // const admin = await prisma.user.upsert({
  //   where: { email: 'sasho.stojcevski@gmail.com' },
  //   update: {},
  //   create: {
  //     name: 'Admin',
  //     email: 'sasho.stojcevski@gmail.com',
  //     active: true,
  //   },
  // });
  const admin = await prisma.user.upsert({
    where: { email: 'macesmajli@gmail.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'macesmajli@gmail.com',
      active: true,
    },
  });
  
  console.log({ admin });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
