function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;



    // Convert height to meters
    Height = height / 100;

    // Calculate BMI
    var bmi = weight / (Height * Height);

    // Display BMI
    var res = document.getElementById("result")
    res.innerHTML = bmi;
    res.style.color = "yellow";
    res.style.fontSize ="12px"
    // res.style.body.marginTop ="12px"
    // using if condition

    if (bmi < 18.5) {
        document.getElementById("result").innerHTML = `Underweight: ${bmi}`
    } else if (bmi >= 18.5 && bmi < 24.9) {
        document.getElementById("result").innerHTML = `Normal weight: ${bmi}`
    } else if (bmi >= 25 && bmi < 29.9) {
        document.getElementById("result").innerHTML = `Overweight: ${bmi}`
    } else if (bmi >= 29.9) {
        document.getElementById("result").innerHTML = `Overweight above: ${bmi}`
    }
    else {
        alert(`please enter a valid inputs`)
    }
}
//   document.getElementById("calculate").addEventListener("click", calculateBMI);
