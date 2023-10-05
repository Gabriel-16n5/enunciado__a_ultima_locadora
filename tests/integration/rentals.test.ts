import { createMovie, createRandomUser } from "../factories/rentals.factory";
import app from "../../src/app";
import prisma from "../../src/database";
import supertest from "supertest";

beforeAll(async () => {
  await prisma.user.deleteMany();
})

beforeEach(async () => {
  await prisma.user.deleteMany();
});

describe("Rentals Service Unit Tests", () => {
  it("create user", async () => {
    const {user, userResult} = await createRandomUser()
    expect(userResult).toEqual({
      id: expect.any(Number),
      firstName: user.firstName,
      lastName:  user.lastName,
      email:  user.email,
      cpf:  user.cpf,
      birthDate:  user.birthDate
    });
  })

  it("create movie", async () => {
    const {movie, movieResult} = await createMovie()
    expect(movieResult).toEqual({
      id: expect.any(Number),
      name: movie.name,
      adultsOnly: movie.adultsOnly,
      rentalId: movie.rentalId
    });
  })

  it("create rental", async () => {
    const {movie, movieResult} = await createMovie()
    const {user, userResult} = await createRandomUser()
    
  })

})