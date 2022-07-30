import BasePage from './basePage.js'

export default class BuyPage extends BasePage {

    totalPrice = 'span[class="price-item-title"]'

    constructor() {
        super()
    }

    verifyTotalPrice(){
        cy.log("buyPage - Start verifyTotalPrice");
        cy.get(this.totalPrice).eq(0).contains("Precio total")
        cy.log("buyPage - End verifyTotalPrice");
    }

}