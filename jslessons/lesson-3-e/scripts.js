'use strict';
let money,
    time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');  

    while(isNaN(money) || money =='' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');

    }
}
start();

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};
 
// 1 вариант цикла
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let spending = prompt('Введите обязательную статью расходов в этом месяце', ''),
                cost = +prompt('Во сколько обойдется?', '');
    
        if ((typeof(spending)) === 'string' && (typeof(spending)) != null && (typeof(cost)) != null && spending.length < 50 && spending != '' && cost != '') {
            console.log('vse OK!');
            appData.expenses[spending] = cost;        
        }
        else {
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.moneyData / 30).toFixed();
    alert('Ваш ежедневный бюджет составляет: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 5000) {
        console.log ('Ваш уровень достатка меньше среднего');
    } else if (appData.moneyPerDay > 5000 && appData.moneyPerDay < 10000) {
        console.log ('Ваш уровень достатка средний');
    } else if (appData.moneyPerDay > 10000) {
        console.log ('Ваш уровень достатка выше среднего!');
    } else {
        console.log ('Что-то пошло не так');
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент');
        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с  вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();

// function chooseOptExpenses() {
//     let i = 0;
//     while (i < 3) {
//         let consumptionCounter = i + 1;
//         let consumption = prompt('Статья необязательных расходов?');
//         appData.optionalExpenses[consumptionCounter] = consumption;
//         i++;
//     }
// }
// chooseOptExpenses();