import { Injectable, Logger } from '@nestjs/common';
import { MongoClient } from 'mongodb';
import { Basket } from './baskets.interface';
import { RemovePipeDto } from './dto/remove-pipe.dto';

@Injectable()
export class BasketsService {
	private baskets: Basket[] = []

	getAllFromUser = async (email: string) => {
		const client = await MongoClient.connect("mongodb+srv://PipeAdmin:123123123@pipeshop.xiau467.mongodb.net/pipe-shop?retryWrites=true&w=majority")

		const data = await client.db().collection("baskets").findOne({ user: email })
		return data
	}

	addToUserBasket = async (email: string, pipe: Record<string, string>) => {
		try {
			const client = await MongoClient.connect("mongodb+srv://PipeAdmin:123123123@pipeshop.xiau467.mongodb.net/pipe-shop?retryWrites=true&w=majority")

			return await client.db().collection("baskets").updateOne({ user: email }, { $push: { items: pipe } })

		} catch (error) {
			Logger.log("error", error)

		}

	}

	removeFromUserBasket = async (removePipeDto: RemovePipeDto) => {
		try {
			Logger.log("email", removePipeDto)
			Logger.log(Object.values(removePipeDto))

			const client = await MongoClient.connect("mongodb+srv://PipeAdmin:123123123@pipeshop.xiau467.mongodb.net/pipe-shop?retryWrites=true&w=majority")

			return await client.db().collection("baskets").updateOne({ user: Object.values(removePipeDto)[0] }, { $pull: { items: {id: Object.values(removePipeDto)[1]} } })
		} catch (error) {
			Logger.log("error", error)

		}


	}
}
