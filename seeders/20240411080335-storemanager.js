'use strict';
const {faker} = require('@faker-js/faker')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('StoreManagers', Array.from({length: 10}, (_, i) => (
      {
        name: faker.person.firstName(),
        phone: faker.phone.number(),
        email: faker.internet.email(),
        salary: faker.datatype.number(),
        createdAt: new Date(),
        updatedAt: new Date()
      }
     )), {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('StoreManagers', null, {});
  }
};
