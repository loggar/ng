# GraphQL API server and Angular 5 application

ref) https://medium.com/@mail.bahurudeen/creating-a-graphql-api-server-and-consuming-in-angular-5-application-81e1b8af5aac


## GraphQL API server

Install

```
cd graphQLServer

npm install
```

Start server

```
npm start
```

Access the application on http://localhost:4200/graphql

Consume GraphQL API in the client application.

```
{
  Registrations {
    id,
    firstName,
    lastName,
    dob,
    email,
    country
  }
}
```

## Angular Client

Install

```
cd angularClient

npm install
```

Start ng server

```
npm run ng serve
```

Access the application on http://localhost:4200/registration
