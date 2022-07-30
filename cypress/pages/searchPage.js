import BasePage from './basePage.js'

export default class SearchPage extends BasePage {

    selectBrand = 'select[id="make"]'
    buttonFilter = 'select[id="sortBy"]'


    constructor() {
        super()
    }


    clickOnFilters(filter){
        cy.log("searchPage - Start clickOnFilters");
        cy.contains('span',filter).click({force:true})
        cy.log("searchPage - End clickOnFilters");
    }

    selectBrandFilter(brand){
        cy.log("searchPage - Start selectBrand");
        cy.get('input[value="'+ brand +'"]').click({force:true})
        cy.log("searchPage - End selectBrand");

    }

    clickOnModel(model){
        cy.log("searchPage - Start clickOnModel");
        cy.contains('div',model).click({force:true})
        cy.log("searchPage - End clickOnModel");
    }

    selectOnSortBy(filter){
        cy.log("searchPage - Start selectOnSortBy");
        cy.get(this.buttonFilter).eq(1).select(filter)
        cy.log("searchPage - End selectOnSortBy");
    }

    selectThirdCar(){
        cy.log("searchPage - Start selectThirdCar");
        cy.get('div[class="priceContainer___3SSQg"]').eq(2).click({force:true})
        cy.log("searchPage - End selectThirdCar");
    }
}