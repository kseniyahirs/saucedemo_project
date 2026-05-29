import Page from './page.js';

class CartPage extends Page {
    // Селектор для всех товаров в корзине
    get cartItems () {
        return $$('.cart_item');
    }

    /**
     * Получает названия всех товаров, добавленных в корзину.
     * @returns {Promise<string[]>} Массив с названиями товаров в корзине.
     */
    async getCartItemNames() {
        console.log('Getting cart item names...');
        const names = [];
        const items = await this.cartItems;
        for (const item of items) {
            const nameElement = await item.$('.inventory_item_name');
            names.push(await nameElement.getText());
        }
        console.log(`Found cart item names: ${names.join(', ')}`);
        return names;
    }
}

export default new CartPage();
