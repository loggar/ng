import { Component, OnInit, OnChanges, SimpleChanges, Input, ViewChild, Output, EventEmitter, Directive } from '@angular/core';
import { Audit, Answer, Photo } from '../service/audit.interface';
import { AuditService } from '../service/audit.service';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as moment from 'moment/moment';
import { User } from '../service/user.interface';
import { AuthService } from '../service/auth.service';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../environments/environment';

@Component({
  selector: 'on-upload',
  template: `    
  `
})
export class OnUploadComponent implements OnChanges {
  @Input() power: any[];
  @Output()
  completed: EventEmitter<string> = new EventEmitter();

  changeLog: string[] = [];
  ngOnChanges(changes: SimpleChanges) {
    console.log("onUploadComponent visited");
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      console.log(this.changeLog);
      if (prev !== undefined && cur === "0") { setTimeout(() => this.completed.emit('complete'), 2000); }
    }
  }
}

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  @Input() audit: Audit;
  @Input() user: User;
  audits: Audit;
  private apiUrl = environment.apiUrl;
  private imgTitle: string;
  private imgClientLogo: string;
  private imgCover: string;
  public uploader: FileUploader = new FileUploader({ url: this.apiUrl + 'upload/pdfCover', authToken: this.authService.token, maxFileSize: 10000000 });
  public image: any;
  public temp: any;
  //items: Promise<any[]>;
  items: any[] = [];
  fn: any;
  @ViewChild(OnUploadComponent) childView: OnUploadComponent;


  constructor(private authService: AuthService,
    private auditService: AuditService,
  ) {
    pdfmake.vfs = pdfFonts.pdfMake.vfs;
    //this.image = this.apiUrl + 'images/' + this.audit.siteId + '/' + this.audit.id + '.JPG';
    //this.temp = this.image;//'assets/logo2012.png';
  }

  ngOnInit() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    };
    this.image = this.apiUrl + 'images/' + this.audit.siteId + '/' + this.audit.id + '.JPG';
    this.temp = this.image;//'assets/logo2012.png';
    console.log(this.image);
    /*
        this.audit.photos.forEach(element => {
          this.convertToDataURLviaCanvas(this.apiUrl + 'images/' + element.photoLocation + '/' + element.photoName, "image/jpeg", 300, 300)
            .then(base64Img => {
              console.log("hey");
              element.base64Img = base64Img as string;
            })
    
        });
    */
  }

  convertToDataURLviaCanvas(url, outputFormat, height, width) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        let canvas = <HTMLCanvasElement>document.createElement('CANVAS'),
          ctx = canvas.getContext('2d'),
          dataURL;
        canvas.height = height;
        canvas.width = width;
        ctx.drawImage(img, 0, 0, width, height);
        dataURL = canvas.toDataURL(outputFormat);
        //callback(dataURL);
        //console.log(dataURL.substring(0,60));
        canvas = null;
        resolve(dataURL);
      };
      img.src = url;
    });
  }

  convertImage() {    
    let photographyIndex = 0;
    this.audits.photos.forEach(element => {
      console.log('[value of photographyIndex]'); console.log(photographyIndex);
      this.items[photographyIndex] = this.convertToDataURLviaCanvas(this.apiUrl + 'images/' + element.photoLocation + '/' + element.photoName, "image/jpeg", 300, 300);

      this.items[photographyIndex].then(base64Img => {
        console.log("hey");
        element.base64Img = base64Img as string;
        //this.items.push
      });

      photographyIndex++;
    });
    this.items[++photographyIndex] = this.convertToDataURLviaCanvas(this.apiUrl + 'images/logo' + this.user.accountId + '.gif', "image/jpeg", 300, 300);
    this.items[photographyIndex].then(base64Img => {
      console.log("hey1");
      this.imgClientLogo = base64Img as string
    });
    this.items[++photographyIndex] = this.convertToDataURLviaCanvas(this.temp, "image/jpeg", 300, 300);
    this.items[photographyIndex].then(base64Img => {
      console.log("hey2");
      this.imgCover = base64Img as string;
    });
    this.items[++photographyIndex] = this.convertToDataURLviaCanvas(this.apiUrl + 'images/logo0.gif', "image/jpeg", 300, 300);
    this.items[photographyIndex].then(base64Img => {
      console.log("hey3");
      this.imgTitle = base64Img as string;
    });
  }
  PDF0() {
    this.getAudit(this.audit.id);
  }
  PDF1() {
    this.convertImage();
    Promise.all(this.items)
      .then(result => {
        this.PDFCreation();
      })    
  }
  PDF() {
    console.log("[what user infomation?]");
    console.log(this.user);
    /*
        this.audit.photos.forEach(element => {
          this.convertToDataURLviaCanvas(this.apiUrl + 'images/' + element.photoLocation + '/' + element.photoName, "image/jpeg", 300, 300)
            .then(base64Img => {
              console.log("hey");
              element.base64Img = base64Img as string;
            })
    
        });
    */
    //this.fn = this.convertImage(this.audit.photos);
    //this.getAudit(this.audit.id);
    this.convertImage();
    console.log('this.item print');
    console.log(this.items);
    Promise.all(this.items)
      .then(result => {
        this.convertToDataURLviaCanvas(this.apiUrl + 'images/logo' + this.user.accountId + '.gif', "image/jpeg", 300, 300)
          .then(base64Img => {
            console.log("hey1");
            this.imgClientLogo = base64Img as string;
          })
          .then(result => {
            this.convertToDataURLviaCanvas(this.temp, "image/jpeg", 300, 300)
              .then(base64Img => {
                console.log("hey2");
                this.imgCover = base64Img as string;
              })
              .then(result => {
                this.convertToDataURLviaCanvas(this.apiUrl + 'images/logo0.gif', "image/jpeg", 300, 300)
                  .then(base64Img => {
                    console.log("hey3");
                    this.imgTitle = base64Img as string;
                    this.PDFCreation();
                  });
              });
          })
      })

    /*
    this.items.then(result => {
      console.log('result');
      console.log(result);
      this.convertToDataURLviaCanvas(this.apiUrl + 'images/logo' + this.user.accountId + '.gif', "image/jpeg", 300, 300)
        .then(base64Img => {
          console.log("hey1");
          this.imgClientLogo = base64Img as string;
        })
        .then(result => {
          this.convertToDataURLviaCanvas(this.temp, "image/jpeg", 300, 300)
            .then(base64Img => {
              console.log("hey2");
              this.imgCover = base64Img as string;
            });
        })
        .then(result => {
          this.convertToDataURLviaCanvas(this.apiUrl + 'images/logo0.gif', "image/jpeg", 300, 300)
            .then(base64Img => {
              console.log("hey3");
              this.imgTitle = base64Img as string;
              this.PDFCreation();
            });
        })
    }
    );
    */
    /*
    Promise.all(this.items)
      .then(result => {
        console.log('this.item print2');
        console.log(this.items);
        console.log('done 000')
      });
    */
    /*
        this.convertToDataURLviaCanvas(this.apiUrl + 'images/logo' + this.user.accountId + '.gif', "image/jpeg", 300, 300)
          .then(base64Img => {
            console.log("hey1");
            this.imgClientLogo = base64Img as string;
          })
          .then(result => {
            this.convertToDataURLviaCanvas(this.temp, "image/jpeg", 300, 300)
              .then(base64Img => {
                console.log("hey2");
                this.imgCover = base64Img as string;
              });
          })
          .then(result => {
            this.convertToDataURLviaCanvas(this.apiUrl + 'images/logo0.gif', "image/jpeg", 300, 300)
              .then(base64Img => {
                console.log("hey3");
                this.imgTitle = base64Img as string;
                this.PDFCreation();
              });
          });
        
            this.convertToDataURLviaCanvas(this.apiUrl + 'images/logo0.gif', "image/jpeg", 300, 300)
              .then(base64Img => {
                console.log("hey2");
                this.imgTitle = base64Img as string;
                this.PDFCreation();
              });
        */
  }


  PDFCreation() {

    let answerinPDF = [];
    answerinPDF.push([
      { text: 'Category', fillColor: '#eeeeff', alignment: 'center' },
      { text: 'Question', fillColor: '#eeeeff', alignment: 'center' },
      { text: 'RISK', fillColor: '#eeeeff', alignment: 'center' },
      { text: 'ACTION', fillColor: '#eeeeff', alignment: 'center' },
      { text: 'PHOTO1', fillColor: '#eeeeff', alignment: 'center' },
      { text: 'PHOTO2', fillColor: '#eeeeff', alignment: 'center' },
      { text: 'PHOTO3', fillColor: '#eeeeff', alignment: 'center' },
    ]);
    this.audits.answers.forEach(element => {
      let selectedPhoto: any[3] = this.audits.photos.filter(photo => photo.auditDetailId === element.id).copyWithin(3, 0);
      answerinPDF.push([
        { text: element.category || "", style: 'med' },
        { text: element.question || "", style: 'med' },
        { text: element.compliance === 'NO'?element.risk:""  || "", style: 'med' },
        { text: element.compliance === 'NO'?element.memo:element.compliance==='YES'?'Compliant':'N/A' || "", style: 'med' },
        selectedPhoto[0] ? { image: selectedPhoto[0].base64Img, width: 100, height: 100 } : "",
        selectedPhoto[1] ? { image: selectedPhoto[1].base64Img, width: 100, height: 100 } : "",
        selectedPhoto[2] ? { image: selectedPhoto[2].base64Img, width: 100, height: 100 } : "",
      ]);
    });
    console.log('[answerinPDF]');
    console.log(answerinPDF);

    let doc = {
      pdfTemp: this.audits.siteName,
      footer: function (currentPage, pageCount) {
        return { text: ((currentPage > 1) ? 'Audit Report for ' + doc.pdfTemp : '') + '                        ' + currentPage.toString() + ' of ' + pageCount, style: 'anotherStyle' };
      },
      content: [
        /*
        { text: this.audit.auditTitle, style: 'header' },
        { text: this.audit.siteName, style: 'header' },
        {
          image: this.imgTitle,
          width: 150,
          style: 'header',
        },
        */
        {
          alignment: 'justify',
          //style: 'tableExample',
          table: {
            widths: [110, '*', 110],
            body: [
              [{ image: this.imgTitle, alignment: 'center', fit: [110, 80], rowSpan: 2, border: [false, false, false, false] },
              { border: [false, false, false, false], text: '  ' },
              { image: this.imgClientLogo, alignment: 'center', fit: [110, 80], rowSpan: 2, border: [false, false, false, false] },
              ],
              ['',
                { text: this.audits.auditTitle + '\n' + this.audits.siteName, style: 'header', border: [false, false, false, false] },
                '',
              ],
            ]
          }
        },
        {
          alignment: 'justify',
          style: 'tableExample',
          table: {
            widths: [110, '*'],
            body: [
              [{ colSpan: 2, border: [false, false, false, false], image: this.imgCover, alignment: 'center' }, ''],
              [{ colSpan: 2, border: [false, false, false, false], text: '  ' }, ''],
              [{ text: 'Site Name: ', border: [true, true, false, false], fillColor: '#eeeeff' }, { text: this.audit.siteName, border: [false, true, true, false], fillColor: '#eeeeff' }],
              [{ text: 'Site Address: ', border: [true, false, false, false], fillColor: '#eeeeff' }, { text: this.audit.siteAddress, border: [false, false, true, false], fillColor: '#eeeeff' }],
              [{ text: 'Date of Inspection: ', border: [true, false, false, false], fillColor: '#eeeeff' }, { text: moment(this.audit.auditDate).format('YYYY-MM-DD'), border: [false, false, true, false], fillColor: '#eeeeff' }],
              [{ text: 'Inspected by : ', border: [true, false, false, true], fillColor: '#eeeeff' }, { text: this.audit.auditor, border: [false, false, true, true], fillColor: '#eeeeff' }]
            ]
          }

        },
        {
          text: `Purpose
InteRisk have been engaged to undertake a physical site review and provide a documented report for specific assets within the Arena Investment Management Limited's portfolio. The intent of the InteRisk review is to verify that the sites management team has adopted adequate risk management and facility management principles. The physical site review includes items such as basic asset maintenance and condition, verification of site security protocols, electrical safety and evidence of hazardous goods & Dangerous goods surveys. The scope also includes items such as adopted management controls for height safety & restricted access areas and verification that the emergency management procedures and essential services certification is current.`
          , style: 'small'
          , pageBreak: 'after'
        },
        {
          text: `Executive Summary`
        },
        {
          alignment: 'justify',
          style: 'tableContent',
          table: {
            widths: ['*'],
            body: [
              [{ text: 'Building Description', alignment: 'center' }],
              [{
                text: `The centre consist of two single story structures. Centre 1, which caters for 4 - 5 year olds is constructed of
rendered walls, with a corrugated iron roof. Centre 2, which caters for 0 - 3 year olds is constructed of flat
fibro sheeting, with a tiled roof. No structural defects were identified or mentioned in discussions with
centre director.\n\n\n\n\n\n`, fillColor: '#eeeeff', style: 'small'
              }],
              [{ text: 'Mechanical Services', alignment: 'center' }],
              [{
                text: `Air conditioning is provided by both wall mounted and split air conditioning systems. Maintenance reports
were not available at the time of inspection. They are believed to be operating effectively, but appeared
aged and they would be close to the end of their service life.\n\n\n\n\n\n`, fillColor: '#eeeeff', style: 'small'
              }],
              [{ text: 'Fire Services', alignment: 'center' }],
              [{
                text: `The sites fire services consist of emergency lighting, exit signs, portable fire extinguishers and blanket. All
observed fire fighting equipment was within compliance inspection date as November 2016.
At the time of inspection it was noted current AFSS's for both centres was not on display or available for
review.\n\n\n`, fillColor: '#eeeeff', style: 'small'
              }],
              [{ text: 'Risk Management', alignment: 'center' }],
              [{
                text: `The centre appears well run and was reasonably presented at the time of inspection. Staff are aware of
evacuation procedures, with trial evacuations having occurred in recent months.
Centre 2 is equipped with current and compliant emergency evacuation diagrams with an issue date of July
2015. There was no evidence of emergency evacuation diagrams in Centre 1.\n\n\n\n\n\n`, fillColor: '#eeeeff', style: 'small'
              }],
              [{ text: 'General conditions, Maintenance and Presentation', alignment: 'center' }],
              [{
                text: `Overall the centre is in a fair condition with internal and external painting works required. Existing fixed
joinery throughout the centre are aged and showing signs of deterioration with minor damage, marks and
scuffing.
Additional items identified are further outlined in this report.\n\n\n\n\n\n`, fillColor: '#eeeeff', style: 'small'
              }],
            ]
          }
        },
        {
          text: `DISCLAIMER
This report was prepared for the client for the purposes set out herein. Responsibility is disclaimed for any loss or damage
(including but not limited to damage resulting from the use by the client of the report) suffered by any other person for any
reason at all including but not limited to negligence by InteRisk. This report is confidential to the Client and InteRisk does
not intend that any other person accept or rely upon it.
This report is based on our inspections and information provided to us by the Client at the time of such inspections. Such
information supplied has not been independently verified by InteRisk. Whilst this report is accurate to the best of our
knowledge and belief, InteRisk cannot guarantee the completeness or accuracy of any description or conclusions based on
the supplied information.
The recommendations contained in the report are advisory and InteRisk has no responsibility for the management or
operation of any risk management or safety procedures that may be implemented. No representation or opinion is given to
the effect that all applicable statutory rules and regulations and directions have been given or will be complied with or that
there are no other hazards in existence.`
          , style: 'small'
          , pageOrientation: 'landscape', pageBreak: 'after'
        },
        {
          table: {
            dontBreakRows: true,
            headerRows: 1,
            widths: [100, 140, 34, 140, '*', '*', '*'],
            body: answerinPDF
          }
        }
      ],

      styles: {
        header: {
          fontSize: 22,
          bold: true,
          alignment: 'center'
        },
        anotherStyle: {
          margin: [5, 5, 5, 5],
          italic: true,
          alignment: 'right'
        },
        tableExample: {
          //margin: [60, 100, 0, 100],
          margin: [30, 100, 30, 30],
          alignment: 'center',
        },
        tableContent: {
          margin: [5, 5, 5, 5],
          alignment: 'center',
        },
        small: {
          fontSize: 9
        },
        med: {
          fontSize: 10
        }

      }
    };
    console.log('[PDFdoc]');
    console.log(doc);
    pdfmake.createPdf(doc).download('InteriskReport.pdf');
    //pdfmake.createPdf(doc).open();

  }

  DocumentSave() {
    this.uploader.options.additionalParameter = {
      'siteId': this.audit.siteId,
      'auditId': this.audit.id,
    };
    console.log(this.uploader.options.additionalParameter);
    this.uploader.uploadAll();
  }

  setDefaultPic() {
    this.image = "assets/logo2012.png";
  }

  aftercheck() {
    console.log('picture done');

    this.temp = this.image + '?random+\=' + Math.random()
    console.log(this.image);
  }

  getAudit(id: number): void {
    console.log("call service : Audit");
    this.auditService.getAudit(id).subscribe(audits => { this.audits = audits; this.PDF1() });
  }
}
