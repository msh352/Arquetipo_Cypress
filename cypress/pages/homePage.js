import BasePage from './basePage.js'

export default class HomePage extends BasePage {

    onlyMobileButton = 'input[value="LINE"]'
    onlyInternetButton = 'input[value="INSTALLATION"]'
    convergentButton = 'input[value="CONVERGENT"]'
    laQuieroAsiButton = '#id_btn_check'
    laQuieroAsiButtonSecond = 'button.btn.-primary'
    moreLinesButton = 'a[aria-controls="additional-lines-container"]'
    addLinePlusButton = 'button.icon.-css.-add.-complementarycircle'
    logoLowi = 'a[id="logoLowiHeader"]'
    fiberConvergent100Button = 'input[value="100"]'
    fiberConvergent300Button = 'input[value="300"]'
    fiberConvergent600Button = 'input[value="600"]'
    priceHome = 'span[class="tariff"]'
    priceAdditionalLine = "div[class='additional-line-content -white-rounded-box']"

    buttonSearchCarNow = 'a[class="bannerBtn____IhR- default___1FRAY"]'

    constructor() {
        super()
    }

    clickOnSearchCarNow(){
        cy.get(this.buttonSearchCarNow).click(({force: true, multiple:true}))
    }

}