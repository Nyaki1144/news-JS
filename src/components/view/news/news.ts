import './news.css';
import { INews } from '../../types/types';

class News {
    draw(data: INews[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) {
                const newsArt = newsClone.querySelector('.news__article') as HTMLElement;
                newsArt?.classList.add('alt');
            }

            const newsMetaPhoto = newsClone.querySelector<HTMLElement>('.news__meta-photo') as HTMLElement;
            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;

            const newsMetaAutor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            newsMetaAutor.textContent = item.author || item.source.name;

            const newsMetaData = newsClone.querySelector('.news__meta-date') as HTMLElement;
            newsMetaData.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            newsDescriptionTitle.textContent = item.title;

            const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            newsDescriptionSource.textContent = item.source.name;

            const newsDescriptionContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            newsDescriptionContent.textContent = item.description;

            const newsReadMore = newsClone.querySelector('.news__read-more a') as HTMLElement;
            newsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsInner = document.querySelector('.news') as HTMLElement;

        newsInner.innerHTML = '';
        newsInner.appendChild(fragment);
    }
}

export default News;