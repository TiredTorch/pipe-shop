import { Body, Controller, Delete, Get, Logger, Param, Post } from '@nestjs/common';
import { BasketsService } from './baskets.service';
import { AddPipeDto } from './dto/add-pipe.dto';
import { RemovePipeDto } from './dto/remove-pipe.dto';

@Controller('baskets')
export class BasketsController {
	constructor(private readonly basketsService: BasketsService) { }

	@Get(":email")
	getAllFromUser(@Param("email") email: string) {
		return this.basketsService.getAllFromUser(email)
	}

	@Post()
	addToUserBasket(@Body() addPipeDto: AddPipeDto) {
		this.basketsService.addToUserBasket(addPipeDto.email, addPipeDto.pipe)
	}

	@Delete()
	removeFromUserBasket(@Body() removePipeDto: RemovePipeDto) {
		this.basketsService.removeFromUserBasket(removePipeDto)
	}
}
