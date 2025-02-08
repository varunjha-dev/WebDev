// ✅ Storing quiz questions as objects in an array
const quizQuestions = [
    {
       question: "Who has the most centuries in international cricket?",
       options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
       answer: "Sachin Tendulkar"
    },
    {
       question: "Who won the first ICC Cricket World Cup?",
       options: ["West Indies", "Australia", "India", "England"],
       answer: "West Indies"
    },
    {
       question: "Who is the highest wicket-taker in Test cricket?",
       options: ["Shane Warne", "Muttiah Muralitharan", "Anil Kumble", "James Anderson"],
       answer: "Muttiah Muralitharan"
    },
    {
       question: "Which cricketer is known as 'The Wall'?",
       options: ["Rahul Dravid", "Sachin Tendulkar", "Brian Lara", "Jacques Kallis"],
       answer: "Rahul Dravid"
    },
    {
       question: "Who has the highest individual score in a Test innings?",
       options: ["Brian Lara", "Matthew Hayden", "Virender Sehwag", "Don Bradman"],
       answer: "Brian Lara"
    },
    {
       question: "Which country has won the most ICC T20 World Cups?",
       options: ["India", "West Indies", "Australia", "Pakistan"],
       answer: "West Indies"
    },
    {
       question: "Who is the fastest bowler in cricket history?",
       options: ["Shoaib Akhtar", "Brett Lee", "Jeff Thomson", "Mitchell Starc"],
       answer: "Shoaib Akhtar"
    },
    {
       question: "Who has the most runs in a single ODI innings?",
       options: ["Rohit Sharma", "Martin Guptill", "Chris Gayle", "Virender Sehwag"],
       answer: "Rohit Sharma"
    },
    {
       question: "Which cricketer has the most sixes in international cricket?",
       options: ["Chris Gayle", "Shahid Afridi", "Rohit Sharma", "Brendon McCullum"],
       answer: "Chris Gayle"
    },
    {
       question: "Who has the best bowling figures in an ODI match?",
       options: ["Chaminda Vaas", "Glenn McGrath", "Muttiah Muralitharan", "Anil Kumble"],
       answer: "Chaminda Vaas"
    }
 ];
 
 /*  
 🔹 Function: `randomQuestion()`
 --------------------------------------------------
 ✅ Selects 5 random unique questions from `quizQuestions`
 ✅ Uses Fisher-Yates algorithm (O(n) complexity)
 ✅ Most optimized approach (Rohit Bhaiya Algorithm) in worst case
 */
 function randomQuestion() {
   //     const data = new Set();
// use set for unique object

//     while(data.size!=5){
//         const index = Math.floor(Math.random()*20);
//         data.add(questionBank[index]);
//     }
    
    // convert set into array
//     return [...data];
// optimize the above code
    // sort function :- it doees not behave like normal sort function, it compares two values in the form of string
    // randomly sort krenge isko hamlog
   //  quizQuestions.sort(()=> Math.random() - 0.5); // nlogn 
   //  return quizQuestions.slice(0,5);
    // its tc is worst than the set 
    const arr = [];
    let length = quizQuestions.length;
 
    for (let i = 0; i < 5; i++) {
       const index = Math.floor(Math.random() * length);
       arr.push(quizQuestions[index]);
 
       // 🔹 Swap selected question with the last unselected question
       [quizQuestions[index], quizQuestions[length - 1]] = [quizQuestions[length - 1], quizQuestions[index]];
       length--;
    }
    return arr;
 }
 
 /*  
 🔹 Form Generation: Displaying Quiz Questions & Options 
 --------------------------------------------------
 ✅ Dynamically inserts selected questions into the form
 ✅ Stores correct answers in an object for easy comparison
 */
 const form = document.querySelector('form');
 const selectedQuestions = randomQuestion();
 const originalAns = {}; // Stores key-value pairs of questions and answers
 
 // 🔹 Creating quiz structure dynamically
 selectedQuestions.forEach((obj, index) => {
    const div_element = document.createElement('div');
    div_element.setAttribute('class', 'question');
 
    // 🔹 Storing correct answer for this question
    originalAns[`q${index + 1}`] = obj.answer;
 
    // 🔹 Creating question text
    const para = document.createElement('p');
    para.textContent = `${index + 1}. ${obj.question}`;
    div_element.appendChild(para);
 
    // 🔹 Creating 4 options (radio buttons)
    obj.options.forEach((option) => {
       const label = document.createElement('label');
       const input = document.createElement('input');
       input.type = "radio";
       input.name = `q${index + 1}`; // Ensures one option per question
       input.value = option;
       label.appendChild(input);
       label.appendChild(document.createTextNode(option));
       div_element.appendChild(label);
       div_element.appendChild(document.createElement('br'));
    });
 
    form.appendChild(div_element);
 });
 
 // 🔹 Submit button
 const button = document.createElement('button');
 button.type = 'submit';
 button.setAttribute('class', 'submit-btn');
 button.textContent = "Submit";
 form.appendChild(button);
 
 /*  
 🔹 Form Submission: Evaluating Quiz 
 --------------------------------------------------
 ✅ Compares user-selected answers with correct answers
 ✅ Displays the final score
 */
 form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevents page reload
 
    const data = new FormData(form); // Retrieves selected options
    let result = 0;
 
    for (let key of data.keys()) { // Loop through submitted answers
       if (data.get(key) === originalAns[key]) { // Compare with correct answers
          result++;
       }
    }
 
    // 🔹 Display the result
    const output = document.createElement('div');
    output.setAttribute('class', 'result');
    output.textContent = `${result} out of 5 is Correct`;
    form.appendChild(output);
 });
 
 /*  
 🔹 Enhancement Ideas: Make the Quiz Even Better!
 --------------------------------------------------
 👉 **Enhancement 1:**  
    - Store **100+ questions** in `quizQuestions`
    - Randomly select **5 unique questions** each time
 
 👉 **Enhancement 2:**  
    - Display questions dynamically using **DOM manipulation**
    - Add a **Reset button** to retake the quiz
 
 👉 **Enhancement 3:**  
    - Use **LocalStorage** to track quiz history
    - Show **correct & wrong answers** after submission
 */
 