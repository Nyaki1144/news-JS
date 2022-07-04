import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '1e9785b25ebb49c4be26ca0ae54480c1', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
