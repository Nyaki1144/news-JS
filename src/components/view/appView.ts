import News from './news/news';
import Sources from './sources/sources';
import SourcesResponse from '../types/sourcesResponse';
import { ArticleResponse } from '../types/articlesResponse';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(res: ArticleResponse) {
        if (res.status === 'ok') {
            const values = res?.articles || [];
            this.news.draw(values);
        }
    }

    drawSources(res: SourcesResponse) {
        if (res.status === 'ok') {
            const values = res?.sources || [];
            this.sources.draw(values);
        }
    }
}

export default AppView;
