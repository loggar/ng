export interface Common {
    site: Site[];
    user: User;
}

export interface Site {
    id: string;
    accountId: string;
    siteName: string;
    siteAddress: string;
}

export interface User {
    id: string;
    email: string;    
    name: string;
    accountId: number;
    accountName: string;
}
