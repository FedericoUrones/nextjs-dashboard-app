import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
});
// TODO: Llegue hasta https://nextjs.org/learn/dashboard-app/adding-authentication#adding-the-credentials-provider
