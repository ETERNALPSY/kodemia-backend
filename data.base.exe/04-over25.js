const fs = require("fs")

function overTf() {
    fs.readFile("koders.json","utf8",(error,data) => {
        if (error) {
            console.log(error)
        } else {
            const dataParsed = JSON.parse(data)
            dataFilter = dataParsed.koders.filter(koder => parseInt(koder.Age) > 25)
            console.log(dataFilter)
        }
    })
}

overTf()