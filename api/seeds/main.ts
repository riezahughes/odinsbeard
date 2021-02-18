import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  await prisma.zone.create({
    data: {
      name: 'plains',
      description: 'Goblin area. Contains abundant resources',
      enemies: {
        create: {
          name: 'Deathsquito',
          description: 'Deathsquitos are small fast flying insects of bright orange colour. Players can hear a buzzing sound (just as a real life mosquito produce) when a Deathsquito is close. Deathsquitos have 10 health',
          weakness: {
            create: {
              type: 'blunt',
            },
          },
        },
      },
    },
  });
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
