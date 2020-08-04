import { prisma } from "../../../../generated/prisma-client";

export default {
  Query: {
    seeUser: async (_, args) => {
      const { id } = args;
      const user = await prisma.user({ id });
      return user;
    }
  }
};
