const tabs = [
  { id: 'today', label: 'Что мне сделать сегодня', count: 3 },
  { id: 'learning', label: 'Какие курсы мне назначены', count: 11 },
  { id: 'idp', label: 'Что у меня по ИПР', count: 1 },
  { id: 'onboarding', label: 'Что важного по адаптации', count: 2 },
  { id: 'appraisal', label: 'Что мне нужно пройти по оценке', count: 3 },
  { id: 'tasks', label: 'Какие ещё задания у меня есть', count: 7 },
];

const items = [
  { id: 1, tabs: ['today','onboarding'], kind: 'План адаптации', icon: './assets/figma/type-adaptation.svg', title: 'Пройти тест на знание регламента информационной безопасности', status: 'В процессе', statusTone: 'progress', deadline: 'до 13 сен  (−1 дн.)', deadlineTone: 'overdue' },
  { id: 2, tabs: ['today','learning'], kind: 'Курс', icon: './assets/figma/type-course.svg', title: 'Корпоративная культура: как её не испортить и построить', badge: 'Обязательный', badgeTone: 'required', status: 'В процессе', statusTone: 'progress', deadline: 'до 13 сен  (−1 дн.)', deadlineTone: 'overdue' },
  { id: 3, tabs: ['today','appraisal'], kind: 'Оценка', icon: './assets/figma/type-appraisal.svg', title: 'Пульс команды: квартальная оценка', status: 'Не начата', statusTone: 'not-started', deadline: 'до 14 сен  (сегодня)', deadlineTone: 'today' },
  { id: 4, tabs: ['learning'], kind: 'Курс', icon: './assets/figma/type-course.svg', title: 'HR-бренд: как стать работодателем, о котором мечтают', badge: 'Аттестация', badgeTone: 'certification', status: 'Не начат', statusTone: 'not-started', deadline: 'до 17 сен  (3 дн.)', deadlineTone: 'today' },
  { id: 5, tabs: ['learning'], kind: 'Курс', icon: './assets/figma/type-course.svg', title: 'HR-старт: с чего начинается работа с людьми', badge: 'Обязательный', badgeTone: 'required', status: 'В процессе', statusTone: 'progress', deadline: 'до 28 сен  (14 дн.)' },
  { id: 6, tabs: ['learning'], kind: 'Курс', icon: './assets/figma/type-course.svg', title: 'Собеседование будущего: как найти того, кто не ищет работу', badge: 'Обязательный', badgeTone: 'required', status: 'В процессе', statusTone: 'progress', deadline: 'до 30 сен  (16 дн.)' },
  { id: 7, tabs: ['learning','onboarding'], kind: 'Программа', icon: './assets/figma/type-program.svg', title: 'Онбординг продуктовой команды', badge: 'Обязательный', badgeTone: 'required', status: 'В процессе', statusTone: 'progress', deadline: 'до 30 окт  (46 дн.)' },
  { id: 8, tabs: ['learning'], kind: 'Курс', icon: './assets/figma/type-course.svg', title: 'Продуктовая аналитика: от метрик к решениям', status: 'Не начат', statusTone: 'not-started', deadline: 'Без дедлайна' },
  { id: 9, tabs: ['idp'], kind: 'Задача ИПР', icon: './assets/figma/nav-effectiveness.svg', title: 'Подготовить план развития навыков презентации', status: 'В работе', statusTone: 'progress', deadline: 'до 23 сен  (9 дн.)' },
  { id: 10, tabs: ['appraisal'], kind: 'Оценка', icon: './assets/figma/type-appraisal.svg', title: 'Оценка навыков в категории soft skills', status: 'В процессе', statusTone: 'progress', deadline: 'до 31 дек  (108 дн.)' },
  { id: 11, tabs: ['appraisal'], kind: 'Опрос', icon: './assets/figma/type-appraisal.svg', title: 'Пульс команды: обратная связь о взаимодействии', status: 'Не начат', statusTone: 'not-started', deadline: 'до 20 сен  (6 дн.)' },
  { id: 12, tabs: ['tasks'], kind: 'Задание', icon: './assets/figma/nav-requests.svg', title: 'Подготовить отчёт по итогам месяца', status: 'В работе', statusTone: 'progress', deadline: 'до 18 сен  (4 дн.)' },
  { id: 13, tabs: ['tasks'], kind: 'Задание', icon: './assets/figma/nav-requests.svg', title: 'Изучить новый регламент работы с клиентами', status: 'Не начато', statusTone: 'not-started', deadline: 'до 22 сен  (8 дн.)' },
  { id: 14, tabs: ['tasks'], kind: 'Задание', icon: './assets/figma/nav-requests.svg', title: 'Согласовать результаты встречи с наставником', status: 'Ожидает', statusTone: 'waiting', deadline: 'до 25 сен  (11 дн.)' },
  { id: 15, tabs: ['learning'], kind: 'Курс', icon: './assets/figma/type-course.svg', title: 'Работа с REST API: интеграция данных в веб-приложения', badge: 'Обязательный', badgeTone: 'required', status: 'В процессе', statusTone: 'progress', deadline: 'до 12 ноя  (59 дн.)' },
  { id: 16, tabs: ['learning'], kind: 'Курс', icon: './assets/figma/type-course.svg', title: 'Основы информационной безопасности для сотрудников', status: 'Не начат', statusTone: 'not-started', deadline: 'до 18 ноя  (65 дн.)' },
  { id: 17, tabs: ['learning'], kind: 'Программа', icon: './assets/figma/type-program.svg', title: 'Развитие управленческих компетенций', badge: 'Обязательный', badgeTone: 'required', status: 'В процессе', statusTone: 'progress', deadline: 'до 25 ноя  (72 дн.)' },
  { id: 18, tabs: ['learning'], kind: 'Курс', icon: './assets/figma/type-course.svg', title: 'Эффективная коммуникация в распределённой команде', status: 'Не начат', statusTone: 'not-started', deadline: 'до 15 дек  (92 дн.)' },
  { id: 19, tabs: ['learning'], kind: 'Курс', icon: './assets/figma/type-course.svg', title: 'Управление проектами: от идеи до результата', status: 'Не начат', statusTone: 'not-started', deadline: 'Без дедлайна' },
  { id: 20, tabs: ['tasks'], kind: 'Задание', icon: './assets/figma/nav-requests.svg', title: 'Заполнить анкету обратной связи по итогам адаптации', status: 'Не начато', statusTone: 'not-started', deadline: 'до 27 сен  (13 дн.)' },
  { id: 21, tabs: ['tasks'], kind: 'Задание', icon: './assets/figma/nav-requests.svg', title: 'Подготовить вопросы к встрече с руководителем', status: 'В работе', statusTone: 'progress', deadline: 'до 29 сен  (15 дн.)' },
  { id: 22, tabs: ['tasks'], kind: 'Задание', icon: './assets/figma/nav-requests.svg', title: 'Ознакомиться с целями команды на квартал', status: 'Не начато', statusTone: 'not-started', deadline: 'до 2 окт  (18 дн.)' },
  { id: 23, tabs: ['tasks'], kind: 'Задание', icon: './assets/figma/nav-requests.svg', title: 'Подтвердить участие в командной встрече', status: 'Ожидает', statusTone: 'waiting', deadline: 'Без дедлайна' },
];

