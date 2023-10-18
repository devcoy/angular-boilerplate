import { Injectable } from '@angular/core';
import * as jsonCaptions from './captions.json';

@Injectable()
export class Global {
	caption: any = jsonCaptions;
}
