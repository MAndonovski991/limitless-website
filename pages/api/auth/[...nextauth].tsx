import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  callbacks: {
    async signIn({ user }) {
      const allowedToLogin = await prisma.user.findUnique({
        where: {
          email: user.email ?? ''
        }
      })

      if (allowedToLogin && allowedToLogin.active) return true
      else return false
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    EmailProvider({
      server: {
        host: process.env.NODEMAILER_HOST,
        port: process.env.NODEMAILER_PORT,
        auth: {
          user: process.env.EMAIL_AUTH_FROM,
          pass: process.env.EMAIL_AUTH_FROM_PW
        }
      },
      from: process.env.EMAIL_AUTH_FROM
    })
  ]
}

export default NextAuth(authOptions)
