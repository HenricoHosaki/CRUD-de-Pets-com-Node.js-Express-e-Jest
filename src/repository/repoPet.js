const database = require("./database")

class RepoPet{
    constructor(){
        this.repository = database.db.define("Pets",{
            id:{
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name:{
                type: database.db.Sequelize.STRING,
            },
            breed: {
                type: database.db.Sequelize.STRING
            },
            color:{
                type: database.db.Sequelize.STRING
            },
            tutor:{
                type: database.db.Sequelize.STRING,
            },
             birthDate: {
                type: database.db.Sequelize.DATE
            }
        })
    }
}
module.exports = new RepoPet().repository;