import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import 'chart.js';
import { ChartModule } from 'primeng/primeng';
import { GalleriaModule } from 'primeng/primeng';
import { GrowlModule } from 'primeng/primeng';
import { FileUploadModule } from 'ng2-file-upload';
//import { FileUploadModule} from 'primeng/primeng';
import { AppRoutingModule } from './app-routing.module';

//services
import { TemplateService } from './service/template.service';
import { AuditService } from './service/audit.service';
import { AuthGuard } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { CommonService } from './service/common.service';
import { EdgeService } from './service/edge.service';

//Component
import { AppComponent } from './app.component';
import { AuditComponent, OnChangesComponent } from './audit/audit.component';
import { AuditListComponent } from './audit-list/audit-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { TemplateComponent } from './template/template.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { PdfComponent, OnUploadComponent } from './pdf/pdf.component';
import { EdgeComponent } from './edge/edge.component';

@NgModule({
  declarations: [
    AppComponent,
    AuditComponent,
    OnChangesComponent,
    AuditListComponent,
    DashboardComponent,
    LoginComponent,
    MenuComponent,
    TemplateComponent,
    TemplateListComponent,
    PdfComponent,
    OnUploadComponent,
    EdgeComponent,
    //FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    ChartModule,
    FileUploadModule,
    GalleriaModule,
    GrowlModule
  ],
  providers: [
    TemplateService,
    AuditService,
    AuthGuard,
    AuthService,
    CommonService,
    EdgeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
