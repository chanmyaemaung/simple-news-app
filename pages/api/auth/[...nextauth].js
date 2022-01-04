import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
	session: {
		jwt: true,
	},
	providers: [
		GoogleProvider({
			clientId: process.env.googleClientId,
			clientSecret: process.env.googleClientSecret,
		}),
	],
	// SQL or MongoDB database (or leave empty)
	database: process.env.DATABASE_URL,
})
