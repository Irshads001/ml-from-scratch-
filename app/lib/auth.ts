import GoogleProvider from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user && !token.progress) {
        token.progress = {
          completedLessons: [],
          completedProjects: [],
        };
      }
      return token;
    },

    async session({ session, token }) {
      if (token.progress) {
        session.user.progress = token.progress as {
          completedLessons: string[];
          completedProjects: string[];
        };
      }
      return session;
    },
  },
};
