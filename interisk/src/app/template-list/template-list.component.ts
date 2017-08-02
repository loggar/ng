import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

import { TemplateService } from '../service/template.service';
import { AuditService } from '../service/audit.service';
import { AuthService } from '../service/auth.service';
import { Template } from '../service/template.interface';
import { CommonService } from '../service/common.service';
import { User } from '../service/common.interface';
import { Common } from '../service/common.interface';

import { environment } from '../../environments/environment';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.css']
})
export class TemplateListComponent implements OnInit {
  templates: Template[] = [];
  template: Template;
  public user: User;

  constructor(
    private templateService: TemplateService,
    private auditService: AuditService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
  ) { }

  ngOnInit() {    
    //this.user = this.commonService.user;
    this.route.data
          .subscribe((data: { common: Common }) => {
            console.log('[template component visited][route.data.subscribe]');
            //this.sites = data.common.site;
            this.user = data.common.user;
            this.getTemplates(this.user.email);
            //this.setMinimumForm();
          });
  }

  getTemplates(email: string): void {
    this.templateService.getTemplates(email).then(templates => this.templates = templates);
  }

  goAudit(id: number) {

    this.template = this.prepareSaveAudit(id);

    let navigationExtras: NavigationExtras = {
      preserveQueryParams: true,
      preserveFragment: true
    };
    this.auditService.create(this.template)
      .then(result => {        
        this.router.navigate(['/audit/' + result.id], navigationExtras);
      })
      .catch(id => this.router.navigate(['/template/1'], navigationExtras));
  }

  prepareSaveAudit(id: number): Template {

    const saveTemplate: Template = {
      id: id,
      auditTitle: null,
      siteId: null,
      accountId: null,
      siteName: null,
      siteAddress: null,
      auditor: this.user.name,
      auditAlias: null,
      //auditDescription: null,
      modifyDate: null,
      questions: null
    };
    return saveTemplate;
  }

}
