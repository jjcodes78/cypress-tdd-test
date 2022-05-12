import {ELEMENTS as el} from "./elements";

class AuthPage {
    preencheUmNovoEmailEConfirma(User) {
        cy.get(el.emailInput).type(User.email)
        cy.get(el.createAccountButton).click()
    }
}

export default new AuthPage