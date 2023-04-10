const fs = require("fs")

function deleteKoderById (id) {
    fs.readFile("koders.json", "utf-8", (error, data) => {
        if (error) {
            console.log(error)
        } else {
            const dataParsed = JSON.parse(data)
            dataFilter = dataParsed.koders.filter(item => item.id != id)
            dataParsed.koders = dataFilter
            console.log(dataParsed)
            fs.writeFile("koders.json",JSON.stringify(dataParsed,null,"    "),(deleteError) => {
                if (error) 
                console.log(deleteError)
            })
        }
    })
}

deleteKoderById("4")