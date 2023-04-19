const myFirstPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = null
        //error = new Error("Ocurrió un error")
        if (error) {
            reject(error)
        }
        resolve("Todo cool!!")
    }, 3000)
})
console.log(myFirstPromise)

myFirstPromise
    .then((saludo) => {
        console.log("Hola", saludo)
    })
    .catch((error) => {
        console.log(error)
    })

const person = {
    name: "Manuel",
    atSuperMarket: false,
    paidPantry: false,
    atHome: false
}

function goToSuperMarket(personToGoToSuperMarket) {
    return new Promise((resolve, reject) => {
        console.log(`${personToGoToSuperMarket.name} esta yendo al super mercado`)
        setTimeout(() => {
            personToGoToSuperMarket.atSuperMarket = true
            if (!personToGoToSuperMarket) {
                reject(`${personToGoToSuperMarket.name} no pudo llegar al super.`)
            }
            resolve(personToGoToSuperMarket)
        }, 300);
    })
}

function pay(personToPay) {
    return new Promise((resolve, reject) => {
        console.log(`${personToPay.name} esta pagando`)
        setTimeout(() => {
            personToPay.paidPantry= true
            if (!personToPay) {
                reject(`${personToPay.name} no pudo pagar el super.`)
            }
            resolve(personToPay)
        }, 300);
    })
}

function goHome(personToGoHome) {
    return new Promise((resolve, reject) => {
        console.log(`${personToGoHome.name} esta regresando a casa`)
        setTimeout(() => {
            personToGoHome.paidPantry= true
            if (!personToGoHome) {
                reject(`${personToGoHome.name} no pudo regresar a casa`)
            }
            resolve(personToGoHome)
        }, 300);
    })
}

goToSuperMarket(person)
    .then((personToGoToSuperMarket) => {
        console.log(`${personToGoToSuperMarket.name} ya llego al super`)
        console.log(personToGoToSuperMarket)
        return pay(personToGoToSuperMarket)
    })
    .then((personToPay) => {
        console.log(`${personToPay.name} ya pago el super`)
        console.log(personToPay)
        return goHome(personToPay)
    })
    .then((personToGoHome) => {
        console.log(`${personToGoHome.name} ya llego a casa`)
        console.log(personToGoHome)
        return pay(personToGoHome)
    })
    .catch((error) => {
        console.log(`Error`, error)
    })


    //Async y Await

    async function main(){
        const personAtSuperMarket = await goToSuperMarket(person)
        console.log(`${personAtSuperMarket.name} ya llego al super`)
        console.log(personAtSuperMarket)

        const personToPaid = await pay(personAtSuperMarket)
        console.log(`${personToPaid.name} ya pago el super`)
        console.log(personToPaid)

        const personAtHome = await goHome(personToPaid)
        console.log(`${personAtHome.name} ya llego a casa`)
        console.log(personAtHome)
    }

    main()
        .then((data) => {
            console.log("Termino el proseso")
        })
        .catch((error) => {
            console.log("Error: ", error)
        })

        console.log("Después del main")