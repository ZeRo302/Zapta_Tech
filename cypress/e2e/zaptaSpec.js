import zaptaPage from '../pageObjects/zaptaPage';
function initAutocomplete() {
    // code to initialize the autocomplete
}
describe('Zapta Problem', () => {
    before(() => {
        cy.on('uncaught:exception', (err) => {
            console.log(err);
            return true;
        });
    })
    const zapta = new zaptaPage()
    it('Problem 1', () => {
        cy.visit("/")
        zapta.getHeading()
        zapta.getWorkFromAnywhereHeading()
        zapta.getTransparentPricingHeading()
        zapta.getPremiumPropertiesHeading()
        zapta.NavigateToWorkFromHome()
        zapta.clickFindStaysButton()
        zapta.getVerifyUrl()
        cy.scrollTo('bottom')

    })
})