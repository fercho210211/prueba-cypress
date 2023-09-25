const SELECIONAR_TRABAJO = '#ItemId_11190231 > .ProjItemTable > tbody > tr > :nth-child(2) > #ItemCheckDiv > #ItemCheckBox'
const EDITAR_SUBMIT_BUTTON ='#NewItemAddButton'
const TRABAJO_EDITADO ='#NewItemContentInput'

class editarSteps{
    static editarTrabajo(name_trabajo){        
        cy.get(SELECIONAR_TRABAJO).click()        
        cy.get(SELECIONAR_TRABAJO).type(name_trabajo)
    }    
      
   
} 

export default editarSteps