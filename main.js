const colors = ['green', 'yellow', 'rgba(133,122,200)', '#f15025']

const btn = document.querySelector('.btn')
const color = document.querySelector('.color')



btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber()

    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)

}



/// Hex Based Color Picker


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

const hexBtn = document.getElementById('hex-btn')


hexBtn.addEventListener('click', () => {
    let hexColor = '#'
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomHex()]

}
    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor;


})

function getRandomHex() {
    return Math.floor(Math.random() * hex.length)
}