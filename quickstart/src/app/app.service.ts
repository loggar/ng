import {
    Injectable
} from '@angular/core';

@Injectable()
export class AppService {
    getApp(): string {
        return 'Hello world';
    }
}
