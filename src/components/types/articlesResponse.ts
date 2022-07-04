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

type ArticleResponse = ISuccessArticle | IFailedArticle;
export default ArticleResponse;
