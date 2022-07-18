const inputName = document.querySelector('#inputName') as HTMLInputElement;
const card = document.querySelectorAll('.card');

type inputValue = string | number;

inputName.addEventListener('input', function () {
    const newStrin: inputValue = this.value;
    card.forEach((el) => {
        if (!el.children[1].textContent?.toLowerCase().includes(newStrin.toLowerCase())) {
            el.classList.add('hidden');
            el.classList.remove('show');
        } else {
            el.classList.remove('hidden');
            el.classList.add('show');
        }
    });
});
