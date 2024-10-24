/** write your main application code in this file and add files
 * as necessary to make your code structure more testable and
 * easy to understand */

import askQuestion from "./askQuestion"

const answer = askQuestion('Can you see this message? Then type "yes" and press Enter.')
console.log("You entered: ", answer)
