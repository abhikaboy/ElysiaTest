import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const client = new MongoClient(process.env.ATLAS_URI as string, {
	serverApi: ServerApiVersion.v1,
});

export const db = client.db('main');
export const users = db.collection('Users');

export const run = async () => {
	await client.connect();
	await client.db('admin').command({ ping: 1 });
	console.log('Pinged MongoDB: Successfully Connected!');
};
