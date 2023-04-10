const koder = {
    name: 'Manuel',
    interviewed: false,
    proposalSent: false,
    isEnrolled: false,
    introductoryCourse: false
}

//console.log(koder)

function fillForm(cb){
    console.log('llenar un formulario')
    setTimeout(() => {
        cb(null, (console.log('Formulario llenado'), koder.interviewed = true, console.log(koder)))
        
    },2000)
}

function sendProp(cb){
    console.log('Mandar Propuesta')
    setTimeout(() => {
        cb(null, (console.log('Propuesta recibida'), koder.proposalSent = true, console.log(koder)))
    },2000)
}

function fillContract(cb){
    console.log('Llenar contrato')
    setTimeout(() => {
        cb(null, (console.log('Contrato llenado'), koder.isEnrolled = true, console.log(koder)))
    },2000)
}


function takeCourse(cb){
    console.log('Tomar curso de introducción')
    setTimeout(() => {
        cb(null, (console.log('Curso tomado'), koder.introductoryCourse = true, console.log(koder)))
    },2000)
}


fillForm((error, message) => {
    if (error) {
        console.log('Oh! no, hubo un problema con su tramite')
        return
    }
    sendProp((error, message) => {
        if (error) {
            console.log('Oh! no, hubo un problema con su tramite')
            return
        }
        fillContract((error, message) => {
            if (error) {
                console.log('Oh! no, hubo un problema con su tramite')
                return
            }
            takeCourse((error, message) => {
                if (error) {
                    console.log('Oh! no, hubo un problema con su tramite')
                    return
                }
            })
        })
    })
})

