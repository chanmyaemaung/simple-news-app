import mongoose from 'mongoose'

const connection = {}

async function dbConnect() {
	if (connection.isConnected) {
		return
	}

	const db = await mongoose.connect(process.env.mongoUri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	connection.isConnected = db.connections[0].readyState === 1

	console.log('DB Status: ', connection.isConnected)
}

export default dbConnect
