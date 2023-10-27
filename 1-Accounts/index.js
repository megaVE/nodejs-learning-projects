    // External Modules
const chalk = require('chalk')
const inquirer = require('inquirer')

    // Internal Modules
const fs = require('fs')

function operation(){
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'What do you want to do?',
        choices: [
            'Create Account',
            'Check Ballance',
            'Deposit',
            'Withdraw',
            'Exit',
        ],
    }])
    .then((answer) => {
        const action = answer['action']

        if(action === 'Create Account'){
            createAccount();
        } else if(action === 'Check Ballance'){

        } else if(action === 'Deposit'){
            deposit();
        } else if(action === 'Withdraw'){

        } else if(actions === 'Exit') {
            console.log(chalk.bgBlue.black("Thank you for using Accounts on App!"));
            process.exit();
        } else {
            console.log("Shutting Down...");
        }
    })
    .catch(err => console.log(err))
}

operation()

function buildAccont(){
    inquirer.prompt([{
        name: 'accountName',
        message: "Create a name for your account: "
    }])
    .then(answer => {
        const accountName = answer['accountName'] 
        
        console.info(accountName)

            // Creating a folder for the accounts
        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts');
        }
            // Checking if an account with the same name already exists
        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black("This name was already choosen, try another one!"));
            buildAccont();
            return;
        }

        fs.writeFileSync(`accounts/${accountName}.json`,
            '{"ballance": 0}',
            function(err) {
                console.log(err);
            },
        )

        console.log(chalk.green("Congratulations, your account was created!"));
        operation();
    })
    .catch(err => console.log(err))
}

function createAccount(){
    console.log(chalk.bgGreen.black("Thank you for choosing our bank!"));
    console.log(chalk.green("Define your account's properties:"));
    buildAccont();
}

function checkAccount(accountName){
    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black("This account does not exist!"));
        return false;
    }
    else{
        return true;
    }
}

function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r',
    })

    return JSON.parse(accountJSON);
}

function addAmount(accountName, amount){
    const accountData = getAccount(accountName);

    if(!amount){
        console.log(chalk.bgRed.black("An error occurred, try again later!"));
        return deposit();
    }

    accountData.ballance = parseFloat(amount) + parseFloat(accountData.ballance);

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        (err) => {console.log(err)},
    )

    console.log(chalk.green(`The amount of ${amount}$ was added to your account!`))
}

function deposit(){
    inquirer.prompt([{
        name: 'accountName',
        message: "What is the name of your account? ",
    }])
    .then((answer) => {
        const accountName = answer['accountName']
        if(!checkAccount(accountName)){
            return deposit();
        }

        inquirer.prompt([{
            name: 'amount',
            message: "How much do you wish to deposit? ",
        },
        ])
        .then((answer) => {
            const amount = answer['amount'];

            addAmount(accountName, amount);

            operation()
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

