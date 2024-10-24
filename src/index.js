/** write your main application code in this file and add files
 * as necessary to make your code structure more testable and
 * easy to understand
 *
 * Remove the code in this file when you have tested and got working:
 * - npm start
 * - docker build --no-cache -t bth-a1 . && docker run --rm -it bth-a1
 * */

import askQuestion from "./askQuestion.js"

async function run () {
  const answer = await askQuestion('Can you see this message? Then type "yes" and press Enter.')
  console.log("You entered: ", answer)
}

run()
