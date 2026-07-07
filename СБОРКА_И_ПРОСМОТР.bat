@echo off
chcp 65001 >nul
title НоваТех — сборка и просмотр
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
    echo Node.js не установлен. Скачайте с https://nodejs.org/
    pause
    exit /b 1
)

echo Установка зависимостей...
call npm install

echo.
echo Сборка сайта...
call npm run build
if errorlevel 1 (
    pause
    exit /b 1
)

echo.
echo Запуск просмотра (папка dist)...
echo Откройте http://localhost:4173
echo Для других ПК в сети — Network-адрес ниже.
echo.

call npm run preview

pause
