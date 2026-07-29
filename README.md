# НоваТех — сайт компании

Онлайн: **https://petakuligin-dev.github.io/first-site-nova/**

Репозиторий: https://github.com/petakuligin-dev/first-site-nova

## Как запустить у себя

Нужны [Node.js](https://nodejs.org/) (версия 20+) и npm.

```bash
git clone https://github.com/petakuligin-dev/first-site-nova.git
cd first-site-nova
npm install
npm run dev
```

Откройте в браузере адрес из терминала — обычно **http://localhost:5173/**

Остановить сервер: `Ctrl + C`.

## Другие команды

| Команда | Что делает |
|---------|------------|
| `npm run dev` | Локальный сервер разработки |
| `npm run build` | Сборка в папку `dist` |
| `npm run preview` | Просмотр собранного сайта |
| `npm start` | То же, что `npm run dev` |

## Важно

- Сайт **не открывается** двойным кликом по `index.html` — нужен `npm run dev` или `npm run preview`.
- После `git pull` снова выполните `npm install`, если обновились зависимости.

## Деплой

При каждом push в ветку `main` GitHub Actions собирает сайт и публикует его на GitHub Pages.
