1.	Устанавливаем GIT
2.
3.	npm init	Создание .JSON-файлf в каталог проекта
4.	git init	Запускаем git
5.	git config --local user.name "suleman-aga"	Объявляем свое имя
6.	git config --local user.email "suleman-aga@mail.ru"	Объявляем свой имейл
7.	git config --local core.autocrlf true	Параметры установки окончаний строк
8.	git config --local core.safecrlf warn	Параметры установки окончаний строк
9.	git config --local core.quotepath off	Установка отображения unicode
10.	git status	Посмотреть состояние
11.	git add -A	Добавить все файлы
12.	git commit -a -m”first-message”	Создание контрольной точки
13.	git add -A + git commit -a -m”message”	Вводить после внесения всех изменений
14.	git log	Посмотреть изменения
15.
16.
17.	Создаём репозиторий на GITHUB и связываем его с проектом
18. git remote add origin https://github.com/Suleman-aga/Suleman-aga.github.io.git Прописываем путь к github
19. git remote set-url origin https://github.com/Suleman-aga/Suleman-aga.github.io.git Если нужно изменить уже существующий
20.		
21.	git push -u origin master	Заливка на github
22.	git pull	Обновление всех связей и изменений
23.	git push	Заливка на github
24.
25.
26.	Устанавливаем и запускаем GULP
27.
28.	node --version	Проверяем установку nodejs
29.	npm --version	Проверяем установку npm
30.	npx --version	Проверяем установку npx
31.	Сначала устанавливаем всё глобально  -g, а затем с  --save-dev
32.	npm install gulp-cli --save-dev	Установите утилиту командной строки gulp
33.	npm init --yes	Создание пакета .JSON-файл в каталог проекта
34.	npm install gulp --save-dev	Установите пакет gulp
35.	gulp --version	Проверяем установку gulp
36.	npm i gulp-sass --save-dev	Устанавливаем пакеты npm
37.	npm i browser-sync --save-dev	Устанавливаем пакеты npm
38.	npm i gulp-autoprefixer --save-dev	Устанавливаем пакеты npm
39.	npm i gulp-clean-css --save-dev	Устанавливаем пакеты npm
40.	npm i gulp-rename --save-dev	Устанавливаем пакеты npm
41.	npm i gulp-htmlmin --save-dev	Устанавливаем пакеты npm
42.	npm i gulp-imagemin --save-dev	Устанавливаем пакеты npm
43.	добавить в packadge.json
"browserslist": [
    "last 1 version",
    "> 1%",
    "maintained node versions",
    "not dead"
  ]
44.	npm i	Если используем скопированные файлы
45.	gulp	Запускаем gulp
46. Ctrl+c	Остановить gulp
47.
48.	Для сброса кэша сервера нажать SHIFT+F5
49. 