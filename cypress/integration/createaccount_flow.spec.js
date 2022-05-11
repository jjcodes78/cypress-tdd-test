import homePage from '../support/pages/Home'
import authPage from "../support/pages/AuthPage";
import createAccountPage from '../support/pages/CreateAccountPage'
import myAccountPage from '../support/pages/MyAccount'

describe('Criação da conta', () => {

    it('Abre o site e inicia o processo de cadastro até a pagina do usuário', () => {
        homePage.abreSignIn()
        authPage.preencheUmNovoEmailEConfirma()
        createAccountPage.preencheForm()
        createAccountPage.enviaCadastro()
        myAccountPage.verificaSeEstaNaPaginaDoUsuario()
    })

})