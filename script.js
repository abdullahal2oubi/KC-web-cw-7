function BMI(width , height) {
    let result = width / (height * height);
    return result;
}

function Status (bmi) {
    if (bmi < 18.5){
        return "نقص بالوزن";
    }





else if (bmi >= 18.5  && bmi < 25) {
return" وزنك صحي";
}
else if (bmi >= 25) {
return" لديك زيادة وزن";

}
}
function calculate ()
{
    let weight = document.getElementById("weight").value;
let height = document.getElementById("height").value;


let bmi = BMI(weight,height);
let desc = Status(bmi);

let div = document.getElementById("result");

div.innerText = bmi + " == " + desc;



}