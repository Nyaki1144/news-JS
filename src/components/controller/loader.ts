import { IData } from '../../components/types/types';

type OptionsPar = {
    [k: string]: string;
};

interface IGetResp {
    endpoint: string;
    options?: OptionsPar;
}

class Loader {
    constructor(readonly baseLink: string, readonly options: OptionsPar) {
        // this.baseLink = baseLink;
        // this.options = options;
    }

    getResp(
        { endpoint, options = {} }: IGetResp,
        callback = (): void => {
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

    load(method: 'GET' | 'POST', endpoint: string, callback: (data: IData) => void, options: OptionsPar) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
