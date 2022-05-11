import {ELEMENTS as el} from "./elements";
import User from "../../models/User";

class AuthPage {
    preencheUmNovoEmailEConfirma() {
        cy.get(el.emailInput).type(User.email)
        cy.get(el.createAccountButton).click()
    }
}

export default new AuthPage