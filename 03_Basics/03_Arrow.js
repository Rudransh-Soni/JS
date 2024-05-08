const user = {
    username: "rudransh",
    price: 999,
                    // "THIS" refers to current context.

    welcomemessage: function(){
        console.log(`${this.username}, welocme to website`);    // here we can call a variable with 'this' function
        // console.log(this);   // using this it will every context(values) of the function/user.
    }

}
// user.welcomemessage()
// user.username = "Soni"
// user.welcomemessage()

console.log(this);      // if we using 'this' method here then it will print {} means EMPTY. bcz no global scope is ther.
