const quizData = [
    {
        question: "Which company owns  AWS Certified Global Community?",
        a: "AWS",
        b: "Google",
        c: "Azure",
        d: "Oracle",
        correct: "a",
    },
    {
        question: "Who is the current CEO that company(2022)?",
        a: "Jeff Bezoz",
        b: "Andy Jassy",
        c: "Sundar Pichai",
        d: "Satya Nadella",
        correct: "b",
    },
    {
        question: "Which is not the above company's pillars?",
        a: "Reliability",
        b: "Sustainability",
        c: "Cost Optimization",
        d: "Scalability",
        correct: "d",
    },
    {
        question: "Which year was the company established?",
        a: "1996",
        b: "1998",
        c: "2006",
        d: "none of the above",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
