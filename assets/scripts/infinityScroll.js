// Массив с URL логотипов (можно заменить на свои изображения)
const logos = [
    'assets/icons/tfn.svg',
    'assets/icons/sber.svg',
    'assets/icons/v.svg',
    'assets/icons/ryd.svg',
    'assets/icons/rostelecom.svg',
    'assets/icons/o.svg',
    'assets/icons/megafon.svg',
    'assets/icons/halva.svg',
    'assets/icons/apteka.svg'
];

const track = document.getElementById('logo-track');

// Создаём HTML для одного набора иконок
function createLogoItems() {
    return logos.map(url => `
    <div class="logo-item">
        <img src="${url}" alt="Логотип компании" />
    </div>
    `).join('');
}

// Вставляем два одинаковых набора для бесшовной прокрутки
track.innerHTML = createLogoItems() + createLogoItems();

// Дополнительно: если логотипов мало, можно продублировать ещё раз для плотности,
// но двух наборов обычно достаточно.