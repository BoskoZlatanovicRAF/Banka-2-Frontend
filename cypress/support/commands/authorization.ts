import {apiBaseUrl} from "../commands";

Cypress.Commands.add("login", (email: string, password: string) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => win.sessionStorage.clear());
    cy.visit("/login");
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
});

// New API commands
// Cypress.Commands.add("loginUserApi", (data: { email: string; password: string }) => {
//     return cy.request({
//         method: 'POST',
//         url: `${apiBaseUrl}/users/login`,
//         body: data,
//         failOnStatusCode: false
//     });
// });