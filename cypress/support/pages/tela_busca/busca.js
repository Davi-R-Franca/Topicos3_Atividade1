class busca{
    acessarTelaPrincipal(){
        cy.visit('https://www.umbro.com.br/')
    }

    pesquisa(valor){
        cy.get('#downshift-0-input').type(valor).type("{enter}")
    }

    logoDoTime(){
        cy.get('.vtex-tab-layout-0-x-listItem--athletico-pr > .vtex-button > .vtex-button__label').click({force: true})
    }

    selecionarSubcategoria(){
        cy.get(':nth-child(4) > .vtex-button').click({force: true})
    }

    selecionarMenuSanduiche(){
        cy.get(':nth-child(2) > .vtex-menu-2-x-styledLinkContainer--highlight-menu').trigger('mouseover')
    }  
    
    clicarMenuSanduiche(){
        cy.get('.vtex-menu-2-x-menuItem--isOpen > .vtex-menu-2-x-submenuContainer > .vtex-menu-2-x-submenuWrapper > .vtex-menu-2-x-submenu > .vtex-flex-layout-0-x-flexRow > .vtex-store-components-3-x-container > .mt0 > :nth-child(3) > .vtex-flex-layout-0-x-flexCol > .vtex-flex-layout-0-x-flexColChild > .vtex-menu-2-x-menuContainerNav > .vtex-menu-2-x-menuContainer > :nth-child(2) > .vtex-menu-2-x-styledLinkContainer').click({force: true})
    }

    scrowDown(){
        cy.scrollTo('bottom')
    }

    clicarRodapeVelocita(){
        cy.get('#menu-item-velocita > .vtex-menu-2-x-styledLinkContent').click({force: true})
    }
}


export default new busca();