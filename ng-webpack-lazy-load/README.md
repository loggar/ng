# angular2-lazy-load-example
Angular 2 lazy load example

## How run run the application

npm install
npm run start

navigate to localhost:8080


## example
```
/app
 app.component.ts
 app.component.html
 app.module.ts
 app.routing.ts
 /home
    home.component.ts
    home.component.html
    home.module.ts
    home.routing.ts  
  /+about                             --> Lazy loaded module
    about.component.ts
    about.component.html
    about.module.ts
    about.routing.ts
```

## angular2-router-loader
```
$ npm install angular2-router-loader--save-dev
```

>webpack.config.js
```json
loaders: [
  {
    test: /\.ts$/,
    loaders: [
      ‘awesome-typescript-loader’, 
      ‘angular2-template-loader’, 
      ‘angular2-router-loader’]
   },
   ...
]
```

>app.routing.ts
```js
const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full',
 { path: 'about', loadChildren: './+about/about.module#AboutModule' }
];
```

- `+about` : lazy load protocol
- `AboutModule` : module name


>about.routing.ts
```js
const routes: Routes = [
 { path: '', component: AboutComponent },
];
```

## run
```
$ npm start
```

- localhost:8080/
- localhost:8080/about