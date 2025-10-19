export default function () {
    initializeTimers();

function initializeTimers() {
  const timers = document.querySelectorAll('.timer');
  if (!timers.length) return;

  timers.forEach((el, idx) => initSingleTimer(el, idx));
}

function initSingleTimer(timerEl, idx) {
  const deadlineStr = (timerEl.getAttribute('data-deadline') || '').trim(); // формат dd.mm.yyyy
  const deadline = parseDDMMYYYY(deadlineStr);
  if (!deadline) {
    console.warn('[timer] Некорректная дата в data-deadline, ожидается dd.mm.yyyy', deadlineStr);
    return;
  }

  // Ключ в localStorage уникален для каждой даты/таймера
  const storageKey = `ever-timer:${location.pathname}:${idx}:${deadlineStr}`;
  const now = new Date();
  let secondsLeft;

  if (localStorage.getItem(storageKey) !== null) {
    secondsLeft = +localStorage.getItem(storageKey);
  } else {
    // считаем разницу с текущего момента до 23:59:59 указанной даты
    const endOfDay = new Date(deadline.getFullYear(), deadline.getMonth(), deadline.getDate(), 23, 59, 59, 999);
    secondsLeft = Math.max(0, Math.floor((endOfDay - now) / 1000));
    localStorage.setItem(storageKey, secondsLeft);
  }

  tick(timerEl, storageKey, secondsLeft);
}

function tick(timerEl, storageKey, secondsLeft) {
  const different = document.body.classList.contains('timer-different');

  // Разложение на дни/часы/минуты/секунды
  const days    = Math.floor(secondsLeft / 86400);
  const hours   = Math.floor((secondsLeft % 86400) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  // Форматирование с ведущими нулями (кроме дней — там показываем полное число)
  const dStr = String(days);
  const hStr = hours   < 10 ? '0' + hours   : String(hours);
  const mStr = minutes < 10 ? '0' + minutes : String(minutes);
  const sStr = seconds < 10 ? '0' + seconds : String(seconds);

  fillUnit(timerEl.getElementsByClassName('days'),    dStr, different);
  fillUnit(timerEl.getElementsByClassName('hours'),   hStr, different);
  fillUnit(timerEl.getElementsByClassName('minutes'), mStr, different);
  fillUnit(timerEl.getElementsByClassName('seconds'), sStr, different);

  if (secondsLeft <= 0) {
    localStorage.removeItem(storageKey);
    return; // стоп
  }

  const next = secondsLeft - 1;
  localStorage.setItem(storageKey, next);
  setTimeout(() => tick(timerEl, storageKey, next), 1000);
}

function fillUnit(nodeList, valueStr, splitDigits) {
  if (!nodeList || !nodeList.length) return;

  if (!splitDigits) {
    // Заполняем каждый найденный элемент целой строкой
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = valueStr;
    }
  } else {
    // Рассыпаем по символам (поддерживает 1–N цифр, например для дней)
    const digits = valueStr.split('');
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].innerHTML = digits[i % digits.length];
    }
  }
}

function parseDDMMYYYY(str) {
  // Ожидаем dd.mm.yyyy
  const m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(str);
  if (!m) return null;
  const dd = +m[1], mm = +m[2], yyyy = +m[3];
  const d = new Date(yyyy, mm - 1, dd);
  // Валидация (на случай 31.02.2025)
  if (d.getFullYear() !== yyyy || d.getMonth() !== mm - 1 || d.getDate() !== dd) return null;
  return d;
}
}