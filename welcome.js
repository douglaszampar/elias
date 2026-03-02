let topics = [

{
title:"Tell me about your vacations",
questions:[
{
correct:"What did you do during your vacation ?",
words:["you","did","during","What","vacation","your","?","do","homework"]
},
{
correct:"Did you travel with your family ?",
words:["travel","your","you","Did","with","family","?","friends"]
},
{
correct:"What was the best moment of your trip ?",
words:["was","moment","trip","your","the","What","best","of","boring"]
}
]
},

{
title:"Inspirations and Aspirations for 2026",
questions:[
{
correct:"What do you want to improve this year ?",
words:["improve","you","this","What","year","want","to","do","yesterday"]
},
{
correct:"Who inspires you the most ?",
words:["inspires","you","Who","most","the","money","?"]
},
{
correct:"What is one big dream for 2026 ?",
words:["big","one","What","2026","is","dream","for","small","?"]
}
]
},

{
title:"Something new I learned",
questions:[
{
correct:"What new skill did you learn recently ?",
words:["new","you","did","learn","recently","What","skill","pizza","?"]
},
{
correct:"Was it difficult or easy ?",
words:["Was","it","or","easy","difficult","happy","?"]
},
{
correct:"Why did you decide to learn it ?",
words:["did","Why","learn","it","decide","to","you","sleep","?"]
}
]
},

{
title:"A challenge I overcame",
questions:[
{
correct:"What was a difficult situation for you ?",
words:["was","a","situation","difficult","for","you","What","easy","?"]
},
{
correct:"How did you solve the problem ?",
words:["solve","did","problem","you","How","the","ignore","?"]
},
{
correct:"What did you learn from this experience ?",
words:["did","learn","experience","this","What","from","you","nothing","?"]
}
]
},

{
title:"One goal for this semester",
questions:[
{
correct:"What is one goal for this semester ?",
words:["goal","is","this","one","What","for","semester","last","?"]
},
{
correct:"Why is this goal important to you ?",
words:["important","goal","Why","you","is","to","this","not","?"]
},
{
correct:"How can you achieve this goal ?",
words:["you","this","goal","How","can","achieve","forget","?"]
}
]
}

];

let currentTopic = 0;
let currentQuestion = 0;

function startTopic(index){
currentTopic = index;
currentQuestion = 0;
document.getElementById("topics").style.display="none";
document.getElementById("activity").style.display="block";
document.getElementById("activityTitle").innerText = topics[index].title;
loadQuestion();
}

function loadQuestion(){
let q = topics[currentTopic].questions[currentQuestion];

let wordsHTML="";
q.words.sort(()=>Math.random()-0.5);

q.words.forEach(word=>{
wordsHTML += `<div class="word" onclick="addWord('${word}')">${word}</div>`;
});

document.getElementById("exercise").innerHTML = `
<div class="questionBox">Organize the words:</div>
<div id="answer" class="answerArea"></div>
<div>${wordsHTML}</div>
<button class="mainButton" onclick="checkAnswer()">Check</button>
`;
}

function addWord(word){
document.getElementById("answer").innerHTML += word + " ";
}

function checkAnswer(){
let userAnswer = document.getElementById("answer").innerText.trim();
let correct = topics[currentTopic].questions[currentQuestion].correct;

if(userAnswer === correct){
document.getElementById("exercise").innerHTML = `
<div class="correct">Great! Now answer:</div>
<div class="questionBox">${correct}</div>
<button class="mainButton" onclick="nextQuestion()">Next</button>
`;
}else{
alert("Try again!");
}
}

function nextQuestion(){
currentQuestion++;
if(currentQuestion < 3){
loadQuestion();
}else{
loadChallenge();
}
}

function loadChallenge(){
document.getElementById("exercise").innerHTML = `
<div class="correct">FINAL CHALLENGE</div>
<div class="questionBox">
Now ask me a difficult question about this topic.<br>
Try to make me think!
</div>
`;
}
