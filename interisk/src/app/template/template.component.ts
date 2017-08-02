import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { TemplateService } from '../service/template.service';
import { Template, Question } from '../service/template.interface';

import { CommonService } from '../service/common.service';
import { Site } from '../service/common.interface';
import { User } from '../service/common.interface';
import { Common } from '../service/common.interface';
import { Message } from '../service/message.interface';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  public myForm: FormGroup;
  public tabNo: number;
  public template: Template;
  public sites: Site[];
  public user: User;
  msgs: Message[] = [];

  constructor(
    private _fb: FormBuilder,
    private templateService: TemplateService,
    private route: ActivatedRoute,
    private commonService: CommonService,
  ) {
    console.log('[template component][before createform in constructor]');
    console.log(this.myForm);
    this.createForm();
    console.log('[template component][after createform in constructor]');
    console.log(this.myForm);
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      console.log('[template component ngOnInit][params.id]');
      console.log(params.id);
      this.route.data
        .subscribe((data: { common: Common }) => {
          console.log('[template component visited][route.data.subscribe]');
          this.sites = data.common.site;
          this.user = data.common.user;
          this.setMinimumForm();
        });
      if (params.id) {
        console.log('[template component ngOnInit][params.id][if]');
        this.route.params
          .switchMap((params: Params) => this.templateService.getTemplate(+params['id']))
          .subscribe(result => {
            this.template = result;
            //this.sites = this.commonService.sites;
            //this.user = this.commonService.user;
            this.setForm();
          });
      } else {
        console.log('[template component ngOnInit][params.id][else]');
        this.route.data
          .subscribe((data: { common: Common }) => {
            console.log('[template component visited][route.data.subscribe]');
            this.sites = data.common.site;
            this.user = data.common.user;
            this.setMinimumForm();
          });

      }
    });
    this.tabNo = 0;

  }

  tabActive(a: number): void {
    this.tabNo = a;
    console.log(this.tabNo);
  }
  initQuestion(qType: string) {
    console.log(this.template);
    const id: number = !this.template ? NaN : this.template.id;
    return this._fb.group({
      id: [''],
      templateId: [!id ? '' : id],
      questionType: [qType, [Validators.required]],
      category: ['', [Validators.required, Validators.minLength(3)]],
      question: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  addQuestion(type: string) {
    const control = <FormArray>this.myForm.controls['questions'];
    control.push(this.initQuestion(type));
  }

  removeQuestion(i: number) {
    const control = <FormArray>this.myForm.controls['questions'];
    control.removeAt(i);
    this.fillQuestion('NULL');
  }

  fillQuestion(event: any) {
    let control = <FormArray>this.myForm.controls['questions'];

    for (let i = 0; i < control.length; i++) {
      if (control.controls[i].value['questionType'] === 'C') {
        control.controls[i].get('question').setValue(control.controls[i].get('category').value);
      }
      if (control.controls[i].value['questionType'] === 'Q') {
        if (i - 1 < 0) {
          control.controls[i].get('category').setValue('GENERAL');
          //control.controls[i].value['category'] = 'GENERAL';
        }
        else {
          control.controls[i].get('category').setValue(control.controls[i - 1].get('category').value);
        }
      }
    }
  }

  createForm() {
    this.myForm = this._fb.group({
      id: [''],
      auditTitle: ['', [Validators.required, Validators.minLength(3)]],
      siteName: [{ value: '', disabled: true }],
      siteId: [''],
      siteAddress: [{ value: '', disabled: true }],
      auditor: ['', [Validators.required, Validators.minLength(3)]],
      auditAlias: ['', [Validators.required, Validators.minLength(3)]],
      //auditDescription: ['', [Validators.required, Validators.minLength(3)]],
      questions: this._fb.array([])
    });
  }

  setForm() {
    console.log('[template component][setform visisted][this.template.auditor value]');
    console.log(this.template.auditor);
    this.setQuestion();
    this.myForm.patchValue({
      id: this.template.id,
      auditTitle: this.template.auditTitle,
      siteId: this.template.siteId,
      siteName: this.template.siteName,
      siteAddress: this.template.siteAddress,
      auditor: this.template.auditor,
      auditAlias: this.template.auditAlias,
      //auditDescription: this.template.auditDescription,
    });
  }

  setMinimumForm() {
    console.log("[setMinimumForm]" + this.user.name);
    this.myForm.patchValue({ auditor: this.user.name });
  }

  setQuestion() {
    const question = this.template.questions.map(question => this._fb.group(question));
    const questionArray = this._fb.array(question);
    this.myForm.setControl('questions', questionArray);
  }

  get questions(): FormArray {
    return this.myForm.get('questions') as FormArray;
  };

  save() {
    this.template = this.prepareSaveTemplate();
    console.log("template data before save=======")
    console.log(this.template);
    if (this.template.id) {
      this.templateService.update(this.template)
        .then(template => {
          console.log(template);
          console.log('update done');
          this.msgs = [];
          this.msgs.push({severity:'success', summary:'Saved', detail:'Template Saved'});
        })
        .catch(err => console.log(err));
      return;
    }
    this.templateService.create(this.template) //this.myForm.value
      .then(template => {
        console.log(template);
        console.log('save done');
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Saved', detail:'Template Saved'});
      });
  }

  prepareSaveTemplate(): Template {
    const formModel = this.myForm.value;
    console.log('[prepareSaveTemplate in template Component]');
    console.log(this.myForm.value);

    // deep copy of form model 
    const questionDeepCopy: Question[] = formModel.questions.map(
      (question: Question) => Object.assign({}, question)
    );
    const saveTemplate: Template = {
      id: this.template ? this.template.id : NaN,
      auditTitle: formModel.auditTitle,
      siteId: formModel.siteId,
      accountId: this.user.accountId,
      siteName: formModel.siteName,
      siteAddress: formModel.siteAddress,
      auditor: formModel.auditor,
      auditAlias: formModel.auditAlias,
      modifyDate: null,
      //auditDescription: formModel.auditDescription,
      questions: questionDeepCopy,
    };

    return saveTemplate;
  }

  chageSite() {
    let changedSite = this.sites.filter(site => site.id == this.myForm.controls.siteId.value);
    this.myForm.patchValue({
      siteName: changedSite[0].siteName,
      siteAddress: changedSite[0].siteAddress
    });
  }

}
