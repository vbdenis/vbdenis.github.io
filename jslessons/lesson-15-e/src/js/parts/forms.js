const forms = ()=> {
    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так!'
    };

    let form = document.querySelector('.main-form'),
        formBottom = document.getElementById('form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function(event) {
            event.preventDefault();
            elem.appendChild(statusMessage);
            let formDate = new FormData(elem);            
            
            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
                    
                    let obj = {};
                    formDate.forEach(function(value, key) {
                        obj[key] = value;
                    });
                    
                    let data = JSON.stringify(obj);
                    // request.send(json);

                    request.addEventListener('readystatechange', ()=> {
                        if (request.readyState < 4) {
                            resolve()
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve()                            
                        } else {
                            reject()
                        }
                    })
                    request.send(data);
                }
            )};

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }

            }

            postData(formDate)
                .then(()=> statusMessage.innerHTML = message.loading)
                .then(()=> statusMessage.innerHTML = message.success)
                .catch(()=> statusMessage.innerHTML = message.failure)
                .then(clearInput)

    });
}

sendForm(form);
sendForm(formBottom);


    // ввод чисел в инпуты с телефонами
    document.oninput = ()=> {
        let input = document.querySelectorAll('input[type=tel]');
        input.forEach(function(item) {
            item.value = item.value.replace(/[^\+\d]/g, '');
        });
    };
}

module.exports = forms;
