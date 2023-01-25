# Тестовое DevOps

Имеется 2 приложение frontend, backend написанные на React + Vite, express соответсвенно.

---

Бэкенд отдает JSON такого вида:

```bash
{
  "name": "John Doe",
  "secret": "testsecret",
  "other_env": "blablabla"
}
```

secret, other_env берутся из .env

```bash
PORT=4000
SECRET=testsecret
OTHER_ENV=blablabla
```

---

Фронтенд отображает следующее

```bash
URL: http://localhost:4000
SECRET: testsecret
```

URL берется из .env

SECRET получается с json бэкенда

```bash
VITE_BACKEND_URL=http://localhost:4000
```

## Задачи

1. Завести публичный репозиторий на GitHub или аналогах, в который скопировать весь проект и продолжать работу в нем
2. Создать .env для фронта и бэка со следующим

   ```bash
   # backend
   PORT=80
   SECRET=testsecret
   OTHER_ENV=blablabla
   ```

   ```bash
   # frontend
   VITE_BACKEND_URL=/api
   ```

3. Завернуть это приложение в Dockerfile, в котором
   1. Установятся зависимости через npm (предварительно загрузив и установив node.js [https://nodejs.org/](https://nodejs.org/) рекомендуемую версию)
      1. установка происходит командой npm i
   2. Бэкенд запускается командой: npm start
   3. Фронтенд билдится командой: npm run build
      1. P.S. Готовый билд кладется в папку /dist
   4. Сервисы шарятся через nginx
4. Настроить докер компоус
   1. Сервисы запускаются на одном порту
   2. фронтенд роутится везде([http://0.0.0.0:8000/](http://0.0.0.0:8000/)), кроме [http://0.0.0.0:8000](http://0.0.0.0:8000/)/api
   3. бэкенд открывается на [http://0.0.0.0:8000](http://0.0.0.0:8000/)/api

## Итог

Приложение должно:

1. Собираться через Dockerfile
2. Запускаться через docker-compose
3. Работать по адресу [http://0.0.0.0:8000/](http://0.0.0.0:8000/) и отображать интерфейс (секрет с бэка и URL)
4. По адресу [http://0.0.0.0:8000/](http://0.0.0.0:8000/docs)api отображать бэкенд с JSONом

   ```bash
   {
     "name": "John Doe",
     "secret": "testsecret",
     "other_env": "blablabla"
   }

   ```
