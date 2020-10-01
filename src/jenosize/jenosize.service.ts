import { Injectable } from '@nestjs/common';
import { GoogleplaceService } from './../googleplace/googleplace.service';
import { is24 } from './game24';
import { PlaceResponse } from '../googleplace/place.response';

@Injectable()
export class JenosizeService {
    constructor(
        private readonly googleplaceService:GoogleplaceService
    ) {}

    async getPlace(keyword: String): Promise<Array<PlaceResponse>> {
        return await this.googleplaceService.getPlace(keyword);
    }

    game24(str: String): String {
        return is24(str);
    }
}
