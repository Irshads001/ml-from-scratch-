import NextAuth from "next-auth";
import "next-auth/jwt";

/* =========================
   SESSION & USER
========================= */
declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      progress: {
        completedLessons: string[];
        completedProjects: string[];
      };
    };
  }

  interface User {
    name?: string | null;
    email?: string | null;
    image?: string | null;
    progress: {
      completedLessons: string[];
      completedProjects: string[];
    };
  }
}

/* =========================
   JWT (MOST IMPORTANT)
========================= */
declare module "next-auth/jwt" {
  interface JWT {
    progress?: {
      completedLessons: string[];
      completedProjects: string[];
    };
  }
}
