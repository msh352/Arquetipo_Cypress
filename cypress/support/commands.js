Cypress.Commands.add('checkErrorDOM', ()=>{
    cy.wait(3000)
    cy.contains('error').should('not.exist')
})


Cypress.Commands.add('checkIfEleExists',(ele)=>{
       /// here if  ele exists or not
        cy.get('ele').its('length').then(res=>{
            if(res > 0){
                //// do task that you want to perform
                resolve();
            }else{
                reject();
            }
        });
})