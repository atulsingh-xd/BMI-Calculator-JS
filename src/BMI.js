document.addEventListener("DOMContentLoaded", function () {
  const calculateBtn = document.getElementById("calculate-btn");
  const resultElement = document.getElementById("result");

  calculateBtn.addEventListener("click", function () {
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    // Validate input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultElement.innerHTML = "⚠️ Please enter valid weight and height!";
      resultElement.className = "error";
      return;
    }

    // BMI Calculation
    let bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
      resultElement.className = "underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
      resultElement.className = "normal";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
      resultElement.className = "overweight";
    } else {
      category = "Obese";
      resultElement.className = "obese";
    }

    // Display the result
    resultElement.innerHTML = `Your BMI is <strong>${bmi.toFixed(
      2
    )}</strong> (<span>${category}</span>)`;
  });
});
