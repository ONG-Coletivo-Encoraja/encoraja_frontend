import NextAuth from "next-auth";

declare module 'next-auth' {
    interface Session {
        user: {
            id: string,
            email: string,
            name: string,
            permission: string
        },
        token: string,
        expires_in: string,
        token_type: string
    }
}