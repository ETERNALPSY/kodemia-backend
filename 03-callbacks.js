//Firma: es la forma en que una función recibe sus parámetros
function callback(error,dat){
    if (error) {
        //manea el error 
    } else {
        //continua
    }

}


function goToMarket(error, data){
    if(error) {

    } else{
        console.log('Yendo al supe mercado')
    }
}

function choseGroceries(error, data){
    if(error) {

    } else{
        console.log('Escogiendo la despensa')
    }
}

function paying(error, data){
    if(error) {

    } else{
        console.log('Pagando')
    }
}

function homeComing(error, data){
    if(error) {

    } else{
        console.log('Llegando a casa')
    }
}

function avisar(c1,c2,c3,c4){
    c1()
    c2()
    c3()
    c4()
}   

avisar(goToMarket,choseGroceries,paying,homeComing)



