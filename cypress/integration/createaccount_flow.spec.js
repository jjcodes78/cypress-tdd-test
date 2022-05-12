import homePage from '../support/pages/Home'
import authPage from "../support/pages/AuthPage";
import createAccountPage from '../support/pages/CreateAccountPage'
import myAccountPage from '../support/pages/MyAccount'
import User from '../support/models/User'

describe('Criação da conta', () => {

    it('Abre o site e inicia o processo de cadastro até a pagina do usuário', () => {
        homePage.abreSignIn()
        authPage.preencheUmNovoEmailEConfirma(User)
        createAccountPage.preencheForm(User)
        createAccountPage.enviaCadastro()
        myAccountPage.verificaSeEstaNaPaginaDoUsuario(User)
    })

})