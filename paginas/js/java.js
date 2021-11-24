function capturar(){
    var edad=document.getElementById("años").value;
    var fedad= edad * 7;
    var redad= Math.log(edad) * 16 + 31;
    document.getElementById("edad-falsa").value=fedad;
    document.getElementById("edad-real").value=Math.round(redad);
}