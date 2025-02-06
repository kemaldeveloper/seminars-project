# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Seminars Project

Для запуска проека лучше использовать менеджер пакетов YARN, так как во время разработки использовался именно он и проект содержит yarn.lock.
Запуск проекта:

- npm install || yarn install - для установки зависимостей
- npm run dev || yarn dev - для запуска проекта
- npm run build || yarn build - для билда проекта

Для запуска json-server локально открываем 2 терминала, в одном запускаем сам проект а во втором запускаем json-server:

- npx json-server ./src/store/seminars.json - запускает json-server

Список зависимостей которые были добавлены в проект:

- json-server - для локального сервера
- formik - для построения управляемых форм
- yup - для валидации формы
- bootstrap - для базовых компонентов и стилей

