var savePpl=document.getElementById("savedPpl");
var countP=document.getElementById("count");

var count= 0 ;


function Increment(){
    count += 1;
    countP.innerText= count;

}
function save(){
    savePpl.innerText += count;
}