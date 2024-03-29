export * from './AccessTokenDto';
export * from './ArchivedStream';
export * from './ArchivedStreamPayload';
export * from './BadRequest';
export * from './HelloResponse';
export * from './LoginDto';
export * from './Notification';
export * from './Unauthorized';
export * from './UpdateUserDto';
export * from './User';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}
