const URL = 'https://todo.ly/'
const LOGININTO_BUTTON ='.HPHeaderLogin > a > img'
const USERNAME ='#ctl00_MainContent_LoginControl1_TextBoxEmail'
const PASSWORD ='#ctl00_MainContent_LoginControl1_TextBoxPassword'
const SUBMIT_BUTTON ='#ctl00_MainContent_LoginControl1_ButtonLogin'
const mensajeError = 'span#ErrorMessageText'

class LoginPage {
    static visit(){
        cy.visit(URL)
    }
    static intoLogin(){
        cy.get(LOGININTO_BUTTON).click()
    }
    static fillUsername(name){
        cy.get(USERNAME).type(name)
    }
    static fillPassword(password){
        cy.get(PASSWORD).type(password)
    }
    static submit(){
        cy.get(SUBMIT_BUTTON).click()
    }
    static ErrorContraseñaIncorrecta(){
        cy.wait(2000); 
        cy.get(mensajeError).should('contain', 'Error. Correo o contraseña equivocada. Inténtalo de nuevo. ¿Olvidaste tu contraseña? Puede recuperarlo utilizando el siguiente formulario.');
    }

}

export default LoginPage