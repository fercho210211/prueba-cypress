const URL = 'https://todo.ly/'
const REGISTRARINTO_BUTTON ='.HPHeaderSignup > a > img'
const USERNAME ='#ctl00_MainContent_SignupControl1_TextBoxFullName'
const CORREO = '#ctl00_MainContent_SignupControl1_TextBoxEmail'
const PASSWORD ='#ctl00_MainContent_SignupControl1_TextBoxPassword'
const SUBMIT_CHECK ='#ctl00_MainContent_SignupControl1_CheckBoxTerms'
const SUBMIT_REGISTRAR_BUTTON ='#ctl00_MainContent_SignupControl1_ButtonSignup'
const ErrorMessage = '.ui-state-error'

class RegistrarUser {
    static visit(){
        cy.visit(URL)
    }
    static intoRegistrar(){
        cy.get(REGISTRARINTO_BUTTON).click()
    }
    static userName(name){
        cy.get(USERNAME).type(name)
    }
    static correo(name){
        cy.get(CORREO).type(name)
    }
    static userPassword(password){
        cy.get(PASSWORD).type(password)
    }
    static submitCheck(){
        cy.get(SUBMIT_CHECK).click()
    }
    static submitRegistrar(){
        cy.get(SUBMIT_REGISTRAR_BUTTON).click()
    }
    static ErrorUserExist(){
        cy.contains('Error. Account with this email address already exists!').should('exist')
    }

}

export default RegistrarUser