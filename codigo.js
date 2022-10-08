
function seleccionar(){
    x = 0;

    //declaramos una variable que nos mostrara los elementos de la lista//
    lista = document.elejir.menu

    for(i = 0; i<lista.options.length; i++){

        //ahora validamos la seleccion con un if//

        if(lista.options[i].selected){
            //mostramos la seleccion//
            document.write("<br>" + lista.options[i].innerHTML)
            x++

        }
    }
    //mostramos los nombre de los elementos//
    document.write("<br> Elejiste los menu/es: " + x + " que te gustan")

}