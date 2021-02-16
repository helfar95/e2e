import { getItems } from "../support/helpers";

describe("todos API", () => {
  it("returns JSON", () => {
    getItems()
      .its("headers")
      .its("content-type")
      .should("include", "application/json");
  });

  it.only("should fail", () => {
    getItems().then((response) => {
      expect(response.status).toEqual(404);
    });
  });

  it("loads 2 items", () => {
    getItems().should("have.length", 2);
  });

  it("loads the initial items", () => {
    getItems().its("body").should("deep.eq", cy.fixture("initial_items.json"));
  });

  it("returns id + task objects", () => {
    getItems().each((value) => expect(value).toHaveProperty("id", "task"));
  });
});
