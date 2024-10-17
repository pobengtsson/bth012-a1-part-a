/** write your main application code in this file and add files
 * as necessary to make your code structure more testable and
 * easy to understand */

import askQuestion from "./askQuestion.js"

export function kalle () {
  return 1
}

const q1 = await askQuestion('Whats the answer to the first question?')
console.log(`Your answer was ${q1}`)

process.exit()
