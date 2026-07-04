// ============================================
// FILE: app/api/auth/[...nextauth]/route.js
// ============================================
// NextAuth handles ALL authentication here
//
// [...nextauth] is a catch-all route
// it handles these URLs automatically:
// /api/auth/signin
// /api/auth/signout
// /api/auth/session
// /api/auth/callback
// ============================================

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// =============================================
// NextAuth configuration
// =============================================
const handler = NextAuth({
  // =============================================
  // providers — how users can login
  // =============================================
  // CredentialsProvider = email + password login
  // other options: Google, GitHub, Facebook etc
  // =============================================
  providers: [
    CredentialsProvider({
      name: "credentials",

      // these fields show on the default login page
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      // =============================================
      // authorize — runs when user submits login form
      // =============================================
      // credentials = { email, password } from form
      // return user object if login is correct
      // return null if login is wrong
      // =============================================
      async authorize(credentials) {
        // hardcoded admin for now
        // later we check against database
        if (
          credentials.email === "admin@zenova.com" &&
          credentials.password === "admin123"
        ) {
          // login correct — return user object
          return {
            id: "1",
            name: "ZENOVA Admin",
            email: "admin@zenova.com",
            role: "admin",
          };
        }

        // login wrong — return null
        return null;
      },
    }),
  ],

  // =============================================
  // session strategy
  // =============================================
  // jwt = store session in a token
  // user stays logged in across page refreshes
  // =============================================
  session: {
    strategy: "jwt",
  },

  // =============================================
  // pages — custom login page
  // =============================================
  // tells NextAuth to use OUR login page
  // instead of the default NextAuth page
  // =============================================
  pages: {
    signIn: "/login",
  },

  // =============================================
  // secret — used to encrypt JWT tokens
  // =============================================
  // must be in .env.local
  // never hardcode this
  // =============================================
  secret: process.env.NEXTAUTH_SECRET,
});

// export for both GET and POST requests
export { handler as GET, handler as POST };
