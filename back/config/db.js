import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			/// Option `useCreateIndex` was deprecated in Mongoose 6
			/// More info: https://www.mongodb.com/community/forums/t/option-usecreateindex-is-not-supported/123048
			
			// useCreateIndex: true
		})

		console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
	} catch (error) {
		console.error(`Error: ${error.message}`.red.underline.bold)
		process.exit(1)
	}
}

export default connectDB