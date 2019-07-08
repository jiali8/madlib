//event listener 
document.getElementById("button").addEventListener("click", clickHandler)

//event function 
function clickHandler () { 
    //input 
    let verb = document.getElementById("1").value;
    let pn = document.getElementById("2").value;
    let ad = document.getElementById("3").value;
    let ptv = document.getElementById("4").value;
    let n = document.getElementById("5").value;

    //build message 
    let message = " “There are too many " + verb  + " " + pn  +" on this " + ad  + " airplane!”, " + "I screamed. " +"“Somebody has to " + ptv  + " on the " + n  + " to solve this problem!” ";

    //output message 
    document.getElementById("output").innerHTML = message; 
}
