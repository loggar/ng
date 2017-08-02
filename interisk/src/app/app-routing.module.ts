import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuditComponent } from './audit/audit.component';
import { TemplateComponent } from './template/template.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { AuditListComponent } from './audit-list/audit-list.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './service/auth-guard.service';
import { CommonResolver } from './service/common-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'templates', component: TemplateListComponent, canActivate: [AuthGuard], resolve: { common: CommonResolver } },
  { path: 'template/:id', component: TemplateComponent, canActivate: [AuthGuard], resolve: { common: CommonResolver } },
  { path: 'template', component: TemplateComponent, canActivate: [AuthGuard], resolve: { common: CommonResolver } },
  { path: 'audits', component: AuditListComponent, canActivate: [AuthGuard], resolve: { common: CommonResolver } },
  { path: 'audit/:id', component: AuditComponent, canActivate: [AuthGuard], resolve: { common: CommonResolver } },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CommonResolver]
})
export class AppRoutingModule { }
