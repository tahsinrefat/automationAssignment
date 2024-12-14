## automationAssignment
 Automation assignment assigned by tekarsh

This repository contains automated tests for both UI and API testing tasks, implemented using **Cypress** and the **Page Object Model (POM)** design pattern.

## **Features**
- **UI Tests**:
  - Automates key workflows, including user sign-up, product shopping, payment processing, and contact form submission.
- **API Tests**:
  - Validates API endpoints, including brand list validation and user login verification.

## **Project Structure**
```plaintext
cypress/
│
├── e2e/
│   ├── PageObjectModel.cy.js        # Main test script/ spec file combining UI and API tests
│
├── fixtures/
│   ├── userInfo.json               # Test data for API login
│
├── support/
│   ├── pages/                  # Page Object Model (POM) components
│   │   ├── SignupTasks.js      # Tasks for sign-up functionality
│   │   ├── ShoppingTasks.js    # Tasks for shopping workflows
│   │   ├── PaymentTasks.js     # Tasks for payment processing
│   │   ├── ContactTasks.js     # Tasks for contact form submission
│   │   ├── APITestTasks.js         # Tasks for API testing
│   │   ├── methods/            # Reusable methods for tasks
│   │   │   ├── SignupMethods.js    # Methods used by SignupTasks
│   │   │   ├── ShoppingMethods.js  # Methods used by ShoppingTasks
│   │   │   ├── PaymentMethods.js   # Methods used by PaymentTasks
│   │   │   ├── ContactMethods.js   # Methods used by ContactTasks
│   │   │   ├── APITestMethods.js       # Methods used by ApiTasks
│
├── cypress.config.js           # Cypress configuration
├── package.json                # Project dependencies and scripts```

1. Prerequisites
    Node.js (version 16 or higher recommended)
    npm (comes with Node.js)
2. Clone the Repository
    Clone this repository:
        git clone https://github.com/tahsinrefat/automationAssignment.git
        cd automationAssignment/
3. Install Dependencies
    Run the following command to install all required dependencies:
        npm install
4. Run the Tests
    Execute the tests using Cypress in different modes:
        Run All Tests (Headless Mode):
            npx cypress run --spec cypress/e2e/tests/PageObjectModel.cy.js
            
        Run in Interactive Mode(With browser)
            npx cypress open

