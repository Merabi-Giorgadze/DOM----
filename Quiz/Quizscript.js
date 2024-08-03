const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const scoreContainer = document.getElementById('score-container')

let shuffledQuestions, currentQuestionIndex, score

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .6)
  currentQuestionIndex = 0
  score = 0
  scoreContainer.innerText = `Score: ${score}`
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if (correct) {
    score++
    scoreContainer.innerText = `Score: ${score}`
  }
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    scoreContainer.innerText = `Final Score: ${score}`
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'The capital of Ukraine?',
    answers: [
      { text: 'Kiev', correct: true },
      { text: 'Dnieper', correct: false },
      { text: 'kharagauli', correct: false },
      { text: 'zerti', correct: false }
    ]
  },
  {
    question: 'Which country is capital is Bern?',
    answers: [
      { text: 'Sweden', correct: false },
      { text: 'Switzerland', correct:  true },
      { text: 'Belgium', correct: false },
      { text: 'Romania', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answers: [
      { text: '6', correct: false },
      { text: '10', correct: false },
      { text: '3', correct: false },      
      { text: '8', correct: true }
    ]
  },
  {
    question: 'What is 24 / 8?',
    answers: [
      { text: '6', correct: false },
      { text: '4', correct: true },
      { text: '10', correct: false },
      { text: '3', correct: false }
    ]
  },
  {
    question: 'The smallest state in the world',
    answers: [
      { text: 'Tuvalu', correct: false },
      { text: 'The Vatican', correct: true },
      { text: 'Liechtenstein', correct: false },
      { text: 'Moldova', correct: false }
    ]
  },
  {
    question: 'Is web development fun?',
    answers: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  }
]