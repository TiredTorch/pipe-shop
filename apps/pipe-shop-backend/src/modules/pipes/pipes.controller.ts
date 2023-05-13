import { Controller, Get, Param } from '@nestjs/common';
import { PipesService } from './pipes.service';

@Controller('pipes')
export class PipesController {
	constructor(private readonly pipesService: PipesService) {}

	@Get()
	getAll() {
		return this.pipesService.getAll()
	}

	@Get(":id")
	getPipeById(@Param("id") id: string) {
		return this.pipesService.getPipeById(id)
	}
}
