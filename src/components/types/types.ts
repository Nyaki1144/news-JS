export interface ISources {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface IResponseObject {
    status: string;
    totalResults: number;
    articles: ISources[];
}

export interface IData {
    status: string;
    totalResults: number;
    articles: INews[];
    sources: ISources[];
}

export interface INews {
    source: ISources;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
