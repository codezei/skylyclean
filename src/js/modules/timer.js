export default function () {
    initializeTimers();
}

function initializeTimers() {
    // Находим все элементы таймера на странице
    const timers = document.querySelectorAll('.timer');
    if (!timers.length) return;

    timers.forEach(el => initSingleTimer(el));
}

function initSingleTimer(timerEl) {
    // 1. Получаем и парсим конечную дату (deadline)
    const deadlineStr = (timerEl.getAttribute('data-deadline') || '').trim(); // Формат dd.mm.yyyy
    const deadline = parseDDMMYYYY(deadlineStr);
    
    if (!deadline) {
        console.warn('[timer] Некорректная дата в data-deadline, ожидается dd.mm.yyyy', deadlineStr);
        return;
    }

    // 2. Устанавливаем конец дня для deadline (23:59:59)
    const endOfDay = new Date(
        deadline.getFullYear(),
        deadline.getMonth(),
        deadline.getDate(),
        23, 59, 59, 999
    );

    // 3. Запускаем первый "тик"
    tick(timerEl, endOfDay);
}

function tick(timerEl, deadline) {
    const now = new Date();
    
    // Вычисляем оставшиеся секунды
    const secondsLeft = Math.max(0, Math.floor((deadline - now) / 1000));
    
    const different = document.body.classList.contains('timer-different');

    // Разложение на дни/часы/минуты/секунды
    const days    = Math.floor(secondsLeft / 86400);
    const hours   = Math.floor((secondsLeft % 86400) / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;

    // Форматирование с ведущими нулями (кроме дней)
    const dStr = String(days);
    const hStr = hours   < 10 ? '0' + hours   : String(hours);
    const mStr = minutes < 10 ? '0' + minutes : String(minutes);
    const sStr = seconds < 10 ? '0' + seconds : String(seconds);

    fillUnit(timerEl.getElementsByClassName('days'),    dStr, different);
    fillUnit(timerEl.getElementsByClassName('hours'),   hStr, different);
    fillUnit(timerEl.getElementsByClassName('minutes'), mStr, different);
    fillUnit(timerEl.getElementsByClassName('seconds'), sStr, different);

    if (secondsLeft <= 0) {
        return; // стоп
    }

    // Рекурсивный запуск через 1 секунду
    setTimeout(() => tick(timerEl, deadline), 1000);
}

// Функции-помощники (fillUnit и parseDDMMYYYY) остаются без изменений
function fillUnit(nodeList, valueStr, splitDigits) {
    if (!nodeList || !nodeList.length) return;

    if (!splitDigits) {
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = valueStr;
        }
    } else {
        const digits = valueStr.split('');
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].innerHTML = digits[i % digits.length];
        }
    }
}

function parseDDMMYYYY(str) {
    const m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(str);
    if (!m) return null;
    const dd = +m[1], mm = +m[2], yyyy = +m[3];
    const d = new Date(yyyy, mm - 1, dd);
    if (d.getFullYear() !== yyyy || d.getMonth() !== mm - 1 || d.getDate() !== dd) return null;
    return d;
}