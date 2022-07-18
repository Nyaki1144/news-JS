const filterBrand = document.querySelector('.filter-brand');
const cardCity = document.querySelectorAll('.card');

// const country: string[] = ['brazil', 'kemya', 'columbia'];

filterBrand?.addEventListener('click', (event: Event) => {
    cardCity.forEach((el) => {
        const elem = event.target as HTMLInputElement;

        if (elem.getAttribute('data-city') === 'all') {
            el.classList.add('show');
            el.classList.remove('hidden');
        } else {
            if (elem.getAttribute('data-city') === el.lastChild?.textContent) {
                el.classList.add('show');
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
                el.classList.add('show');
            }
        }
    });
});
