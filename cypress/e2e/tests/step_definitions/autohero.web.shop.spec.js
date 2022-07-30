import { Given, And, When, Then } from '@badeball/cypress-cucumber-preprocessor';

import HomePage from '../../../pages/homePage.js'
import SearchPage from '../../../pages/searchPage.js'
import InfoCarPage from '../../../pages/infoCarPage.js'
import BuyPage from '../../../pages/buyPage.js'

const homePage = new HomePage();
const searchPage = new SearchPage();
const infoCarPage = new InfoCarPage();
const buyPage = new BuyPage();

Given('Access to autohero homepage', () => {
        homePage.navigate();
});

When('I click on Search car now', () => {
    homePage.clickOnSearchCarNow()
});

When('I filter by {string}', (filter) => {
    searchPage.clickOnFilters(filter)
    cy.wait(2000)
});

When('I select brand {string}', (brand) => {
    searchPage.selectBrandFilter(brand)
    cy.wait(1000)
});

When('I select model {string}', (model) => {
    searchPage.clickOnModel(model)
    cy.wait(3000)
});

When('I filter by price {string}', (priceFilter) => {
    searchPage.selectOnSortBy(priceFilter)
    cy.wait(3000)
});

When('I select third car', () => {
    searchPage.selectThirdCar()
});

When('I click on Compra nueva', () => {
    infoCarPage.clickOnBuyNow()
});

Then('I verify purchase page', () => {
    buyPage.verifyTotalPrice()
});
