import { dynamicSelector, selector } from "./element"

export function readyToStartGame(){
    cy.contains(selector.BUTTON_START).click()
}

export function fastPlay(){
    for(let n = 0; n < 10;n++){
        cy.get(selector.BOX_NUMBERS)
        .then(($elements) => {
            for(let i = 0; i < $elements.length -1 + n;i++){
                console.log(i);
                cy.get(dynamicSelector.ITEM_BOX(i)).click()
            }
        });
        cy.get(selector.BUTTON_CONTINUE).click()
    }
}
