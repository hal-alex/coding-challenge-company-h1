const { data } = require("node-persist")
const readline = require("readline")

const QUESTIONS = {
  1: "Can you code in Ruby?",
  2: "Can you code in JavaScript?",
  3: "Can you code in Swift?",
  4: "Can you code in Java?",
  5: "Can you code in C#?",
}

// Array with just the keys of the QUESTIONS object
const questionKeys = Object.keys(QUESTIONS)

// This function asks the questions and waits for the input
function readInput(question) {
  const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise((resolve) =>
    interface.question(question, (answer) => {
      interface.close()
      resolve(answer)
    }),
  )
}

const positiveAns = []

// This for async anon function loops through the QUESTIONS object
// and passed the question text to the readInput function
;(async () => {
  for (let index = 1; index <= questionKeys.length; index++) {
    const questionText = QUESTIONS[index]
    const userInput = await readInput(questionText)
    if (userInput.toLowerCase() === "y" || userInput.toLowerCase() === "yes") {
      positiveAns.push(userInput)
    }
  }
  console.log(
    "This is the final output: ",
    (positiveAns.length / questionKeys.length) * 100,
    "%",
  )
})()
