import SourcePreview from './source';

export default interface IArticle {
    source: SourcePreview;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}
