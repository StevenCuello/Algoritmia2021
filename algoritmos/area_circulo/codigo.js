function area(){
    var N1 = parseInt(document.getElementById("R").value);
    var r = (N1 * N1) * 3.14159265358979323846 ;
    document.getElementById("resultado").innerHTML = r ;
}