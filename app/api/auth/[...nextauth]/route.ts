import NextAuth from 'next-auth/next';
import type { NextAuthOptions } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';
import DiscordProvider from 'next-auth/providers/discord';

import { validateCredentials } from '@/app/lib/validators';
import { XataAdapter } from '@next-auth/xata-adapter';
import { getXataClient } from '@/app/lib/xata';

const xata = getXataClient();
const credentials = validateCredentials();

if (!credentials) throw new Error('Invalid credentials for OAuth providers');

export const authOptiopns: NextAuthOptions = {
  adapter: XataAdapter(xata),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: credentials.googleClientId as string,
      clientSecret: credentials.googleClientSecret as string,
    }),
    DiscordProvider({
      clientId: credentials.discordClientId as string,
      clientSecret: credentials.discordClientSecret as string,
    }),
  ],
  pages: {
    signIn: '/login',
    signOut: '/logout',
    error: '/error',
    newUser: '/signup',
  },
};

const handler = NextAuth(authOptiopns);
export { handler as GET, handler as POST };
