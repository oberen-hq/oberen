const request = require("supertest");
const app = require("../index");

describe("app", () => {
  it("responds with a json message", (done) => {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(
        {
          status: 200,
          message: "Welcome to the API! 🦄",
        },
        done
      );
  });

  it("responds with a 404 message", (done) => {
    request(app)
      .get("/random")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404, done);
  });
});
