const flowerPetalLeft = document.querySelector("#flower-petal-left")

const flowerPetalRight = document.querySelector("#flower-petal-right")

const flowerButton = document.querySelector("#lotus")

const menu = document.querySelector(".main-items")

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
const docBody = document.querySelector('body');

if (dayLightButton.checked) {
    //dayLightButton.classList.add('night');
    docBody.classList.add('night');
}

if (localStorage.getItem("theme") === "dark") {
    docBody.classList.add('night');
    dayLightButton.setAttribute("checked", "true");
} else {
    docBody.classList.remove('night');
}

dayLightButton.addEventListener('change', () => {
    if (dayLightButton.checked) {
        docBody.classList.add('night');
        localStorage.setItem("theme", "dark");
    } else {
        docBody.classList.remove('night');
        localStorage.setItem("theme", "light");
    }
})

const dateTimeField = document.querySelector("#date-time-footer")

dateTimeField.textContent = new Date().getFullYear()