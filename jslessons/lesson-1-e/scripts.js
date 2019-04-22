'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
     time = prompt('Введите дату в формате YYYY-MM-DD', '');
     
// console.log(money);

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let spending = prompt('Введите обязательную статью расходов в этом месяце', ''),
        cost = prompt('Во сколько обойдется?', '');

        appData.expenses[spending] = cost;

spending = prompt('Введите обязательную статью расходов в этом месяце', ''),
    cost = prompt('Во сколько обойдется?', '');

        appData.expenses[spending] = cost;
 

console.log(appData);

alert('Ващ бюджет на месяц: ' + money/30);



