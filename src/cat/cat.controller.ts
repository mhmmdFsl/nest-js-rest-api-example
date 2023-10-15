import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Logger,
  Param,
  Post,
  Res, UseGuards
} from "@nestjs/common";
import { Response } from 'express';
import { CatService } from './cat.service';
import { AddCatDto } from './add-cat.dto';
import { AuthGuard } from "../auth/auth.guard";

@Controller('cat')
export class CatController {
  constructor(
    private readonly catService: CatService,
    private readonly logger: Logger,
  ) {}

  @Post()
  async addCat(@Body() addCatDto: AddCatDto, @Res() res: Response) {
    const cat = this.catService.addCat(addCatDto);
    res.status(HttpStatus.OK).json({
      status: 'Success',
      data: await cat,
    });
  }

  @Get()
  async getAllCat(@Res() res: Response) {
    this.logger.log('Receive request to get all cat...');
    const cats = this.catService.findALl();
    res.status(HttpStatus.OK).json({
      status: 'Success',
      data: await cats,
    });
    this.logger.log('Finish handling request to get all cat...');
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getCatById(@Res() res: Response, @Param('id') id: number) {
    this.logger.log('Receive request to get cat by id');
    const cat = await this.catService.findById(id);
    res.status(HttpStatus.OK).json({
      status: 'SUCCESS',
      data: cat,
    });
  }
}
