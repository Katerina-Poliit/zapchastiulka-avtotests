import { test, expect } from "@playwright/test";
import HomePage from "../../page_objects/homePage.js";
import { BASE_URL, HEADER_CATALOG_BUTTON_TEXT, EXPECTED_ITEMS } from "../../helpers/testData.js";

test.describe('header.spec', () => {
	test.beforeEach(async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.open();
  });

	test('Verify that website has store logo', async ({ page }) => {
	  const homePage = new HomePage(page);

	  await expect(page).toHaveURL(BASE_URL);
	  await expect(homePage.locators.getLogo()).toBeVisible();
	  expect(homePage.locators.getLogo()).toBeTruthy();

	});

	test('Verify that website has the "Каталог" button', async ({ page }) => {
		const homePage = new HomePage(page);
 
		await expect(homePage.locators.getCatalogbutton()).toBeVisible();
		expect(homePage.locators.getCatalogbutton()).toBeTruthy();
		await expect(homePage.locators.getCatalogbutton()).toContainText(HEADER_CATALOG_BUTTON_TEXT);
		expect(await homePage.locators.getCatalogbutton().isVisible('svg')).toBe(true); //перевіряємо чи видима іконка svg у кнопці "Каталог"
 
	 });

	 test('Verify that the "Каталог" dropdown menu is opened after clicking the "Каталог" button', async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.clickCatalogbutton();

		await expect(homePage.locators.getdropdownMenu()).toBeVisible();
		expect(homePage.locators.getdropdownMenu()).toBeTruthy();

		for (const item of EXPECTED_ITEMS) {
			await expect(homePage.locators.getdropdownMenu()).toContainText(item);
	 	}
 
	 });

 

});