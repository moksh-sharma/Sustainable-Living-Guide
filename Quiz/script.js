

const questions = [
    {
        question: "What is sustainable development?",
        answers: [
            { text: "The development that meets the needs of the present without compromising the ability of future generations to meet their own needs.", correct: false },
            { text: "To conserve natural resources and to develop alternate sources of power while reducing pollution and harm to the environment.", correct: false },
            { text: "It is the practice of developing land and construction projects in a manner that reduces their impact on the environment by allowing them to create energy-efficient models of self-sufficiency.", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following is correct, if we only achieve two out of three pillars of Sustainable Development?",
        answers: [
            { text: "Social + Economic Sustainability = Equitable", correct: false },
            { text: "Social + Environmental Sustainability = Bearable", correct: false },
            { text: "Economic + Environmental Sustainability = Viable", correct: false },
            { text: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following is/are not an objective (s) of sustainable development?",
        answers: [
            { text: "Continue to implement the family planning program.", correct: false },
            { text: "Maintain a dynamic balance of arable land (not less than 123 million hectares) and implement an agricultural development strategy", correct: false },
            { text: "Maintain a dynamic balance of water resources by reducing water consumption for every unit of gross development product growth and agricultural value-added", correct: false },
            { text: "To bring about a gradual and sometimes catastrophic transformation of the environment", correct: true }
        ]
    },
    {
        question: "In which year the term ‘Sustainable Development’ came into existence?",
        answers: [
            { text: "1987", correct: false },
            { text: "1980", correct: true },
            { text: "1978", correct: false },
            { text: "1992", correct: false }
        ]
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result-container');
const tipsContainer = document.getElementById('tips-container'); // Added tips container in HTML

const tips = [
    "Great job! You have a solid understanding of Sustainability basics.",
    "Nice effort! Nice knowledge.",
    "Good start! Pay attention to details on Sustainable Living Guide."
];

function showQuestion(question) {
    questionContainer.textContent = question.question;
    answersContainer.innerHTML = '';
    question.answers.forEach(answer => {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = answer.text;
        input.dataset.correct = answer.correct;
        const label = document.createElement('label');
        label.textContent = answer.text;
        answerDiv.appendChild(input);
        answerDiv.appendChild(label);
        answersContainer.appendChild(answerDiv);
    });
}

function showResult() {
    resultContainer.textContent = `You scored ${score} out of ${questions.length}`;
    // Display personalized tip based on score
    if (score >= 2) {
        tipsContainer.textContent = tips[0]; // Display tip for high score
    } else if (score === 1) {
        tipsContainer.textContent = tips[1]; // Display tip for medium score
    } else {
        tipsContainer.textContent = tips[2]; // Display tip for low score
    }
}

submitBtn.addEventListener('click', () => {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        const isCorrect = selectedAnswer.dataset.correct === 'true';
        if (isCorrect) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(questions[currentQuestionIndex]);
        } else {
            showResult();
            submitBtn.disabled = true;
        }
    } else {
        alert('Please select an answer');
    }
});

showQuestion(questions[currentQuestionIndex]);
