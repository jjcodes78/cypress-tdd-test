import {ELEMENTS as el} from "./elements";

class Home {
    acessarCategoria() {
        cy.get(el.categoriaTShirt).last().click()
    }

    abreSignIn() {
        cy.get(el.botaoSignIn).click()
    }
}

export default new Home