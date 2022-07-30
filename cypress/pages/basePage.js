/**
* Basepage of AutoHero
*/

export default class BasePage {

    cookiesCSS = 'button.optanon-allow-all.accept-cookies-button'

    navigate(){
        cy.visit(Cypress.config().baseUrl)
            cy.get('button[class="button___2R6qU size-sm___3TKQS default___1FRAY"]').click({force: true})
    }

    checkDataPageText(filename){
        let testdata = ''
        cy.fixture(filename).then(function (data){
            testdata = data
            for (const element in testdata){
                cy.contains(testdata[element]).should('be.visible')
            }

        })
    }
}
