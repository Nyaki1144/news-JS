export interface ISources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

interface ISourcesSuccess {
    status: 'ok';
    articles: ISources[];
}

interface ISourcesFailed {
    status: 'error';
    code: string;
    message: string;
}

export type SourcesResponse = ISourcesSuccess | ISourcesFailed;

// ------------------------------------------------------------------------

export interface IArticle {
    source: ISources;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface ISuccessArticle {
    status: 'ok';
    sources: IArticle[];
}

export interface IFailedArticle {
    status: 'error';
    code: string;
    message: string;
}

export type Response = ISuccessArticle | IFailedArticle;
