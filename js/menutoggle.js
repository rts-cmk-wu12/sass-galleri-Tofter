export function menuToggle() {
    const toggleButton = document.querySelector('#button')
    const navigationList = document.querySelector('#explorer__list')

    toggleButton.addEventListener('click', (e) => {
        console.log("click")

        navigationList.classList.toggle('explorer__list--hidden')
    })

    navigationList.addEventListener("click", (e) => {
        if (e.target.id === 'explorer__item--more') {
            e.target.children[1].classList.toggle('explorer__more')
            console.log()
        }
    })
}