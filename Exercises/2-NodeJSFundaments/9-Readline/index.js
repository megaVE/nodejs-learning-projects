const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Jaki jest twój ulubiony jezyk? ", (language) => {
    console.log(`Mój ulubiony jezyk to ${language}`)
    readline.close()
})