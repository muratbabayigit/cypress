import Homepage from "../../POM/HomePage.cy";
import LoginPage from "../../POM/LoginPage.cy";




describe('POM ile Login', () => {

    it('Login testi', () => {

        const homePage = new Homepage()

        const loginPage=new LoginPage()   

        homePage.getVisit()
        homePage.getLoginlink()
        loginPage.getUserEmail()
        loginPage.getPasswordBox()
        loginPage.getLoginButton()
        loginPage.getAssert()

        
    });
    
});