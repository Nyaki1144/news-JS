import AppLoader from './appLoader';
import { ArticlesResponseHandler, SourcesResponseHandler } from './loader';

class AppController extends AppLoader {
    getSources(callback: SourcesResponseHandler) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: ArticlesResponseHandler): void {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                if (target.getAttribute('data-source-id') !== null) {
                    const sourceId = target.getAttribute('data-source-id');
                    if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                        newsContainer.setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;