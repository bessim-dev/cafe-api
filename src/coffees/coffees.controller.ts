import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CoffeesService } from 'src/coffees/coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('caffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService) { }

    @Get()
    findAll(@Query() paginationQuery) {
        const { limit, offset } = paginationQuery;
        return this.coffeesService.findAll()
    }
    @Get(':id')
    findOne(@Param("id") id: string) {
        return this.coffeesService.findOne(id)
    }
    @Post()
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.coffeesService.create(createCoffeeDto)
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() UpdateCoffeeDto: UpdateCoffeeDto) {
        return this.coffeesService.update(id, UpdateCoffeeDto)
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.coffeesService.delete(id)
    }
}
