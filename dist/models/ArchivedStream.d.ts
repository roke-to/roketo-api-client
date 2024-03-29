import { ArchivedStreamPayload } from './ArchivedStreamPayload';
export declare class ArchivedStream {
    'id': string;
    'streamId': string;
    'accountId': string;
    'startedAt': Date;
    'finishedAt': Date;
    'payload': ArchivedStreamPayload;
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
