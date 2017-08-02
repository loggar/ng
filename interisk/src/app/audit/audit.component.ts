import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';

import { AuditService } from '../service/audit.service';
import { Audit, Answer, Photo } from '../service/audit.interface';
import { environment } from '../../environments/environment';
import { AuthService } from '../service/auth.service';
import * as moment from 'moment/moment';

import { CommonService } from '../service/common.service';
import { Site, User, Common } from '../service/common.interface';
import { Message } from '../service/message.interface';

@Component({
  selector: 'on-changes',
  template: `    
  `
})
export class OnChangesComponent implements OnChanges {
  @Input() power: any[];
  @Input() images: any[];
  @Output()
  uploaded: EventEmitter<string> = new EventEmitter();

  changeLog: string[] = [];
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      console.log(this.changeLog);
      if (prev !== undefined && cur === "0") { setTimeout(() => this.uploaded.emit('complete'), 2000); }
    }
  }
}


@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  public myForm: FormGroup;
  audit: Audit;
  currentId: string;
  public tabNo: number;
  private apiUrl = environment.apiUrl;
  public uploader: FileUploader = new FileUploader({ url: this.apiUrl + 'upload', authToken: this.authService.token, maxFileSize: 10000000 });
  public sites: Site[];
  public user: User;
  public show: boolean = false;
  msgs: Message[] = [];
  @ViewChild(OnChangesComponent) childView: OnChangesComponent;


  //public msgs: Message[];
  public images: any[];
  public uploadedFiles: any[] = [];

  constructor(
    private _fb: FormBuilder,
    private auditService: AuditService,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private authService: AuthService,
  ) {
    this.createForm();
  }

  ngOnInit() {
    console.log('[async call test][01]');        
    //check later about subscribe async call orders.
    this.route.params
      .switchMap((params: Params) => this.auditService.getAudit(+params['id']))
      .subscribe(audit => {
        console.log('[audit component visited][route.params.subscribe]');
        this.audit = audit;
        this.setForm();
        this.uploader.options.additionalParameter = { 'siteId': this.audit.siteId };
        this.uploader.onBeforeUploadItem = (item) => {
          item.withCredentials = false;
        }
      });
    console.log('[async call test][02]');
    this.route.data
      .subscribe((data: { common: Common }) => {
        console.log('[audit component visited][route.data.subscribe]');
        this.sites = data.common.site;
        this.user = data.common.user;
      });  
    console.log('[async call test][03]');
    this.tabNo = 0;    
  }

  tabActive(a: number): void {
    this.tabNo = a;
    console.log(this.tabNo);
  }

  createForm() {
    this.myForm = this._fb.group({
      auditDate: [''],
      auditTitle: ['', [Validators.required, Validators.minLength(3)]],
      siteId: [''],
      siteName: ['', [Validators.required, Validators.minLength(3)]],
      siteAddress: ['', [Validators.required, Validators.minLength(3)]],
      auditor: ['', [Validators.required, Validators.minLength(3)]],
      auditAlias: ['', [Validators.required, Validators.minLength(3)]],
      auditDescription: ['', [Validators.required, Validators.minLength(3)]],
      answers: this._fb.array([]),
      photos: this._fb.array([])
    });
  }

  setForm() {
    this.setAnswer();
    this.setPhoto();
    this.myForm.patchValue({
      auditDate: moment(Date.now()).format('YYYY-MM-DD'),
      auditTitle: this.audit.auditTitle,
      siteId: this.audit.siteId,
      siteName: this.audit.siteName,
      siteAddress: this.audit.siteAddress,
      auditor: this.audit.auditor,
      auditAlias: this.audit.auditAlias,
      auditDescription: this.audit.auditDescription,
    });
  }

  get answers(): FormArray {
    return this.myForm.get('answers') as FormArray;
  };

  get photos(): FormArray {
    return this.myForm.get('photos') as FormArray;
  };

  setAnswer() {
    const answer = this.audit.answers.map(answer => this._fb.group(answer));
    const answerArray = this._fb.array(answer);
    this.myForm.setControl('answers', answerArray);
  }

  setPhoto() {
    const photo = this.audit.photos.map(photo => this._fb.group(photo));
    const photoArray = this._fb.array(photo);
    this.myForm.setControl('photos', photoArray);
  }

  save() {
    this.audit = this.prepareSaveAudit();
    console.log("audit data before save=======")
    console.log(this.audit);

    this.auditService.update(this.audit)
      .then(audit => {
        console.log(audit);
        console.log('update done');
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Saved', detail:'Audit Saved'});
      });
    return;
  }

  prepareSaveAudit(): Audit {
    const formModel = this.myForm.value;

    // deep copy of form model 
    const answerDeepCopy: Answer[] = formModel.answers.map(
      (answer: Answer) => Object.assign({}, answer)
    );
    const photoDeepCopy: Photo[] = formModel.photos.map(
      (photo: Photo) => Object.assign({}, photo)
    );
    console.log('[preparesave][siteId]: ' + this.audit.siteId);
    //console.log(Date.now()|date);

    const saveAudit: Audit = {
      id: this.audit.id,
      templateId: this.audit.templateId,
      auditDate: formModel.auditDate,
      auditTitle: formModel.auditTitle,
      siteId: formModel.siteId,
      accountId: this.user.accountId,
      siteName: formModel.siteName,
      siteAddress: formModel.siteAddress,
      auditor: this.user.name,
      auditAlias: formModel.auditAlias,
      auditDescription: formModel.auditDescription,
      answers: answerDeepCopy,
      photos: photoDeepCopy
    };

    return saveAudit;
  }

  prepareDocumentSave() {
    this.show = false;
    
    this.uploader.options.additionalParameter = {
      'siteId': this.audit.siteId,
      'auditDetailId': this.currentId,
    };
    
  }

  aftercheck() {
    console.log('picture done');

    this.auditService.getPhotos(this.currentId)
      .then(photos => { console.log('after check'); console.log(photos); this.audit.photos = photos; })
      .then(results => { this.filterPhotos() })
      .then(results => { console.log(this.show); this.show = this.images.length ? true : false; console.log(this.show); });

  }

  clickModal(id: string, a: number) {
    this.currentId = id;
    this.aftercheck();
    //this.filterPhotos()
  }

  filterPhotos() {
    //if (!this.audit.photos.length) {console.log(this.audit.photos);return;};
    this.images = [];
    let selectedAuditDetailId = this.audit.photos.filter(photo => photo.auditDetailId == this.currentId);
    selectedAuditDetailId.forEach(element => {
      console.log('images/' + element.photoLocation + '/' + element.photoName);
      this.images.push({ source: this.apiUrl + 'images/' + element.photoLocation + '/' + element.photoName });
    });
    console.log('[filterphoto:images]');
    console.log(this.images);
  }

  chageSite() {
    let changedSite = this.sites.filter(site => site.id == this.myForm.controls.siteId.value);
    this.myForm.patchValue({
      siteName: changedSite[0].siteName,
      siteAddress: changedSite[0].siteAddress
    });
  }

  DocumentSave() {
    this.prepareDocumentSave();
    this.uploader.uploadAll();
  }

}


