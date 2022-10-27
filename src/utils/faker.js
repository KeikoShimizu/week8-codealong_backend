// ****************************************************************************
// Core Modules
// ****************************************************************************
// ****************************************************************************
// Third Party Modules
// ****************************************************************************
const faker = require('faker')
// ****************************************************************************
// Custom Modules
// ****************************************************************************

// const getUserList = () => {
//     return (faker.fake('{{name.firstName}} {{name.lastName}} - {{phone.phoneNumber}}'))
// }

const getUserList =() => {
    const userList = []
    for(let i = 0; i < 50; i++ ){
        
        const jsonPack = {
            displayName: faker.internet.userName(),
            fName: faker.name.firstName(),
            //capital A to capital ZをOrganizeするためのもの
            mName: String.fromCharCode(faker.datatype.number({min: 65, max: 90})),
            lName:faker.name.lastName(),
            email: faker.internet.email()
        }
        userList.push(jsonPack)
    }
    return jsonPack
}

module.exports = getUserList