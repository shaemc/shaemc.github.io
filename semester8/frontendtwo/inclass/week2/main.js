/*
When page loads:
    output expense tables
    add event handler to our submit button

When enter button is clicked:
    get description, amount, and month
    add new expense to expenses
    calculate totals
    render expenses
*/

import {qs} from './utilities.js'; //./ is to look in the current folder

import ExpenseTracker from './expensetracker.js';

const janExpenses = new ExpenseTracker('#janOutput', 'January');

// window.addEventListener('load', ) //defers the load

// console.log(document.querySelector('#submit'));