const increase = document.getElementById("inc");
const reset = document.getElementById("reset");
const decrease = document.getElementById("dec");
const countlabel = document.getElementById("count");

let count  = 0;

increase.onclick = function(){
    count++;
    countlabel.textContent = count;
}
decrease.onclick = function(){
    count--;
    countlabel.textContent = count;
}
reset.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
