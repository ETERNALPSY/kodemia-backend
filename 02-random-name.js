

const names = ['Francisco', 'Noemi', 'Manuel', 'Cristian', 'Julio' ]

function randomName(arr) {
    return arr[Math.floor(Math.random() * (arr.length))]
}

console.log(randomName(names))