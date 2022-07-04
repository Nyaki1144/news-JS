import './sources.css';
import { ISources } from '../../types/types';

class Sources {
    draw(data: ISources[]) {
        const fragment = document.createDocumentFragment() as DocumentFragment;
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceCloneItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
            if (sourceCloneItemName) {
                sourceCloneItemName.textContent = item.name;
            }
            const sourceCloneItem = sourceClone.querySelector('.source__item') as HTMLElement;
            sourceCloneItem?.setAttribute('data-source-id', item.id || '');
            fragment.append(sourceClone);
        });

        const sources = document.querySelector('.sources') as HTMLElement;
        if (sources) {
            sources.innerHTML = '';
            sources.append(fragment);
        }
    }
}

export default Sources;
