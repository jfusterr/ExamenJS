function _id(ident) {
    return document.getElementById(ident);
}



function factorial() {
    var entradafacto = _id("entradaFactorial").value
    var pepe = entradafacto
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

    if (Fons == "clear"){
        colorfondo = "white";
        letrascol = "black";
    } else if (Fons == "random"){
        var gris = Math.floor(Math.random() * 255);
        
        colorfondo = "rgb(" + gris + "," + gris + "," + gris + ")";
    }

    _id("etesech").style.backgroundColor = colorfondo;
    _id("etesech").style.color = letrascol;
}
