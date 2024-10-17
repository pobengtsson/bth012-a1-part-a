import readline from 'node:readline'

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Wrap `rl.question` in a promise
function askQuestion (query) {
  return new Promise((resolve) => {
    rl.question(query, resolve)
  })
}

// Using async/await to get input
async function main () {
  const name = await askQuestion('What is your name? ')
  console.log(`Hello, ${name}!`)

  const age = await askQuestion('How old are you? ')
  console.log(`You are ${age} years old!`)

  rl.close()
}

main()
