import {ELEMENTS as el} from "./elements";
import User from "../../models/User";

class MyAccount {
    verificaSeEstaNaPaginaDoUsuario() {
        cy.get(el.userName).should('have.text', User.firstName + ' ' + User.lastName)
    }
}

export default new MyAccount