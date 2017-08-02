export interface Audit {
    id: number;
    templateId: string;
    auditDate: string;
    auditTitle: string;
    siteId: number;
    accountId: number;
    siteName: string;
    siteAddress: string;
    auditor: string;
    answers: Answer [];
    photos: Photo [];    
    auditAlias: string;
    auditDescription: string;
}

export interface Answer {
    id: string;
    //questionType: string;
    category: string;    
    question: string;
    compliance: string;
    risk: string;
    memo: string;
 }

export interface Photo {
    id: string;
    auditDetailId: string;
    photoName: string;
    photoLocation: string;
    base64Img: string;
}