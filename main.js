let weight = +prompt("nhập cân nặng ");
let height = +prompt("nhập chiều cao ");
let bmi = weight /(height*height);
    if(bmi < 18.5) {
        document.write("Underweight");
    }
    else if(18.5 < bmi < 25.0 ){
        document.write("Normal");
    }
    else if(25.0 < bmi < 30.0){
        document.write("Overweight");
    }
    else{
        document.write("Normal");
    }
    