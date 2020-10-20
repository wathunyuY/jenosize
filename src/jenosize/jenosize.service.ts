import { Injectable } from '@nestjs/common';
import { GoogleplaceService } from './../googleplace/googleplace.service';
import { is24 } from './game24';
import { PlaceResponse } from '../googleplace/place.response';

@Injectable()
export class JenosizeService {
    constructor(
        private readonly googleplaceService: GoogleplaceService
    ) { }

    async getPlace(keyword: String): Promise<Array<PlaceResponse>> {
        return await this.googleplaceService.getPlace(keyword);
    }

    game24(str: String): String {
        return is24(str);
    }

    newGame24(numbers: number[]) {
        var swapNumber = []
        var swapNbr = function (front, back) {
            if (back.length === 1) {
                swapNumber.push(front.concat(back))
            } else {
                for (var i = 0; i < back.length; i++) {
                    var newback = back.slice()
                    newback.splice(i, 1)
                    swapNbr(front.concat(back[i]), newback)
                }
            }
        }
        
        var swapOpr = function (operation) {
            let swapResult = [];
            for (let i = 0; i < operation.length; i++)
                for (let j = 0; j < operation.length; j++)
                    for (let k = 0; k < operation.length; k++)
                        for (let l = 0; l < operation.length; l++) {
                            let p = operation[i] + operation[j] + operation[k] + operation[l];
                            if (!swapResult.includes(p))
                                swapResult.push(p);
                        }
            return swapResult.map(m => m.substring(1)).reduce((p, c) => p.includes(c) ? p : p.concat(c), [])
        }

        let cal = function () {
            swapNbr([], numbers.slice())
            let operation = swapOpr(['+', '-', '*', '/'])
            return swapNumber.map(m => {
                let found = false;
                for (let i = 0; i < operation.length; i++) {
                    const o = operation[i];
                    let res = eval("(((" + m[0] + o[0] + m[1] + ")" + o[1] + m[2] + ")" + o[2] + m[3] + ")")
                    found = res == 24;
                    if (found) break;
                }
                if (found) return true;
            })
        }
        return cal().find(m => m) === true
    }
}
