import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get(":email")
	getByEmail(@Param("email") email: string) {
		return this.usersService.getByEmail(email)
	}

	@Post()
	create(@Body() createUserDto: CreateUserDto) {
		this.usersService.create(createUserDto)
	}
}
