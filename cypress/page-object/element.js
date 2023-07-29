export const selector = {
    NEW_TODO: `.new-todo`,
    TODO_LIST: `.todo-list li`
}

export const dynamicSelector = {
    TODO_ITEM_LIST_TOGGLE: (index) => `.todo-list li:nth-child(${index + 1}) .toggle`,
    TODO_ITEM_LIST_LABEL: (index) => `.todo-list li:nth-child(${index + 1}) label`
}
