export function filter() {
    const listItemElements = Array.from(document.querySelectorAll('.explorer__item'))
        .filter(item => item.hasAttribute('data-category'));
    const imageElements = document.querySelectorAll('.main__gallery img');
    console.log(listItemElements);
    console.log(imageElements);

    listItemElements.forEach(item => {
        item.addEventListener('click', () => {
            const category = item.getAttribute('data-category');
            imageElements.forEach(img => {
                if (img.getAttribute('alt') === category) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });
}