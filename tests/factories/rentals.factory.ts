import prisma from '../../src/database';
import { faker } from '@faker-js/faker';
import { RentalInput, RentalFinishInput } from '../../src/protocols';

export async function createRandomUser() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const cpf = faker.number.int().toString();
    const birthDate = faker.date.birthdate();
    const user = {email, firstName, lastName, cpf, birthDate};
    const userResult = await prisma.user.create({data: {
        firstName,
        lastName,
        email,
        cpf,
        birthDate
    }})
    return {userResult, user};
  }

export async function createMovie(){
    const name = faker.internet.userName();
    const adultsOnly = faker.datatype.boolean();
    const rentalId = null
    const movie = {name, adultsOnly, rentalId};
    const movieResult = await prisma.movie.create({
        data:{
            name,
            adultsOnly,
            rentalId
        }
    })
    return {movie, movieResult}
}

export async function createRental(){
    
}