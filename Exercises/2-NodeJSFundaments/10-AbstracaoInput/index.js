const inquirer = require("inquirer")

inquirer.prompt([{
    name: 'p1',
    message: 'Jaka jest pierwsza ocena?',
},{
    name:'p2',
    message: 'Jaka jest druga ocena?',
}
]).then((answers) => {
    console.log(answers)
    const mean = (parseInt(answers.p1) + parseInt(answers.p2)) / 2

    console.log(`Ostateczny wynik: ${mean}`)
})
.catch(err =>
    console.log(err)
)