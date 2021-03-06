import { Controller, Get, HttpException, HttpStatus, Param, Query } from '@nestjs/common';
import { JenosizeService } from './jenosize.service';
import { PlaceResponse } from '../googleplace/place.response';
import { JenosizePlaceRequest } from './jenosize.request';

@Controller('jenosize')
export class JenosizeController {
    constructor(
        private readonly jenosizeService: JenosizeService
    ) { }
    
    /**
     * @author Wathunyu
     * @param query 
     */
    @Get()
    async getPlace(@Query() query : JenosizePlaceRequest) :Promise<Array<PlaceResponse>>{
        return await this.jenosizeService.getPlace(query.keyword);
    }
    @Get('game24/:param')
    game24(@Param('param') param: String): Boolean {
        var reg = /^\d+$/;
        if (param.match(reg) && param.length == 4) {
            var numbers :number[] = param.split("").map(m=>parseInt(m));
            return this.jenosizeService.newGame24(numbers)
        } else {
            throw new HttpException('Mising param : 4 digit of number only', HttpStatus.BAD_REQUEST);
        }
    }
}
