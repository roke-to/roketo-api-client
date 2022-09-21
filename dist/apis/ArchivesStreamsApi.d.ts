import { BaseAPIRequestFactory } from './baseapi';
import { Configuration } from '../configuration';
import { RequestContext, ResponseContext } from '../http/http';
import { ArchivedStream } from '../models/ArchivedStream';
export declare class ArchivesStreamsApiRequestFactory extends BaseAPIRequestFactory {
    findArchivedStreams(_options?: Configuration): Promise<RequestContext>;
}
export declare class ArchivesStreamsApiResponseProcessor {
    findArchivedStreams(response: ResponseContext): Promise<Array<ArchivedStream>>;
}
