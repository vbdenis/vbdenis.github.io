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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.moneyData / 30).toFixed();
        alert('Ваш ежедневный бюджет составляет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 5000) {
            console.log ('Ваш уровень достатка меньше среднего');
        } else if (appData.moneyPerDay > 5000 && appData.moneyPerDay < 10000) {
            console.log ('Ваш уровень достатка средний');
        } else if (appData.moneyPerDay > 10000) {
            console.log ('Ваш уровень достатка выше среднего!');
        } else {
            console.log ('Что-то пошло не так');
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент');
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с  вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        let i = 0;
        while (i < 3) {
            let consumptionCounter = i + 1;
            let consumption = prompt('Статья необязательных расходов?');
            appData.optionalExpenses[consumptionCounter] = consumption;
            i++;
        } 
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
            let itemAdd = prompt('Может что-то еще?', '');
            if ((typeof(items)) === 'string' && items != '' && typeof(items) != null && (typeof(itemAdd)) === 'string' && itemAdd != '' && typeof(itemAdd) != null) {
                appData.income = items.split(', ');
                appData.income.push(itemAdd);
                appData.income.sort();
            } else {
                i--;
            } 
        }

        appData.income.forEach(function(item, num, mass) {
            alert('Способы дополнительного заработка: ' + (num + 1) + ': ' + item);
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key);
}