export interface Template {
    id: number;
    auditTitle: string;
    siteId: string;
    accountId: number;
    siteName: string;
    siteAddress: string;
    auditor: string;
    questions: Question [];
    auditAlias: string;
    //auditDescription: string;
    modifyDate: Date
}

export interface Question {
    id: number;
    templateId: number;
    questionType: string;
    category: string;
    question: string;
}