import { selector } from "./element"

export function navigate(){
    cy.visit(`/login`)
}

export function fillUsername(username){
    cy.get(selector.FIELD_USERNAME).type(username)
}

export function fillPassword(password){
    cy.get(selector.FIELD_PASSWORD).type(password)
}

export function tapButtonLogin(){
    cy.get(selector.BUTTON_LOGIN).click()
}
