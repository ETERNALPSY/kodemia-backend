const fs = require("fs")

function readAll() {
    fs.readFile("koders.json", "utf8", (err, registro) => {
        if (err) {
            console.log(err)
        } else {
            const registroParsed = JSON.parse(registro)
            console.log(registroParsed)
        }
    })
}

readAll()

