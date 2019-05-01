let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    li5 = document.createElement('li'),
    body = document.querySelector('body'),
    title = document.querySelector('#title'),
    advertising = document.querySelector('.adv'),
    column = document.querySelectorAll('.column'),
    promptBlock = document.querySelector('#prompt');

    // Меняем местами 2 и 3 пункт меню
    menu.insertBefore(menuItem[2], menuItem[1]);
    // Добавляем 5 пункт в меню
    menu.appendChild(li5);
    // Добавляем ему класс
    li5.className = 'menu-item';
    // Добавляем название пункта меню
    li5.innerHTML = 'Пятый пункт';
    // Меняем фон
    body.style.backgroundImage = 'url(../img/apple_true.jpg)';
    // Меняем заголовок
    title.innerHTML = 'Мы продаем только подлинную технику Apple';
    // Удалить блок с рекламой
    column[1].removeChild(advertising);
    // Задаем вопрос польхзователю
    let ask = prompt('Как вы относитесь к яблокам?');
    // Выводим ответ пользователя в нужный блок
    promptBlock.innerHTML = ask;
