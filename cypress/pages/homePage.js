import BasePage from './basePage.js'

export default class HomePage extends BasePage {

    buttonSearchCarNow = 'a[class="bannerBtn____IhR- default___1FRAY"]'

    constructor() {
        super()
    }

    clickOnSearchCarNow(){
        cy.get(this.buttonSearchCarNow).click(({force: true, multiple:true}))
    }

}