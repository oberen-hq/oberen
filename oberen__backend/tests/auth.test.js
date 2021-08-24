const request = require("supertest");
const faker = require("faker");
const app = require("../index");

const currentUserRoute = "/api/me";
const signUpRoute = "/api/auth/register";
const signInRoute = "/api/auth/login";

const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();

describe("auth", () => {
  it("responds with 401 Unauthorized", (done) => {
    request(app)
      .get(currentUserRoute)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(401, done);
  });
  it("sign up", (done) => {
    request(app)
      .post(signUpRoute)
      .send({ name: randomName, email: randomEmail, password: randomPassword })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done());
  });
  it("sign in", (done) => {
    request(app)
      .post(signInRoute)
      .send({ email: randomEmail, password: randomPassword })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done());
  });
});
