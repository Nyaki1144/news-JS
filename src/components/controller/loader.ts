import SourcesResponse from '../../components/types/sourcesResponse';
import ArticleResponse from '../../components/types/articlesResponse';

type OptionsPar = {
    [k: string]: string;
};

export type ArticlesResponseHandler = (data: ArticleResponse) => void;
export type SourcesResponseHandler = (data: SourcesResponse) => void;
export type ResponseHandler = ArticlesResponseHandler | SourcesResponseHandler;

class Loader {
    constructor(readonly baseLink: string, readonly options: OptionsPar) {}

    getResp(
        { endpoint, options = {} }: { endpoint: string; options?: OptionsPar },
        callback: ResponseHandler = () => {
            console.error('No callback for GET response');
        }
    ): void {
        if (options) {
            this.load('GET', endpoint, callback, options);
        }
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: OptionsPar, endpoint: string) {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method: 'GET' | 'POST', endpoint: string, callback: ResponseHandler, options: OptionsPar) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