let activeTab = 'today';
let expanded = false;

const tabsNode = document.querySelector('#tabs');
const cardsNode = document.querySelector('#cards');
const showAllNode = document.querySelector('#showAll');
const toastNode = document.querySelector('#toast');
const mobileMenu = document.querySelector('#mobileMenu');
const sidebar = document.querySelector('.sidebar');

function listFor(tabId) {
  return items.filter((item) => item.tabs.includes(tabId));
}

function renderTabs() {
  tabsNode.innerHTML = tabs.map((tab) => `
    <button
      class="tab${tab.id === activeTab ? ' active' : ''}"
      role="tab"
      aria-selected="${tab.id === activeTab}"
      data-tab="${tab.id}"
    >
      <span>${tab.label}</span><span class="tab-count">${tab.count}</span>
    </button>
  `).join('');
}

function renderCards() {
  const all = listFor(activeTab);
  const visible = expanded ? all : all.slice(0, 3);

  cardsNode.innerHTML = visible.length ? visible.map((item, index) => `
    <article class="object-card" style="animation-delay:${index * 28}ms" tabindex="0">
      <div class="card-top">
        <div class="card-kind"><img class="kind-icon" src="${item.icon}" alt="" aria-hidden="true" /><span>${item.kind}</span></div>
        ${item.badge ? `<span class="badge ${item.badgeTone}">${item.badge}</span>` : ''}
      </div>
      <h3 class="card-title">${item.title}</h3>
      <div class="card-bottom">
        <div class="card-state">
          <span class="status ${item.statusTone}">${item.status}</span>
          <span class="deadline ${item.deadlineTone || ''}">${item.deadline}</span>
        </div>
      </div>
    </article>
  `).join('') : '<div class="empty-state">Сейчас здесь нет объектов, требующих вашего внимания</div>';

  const canExpand = all.length > 3;
  showAllNode.hidden = !canExpand;
  showAllNode.setAttribute('aria-expanded', String(expanded));
  showAllNode.querySelector('span').textContent = expanded ? 'Свернуть' : 'Показать все';
}

function render() {
  renderTabs();
  renderCards();
}

function showToast(message) {
  toastNode.textContent = message;
  toastNode.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toastNode.classList.remove('show'), 2200);
}

tabsNode.addEventListener('click', (event) => {
  const button = event.target.closest('[data-tab]');
  if (!button) return;
  activeTab = button.dataset.tab;
  expanded = false;
  render();
});

showAllNode.addEventListener('click', () => {
  expanded = !expanded;
  renderCards();
});

document.querySelector('.settings-button').addEventListener('click', () => {
  showToast('Открываем конструктор главной');
});

document.querySelector('.all-news').addEventListener('click', () => {
  showToast('Открываем все новости');
});

mobileMenu.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  mobileMenu.setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('click', (event) => {
  if (window.innerWidth > 680 || !sidebar.classList.contains('open')) return;
  if (sidebar.contains(event.target) || mobileMenu.contains(event.target)) return;
  sidebar.classList.remove('open');
  mobileMenu.setAttribute('aria-expanded', 'false');
});

render();
