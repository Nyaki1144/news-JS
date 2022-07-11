import ISources from './source';

interface ISourcesSuccess {
    status: 'ok';
    sources: ISources[];
}

interface ISourcesFailed {
    status: 'error';
    code: string;
    message: string;
}

type SourcesResponse = ISourcesSuccess | ISourcesFailed;
export default SourcesResponse;
