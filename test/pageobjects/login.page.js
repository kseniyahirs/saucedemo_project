import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }


    /**
     * Авторизует пользователя на сайте.
     * @param {string} username - Имя пользователя.
     * @param {string} password - Пароль.
     */
    async login (username, password) {
        console.log(`Logging in with username: ${username}`);
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * Открывает страницу входа.
     */
    open () {
        console.log('Opening login page...');
        return super.open('');
    }
}

export default new LoginPage();
