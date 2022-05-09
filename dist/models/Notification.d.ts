export declare class Notification {
    'id': string;
    'accountId': string;
    'streamId': string;
    'createdAt': Date;
    'isRead': boolean;
    'type': NotificationTypeEnum;
    'payload': any;
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
export declare type NotificationTypeEnum = "StreamStarted" | "StreamPaused" | "StreamFinished" | "StreamIsDue" | "StreamContinued";
