import Page from './page.js';

class CartPage extends Page {
    // Селектор для всех товаров в корзине
    get cartItems () {
        return $$('.cart_item');
    }

    /**
     * Получает названия всех товаров, добавленных в корзину.
     * @returns {Promise<string[]>} - Массив с названиями товаров.
     */
    async getCartItemNames() {
        const names = [];
        const items = await this.cartItems;
        for (const item of items) {
            const nameElement = await item.$('.inventory_item_name');
            names.push(await nameElement.getText());
        }
        return names;
    }
}

export default new CartPage();
