import Page from './page.js';

class InventoryPage extends Page {
    // Селектор для всех карточек товаров
    get inventoryItems () {
        return $$('.inventory_item');
    }

    // Селектор для иконки корзины
    get shoppingCartLink () {
        return $('.shopping_cart_link');
    }

    /**
     * Находит кнопку "Add to cart" для конкретного товара по его названию.
     * @param {string} itemName - Название товара.
     * @returns {Promise<WebdriverIO.Element>} - Элемент кнопки.
     */
    async getAddToCartButton(itemName) {
        for (const item of await this.inventoryItems) {
            const nameElement = await item.$('.inventory_item_name');
            const text = await nameElement.getText();
            if (text === itemName) {
                return item.$('button');
            }
        }
        throw new Error(`Товар с названием "${itemName}" не найден.`);
    }

    /**
     * Добавляет в корзину несколько товаров по их названиям.
     * @param {string[]} itemNames - Массив с названиями товаров.
     */
    async addItemsToCart(itemNames) {
        for (const itemName of itemNames) {
            const button = await this.getAddToCartButton(itemName);
            await button.click();
        }
    }

    /**
     * Переходит на страницу корзины.
     */
    async goToCart() {
        await this.shoppingCartLink.click();
    }
}

export default new InventoryPage();
