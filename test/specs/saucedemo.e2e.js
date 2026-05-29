import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';

describe('Sauce Demo E2E Test: Product Selection', () => {
    it('should allow a user to login, select products, and verify them in the cart', async () => {
        console.log('Step 1: Login');
        // 1. Логин
        // Открываем страницу и входим в систему под стандартным пользователем
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        // Проверяем, что после логина открылась страница с товарами
        // Ожидаем, что URL будет содержать '/inventory.html'
        await expect(browser).toHaveUrlContaining('/inventory.html');
        console.log('Login successful');

        console.log('Step 2: Select products');
        // 2. Выбор товаров
        // Определяем, какие товары мы хотим добавить в корзину
        const itemsToSelect = ['Sauce Labs Backpack', 'Sauce Labs Fleece Jacket'];
        await InventoryPage.addItemsToCart(itemsToSelect);
        console.log('Product selection complete');
        
        console.log('Step 3: Go to cart');
        // 3. Переход в корзину
        await InventoryPage.goToCart();

        // Проверяем, что мы на странице корзины
        await expect(browser).toHaveUrlContaining('/cart.html');
        console.log('Navigation to cart successful');

        console.log('Step 4: Verify items in cart');
        // 4. Проверка товаров в корзине
        // Получаем названия товаров из корзины
        const itemsInCart = await CartPage.getCartItemNames();

        // Сравниваем, что названия и количество товаров в корзине
        // соответствуют тому, что мы выбирали.
        // Сортируем оба массива, чтобы порядок не влиял на результат.
        expect(itemsInCart).toEqual(itemsToSelect.sort());
        console.log('Cart verification successful');
        
        console.log('Тест успешно пройден!');
        console.log(`Выбранные товары: ${itemsToSelect.join(', ')}`);
        console.log(`Товары в корзине: ${itemsInCart.join(', ')}`);
    });
});
