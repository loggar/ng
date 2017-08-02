import { Component } from '@angular/core';

import { AppService } from './app.service';

import { IProduct } from './product';
import { ProductService } from './products.service';
import 'rxjs/add/operator/map';

// Lifecycle Hooks.
/* 
  ngOnChanges − When the value of a data bound property changes, then this method is called.
  ngOnInit − This is called whenever the initialization of the directive/component after Angular first displays the data-bound properties happens.
  ngDoCheck − This is for the detection and to act on changes that Angular can't or won't detect on its own.
  ngAfterContentInit − This is called in response after Angular projects external content into the component's view.
  ngAfterContentChecked − This is called in response after Angular checks the content projected into the component.
  ngAfterViewInit − This is called in response after Angular initializes the component's views and child views.
  ngAfterViewChecked − This is called in response after Angular checks the component's views and child views.
  ngOnDestroy − This is the cleanup phase just before Angular destroys the directive/component.
*/

@Component({
  selector: 'my-app',
  // template: `<h1>Hello {{name}}</h1>`,
  templateUrl: 'app/app.component.html',
  providers: [AppService, ProductService]
})
export class AppComponent {
  // name: string = 'Angular';
  appTitle: string = 'Welcome';

  appList: any[] = [{
    'ID': '1',
    'url': '/images/sample/image_1.png'
  },
  {
    'ID': '2',
    'url': '/images/sample/image_2.png'
  }];

  someList: string[] = ['arr_value_1', 'arr_value_2', 'arr_value_3'];
  cntClickMe: number = 0;
  valueFromService: string = '';
  iproducts: IProduct[];

  newdate = new Date();
  newValue: number = 123;
  newPercent: number = 0.1234567890;

  onClickMe() {
    ++this.cntClickMe;
  }

  constructor(private _appService: AppService
    , private _product: ProductService) { }

  ngOnInit(): void {
    this.valueFromService = this._appService.getApp();

    this._product.getproducts()
      .subscribe(iproducts => {
        this.iproducts = iproducts;
      });
  }
}

