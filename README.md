# Проект автоматизации тестирования для Sauce Demo

Этот проект содержит автоматизированный E2E (end-to-end) тест для веб-сайта [https://www.saucedemo.com](https://www.saucedemo.com). Тест написан на JavaScript с использованием фреймворка [WebdriverIO](https://webdriver.io/) и следует паттерну проектирования Page Object.

## Описание теста

Тестовый сценарий выполняет следующие действия:
1.  Выполняет вход в систему под пользователем `standard_user`.
2.  Добавляет два товара в корзину: "Sauce Labs Backpack" и "Sauce Labs Fleece Jacket".
3.  Переходит в корзину.
4.  Проверяет, что в корзине находятся именно те товары, которые были выбраны.

## Технологический стек

*   **Фреймворк:** WebdriverIO
*   **Тест-раннер:** Mocha
*   **Браузерный драйвер:** ChromeDriver
*   **Паттерн:** Page Object Model (POM)
*   **Язык:** JavaScript

## Требования

*   [Node.js](https://nodejs.org/) (рекомендуется версия LTS)
*   [Google Chrome](https://www.google.com/chrome/)

## Установка

1.  **Клонируйте репозиторий:**
    ```bash
    git clone https://github.com/kseniyahirs/saucedemo_project.git
    ```

2.  **Перейдите в директорию проекта:**
    ```bash
    cd saucedemo_project
    ```

3.  **Установите зависимости:**
    ```bash
    npm install
    ```

## Запуск тестов

Для запуска тестов выполните следующую команду в корневой директории проекта:

```bash
npm test
```

WebdriverIO автоматически запустит браузер Chrome и выполнит сценарий, описанный в `test/specs/saucedemo.e2e.js`.
