import "cypress-jest-adapter";

export const getItems = () =>
  cy.request({ url: "/todos", failOnStatusCode: false });

before(() => {
  cy.log("Before All: Setting up app..");
});

beforeEach(() => {
  cy.log("Adding headers...");
  cy.intercept("**", (req) => {
    req.headers.Authorization = "some token";
  });
});

after(() => {
  cy.log("After all: destroying app..");
});

afterEach(() => {
  cy.log("After each: test finished");
});
