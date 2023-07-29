import { dynamicSelector, selector } from "./element"

export function navigate() {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')
}

export function addTodo(todoText) {
    cy.get(selector.NEW_TODO).type(todoText + '{enter}')
}

export function toggleTodo(todoIndex) {
    cy.get(dynamicSelector.TODO_ITEM_LIST_TOGGLE(todoIndex)).click()
}

export function showOnlyCompletedTodos() {
    cy.contains('Completed').click()
}

export function showOnlyActiveTodos() {
    cy.contains('Active').click()
}

export function showAllTodos() {
    cy.contains('All').click()
}

export function clearCompleted() {
    cy.contains('Clear completed').click()
}

export function validateNumberOfTodosShown(expectedNumberOfTodos) {
    cy.get(selector.TODO_LIST).should('have.length', expectedNumberOfTodos)
}

export function validateTodoCompletedState(todoIndex, shouldBeCompleted) {
    const l = cy.get(dynamicSelector.TODO_ITEM_LIST_LABEL(todoIndex))

    l.should(`${shouldBeCompleted ? '' : 'not.'}have.css`, 'text-decoration-line', 'line-through')
}

export function validateTodoText(todoIndex, expectedText) {
    cy.get(dynamicSelector.TODO_ITEM_LIST_LABEL(todoIndex)).should('have.text', expectedText)
}

export function validateToggleState(todoIndex, shouldBeToggled) {
    const label = cy.get(dynamicSelector.TODO_ITEM_LIST_LABEL(todoIndex))

    label.should(`${shouldBeToggled ? '' : 'not.'}be.checked`)
}