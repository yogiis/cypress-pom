export const selector = {
    NEW_TODO: `.new-todo`,
    TODO_LIST: `.todo-list li`,
    FIELD_USERNAME: `input[name="username"]`,
    FIELD_PASSWORD: `input[name="password"]`,
    BUTTON_LOGIN: `input[type=submit]`,
    LINK_CHIMP: `.css-dgu1g4 > [href="/tests/chimp"]`,
    BUTTON_START: `Start`,
    BOX_NUMBERS: `div.css-k008qs`,
    BUTTON_CONTINUE: `.css-de05nr`

}

export const dynamicSelector = {
    ITEM_BOX: (index) => `[data-cellnumber=${index+1}]`
}
