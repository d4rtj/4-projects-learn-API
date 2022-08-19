import mongoose from 'mongoose';
require('dotenv').config();

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// useCreateIndex: true,
			// useFindAndModify: false,
		});
		console.log('MongoDB connected');
	} catch (error) {
		console.log(error);
	}
};

export default { connect };
