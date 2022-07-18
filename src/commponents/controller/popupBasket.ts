const basketImg = document.querySelector('.basket-img') as HTMLElement;
const popup = document.querySelector('.popup') as HTMLElement;

basketImg.addEventListener('click', (event) => {
    popup.style.display = 'block';
});
