import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { NextAuthOptions } from 'next-auth'

// Extend the Session and User types to include accessToken and id
declare module 'next-auth' {
  interface Session {
    accessToken?: string
    user?: {
      id?: number
      name?: string | null
      email?: string | null
      image?: string | null
    }
  }
  interface User {
    id?: number
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {

        const { email, password } = credentials ?? {}

        // console.log('CREDENTIALS:', email, password)

        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          })

          // console.log('API LOGIN STATUS:', res.status)

          if (!res.ok) return null

          const data = await res.json()
          // console.log('API RESPONSE:', data)

          // ⚠️ Pastikan struktur respons sesuai
          const user = data.data.user
          const token = data.data.token

          if (user) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              token: token, // simpan token kalau ingin digunakan nanti
            }
          }

          return null
        } catch (err) {
          console.error('Login API error:', err)
          return null
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },

  callbacks: {
    async jwt({ token, user }) {
      // Saat login berhasil (authorize)
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.picture = user.image
        // Define a type for user to avoid 'any'
        type UserWithToken = {
          id?: number
          name?: string | null
          email?: string | null
          image?: string | null
          token?: string
        }
        const typedUser = user as UserWithToken
        token.accessToken = typedUser.token // hanya string
      }
      return token
    },

    async session({ session, token }) {
      session.user = {
        id: token.id as number,
        name: token.name as string,
        email: token.email as string,
        image: token.picture as string,
      }
      session.accessToken = token.accessToken as string
      return session
    },
  },

  pages: {
    signIn: '/signin',
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }