const firstButton = document.querySelector("#decreaseBtn")
const secondButton = document.querySelector("#increaseBtn")

let count = 0;

secondButton.addEventListener('click', function (e) {
    e.preventDefault()
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256)
    blue = Math.floor(Math.random() * 256)
})

firstButton.addEventListener('click', function (e) {
    e.preventDefault()
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256)
    blue = Math.floor(Math.random() * 256)
})



document.getElementById("increaseBtn").onclick = function () {
    count += 1;
    document.getElementById("counter").innerHTML = count;
    switch (true) {
        case count === 0:
            (document.body.style.backgroundColor = 'rgb(' + [red, green, blue].join(',') + ')')
            break;
        default:
            (document.body.style.backgroundColor = 'rgb(' + [red, green, blue].join(',') + ')')
    }
}

document.getElementById("resetBtn").onclick = function () {
    count = 0;
    document.getElementById("counter").innerHTML = count;
    switch (true) {
        case count = 0:
            (document.body.style.backgroundColor = 'rgb(' + [red, green, blue].join(',') + ')')
            break;
        default:
            (document.body.style.backgroundColor = 'rgb(' + [red, green, blue].join(',') + ')')
    }
}

document.getElementById("decreaseBtn").onclick = function () {
    count -= 1;
    document.getElementById("counter").innerHTML = count;
    switch (true) {
        case count === 0:
            (document.body.style.backgroundColor = 'rgb(' + [red, green, blue].join(',') + ')')
            break;
        default:
            (document.body.style.backgroundColor = 'rgb(' + [red, green, blue].join(',') + ')')
    }
}