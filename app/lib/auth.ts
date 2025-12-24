import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      // first login → initialize progress
      if (user && !token.progress) {
        token.progress = {
          completedLessons: [],
          completedProjects: [],
        };
      }
      return token;
    },

    async session({ session, token }) {
      if (token.progress && session.user) {
        session.user.progress = token.progress as {
          completedLessons: string[];
          completedProjects: string[];
        };
      }
      return session;
    },
  },
};
