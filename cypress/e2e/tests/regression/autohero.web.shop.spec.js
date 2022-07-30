import HomePage from '../../../pages/homePage.js'
import SearchPage from '../../../pages/searchPage.js'
import InfoCarPage from '../../../pages/infoCarPage.js'
import BuyPage from '../../../pages/buyPage.js'

const homePage = new HomePage();
const searchPage = new SearchPage();
const infoCarPage = new InfoCarPage();
const buyPage = new BuyPage();


describe('AutoHero Web - Nueva compra', () => {

    beforeEach(() => {
        // Access to autohero homepage
        homePage.navigate();

    })

    it('WEB.01 - Nueva compra Audi A3', () => {

        //When I click on Search car now
        homePage.clickOnSearchCarNow()

        //When I filter by Marca y modelo
        searchPage.clickOnFilters("Marca y modelo")
        cy.wait(2000)

        //When I select Marca "Audi"
        searchPage.selectBrandFilter("Audi")

        //When I select Model "A3"
        searchPage.clickOnModel("A3")
        cy.wait(3000)

        searchPage.clickOnFilters("Marca y modelo")

        //When I  filter by high price
        searchPage.selectOnSortBy("Precio más alto")
        cy.wait(1000)

        //When I select third car
        searchPage.selectThirdCar()

        //When I click on "Compra ahora"
        infoCarPage.clickOnBuyNow()

        //verify element in purchase page
        buyPage.verifyTotalPrice()

    })

})