function Bmi() {
    let h = +document. getElementById("height").value;
    let w = +document. getElementById("width").value;
    h = parseInt(h);
    w= parseInt(w)
    let bmi = w/(h*h);
    if (bmi < 18.5) {
        document.getElementById("res").innerHTML = "Underweight";
    } else if (bmi < 25.0) {
        document.getElementById("res").innerHTML="Normal";
    } else if (bmi < 30.0) {
        document.getElementById("res").innerHTML="Overweight";
    } else {
        document.getElementById("res").innerHTML="Obese ";
    }
}