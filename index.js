function lbsToKg(lbs) {
    var kgs = lbs / 2.2046
    return kgs;
}

var label = document.getElementById("myLabel");
var input = document.getElementById("myText");
var button = document.getElementById("myButton");

button.onclick = function() {
    label.textContent = Math.round(lbsToKg(Number(input.value))) + " kg";

}
