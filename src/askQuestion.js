import readline from 'node:readline'

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Wrap `rl.question` in a promise
export function askQuestion (query) {
  return new Promise((resolve) => {
    rl.question(query, resolve)
  })
}

/** Call this function when you don't need to ask more questions.
 * It will close the readline interface and allow the process to end.
 */
export function noMoreQuestions () {
  rl.close()
}
