const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  });
  const result = {};

  const desktop = await browser.newPage({ viewport: { width: 1920, height: 850 } });
  const desktopErrors = [];
  desktop.on('console', (message) => {
    if (message.type() === 'error') desktopErrors.push(message.text());
  });
  desktop.on('pageerror', (error) => desktopErrors.push(error.message));
  await desktop.goto('http://127.0.0.1:8090', { waitUntil: 'networkidle' });
  await desktop.screenshot({ path: 'desktop.png', fullPage: true });
  result.desktop = await desktop.evaluate(() => ({
    excluded: ['Продолжить обучение', 'Мои задачи', 'Календарь', 'Моё обучение']
      .filter((text) => document.body.innerText.includes(text)),
    cards: document.querySelectorAll('.object-card').length,
    news: document.querySelectorAll('.news-feature').length,
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    loadedImages: [...document.images].filter((image) => image.complete && image.naturalWidth > 0).length,
    brokenImages: [...document.images].filter((image) => !image.complete || image.naturalWidth === 0).map((image) => image.src),
    interLoaded: document.fonts.check('14px Inter'),
    fontFamily: getComputedStyle(document.body).fontFamily,
  }));
  await desktop.getByRole('tab', { name: /Какие курсы мне назначены/ }).click();
  result.desktop.learningInitial = await desktop.locator('.object-card').count();
  await desktop.getByRole('button', { name: 'Показать все' }).click();
  result.desktop.learningExpanded = await desktop.locator('.object-card').count();
  await desktop.waitForTimeout(500);
  await desktop.screenshot({ path: 'learning-expanded.png', fullPage: true });
  result.desktop.learningCount = Number((await desktop.getByRole('tab', { name: /Какие курсы мне назначены/ }).innerText()).match(/\d+$/)?.[0]);
  result.desktop.newsMetaIcons = await desktop.locator('.news-meta .meta-icon').evaluateAll((images) => images.map((image) => ({
    renderedWidth: image.getBoundingClientRect().width,
    renderedHeight: image.getBoundingClientRect().height,
    naturalWidth: image.naturalWidth,
    naturalHeight: image.naturalHeight,
  })));
  await desktop.getByRole('tab', { name: /Какие ещё задания у меня есть/ }).click();
  await desktop.getByRole('button', { name: 'Показать все' }).click();
  result.desktop.tasksExpanded = await desktop.locator('.object-card').count();
  result.desktop.tasksCount = Number((await desktop.getByRole('tab', { name: /Какие ещё задания у меня есть/ }).innerText()).match(/\d+$/)?.[0]);
  await desktop.getByRole('tab', { name: /Что мне нужно пройти по оценке/ }).click();
  await desktop.waitForTimeout(350);
  await desktop.screenshot({ path: 'appraisal.png', fullPage: true });
  result.desktop.appraisalIcons = await desktop.locator('.card-kind img').evaluateAll((images) => images.map((image) => ({
    src: image.getAttribute('src'),
    width: image.naturalWidth,
    height: image.naturalHeight,
  })));
  result.desktop.errors = desktopErrors;

  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const mobileErrors = [];
  mobile.on('console', (message) => {
    if (message.type() === 'error') mobileErrors.push(message.text());
  });
  mobile.on('pageerror', (error) => mobileErrors.push(error.message));
  await mobile.goto('http://127.0.0.1:8090', { waitUntil: 'networkidle' });
  await mobile.screenshot({ path: 'mobile.png', fullPage: true });
  result.mobile = await mobile.evaluate(() => ({
    excluded: ['Продолжить обучение', 'Мои задачи', 'Календарь', 'Моё обучение']
      .filter((text) => document.body.innerText.includes(text)),
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    tabsScroll: document.querySelector('.tabs-scroller').scrollWidth
      > document.querySelector('.tabs-scroller').clientWidth,
  }));
  result.mobile.errors = mobileErrors;

  await browser.close();
  process.stdout.write(JSON.stringify(result, null, 2));
})();
