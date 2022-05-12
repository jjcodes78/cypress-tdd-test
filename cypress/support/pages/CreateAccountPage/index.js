import {ELEMENTS as el} from "./elements";

class CreateAccountPage {
    preencheForm(User) {
        cy.get(el.customerFirstName).type(User.firstName)
        cy.get(el.customerLastName).type(User.lastName)
        cy.get(el.password).type(User.password)
        cy.get(el.birthDay).select(User.birthDay)
        cy.get(el.birthMonth).select(User.birthMonth)
        cy.get(el.birthYear).select(User.birthYear)
        cy.get(el.firstName).type(User.firstName)
        cy.get(el.lastName).type(User.lastName)
        cy.get(el.address1).type(User.address)
        cy.get(el.city).type(User.city)
        cy.get(el.state).select(User.state)
        cy.get(el.postCode).type(User.postcode)
        cy.get(el.phoneMobile).type(User.phone)
        cy.get(el.alias).type('Home')
    }

    enviaCadastro() {
        cy.get(el.submitAccountButton).click()
    }
}

export default new CreateAccountPage