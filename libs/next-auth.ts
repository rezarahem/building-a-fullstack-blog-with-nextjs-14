import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prismadb from './prismadb';
import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { User } from '@prisma/client';
import { compare } from 'bcrypt';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismadb),
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
      name: 'credentails',
      credentials: {
        email: {
          label: 'email',
          type: 'text',
        },
        password: {
          label: 'password',
          type: 'password',
        },
      },
      async authorize(credentails) {
        if (!credentails?.email || !credentails.password) return null;

        const user = await prismadb.user.findUnique({
          where: { email: credentails.email },
        });

        if (!user) return null;

        const isPasswordValid = await compare(
          credentails.password,
          user.hashedPassword as string,
        );

        if (!isPasswordValid) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      const u = user as unknown as User;
      if (user) {
        return {
          ...token,
          userId: u.id,
          userRole: u.role,
        };
      }

      return token;
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          usreId: token.userId,
          userRole: token.userRole,
        },
      };
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  debug: process.env.NODE_ENV === 'development',
};
