import { APITestMethods } from "./page-methods/APITestMethods";

export class APITestTasks{

    apiTest = new APITestMethods();

    brandApiTesting = () => {
        this.apiTest.validateBrandList();
    }

    verifyUserLoginApiTesting = () => {
        this.apiTest.verifyUserLogin();
    }
}