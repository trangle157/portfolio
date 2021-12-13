const flowerPetalLeft = document.querySelector("#flower-petal-left")

const flowerPetalRight = document.querySelector("#flower-petal-right")

const flowerButton = document.querySelector("#lotus")

const menu = document.querySelector(".main-items")
//console.log(flowerButton)

flowerButton.addEventListener('click', () => {
    const openStatus = flowerButton.classList.toggle("open")
    menu.classList.toggle("open")
    if (openStatus) {
        console.log(flowerButton.classList)
        //flowerButton.setAttribute("transition", "all 100s ease-in-out")
        flowerPetalLeft.setAttribute("transform", "rotate(-15, 10, 18)")
        flowerPetalRight.setAttribute("transform", "rotate(15,10,18)")
    }
    else {
        console.log("neh")
        flowerPetalLeft.setAttribute("transform", "")
        flowerPetalRight.setAttribute("transform", "")
    }
})

/* dark mode */
const dayLightButton = document.querySelector('#day-night-switch');
const docBody = document.querySelector('body')

dayLightButton.addEventListener('change', () => {
    if (dayLightButton.checked) {
        console.log("yay")
        docBody.classList.toggle("night")
        console.log(docBody.classList)
    } else {
        docBody.classList.toggle("night")
    }
})

const dateTimeField = document.querySelector("#date-time-footer")

dateTimeField.innerHTML = new Date().getFullYear()