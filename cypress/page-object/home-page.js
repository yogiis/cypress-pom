import { selector } from "./element"

export function redirectToGameChimp(){
    cy.get(selector.LINK_CHIMP).click()
}
