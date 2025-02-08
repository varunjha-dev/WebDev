// const originalAns = ["Sachin Tendulkar", "West Indies", "Sachin Tendulkar", "264", "Muttiah Muralitharan"];
// ✅ Storing correct answers in an object for easy lookup
const originalAns = {
    q1: "Sachin Tendulkar", 
    q2: "West Indies", 
    q3: "Sachin Tendulkar", 
    q4: "264", 
    q5: "Muttiah Muralitharan"
 };
 
 // ✅ Selecting the form element
 const form = document.querySelector('form');
 
 form.addEventListener('submit', (event) => {
    event.preventDefault(); // 🔹 Prevents page from refreshing on form submission
 
    const data = new FormData(form); // 🔹 Captures form input as key-value pairs
 
    
   // const answer = Array.from(data.values());
   // console.log(answer);
   
   // let result = 0;
   // for(let i=0;i<answer.length;i++)
   // {
   //    if(answer[i] === originalAns[i])
   //       result++;
   // }

    let result = 0; // 🔹 Score counter
 
    // 🔹 Comparing user answers with correct answers
    for (let [key, value] of data.entries()) {
       if (value === originalAns[key]) result++;
    }
 
    console.log(`Score: ${result}`);
 
    // 🔹 Displaying the result on the page
    const output = document.getElementById('result');
    output.innerText = `${result} out of 5 is Correct`;
 });
 
 /*  
 🔹 Homework: Make the Quiz Dynamic  
 --------------------------------------------------
 👉 **Enhancement 1:**  
    - Store a set of **100 questions**.
    - Randomly select **5 questions** each time the quiz is loaded.  
 
 👉 **Enhancement 2:**  
    - Store questions & answers dynamically in an **array of objects**.
    - Display **randomized questions** dynamically in the form.
 */
 
   //  Homework in day 20 folder