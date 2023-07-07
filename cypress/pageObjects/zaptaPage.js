class zaptaPage {
    getHeading() {
        return cy.get('div.container.standard > h2').should("be.visible")
    }

    getWorkFromAnywhereHeading() {
        return cy.get('div.standard-item > h4').contains('Work From Anywhere')
    }

    getTransparentPricingHeading() {
        return cy.get('div.standard-item > h4').contains('Transparent Pricing')
    }

    getPremiumPropertiesHeading() {
        return cy.get('div.standard-item > h4').contains('Premium Properties')
    }

    NavigateToWorkFromHome() {
        return cy.get('.col-md-6 >h2').eq(1).should("have.text", "Work From Anywhere")
    }

    clickFindStaysButton() {
        return cy.get('a[href="https://saucasa.zaptatech.com/index?#featured"]').should('have.text', "Find Stays").click()
    }

    getVerifyUrl() {
        return cy.url().should('eq', 'https://saucasa.zaptatech.com/index?#featured');
    }
}
export default zaptaPage;