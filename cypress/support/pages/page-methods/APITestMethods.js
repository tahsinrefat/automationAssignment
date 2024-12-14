export class APITestMethods{

    linkToBrands = 'https://automationexercise.com/api/brandsList';
    linkToLogin = 'https://automationexercise.com/api/verifyLogin';
    methods = ['GET', 'POST'];
    properties = ['brands', 'message'];
    expectedBrands = ['Polo', 'Babyhug', 'Biba'];
    unexpectedBrands = ['Heineken', 'BMW', 'Razor'];
    userFile = 'userInfo.json';

    validateBrandList = () => {
        cy.request(this.methods[0], this.linkToBrands).then((response) => {
            const body = typeof response.body === 'string' 
                ? JSON.parse(response.body) 
                : response.body;
            
            expect(response.status).to.eq(200);
            expect(body).to.have.property(this.properties[0]);
            expect(body.brands).to.be.an('array');

            const brandNames = body.brands.map((brand) => brand.brand);

            expect(brandNames).to.include.members(this.expectedBrands);
            expect(brandNames).to.not.include.members(this.unexpectedBrands);
        });
    }

    verifyUserLogin = () => {
        cy.fixture(this.userFile).then((user) => {
          cy.request({
            method: this.methods[1],
            url: this.linkToLogin,
            form: true,
            body: {
              email: user.email,
              password: user.password,
            },
          }).then((response) => {
            //converted into js object as an object is expected
            const body = typeof response.body === 'string' 
                ? JSON.parse(response.body) 
                : response.body;

            expect(body).to.be.an('object');
            expect(body).to.have.property('responseCode', 200);
            expect(body).to.have.property(this.properties[1], 'User exists!');
          });
        });
    }
}