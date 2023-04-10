const fs = require("fs")

function editKoder(id) {
    fs.readFile("koders.json","utf-8",(error,data) => {
        if (error) {
            console.log(error)
        } else {
            const dataParsed = JSON.parse(data)
            dataMap = dataParsed.koders.map(koder => {
                //console.log(koder)
                parseInt(koder.id) == id 
                ? (koder = {
                    "id": id,
                    "name": "Pilar",
                    "lastName": "Maciel",
                    "Age": "41",
                    "favoriteFood": "Helado"
                })
                : null
                return koder
            })
            dataParsed.koders = dataMap
            fs.writeFile("koders.json",JSON.stringify(dataParsed,null,"    "),(editError) => {
                if (editError) {
                    console.log(editError)
                }
            })
            console.log(dataParsed)
        }
    })
}

editKoder(1)