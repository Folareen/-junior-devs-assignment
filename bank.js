let USERS = [];

class User{
    constructor(){
        this.name;
        this.email;
        this.password;
        this.accountNumber;
        this.balance;
    }

    register(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
        this.accountNumber = new Date().getTime().toString();
        USERS.push(this);
        console.log("Registered!")
    }

    deposit(amount){
        this.balance = balance + amount;
        console.log(`Your account has been credited with ${amount}, your balance is ${this.balance}`);
    }

    login(email, password){
        let currentUser = (
            (USERS.find(
            (user) =>{
                return user.email = email;
            }
        )) == (
            USERS.find(
            (user) =>{
                return user.password = password;
            }
        ))
        ) ? (USERS[
            (USERS.findIndex(
            (user) =>{
                return user.email = email;
            }
        ))]
        ) : (
            null
        )

        console.log(currentUser ? `Welcome back, ${currentUser.name}` : "incorrect details")

    }

    withdraw(amount){
        this.balance = balance - amount;
        console.log(`Your account has been debited with ${amount}, your balance is ${this.balance}`)
    }
}

class Bank extends User{
    constructor(){
        super()
    }

    deleteUser(accountNumber){
        USERS = USERS.filter(
            (user) => {
                return user.accountNumber !== accountNumber
            }
        )
        console.log(`user "${accountNumber}" deleted!`)
    }

    editUser(accountNumber){
        console.log(`Edit user ${USERS[(
            USERS.findIndex(
                (user) => {
                    return user.accountNumber == accountNumber;
                }
            )            
        )
        ].name}`
        )
    }
}