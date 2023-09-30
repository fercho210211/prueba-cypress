const SELECIONAR_TRABAJO = '#ItemId_11191098 > .ProjItemTable > tbody > tr > :nth-child(2) > #ItemCheckDiv > #ItemCheckBox'
const ELIMINAR_SUBMIT_BUTTON ='#DoneItemsDeleteLink'
const TRABAJO_ELIMINADO ='#NewItemContentInput'

class eliminarSteps{
    static eliminarTrabajo(){
        cy.get(SELECIONAR_TRABAJO).click()
    }    
    
    static submit(){
        cy.get(ELIMINAR_SUBMIT_BUTTON).click()
    }

    static visualizarTrabajo(name_trabajo){
       // cy.get(TRABAJO_ELIMINADO).should("have.text",name_trabajo)
    }
} 

export default eliminarSteps