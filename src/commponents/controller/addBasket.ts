const cards = document.querySelectorAll('.card');
const circle = document.querySelector('.circle') as HTMLElement;

cards.forEach((el) => {
    el.addEventListener('click', (event) => {
        if (event.currentTarget && localStorage.length < 20) {
            const lvl1 = event.target as HTMLElement;
            const lvl2 = lvl1.parentElement as HTMLElement;
            const localID = lvl2.getAttribute('data-card') as string;
            localStorage.setItem(`key ${localID}`, localID);
            getLocalStoregeInfo();
        }

        if (localStorage.length == 20) {
            alert("You can't add more than 20 items to your cart");
        }
    });
});

function getLocalStoregeInfo() {
    if (localStorage.length > 0) {
        circle.classList.remove('hidden');
        circle.classList.add('show');
    } else {
        circle.classList.add('hidden');
        circle.classList.remove('show');
    }
}

getLocalStoregeInfo();
