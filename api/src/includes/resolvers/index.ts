const resolvers = {
  Query: {
    enemy: (_, args, context) => context.prisma.character.findOne({ where: { id: args.id } }),
    enemies: (_, args, context) => context.prisma.character.findMany(),
  },
};

module.exports = resolvers;
