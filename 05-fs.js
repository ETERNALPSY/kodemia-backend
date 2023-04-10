const fs = require('fs')

fs.writeFile("hola-koders.txt", "Hola koders", (error) => {
    if (error) {
        console.log('Ocurrió un error: ', error)
        return
    }
    console.log("se ha creado el archivo exitosamente!!!")
})