
// if (num < 49) {
// 	console.log('Neverno')
// } else if (num > 100) {
// 	console.log('Mnogovato!')
// } else {
// 	console.log('Verno!')
// };


// (num == 50) ? console.log('Verno') : console.log('Neverno');


// switch (num) {
// 	case num > 50: 
// 		console.log('Neverno');
// 		break;
// 	case num < 50:
// 		console.log('Verno');
// 		break;
// 	case num:
// 		console.log('Verno');
// 		break;
// 	case num > 100:
// 		console.log('Mnogo');
// 		break;
// 	default: 
// 		console.log('Choto-to poshlo ne tak');
// 		break;
// }		

// let num = 50;

// while (num <= 55) {
// 	console.log(num);
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 60);

// for (let i = 1; i < 20; i++) {
// 	if (i == 5) {
// 		continue;
// 	}
// 	console.log(i);
// }



'use strict';

let money = +prompt('Ваш бюджет на месяц?', ''),
     time = prompt('Введите дату в формате YYYY-MM-DD', '');
     

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
 
// 1 вариант цикла
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
};


// 2 вариант цикла
do {
    console.log('vse OK!');
    appData.expenses[spending] = cost;  
}
while 





appData.moneyPerDay = appData.moneyData / 30;

alert('Ваш ежедневный бюджет составляет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 5000) {
    console.log ('Ваш уровень достатка меньше среднего');
} else if (appData.moneyPerDay > 5000 && appData.moneyPerDay < 10000) {
    console.log ('Ваш уровень достатка средний');
} else if (appData.moneyPerDay > 10000) {
    console.log ('Ваш уровень достатка выше среднего!');
} else {
    console.log ('Что-то пошло не так');
}
