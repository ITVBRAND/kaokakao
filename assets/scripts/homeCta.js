(function() {
    // Функция форматирования телефона: принимает строку, возвращает отформатированный вид +7 XXX XXX XX-XX
    function formatPhoneNumber(rawValue) {
        let digits = rawValue.replace(/\D/g, '');
        if (digits.length === 0) return '';

        // Первая цифра: если 8 -> заменяем на 7, если не 7 и не 8 -> ставим 7 в начало
        if (digits[0] === '8') {
            digits = '7' + digits.slice(1);
        } else if (digits[0] !== '7') {
            digits = '7' + digits;
        }

        // Ограничим 11 цифрами (7 + 10)
        if (digits.length > 11) digits = digits.slice(0, 11);

        const countryCode = digits[0]; // '7'
        let rest = digits.slice(1);     // до 10 цифр

        let formatted = '+' + countryCode;
        if (rest.length > 0) formatted += ' ' + rest.slice(0, 3);
        if (rest.length > 3) formatted += ' ' + rest.slice(3, 6);
        if (rest.length > 6) formatted += ' ' + rest.slice(6, 8);
        if (rest.length > 8) formatted += '-' + rest.slice(8, 10);
        return formatted.trim();
    }

    // Привязка обработчиков к конкретной форме
    function setupForm(formElement) {
        // Поля формы
        const nameInput = formElement.querySelector('input[name="name"]');
        const emailInput = formElement.querySelector('input[name="email"]');
        const phoneInput = formElement.querySelector('input[name="phone"]');
        const agreeCheckbox = formElement.querySelector('input[name="agree"]');
        const botcheckInput = formElement.querySelector('input[name="botcheck"]');

        // Элементы для ошибок
        const errorName = formElement.querySelector('.error-name');
        const errorEmail = formElement.querySelector('.error-email');
        const errorPhone = formElement.querySelector('.error-phone');
        const errorAgree = formElement.querySelector('.error-agree');

        // ---- Маска телефона ----
        function onPhoneInput(e) {
            const input = e.target;
            const cursorPos = input.selectionStart;
            const oldValue = input.value;
            const newValue = formatPhoneNumber(oldValue);
            if (newValue !== oldValue) {
                input.value = newValue;
                // Корректировка позиции курсора
                let delta = newValue.length - oldValue.length;
                let newCursor = cursorPos + delta;
                input.setSelectionRange(newCursor, newCursor);
            }
        }

        function onPhoneBlur(e) {
            const input = e.target;
            let value = input.value;
            let digits = value.replace(/\D/g, '');
            if (digits.length === 0) {
                input.value = '';
                return;
            }
            const formatted = formatPhoneNumber(digits);
            if (formatted !== value) {
                input.value = formatted;
            }
        }

        if (phoneInput) {
            phoneInput.addEventListener('input', onPhoneInput);
            phoneInput.addEventListener('blur', onPhoneBlur);
        }

        // ---- Валидация формы ----
        function validateForm() {
            let isValid = true;

            // Очищаем ошибки
            if (errorName) errorName.textContent = '';
            if (errorEmail) errorEmail.textContent = '';
            if (errorPhone) errorPhone.textContent = '';
            if (errorAgree) errorAgree.textContent = '';

            // 1. Имя: не пустое, нет латиницы, только кириллица, пробелы, дефисы
            const nameValue = nameInput ? nameInput.value.trim() : '';
            if (!nameValue) {
                if (errorName) errorName.textContent = 'Имя обязательно для заполнения';
                isValid = false;
            } else if (/[a-zA-Z]/.test(nameValue)) {
                if (errorName) errorName.textContent = 'Имя не должно содержать латинские буквы';
                isValid = false;
            } else if (!/^[а-яА-ЯёЁ\s\-]+$/.test(nameValue)) {
                if (errorName) errorName.textContent = 'Используйте только кириллицу, пробелы и дефисы';
                isValid = false;
            }

            // 2. Почта: формат nickname@mail.com
            const emailValue = emailInput ? emailInput.value.trim() : '';
            const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
            if (!emailValue) {
                if (errorEmail) errorEmail.textContent = 'Почта обязательна';
                isValid = false;
            } else if (!emailRegex.test(emailValue)) {
                if (errorEmail) errorEmail.textContent = 'Введите корректный email (например, user@domain.com)';
                isValid = false;
            }

            // 3. Телефон: полный формат +7 XXX XXX XX-XX
            const phoneValue = phoneInput ? phoneInput.value.trim() : '';
            const phoneRegex = /^\+7 \d{3} \d{3} \d{2}-\d{2}$/;
            if (!phoneValue) {
                if (errorPhone) errorPhone.textContent = 'Номер телефона обязателен';
                isValid = false;
            } else if (!phoneRegex.test(phoneValue)) {
                if (errorPhone) errorPhone.textContent = 'Формат: +7 800 555 35-55 (10 цифр после +7)';
                isValid = false;
            }

            // 4. Чекбокс согласия
            if (!agreeCheckbox || !agreeCheckbox.checked) {
                if (errorAgree) errorAgree.textContent = 'Необходимо дать согласие на обработку персональных данных';
                isValid = false;
            }

            // 5. Невидимое поле для ботов (должно быть пустым)
            if (botcheckInput && botcheckInput.value !== '') {
                isValid = false;
                // Можно тихо отклонить, без вывода ошибки пользователю
                console.warn('Бот детектирован в форме');
            }

            return isValid;
        }

        // Обработчик отправки
        function onSubmit(e) {
            e.preventDefault();
            if (validateForm()) {
                alert('Форма успешно отправлена! (демонстрация)');
                // При желании форму можно очистить:
                // formElement.reset();
            }
        }

        formElement.addEventListener('submit', onSubmit);
    }

    // Инициализация всех форм с классом global-form
    const allForms = document.querySelectorAll('form.global-form');
    allForms.forEach(form => setupForm(form));

    // Обработка ссылок политики (чтобы не уходили со страницы)
    document.querySelectorAll('.privacy-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Демо-ссылка на политику конфиденциальности');
        });
    });
})();