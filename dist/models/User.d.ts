export declare class User {
    'accountId': string;
    'name': string;
    'email': string;
    'isEmailVerified': boolean;
    'verificationEmailSentAt': Date;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
