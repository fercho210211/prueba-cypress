const NOMBRE_TRABAJO = '#NewItemContentInput'
const CREAR_TRABAJO_SUBMIT_BUTTON ='#NewItemAddButton'
const TRABAJO_CREADO ='#NewItemContentInput'

class crearSteps{
    static crearTrabajo(name_trabajo){
        cy.get(NOMBRE_TRABAJO).type(name_trabajo)
    }    
    
    static submit(){
        cy.get(CREAR_TRABAJO_SUBMIT_BUTTON).click()
    }

    static visualizarTrabajo(name_trabajo){
        cy.get(TRABAJO_CREADO).should("have.text",name_trabajo)
        
    }
} 

export default crearSteps