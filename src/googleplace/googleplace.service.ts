import { HttpException, HttpService, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GOOGLE_FIELDS_OF_PLACE, GOOGLE_INPUTTYPE, GOOGLE_PLACE_URL, GOOGLE_PLACE_RESPONSE_STATUS } from './googleplace.config';
import { PlaceResponse } from './place.response';

@Injectable()
export class GoogleplaceService {
    private KEY;
    constructor(
        private configService: ConfigService,
        private httpService: HttpService
    ) {
        this.KEY = this.configService.get<string>("GOOGLE_KEY");
     }

    async getPlace(keyword: String): Promise<Array<PlaceResponse>> {
        var place = await this.httpService.get(GOOGLE_PLACE_URL, {
            params: {
                key: this.KEY,
                inputtype: GOOGLE_INPUTTYPE,
                fields: GOOGLE_FIELDS_OF_PLACE,
                input: keyword,
            }
        }).toPromise();
        if(place.data && place.data.status == GOOGLE_PLACE_RESPONSE_STATUS.REQUEST_DENIED){
            throw new HttpException(place.data.error_message ? place.data.error_message : "Permission denied", HttpStatus.FORBIDDEN);
        }
        var responses: Array<PlaceResponse> = new Array<PlaceResponse>();
        if (place.data && place.data.status == GOOGLE_PLACE_RESPONSE_STATUS.OK) {
            responses = place.data.candidates.map(m => {
                let r: PlaceResponse = new PlaceResponse();
                r.formatted_address = m.formatted_address;
                r.geometry = m.geometry;
                r.name = m.name;
                r.opening_hours = m.opening_hours;
                r.photos = m.photos;
                r.rating = m.rating;
                return r
            })
        }
        return responses;
    }
}
