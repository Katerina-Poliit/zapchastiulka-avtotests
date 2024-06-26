import HydraulicPage from "./hydraulicPage";
import ModalWindowProductPageAvailable from "./modalWindowProductPageAvailable";
import ModalWindowQuickOrdering from "./modalWindowQuickOrdering";

class MobilSuper3000Page {
	constructor(page) {
		 this.page = page;
	}

 locators = {
		getProductImageBlock: () => this.page.getByText('Моторна олива Mobil Super 3000 X1 Formula FE 5W-30Артикул: testProduct33', { exact: true }),
		getProductImageBig: () => this.page.getByRole('tabpanel', { name: 'of 1' }).getByRole('img'),
		getProductImageSmall: () => this.page.getByRole('button', { name: 'product thumbnail' }),
		getMagnifyingGlassIcon: () => this.page.locator('div').filter({ hasText: /^Моторна олива Mobil Super 3000 X1 Formula FE 5W-30Артикул: testProduct33$/ }).getByRole('button').first(),
		getProductInformation: () => this.page.getByText('Основні характеристики:Вага (кг):5Код:testProduct33Виробник:MobilКраїна:Ірландія'),
		getProductDescriptionHeader: () => this.page.getByRole('heading', { name: 'Опис' }),
		getProductDescriptionText: () => this.page.getByText('Mobil Super 3000 X1 Formula FE 5W-30 являє собою синтетичну моторну оливу, що забезпечує тривалий термін експлуатації двигунів в автомобілях різних типів і років випуску, а також підвищений рівень їх захисту в широкому діапазоні температур'),
		getProductName: () => this.page.locator('p').filter({ hasText: 'Моторна олива Mobil Super' }),
		getProductArticle: () => this.page.getByText('Артикул: testProduct33').nth(1),
		getProductPrice: () => this.page.getByText('₴').first(),
		getProductStatus: () => this.page.getByText('в наявності'),
		getAddToCartButton: () => this.page.locator('button').filter({ hasText: /^Додати в кошик$/ }),
		getIconAddToCartButton: () => this.page.locator('path[d="M4.004 6.417.762 3.174 2.176 1.76l3.243 3.242H20.66a1 1 0 0 1 .958 1.288l-2.4 8a1 1 0 0 1-.958.712H6.004v2h11v2h-12a1 1 0 0 1-1-1zm1.5 16.585a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"]').last(),
		getCartIcon: () => this.page.getByRole('button', { name: 'Кошик', exact: true }),
		getProductCounterAddToCartButton: () => this.page.locator('#d26143').first(),
		getAddProductCounterButton: () => this.page.locator('div').filter({ hasText: /^1Купити в 1 клік$/ }).getByRole('button').nth(1),
		getBuyToOneClickButton: () => this.page.getByRole('button', { name: 'Купити в 1 клік' }),
		getProductMainСharacteristicsHeader: () => this.page.getByRole('heading', { name: 'Основні характеристики:' }),
		getWeightText: () => this.page.getByText('Вага (кг):'),
		getWeightValueText: () => this.page.getByText('5', { exact: true }),
		getCodeText: () => this.page.getByText('Код:'),
		getCodeValueText: () => this.page.getByText('testProduct33', { exact: true }),
		getManufacturerText: () => this.page.getByText('Виробник:'),
		getManufacturerNameText: () => this.page.getByText('Mobil', { exact: true }),
		getCountryText: () => this.page.getByText('Країна:'),
		getCountryNameText: () => this.page.getByText('Ірландія'),
		getMostPopularHeader: () => this.page.getByRole('heading', { name: 'Найбільш популярні' }),
		getnotFindProduct: () => this.page.locator('.containerStylesForIdProduct').first(),
		getMostPopularProducts: () => this.page.locator('ul').filter({ hasText: 'Артикул: 667248.0Пас ротора' }),
		getviewedProducts: () => this.page.locator('ul').filter({ hasText: 'Артикул: testProduct33' }),
		getviewedProductsHeader: () => this.page.getByRole('heading', { name: 'Переглянуті товари' }),
		getBreadCrumbs: () => this.page.getByText('Каталог / Масла та автохімія / Гідравлічні / Моторна олива Mobil Super 3000 X1 Formula FE 5W-'),
		getBreadCrumbsMobilSuper3000: () => this.page.locator('span').filter({ hasText: 'Моторна олива Mobil Super' }),
		getBreadCrumbsHydraulic: () => this.page.getByRole('link', { name: 'Гідравлічні' })
 };

		async clickMagnifyingGlassIcon() {
			await this.locators.getMagnifyingGlassIcon().click();
			return new ModalWindowProductPageAvailable(this.page);
		}

		async clickAddToCartButton() {
			await this.locators.getAddToCartButton().click();
		}

		async clickAddProductCounterButton() {
			await this.locators.getAddProductCounterButton().click();
		}

		async clickBuyToOneClickButton() {
			await this.locators.getBuyToOneClickButton().click();
			return new ModalWindowQuickOrdering(this.page);
		}

		async clickBreadCrumbsHydraulic() {
			await this.locators.getBreadCrumbsHydraulic().click();
			return new HydraulicPage(this.page);
		}

}

export default MobilSuper3000Page;