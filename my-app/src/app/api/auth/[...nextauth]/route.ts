import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Senha', type: 'password' }
            },

            async authorize(credentials, req) {
                try {
                    console.log("response");
                    const response = await axios.post('http://localhost:8000/api/auth/login', {
                        email: credentials?.email,
                        password: credentials?.password
                    }, {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    console.log(response);

                    const user = response.data;

                    if (user && response.status === 200) {
                        return user;
                    }
                    return null;
                } catch (error) {
                    console.error('Authorization error:', error);
                    return null;
                }
            },

        })
    ],
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.user = user;
            }
            return token;
        },
        async session({ session, token }) {
            session = token.user as any;
            return session;
        }
    },
    session: {
        maxAge: 28800,
        updateAge: 14400,
    },
    secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(nextAuthOptions);

export { handler as GET, handler as POST, nextAuthOptions };
