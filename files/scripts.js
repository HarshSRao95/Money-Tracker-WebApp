let expenses = [];
let totalamount = 0;
const category = document.getElementById('category');
const amount = document.getElementById('amount');
const info = document.getElementById('info');
const date = document.getElementById('date');
const addbtn = document.getElementById('addbtn');
const expensetablebody = document.getElementById('expense-table-body');
const balance = document.getElementById('total-amount');

addbtn.addEventListener('click', function () {
    const categoryValue = category.value;
    const infoValue = info.value;
    const amountValue = Number(amount.value);
    const dateValue = date.value;

    if (categoryValue === '') {
        alert('Please Select a Category!');
        return;
    }
    if (isNaN(amountValue) || amountValue <= 0) {
        alert("Please Enter a valid Amount!")
        return;
    }
    if (infoValue === '') {
        alert("Please Enter a valid info about the amount")
        return;
    }
    if (dateValue === '') {
        alert("Please choose a Date!")
        return;
    }
    expenses.push({ category: categoryValue, amount: amountValue, info: infoValue, date: dateValue });
    if (categoryValue === 'Income') {
        totalamount += amountValue;
    }
    else if (categoryValue === 'Expenses') {
        totalamount -= amountValue;
    }
    balance.textContent = totalamount;

    expensetablebody.innerHTML = "";
    for (const expense of expenses) {
        const newRow = expensetablebody.insertRow();
        const categorycell = newRow.insertCell();
        const amountcell = newRow.insertCell();
        const infocell = newRow.insertCell();
        const datecell = newRow.insertCell();
        const deletecell = newRow.insertCell();

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete Data';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function () {
            const expenseIndex = expenses.indexOf(expense);
            if (expenseIndex !== -1) {
                expenses.splice(expenseIndex, 1);
                if (expense.category === 'Income') {
                    totalamount -= expense.amount;
                } else if (expense.category === 'Expenses') {
                    totalamount += expense.amount;
                }
                balance.textContent = totalamount;
                expensetablebody.removeChild(newRow);
            }
        })

        categorycell.textContent = expense.category;
        amountcell.textContent = expense.amount;
        infocell.textContent = expense.info;
        datecell.textContent = expense.date;
        deletecell.appendChild(deleteBtn);
    }
});









// let expenses = []
// let totalamount = 0
// const category = document.getElementById('category')
// const amount = document.getElementById('amount')
// const info = document.getElementById('info')
// const date = document.getElementById('date')
// const addbtn = document.getElementById('addbtn')
// const expensetablebody = document.getElementById('expense-table-body')
// const balance = document.getElementById('total-amount')

// addbtn.addEventListener('click', function(){
//     const category = category.value;
//     const info = info.value;
//     const amount = Number(amount.value);
//     const date = date.value;

//     if (category === '') {
//         alert('Please Select a Category!')
//         return;
//     }
//     if (isNaN(amount) || amount <= 0) {
//         alert("Please Enter a valid Amount!")
//         return;
//     }
//     if (info === '') {
//         alert("Please Enter a valid info about the amount")
//         return;
//     }
//     if (date === '') {
//         alert("Please choose a Date!")
//         return;
//     }
//     expenses.push({category, amount, info, date})
//     if (category === 'Income') {
//         totalamount += amount;
//     }
//     if (category === 'Expenses') {
//         totalamount -= amount;
//     }
//     balance.textContent = totalamount;

//     const newRow = expensetablebody.insertRow();

//     const categorycell = newRow.insertCell();
//     const amountcell = newRow.insertCell();
//     const infocell = newRow.insertCell();
//     const datecell = newRow.insertCell();
//     const deletecell = newRow.insertCell();

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete Data';
//     deleteBtn.classList.add('delete-btn');
//     deleteBtn.addEventListener('click', function(){
//         expenses.splice(expenses.indexOf(expense), 1);
//         if (category === 'Income') {
//             totalamount -= amount;
//         }
//         if (category === 'Expenses') {
//             totalamount += amount;
//         }

//         balance.textContent = totalamount;
//         expensetablebody.removeChild(newRow)
//     })
//     const expense = expenses[expenses.length - 1];
//     categorycell.textContent = expense.category;
//     amountcell.textContent = expense.amount;
//     infocell.textContent = expense.info;
//     datecell.textContent = expense.date;
//     deletecell.appendChild(deleteBtn);

// for (const expense of expenses) {
//     if (category === 'Income') {
//         totalamount += amount;
//     }
//     if (category === 'Expenses') {
//         totalamount -= amount;
//     }
//     balance.textContent = totalamount;

//     const newRow = expensetablebody.insertRow();

//     const categorycell = newRow.insertCell();
//     const amountcell = newRow.insertCell();
//     const infocell = newRow.insertCell();
//     const datecell = newRow.insertCell();
//     const deletecell = newRow.insertCell();

//     const deleteBtn = document.createElement('button')
//     deleteBtn.textContent = 'Delete Data';
//     deleteBtn.classList.add('delete-btn');
//     deleteBtn.addEventListener('click', function(){
//         expenses.splice(expenses.indexOf(expense), 1);
//         if (category === 'Income') {
//             totalamount -= amount;
//         }
//         if (category === 'Expenses') {
//             totalamount += amount;
//         }
//         balance.textContent = totalamount;
//         expensetablebody.removeChild(newRow)
//     })
//     const expense = expenses[expenses.length - 1];
//     categorycell.textContent = expense.category;
//     amountcell.textContent = expense.amount;
//     infocell.textContent = expense.info;
//     datecell.textContent = expense.date;
//     deletecell.appendChild(deleteBtn);
// }
// });