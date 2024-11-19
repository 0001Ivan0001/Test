// Функция для закрытия модального окна
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.classList.remove('modal-active'); // Возвращаем прокрутку страницы
}

// Показать модальное окно при загрузке страницы
window.addEventListener('load', function () {
    setTimeout(() => {
        const modal = document.getElementById('modal');
        modal.style.display = 'flex'; // Делаем модалку видимой
        document.body.classList.add('modal-active'); // Блокируем прокрутку страницы
    }, 1000); // Показываем окно через 1 секунду
});

// Закрытие формы по кнопке "крестик"
document.getElementById('closeModal').addEventListener('click', closeModal);

// Проверка и отправка формы
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Получение элементов формы
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const consentCheckbox = document.getElementById('consent');
    const nameError = document.getElementById('nameError');

    let isValid = true;

    // Проверка имени
    if (!nameInput.value.trim()) {
        nameError.style.display = 'block'; // Показываем сообщение об ошибке
        isValid = false;
    } else {
        nameError.style.display = 'none'; // Скрываем сообщение об ошибке
    }

    // Проверка телефона и согласия
    if (!phoneInput.value.trim() || !consentCheckbox.checked) {
        isValid = false;
    }

    // Если форма заполнена корректно, закрываем модальное окно
    if (isValid) {
        alert('Форма успешно отправлена!'); // Сообщение об успешной отправке
        closeModal(); // Закрываем окно
    }
});