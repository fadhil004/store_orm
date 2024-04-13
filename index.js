const {sequelize, StoreManager, Store, Product, Category} = require('./models')
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
   
    // const stores = await Store.findAll({
    //     where: {
    //         id: 1
    //     },
    //     include: [StoreManager]
    // });
    
    // console.log(JSON.parse(JSON.stringify(stores)))

    // 
    // await Product.create({
    //     name: faker.animal.cat(),
    //     price: faker.datatype.number(),
    //     StoreId: 1
    // })

    // await Product.create({
    //     name: faker.animal.cat(),
    //     price: faker.datatype.number(),
    //     StoreId: 1
    // })
    
    // await Product.create({
    //     name: faker.animal.bear(),
    //     price: faker.datatype.number(),
    //     StoreId: 2
    // })

    // await Product.create({
    //     name: faker.animal.bear(),
    //     price: faker.datatype.number(),
    //     StoreId: 2
    // })

    // const stores = await Store.findAll({
    //     include: [Product, StoreManager]
    // })
    // console.log("All Stores:", JSON.stringify(stores,null,2))
    //await sequelize.sync()

    // await Store.create({
    //     name: 'M:N store',
    //     address: faker.address.streetAddress(),
    //     email: faker.internet.email(),
    //     phone: faker.phone.number(),
    //     Categories: [{
    //         name: 'Electronics',
    //         description: 'selling electricity'
    //     },{
    //         name: 'Fashion',
    //         description: 'selling fashion'
    //     }]

    // }, {
    //     include: [Category]
    // })

    // const stores = await Store.findAll({
    //     include: [Product, StoreManager, Category]
    // })
    // console.log("All Stores:", JSON.stringify(stores,null,2))
    await StoreManager.create({
        name: faker.person.firstName(),
        phone: faker.phone.number(),
        email: 'abc.com',
        salary: faker.datatype.number(),
        createdAt: new Date(),
        updatedAt: new Date()
    })

}

main().catch(e => console.log(e))