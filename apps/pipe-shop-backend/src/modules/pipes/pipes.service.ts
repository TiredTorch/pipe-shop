import { Injectable } from '@nestjs/common';
import { MongoClient, ObjectId } from "mongodb"
import { Pipe } from './pipes.interface';

@Injectable()
export class PipesService {
	private readonly pipes: Pipe[] = []

	getAll = async () => {
		const client = await MongoClient.connect("mongodb+srv://PipeAdmin:123123123@pipeshop.xiau467.mongodb.net/pipe-shop?retryWrites=true&w=majority")
		const data = client.db().collection("pipes").find({}).toArray()
		return data
	}

	getPipeById = async (id: string) => {
		const client = await MongoClient.connect("mongodb+srv://PipeAdmin:123123123@pipeshop.xiau467.mongodb.net/pipe-shop?retryWrites=true&w=majority")

		const data = await client.db().collection("pipes").findOne({_id: new ObjectId(id)})
		return data
	}
}
