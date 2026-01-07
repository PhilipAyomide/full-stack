const questions = [
  {
    category: "jamb",
    question: "What is the full meaning of JAMB?",
    choices: [
      "Joint Admissions and Matriculation Board",
      "Joint Admission Matric Body",
      "Joining Administration Multiple Body",
      "None of the above"
    ],
    answer: 0
  },
  {
    category: "biology",
    question: "What is biology?",
    choices: [
      "The study of living organisms",
      "A type of chemical reaction",
      "Man and woman",
      "None of the above"
    ],
    answer: 0
  },
  {
    category: "physics",
    question: "Newton's law primarily describes which force?",
    choices: [
      "Beginning of wisdom",
      "What falls shall rise",
      "Gravity",
      "None of the above"
    ],
    answer: 2
  },
  {
    category: "chem",
    question: "What is titration?",
    choices: [
      "A technique to determine concentration",
      "Turning of chemical",
      "Mixture of chemical",
      "Individual calculation"
    ],
    answer: 0
  },
  {
    category: "agr",
    question: "Which of these is a soil type?",
    choices: [
      "Sandy soil",
      "Rock",
      "Rain",
      "Rice and beans"
    ],
    answer: 0
  }
];

function getRandomQuestion(questions) {
  return questions[Math.floor(Math.random() * questions.length)];
}

function getRandomComputerChoice(choices) {
  return Math.floor(Math.random() * choices.length); // returns an index
}

function getResults(question, choiceIndex) {
  if (choiceIndex === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.choices[question.answer]}`;
  }
}

// Example usage (smoke check):
// const q = getRandomQuestion(questions);
// const compIdx = getRandomComputerChoice(q.choices);
// console.log(q.question, q.choices[compIdx]);
// console.log(getResults(q, compIdx));


/*function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if(computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}
*/