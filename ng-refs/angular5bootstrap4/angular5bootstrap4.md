# angular5bootstrap4: Simple CRUD functionality using Angular 5 with Bootstrap 4

refs)

* https://github.com/bahurudeen/ng5bootstrap4
* https://medium.com/@mail.bahurudeen/simple-crud-functionality-using-angular-5-with-bootstrap-4-f7baac0d2000

## Init Project

New Angular Project by temporary angular/cli module

```
$ npx @angular/cli@latest new angular5bootstrap4 --routing
```

Install local angular/cli module

```
$ cd angular5bootstrap4

$ npm i -D @angular/cli@latest
```

```
$ npm start

> angular5bootstrap4@0.0.0 start C:\Users\webnl\Documents\_workspace_js\loggar-ng\ng-refs\angular5bootstrap4
> ng serve

** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
```

## Install Bootstrap 4 library

```
$ npm install --save bootstrap
```

``` css
// src/styles.css

@import "~bootstrap/dist/css/bootstrap.css";
```

Install Bootstrap 4 directives (https://ng-bootstrap.github.io) for angular. Since we will use few Bootstrap components in this application.

```
$ npm install --save @ng-bootstrap/ng-bootstrap
```

``` ts
// src/app/app.module.ts

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// ...

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
```

