describe('Buscar fotos e dados', () => {

    it('Buscar fotos do flavio', () => {
        cy.request({
            method: 'GET',
            url: 'https://alurapic.herokuapp.com/flavio/photos'
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body).is.not.empty;
            expect(response.body[0]).to.have.property('description');
            expect(response.body[0].description).to.be.equal('Farol iluminado');
        })
    });

    it('Efetuar login do flavio', () => {
        cy.request({
            method: 'POST',
            url: 'https://alurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body).is.not.empty;
            expect(response.body[0]).to.have.property('id');
            expect(response.body[0].id).to.be.equal('1');
        })
    });
});
