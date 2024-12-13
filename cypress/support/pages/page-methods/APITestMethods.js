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
            // this is a rare case, normally response body is returned as an object not a json string
            // this is if the response body is a json string, we can check as it is wuth include
            // expect(response.status).to.eq(200);
            // expect(response.body).to.include('"responseCode": 200')
            // expect(response.body).to.include('"message": "User exists!"')

            // or we can convert the json string into js object and check using to.have,property
            // check if response.body is already an object
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