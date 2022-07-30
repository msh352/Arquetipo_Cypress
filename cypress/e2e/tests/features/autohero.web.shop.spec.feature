Feature: AutoHero Web - Nueva compra

  Background: Access to AutoHero
    Given Access to autohero homepage

  Scenario: Comprar Audi A3
    When I click on Search car now
    When I filter by "Marca y modelo"
    When I select brand "Audi"
    When I select model "A3"
    When I filter by "Marca y modelo"
    When I filter by price "Precio más alto"
    When I select third car
    When I click on Compra nueva
    Then I verify purchase page