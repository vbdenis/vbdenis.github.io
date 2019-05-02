'use strict';

let startCalculation = document.querySelector('#start'),
    budgetVal = document.querySelector('.budget-value'),
    dayBudgetVal = document.querySelector('.daybudget-value'),
    levelVal = document.querySelector('.level-value'),
    expensesVal = document.querySelector('.expenses-value'),
    optionalVal = document.querySelector('.optionalexpenses-value'),
    incomeVal = document.querySelector('.income-value'),
    monthsavingsVal = document.querySelector('.monthsavings-value'),
    yearsavingsVal = document.querySelector('.yearsavings-value'),
    optionalexpensesInput = document.querySelectorAll('.expenses-item'),
    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    income = document.querySelector('.choose-income'),
    savings = document.querySelector('#savings'),
    sumVal = document.querySelector('.choose-sum'),
    percentVal = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');

    expensesItemBtn.setAttribute('disabled', '');
    optionalExpensesBtn.setAttribute('disabled', '');
    countBudgetBtn.setAttribute('disabled', '');

let money, time;

startCalculation.addEventListener('click', function() {
    expensesItemBtn.removeAttribute('disabled');
    optionalExpensesBtn.removeAttribute('disabled');
    countBudgetBtn.removeAttribute('disabled');
    time = prompt(' Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money== '' || money == null) {
        money = prompt('Ваш бюджет?', '');
    }
    appData.moneyData = money;
    appData.timeData = time;
    budgetVal.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
});



optionalexpensesInput.forEach(function(item) {
    item.addEventListener('change', function() {
        if (item.value == '') {
            console.log('pusto');
        } else {
            console.log('zapolneno');
            expensesItemBtn.removeAttribute('disabled');
            // optionalExpensesBtn.disabled = false;

        }
    });
});

expensesItemBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < optionalexpensesInput.length; i++) {
        let spending = optionalexpensesInput[i].value,
                cost = optionalexpensesInput[++i].value;
    
        if ((typeof(spending)) === 'string' && (typeof(spending)) != null && (typeof(cost)) != null && spending.length < 50 && spending != '' && cost != '') {
            console.log('vse OK!');
            appData.expenses[spending] = cost;      
            sum += +cost; 
        }
        else {
            i--;
        }
    }
    expensesVal.textContent = sum;
});

optionalExpensesItem.forEach(function(item) {
    item.addEventListener('change', function() {
        if (item.value == '') {
            console.log('pusto');
        } else {
            console.log('zapolneno');
            optionalExpensesBtn.removeAttribute('disabled');
            // optionalExpensesBtn.disabled = false;

        }
    });
});

optionalExpensesBtn.addEventListener('click', function(){
    let i = 0;
    while (i < optionalExpensesItem.length) {
        let consumptionCounter = i + 1;
        let consumption = optionalExpensesItem[i].value;
        appData.optionalExpenses[consumptionCounter] = consumption;
        optionalVal.textContent += appData.optionalExpenses[consumptionCounter] + ' ';
        i++;
    } 
});

countBudgetBtn.addEventListener('click', function(){
    appData.moneyData = +(appData.moneyData - expensesVal.textContent);
    if(appData.moneyData != undefined) {
        appData.moneyPerDay = (appData.moneyData / 30).toFixed();
        // appData.moneyPerDay = ((appData.moneyData - expensesVal.value) / 30).toFixed();
        dayBudgetVal.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 5000) {
            levelVal.textContent = 'Ваш уровень достатка меньше среднего';
        } else if (appData.moneyPerDay > 5000 && appData.moneyPerDay < 10000) {
            levelVal.textContent = 'Ваш уровень достатка средний';
        } else if (appData.moneyPerDay > 10000) {
            levelVal.textContent = 'Ваш уровень достатка выше среднего!';
        } else {
            levelVal.textContent = 'Что-то пошло не так';
        }
    } else {
        dayBudgetVal.textContent = 'Произошла ошибка';
    }
});

income.addEventListener('input', function() {
    let items = income.value;
    appData.income = items.split(', ');
    incomeVal.textContent = appData.income;
});

savings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumVal.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumVal.value, 
            percent = +percentVal.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsVal.textContent = appData.monthIncome.toFixed(1);
        yearsavingsVal.textContent = appData.yearIncome.toFixed(1);
    }
});
percentVal.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumVal.value, 
            percent = +percentVal.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthsavingsVal.textContent = appData.monthIncome.toFixed(1);
        yearsavingsVal.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let test = dayBudgetVal - expensesVal / 30;