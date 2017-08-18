# NgCliTest

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## install
```
$ npm install -g angular-cli
$ ng new project-name
$ cd project-name

$ npm start
$ npm test
$ npm run pree2e
$ npm run e2e

$ ng g component new-component-name
$ ng g directive new-directive-name
$ ng g pipe new-pipe-name
$ ng g service new-service-name
$ ng g class new-class-name
$ ng g interface new-interface-name
$ ng g enum new-enum-name
```

## proxy
>proxy.config.json
```
ng serve --proxy-config proxy.config.json
```

## port
>angular-cli.json
```json
"defaults": {
    "serve": {
      "host": "localhost",
      "port":4200
    }
}
```


>angular-cli.json
```json
"assets": [
	"assets",
	"favicon.ico"
]
```
