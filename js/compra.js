document.addEventListener('DOMContentLoaded', () => {
    for (let index = 1; index < 6; index++) {
        document.getElementById(`compra${index}`).addEventListener('click', () => {
            location.href = 'https://theuselessweb.com/';
        })
    }
})