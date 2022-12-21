let count = 0;

var inCount = document.getElementById("count-el");
var saveEle = document.getElementById("save-el");

function increment(){
    count+=1;
    inCount.innerText = count;

}

function save(){
    saveEle.innerText += " " + count + " -";
    count = 0;
    inCount.innerText = count;
}