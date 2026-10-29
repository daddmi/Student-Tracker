const bal = document.getElementById("balance")
const income = document.getElementById("income")
const expenses = document.getElementById("expenses")

const form = document.getElementById("form")
const des = document.getElementById("description")
const amount = document.getElementById("amount")
const type = document.getElementById("type")
const transact = document.getElementById("transactions")
const transactions = [];

function updateTotals() {
    let totalIncome = 0;
    let totalExpenses = 0;

    for (const item of transactions) {
        if (item.type === "income") {
            totalIncome += item.amount;
        } else {
            totalExpenses += item.amount;
        }
    }

    income.textContent = `₦${totalIncome.toLocaleString()}`
    expenses.textContent = `₦${totalExpenses.toLocaleString()}`
    bal.textContent = `₦${(totalIncome - totalExpenses).toLocaleString()}`
}



form.addEventListener("submit", function(event){
    event.preventDefault();

    console.log(des.value)
    console.log(amount.value)
    console.log(type.value)

    const newData = {
        description : des.value,
        amount : Number(amount.value),
        type : type.value,
        date: new Date().toLocaleDateString()
    };
    transactions.push(newData);
    updateTotals()
    if (transactions.length === 1){
        transact.innerHTML = "";
    }

    const newTransaction = document.createElement("li")
    newTransaction.textContent = `${des.value} - ₦${amount.value} - ${type.value} - ${newData.date}`
    transact.appendChild(newTransaction)
    form.reset();
})

