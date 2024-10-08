import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

import User from '@models/User.js'
import { connectToDB } from '@utils/database';

// 使用登入的時候如果有使用 next-auth 的 signIn 就會觸發這個Next Auth 的 callback
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            // store the user id from MongoDB to session
            const sessionUser = await User.findOne({ email: session.user.email });
            session.user.id = sessionUser._id.toString();

            return session;
        },
        async signIn({ account, profile, user, credentials }) {
            try {
                await connectToDB();

                // check if user already exists
                const userExists = await User.findOne({ email: profile.email });

                if (!userExists) {
                    const newUser = {
                        email: profile.email,
                        username: profile.name.replace(/\s/g, "").toLowerCase(),
                        image: profile.picture
                    }
                    await User.create(newUser);
                }

                return true
            } catch (error) {
                console.log("Error checking if user exists: ", error.message);
                // return false
                throw new Error("Sign-in failed");
            }
        },
    }
})

export { handler as GET, handler as POST }