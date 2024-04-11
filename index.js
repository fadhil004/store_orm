const {sequelize, StoreManager, Store} = require('./models')
const {faker} = require('@faker-js/faker')
const {QueryTypes} = require('sequelize')

async function main(){
    //await sequelize.sync();

    // await StoreManager.create({
    //     name: faker.person.firstName(),
    //     phone: faker.phone.number(),
    //     email: faker.internet.email(),
    //     salary: faker.datatype.number(),
    //     createdAt: new Date(),
    //     updatedAt: new Date()
    // })
    
    // const data = await StoreManager.findAll({
    //     where:{
    //         id: 1
    //     },
    //     attributes: ['name', 'phone']
    // })

    // console.table(JSON.parse(JSON.stringify(data)))

    // await StoreManager.update({
    //     name: faker.person.firstName(),
    //     email: faker.internet.email()
    // }, {
    //     where: {
    //         id: 1
    //     }
    // })

    // await StoreManager.destroy({
    //     where: {
    //         id: 1
    //     }
    // })

    // await StoreManager.destroy({
    //     truncate: true
    // })

    // const [result,meta] = await sequelize.query('select * from \"StoreManagers\"')
    // console.log(result)

    // const result = await sequelize.query('select * from \"StoreManagers\"',
    // {
    //     type: QueryTypes.SELECT
    // })

    // const result = await sequelize.query('select * from \"StoreManagers\" where id = $1 or email = $2',
    // {
    //     bind: [12,'Millie10@gmail.com'],
    //     type: QueryTypes.SELECT
    // })

    // const result = await sequelize.query('select * from \"StoreManagers\" where id = $id or email = $email',
    // {
    //     bind: {
    //         id: 12,
    //         email: 'Millie10@gmail.com'
    //     },
    //     type: QueryTypes.SELECT
    // })
    // console.log(result)

    // await sequelize.sync({force: true})

    // await Store.create({
    //     name: faker.person.firstName(),
    //     phone: faker.phone.number(),
    //     email: faker.internet.email(),
    //     address: faker.location.streetAddress(),
    //     StoreManager: {
    //         name: faker.person.firstName(),
    //         phone: faker.phone.number(),
    //         email: faker.internet.email(),
    //         salary: faker.datatype.number()
    //     }
        
    // }, {
    //     include: [StoreManager]
    // })
   
    const stores = await Store.findAll({
        include: [StoreManager]
    });
    
    console.log(JSON.parse(JSON.stringify(stores)))
}

main().catch(err => console.log(err))