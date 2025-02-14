// Добавляем обработчики событий на чистом JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('.title');
    const close = document.querySelector('.close');
    const container = document.querySelector('.container');

    // Обработчик клика по "Click Me"
    title.addEventListener('click', function () {
        container.classList.add('open');
    });

    // Обработчик клика по кнопке закрытия
    close.addEventListener('click', function () {
        container.classList.remove('open');
    });
});