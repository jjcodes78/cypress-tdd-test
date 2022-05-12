import {ELEMENTS as el} from "./elements";

class MyAccount {
    verificaSeEstaNaPaginaDoUsuario(User) {
        cy.get(el.userName).should('have.text', User.firstName + ' ' + User.lastName)
    }
}

export default new MyAccount