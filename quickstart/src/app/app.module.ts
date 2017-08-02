import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { SampleFormComponent } from './sample-form.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './not-found.component';
import { AppRouter1 } from './router1.component';
import { AppRouter2 } from './router2.component';

import { HttpModule } from '@angular/http';

import { MultiplierPipe } from './multiplier.pipe';

import { ChildComponent } from './child.component';

const appRoutes: Routes = [
    { path: 'router1', component: AppRouter1 },
    { path: 'router2', component: AppRouter2 },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        HttpModule
    ],
    declarations: [
        PageNotFoundComponent,
        AppComponent,
        SampleFormComponent,
        AppRouter1,
        AppRouter2,
        MultiplierPipe,
        ChildComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

