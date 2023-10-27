const args = process.argv.slice(2)

console.log(args)

const imie = args[0].split('=')[1]

const wiek = args[1].split('=')[1]

console.log(`Jego(Jej) imię to ${imie} i ma już ${wiek} lat(a)!`)