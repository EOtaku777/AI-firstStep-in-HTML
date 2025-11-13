// 1. Простейший callback пример
function приветствие(имя, callback) {
    console.log("Привет, " + имя + "!");
    // Вызываем callback функцию после основного действия
    callback();
}

// Callback функция
function послеПриветствия() {
    console.log("Приветствие завершено!");
}

// Использование
приветствие("Анна", послеПриветствия);
// Функция анимации с callback
function анимироватьЭлемент(элемент, callback) {
    console.log("Начинаем анимацию...");
    
    let позиция = 0;
    const анимация = setInterval(() => {
        if (позиция >= 200) {
            clearInterval(анимация);
            console.log("Анимация завершена!");
            // ВЫЗОВ CALLBACK ПОСЛЕ ЗАВЕРШЕНИЯ АНИМАЦИИ
            callback();
        } else {
            позиция += 5;
            элемент.style.transform = `translateX(${позиция}px)`;
        }
    }, 50);
}

// Callback функция, которая выполнится после анимации
function послеАнимации() {
    const box = document.getElementById('animationBox');
    box.style.backgroundColor = 'green';
    box.innerHTML = 'Готово!';
    console.log("Callback выполнен: элемент изменил цвет и текст");
}

// Назначаем обработчик кнопки
document.getElementById('animateButton').addEventListener('click', function() {
    const box = document.getElementById('animationBox');
    box.style.backgroundColor = 'blue';
    box.innerHTML = '';
    
    // Запускаем анимацию с callback
    анимироватьЭлемент(box, послеАнимации);
});