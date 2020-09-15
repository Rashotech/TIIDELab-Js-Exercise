function addition(num1,num2) {
    result = `Addition of ${num1} + ${num1} = ${num1 + num2}`
    alert(result)
}
function Subtraction(num1,num2) {
    result = `Subtraction of ${num1} - ${num1} = ${num1 - num2}`
    alert(result)
}
function Multiplication(num1,num2) {
    result = `Multiplication of ${num1} X ${num1} = ${num1 * num2}`
    alert(result)
}
function Division(num1,num2) {
    result = `Division of ${num1} / ${num1} = ${num1 / num2}`
    alert(result)
}
function operation () {
    num1 = Number(prompt("Enter First Number:"))
    num2 = Number(prompt ("Enter Second Number:"))
    option = prompt (` Simple Calculator \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division`)
    if (option == 1) {
        addition(num1,num2)
        confirmation();
    } else if (option == 2) {
        Subtraction(num1,num2)
        confirmation();
    } else if (option == 3) {
        Multiplication(num1,num2)
        confirmation();
    } else if (option == 4) {
        Division(num1,num2)
        confirmation();
    } else {
        alert("Invalid input")
        operation ();
    }
}
function confirmation() {
    if (confirm(`Do you want to perform another operation?`)) {
        operation ()
        } else {
                alert("Thanks for using this calculator")
        }
}