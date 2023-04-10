const fs = require("fs")

function writeKoder() {
    fs.readFile("koders.json", "utf8", (err, registro) => {
            if (err) {
                console.log(err)
            } else {
                const registroParsed = JSON.parse(registro)
                let newKoder = {
                    "id": 4,
                    "name": "Noemi",
                    "lastName": "Dominguez",
                    "Age": "40",
                    "favoriteFood": "Pizza"
                }
                registroParsed.koders.push(newKoder)
                fs.writeFile("koders.json",JSON.stringify(registroParsed,null,"    "),(error) => {
                    if (error)
                        console.log(error)
                })
                console.log(registroParsed)
            }
        })
}

writeKoder()