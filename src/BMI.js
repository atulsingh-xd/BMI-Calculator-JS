document.addEventListener("DOMContentLoaded", function () {
  // Get the calculate button and result element from the DOM
  const calculateBtn = document.getElementById("calculate-btn");
  const resultElement = document.getElementById("result");

  // Add a click event listener to the calculate button
  calculateBtn.addEventListener("click", function () {
    // Get the weight and height input values from the user
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);

    // Validate input: Ensure weight and height are positive numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      resultElement.innerHTML = "⚠️ Please enter valid weight and height!";
      resultElement.className = "error"; // Apply error styling
      return; // Exit the function if input is invalid
    }

    // BMI Calculation: BMI = weight (kg) / (height (m) * height (m))
    let bmi = weight / (height * height);
    let category = ""; // Variable to store BMI category

    // Determine BMI category and apply corresponding styling
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

    // Display the calculated BMI and category in the result element
    resultElement.innerHTML = `Your BMI is <strong>${bmi.toFixed(
      2
    )}</strong> (<span>${category}</span>)`;
  });
});
