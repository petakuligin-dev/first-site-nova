@echo off
chcp 65001 >nul
title НоваТех — запуск сайта
cd /d "%~dp0"

echo ========================================
echo   НоваТех — запуск сайта
echo ========================================
echo.

where node >nul 2>&1
if errorlevel 1 (
    echo [ОШИБКА] Node.js не установлен.
    echo Скачайте с https://nodejs.org/ и установите LTS-версию.
    echo.
    pause
    exit /b 1
)

echo [1/2] Установка зависимостей...
call npm install
if errorlevel 1 (
    echo [ОШИБКА] Не удалось установить зависимости.
    pause
    exit /b 1
)

echo.
echo [2/2] Запуск сервера...
echo.
echo   На ЭТОМ ПК:     http://localhost:5173
echo   На ДРУГИХ ПК:   смотрите строку Network внизу
echo                  (например http://192.168.x.x:5173)
echo.
echo   Не закрывайте это окно, пока смотрите сайт.
echo   Для остановки нажмите Ctrl+C
echo.
echo ========================================

call npm run dev

pause
