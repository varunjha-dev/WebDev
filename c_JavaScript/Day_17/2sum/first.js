// ✅ Adding Click Event Listener to Button
const button = document.querySelector('button');

button.addEventListener('click',  () => {
    
    // 📌 Step 1: Read Input Values
    const input1 = document.getElementById('first');
    const num1 = Number(input1.value); // Convert input to a number
    
    const input2 = document.getElementById('second');
    const num2 = Number(input2.value); // Convert input to a number
    
    // 🔴 Why Conversion?
    // - The input values are **strings** by default.
    // - We use `Number()` to ensure calculations work correctly.

    // 🚨 Step 2: Validate Inputs
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers'); // Show error if inputs are invalid
        return; // Stop further execution
    }

    // ⚡ Step 3: Perform Calculation
    const result = num1 + num2;

    // 📌 Step 4: Display the Result
    const output = document.getElementById('result');
    output.textContent = `Result: ${result}`; // Update result text
});


// 📝 To-Do: Implement the following calculators
// ✅ BMI Calculator
// ✅ Dowry (Dahej) Calculator (meme project)
// ✅ Alimony Calculator (meme project)
