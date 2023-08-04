import * as loginPage from "../page-object/login-page"
import * as homePage from "../page-object/home-page"
import * as chimpPage from "../page-object/chimp-page"



describe('The winner playing game chimps', () => {
    beforeEach(()=>{
        loginPage.navigate()
        loginPage.fillUsername('yogiis')
        loginPage.fillPassword('r4h4si4')
        loginPage.tapButtonLogin()
    })

    it('Play game chimps', ()=>{
        homePage.redirectToGameChimp()
        chimpPage.readyToStartGame()
        chimpPage.fastPlay()
    })
    
})