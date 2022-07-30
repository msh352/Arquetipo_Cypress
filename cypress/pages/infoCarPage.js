import BasePage from './basePage.js'

export default class InfoCarPage extends BasePage {

    constructor() {
        super()
    }

    clickOnBuyNow(){
        cy.log("infoCarPage - Start clickOnBuyNow");
        cy.contains('button','Compra ahora').click({force:true})
        cy.log("infoCarPage - End clickOnBuyNow");
    }
}