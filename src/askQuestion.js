import readline from 'node:readline'

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Wrap `rl.question` in a promise
export default function askQuestion (query) {
  return new Promise((resolve) => {
    rl.question(query, resolve)
  })
}
