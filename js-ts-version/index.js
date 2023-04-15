const readline = require("readline")
const storage = require("node-persist") // https://www.npmjs.com/package/node-persist
const { read } = require("fs")

const QUESTIONS = {
  1: "Can you code in Ruby?",
  2: "Can you code in JavaScript?",
  3: "Can you code in Swift?",
  4: "Can you code in Java?",
  5: "Can you code in C#?",
}

const READLINE = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

async function askQuestion(questionText) {
  return new Promise((resolve) =>
    READLINE.question(questionText, (ans) => {
      READLINE.close()
      resolve(ans)
    }),
  )
}

// TODO: Fully implement this function
async function doPrompt() {

    console.log(await askQuestion("h"))

  
}

// TODO: Fully implement this function
function doReport() {
  // TODO: implement this function
}

doPrompt()
doReport()
READLINE.close()
