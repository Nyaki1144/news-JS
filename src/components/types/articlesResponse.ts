import IArticle from './article';

export interface ISuccessArticle {
    status: 'ok';
    totalResults: number;
    articles: IArticle[];
}

export interface IFailedArticle {
    status: 'error';
    code: string;
    message: string;
}

export type ArticleResponse = ISuccessArticle | IFailedArticle;
