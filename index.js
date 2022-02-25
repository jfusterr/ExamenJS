function _id(ident) {
    return document.getElementById(ident);
}



function factorial() {
    var pepe = _id("entradaFactorial").value
    var factorialop = ""
    var resultadof = 1

    while (pepe > 0) {

        resultadof = resultadof * pepe;

        factorialop += pepe;

        if (pepe > 1) factorialop += "*"

        pepe--;


    }

    _id("operacionsFactorial").innerHTML = factorialop;
    _id("resultatFactorial").innerHTML = resultadof;

}

function calculaIVA() {

    var totiva = "";
    var calcIVA = ""
    var nIVA = _id("tipusIVA").value
    var conIVA = _id("preuAmbIVA").value

    calcIVA = conIVA / (1 + nIVA / 100);
    totiva = conIVA - calcIVA;


    _id("preuSenseIVA").innerHTML = calcIVA.toFixed(2);
    _id("IVA").innerHTML = totiva.toFixed(2);

}



function canviaFons(Fons) {

    var colorfondo = ""
    var letrascol = ""
    var negativo = ""

    if (Fons == "clear"){
        colorfondo = "white";
        letrascol = "black";
    } else if (Fons == "random"){
        var gris = Math.floor(Math.random() * 255);
        
        colorfondo = "rgb(" + gris + "," + gris + "," + gris + ")";
        if(gris<70){

            negativo = 255 - gris;
            letrascol = "rgb(" + negativo + "," + negativo + "," + negativo + ")";

        }
    }

    _id("etesech").style.backgroundColor = colorfondo;
    _id("etesech").style.color = letrascol;
}
