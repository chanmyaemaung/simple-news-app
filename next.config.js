module.exports = {
	reactStrictMode: true,
	images: {
		domains: [
			'via.placeholder.com',
			'i.imgur.com',
			'localhost',
			'images.unsplash.com',
			'res.cloudinary.com',
		],
	},
	env: {
		crudApi: process.env.NEXT_PUBLIC_CRUD_CLOUDINARY_API,
		mongoUri: process.env.NEXT_PUBLIC_MONGO_URI,
		cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
		cloudApiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
		cloudSecretKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
		googleClientId: process.env.NEXTAUTH_URL_GOOGLE_CLIENT_ID,
		googleClientSecret: process.env.NEXTAUTH_URL_GOOGLE_CLIENT_SECRET,
	},
}
