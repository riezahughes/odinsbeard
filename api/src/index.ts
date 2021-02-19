import * as fs from 'fs';

import { ApolloServer, gql } from 'apollo-server';

import { PrismaClient } from '@prisma/client';

import resolvers from './includes/resolvers';

const typeDefs = gql(fs.readFileSync(__dirname.concat('/includes/schema.graphql'), 'utf8'));

require('dotenv').config();

const prisma = new PrismaClient();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: (context) => ({
    ...context,
    prisma,
  }),
});
server.listen({ port: process.env.PORT });
console.log(`Server is now running on localhost:${process.env.PORT}`);

// async function main() {
//   const allEnemies = await prisma.enemy.findMany();
//   console.log(allEnemies);
// }
// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
