import crearSteps from "../../pages/crearTSteps";
import LoginPage from "../../pages/loginPage";
import editarSteps from "../../pages/editarTSteps";
import eliminarSteps from "../../pages/eliminarTSteps";
import RegistrarUser from "../../pages/registrarUser";
describe('POM', ()=>{
it('Ingresar a la pagina',()=>{
    LoginPage.visit()
})
it('Registrar Usuario',()=>{
    RegistrarUser.visit()
    RegistrarUser.intoRegistrar()
    RegistrarUser.userName('luifer')
    RegistrarUser.correo('l1234@gmail.com')
    RegistrarUser.userPassword('123')
    RegistrarUser.submitCheck()
    RegistrarUser.submitRegistrar()
})
it('loguarse como usuario',()=>{
    LoginPage.visit()
    LoginPage.intoLogin()
    LoginPage.fillUsername('l1234@gmail.com')
    LoginPage.fillPassword('123')
    LoginPage.submit()
})

it('crear trabajo',()=>{
    LoginPage.visit()
    LoginPage.intoLogin()
    LoginPage.fillUsername('l123@gmail.com')
    LoginPage.fillPassword('123')
    LoginPage.submit()
    crearSteps.crearTrabajo('TRABAJO_1')
    crearSteps.submit()
    
})
it('editar trabajo',()=>{
    LoginPage.visit()
    LoginPage.intoLogin()
    LoginPage.fillUsername('l123@gmail.com')
    LoginPage.fillPassword('123')
    LoginPage.submit()
    editarSteps.editarTrabajo('TRABAJO_123')   
    
})
it('eliminar trabajo',()=>{
    LoginPage.visit()
    LoginPage.intoLogin()
    LoginPage.fillUsername('l123@gmail.com')
    LoginPage.fillPassword('123')
    LoginPage.submit()    
    //eliminarSteps.eliminarTrabajo()   
    //eliminarSteps.submit()
    
})

})