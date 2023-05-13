import { Injectable } from "@nestjs/common";
import { MongoClient } from "mongodb";
import { User } from "./users.interface";

@Injectable()
export class UsersService {
	private readonly users: User[] = [{ email: "test@test.com", password: "123123" }]

	getAll = async () => {
		const client = await MongoClient.connect("mongodb+srv://PipeAdmin:123123123@pipeshop.xiau467.mongodb.net/pipe-shop?retryWrites=true&w=majority")
		const data = client.db().collection("users").find({}).toArray()
		return data
	}

	getByEmail = async (email: string) => {
		const client = await MongoClient.connect("mongodb+srv://PipeAdmin:123123123@pipeshop.xiau467.mongodb.net/pipe-shop?retryWrites=true&w=majority")

		const data = await client.db().collection("users").findOne({ email: email })
		return data
	}

	create = async (user: User) => {
		const client = await MongoClient.connect("mongodb+srv://PipeAdmin:123123123@pipeshop.xiau467.mongodb.net/pipe-shop?retryWrites=true&w=majority")

		await client.db().collection("users").insertOne(user)
		await client.db().collection("baskets").insertOne({
			user: user.email,
			items: []
		})

	}
}
