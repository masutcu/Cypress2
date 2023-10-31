class LoginPage{
    getMailBox(){
        return cy.get('#login-email')
    }

    getPswBox(){
        return cy.get('#login-password')
    }
    
    getAccButton(){
        return cy.get('.ky-btn-orange')
    }
}
export default LoginPage