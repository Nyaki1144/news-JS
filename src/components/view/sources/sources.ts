import './sources.css';
import ISources from '../../types/source';

const inputName = document.querySelector('#inputName') as HTMLInputElement;

class Sources {
    draw(data: ISources[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;
        // if (inputName) {
        let newStrin = ' ';

        inputName.addEventListener('input', function () {
            newStrin = this.value;

            if (newStrin !== '') {
                data.forEach((item) => {
                    if (item.name.includes(newStrin)) {
                        const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

                        const sourceCloneItemName = sourceClone.querySelector('.source__item-name') as HTMLElement;
                        if (sourceCloneItemName) {
                            sourceCloneItemName.textContent = item.name;
                        }
                        const sourceCloneItem = sourceClone.querySelector('.source__item') as HTMLElement;
                        sourceCloneItem?.setAttribute('data-source-id', item.id || '');
                        fragment.append(sourceClone);
                    } else if (item.name === null) {
                        console.log('hgfh');
                    }
                });
            } else {
                data.forEach(() => {
                    const sourceCloneItem = document.querySelector('.source__item') as HTMLElement;
                    if (sourceCloneItem) {
                        sourceCloneItem.classList.remove('.source__item');
                    }
                });
            }

            const sources = document.querySelector('.sources') as HTMLElement;
            if (sources) {
                sources.innerHTML = '';
                sources.append(fragment);
            }
        });
        // }
    }
}

export default Sources;
