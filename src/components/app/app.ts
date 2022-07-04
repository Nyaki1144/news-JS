import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { INews } from '../types/types';

interface ArticlesResponseSuccess {
    status: 'ok';
    totalResults: number;
    articles: INews[];
}

interface ArticlesResponseFailed {
    status: 'error';
    code: string;
    message: string;
}

class App {
    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        document?.querySelector('.sources')?.addEventListener('click', (e: Event) =>
            this.controller.getNews(e, (data: ArticlesResponseSuccess) => {
                console.log(data);
                this.view.drawNews(data);
            })
        );
        this.controller.getSources((data: ArticlesResponseFailed) => this.view.drawSources(data));
    }
}

export default App;
