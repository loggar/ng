import { Injectable }             from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';

import { CommonService } from './common.service';
import { Common } from './common.interface';

@Injectable()
export class CommonResolver implements Resolve<Common> {
  constructor(private cs: CommonService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Common> {
    let id = route.params['id'];

    return this.cs.getCommonPromise().then(common => {
        console.log('[common resolver visited]');
      if (common) {
          console.log('[getCommonPromise visited]');
          console.log(common);
          console.log(common.user);
        return common;
      } else { // id not found
        this.router.navigate(['/dashboard']);
        return null;
      }
    });
  }
}
