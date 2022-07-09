'use-strict'

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            username: 'admin',
            password: '123456',
            firstName: 'John',
            lastName: 'Cena',
            address: 'DA, HN',
            gender: true,
            roleId: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {})
    }
}