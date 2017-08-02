import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

import { AuditService } from '../service/audit.service';
import { Audit } from '../service/audit.interface';
import { Common } from '../service/common.interface';
import { CommonService } from '../service/common.service';
import { User } from '../service/common.interface';


@Component({
  selector: 'app-audit-list',
  templateUrl: './audit-list.component.html',
  styleUrls: ['./audit-list.component.css']
})
export class AuditListComponent implements OnInit {
    audits: Audit[] = [];
    private user: User;  

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private auditService: AuditService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: {common: Common}) => {
        this.user = data.common.user;
        this.getAudits(this.user.email);
      })    
  }

  getAudits(email:string): void {
    console.log("call service : Audit");
    this.auditService.getAudits(email).then(audits => this.audits = audits);
  }

}
