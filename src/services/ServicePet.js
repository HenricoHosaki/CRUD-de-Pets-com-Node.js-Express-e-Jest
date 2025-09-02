const { where } = require("sequelize");
const Pet = require("../repository/RepoPet");

class ServicePet{

    async FindAll(){
        return await Pet.findAll();
    }

    async FindById(id){
        return await Pet.findByPk(id);
    }

    async Delete(id){
        return await Pet.destroy({
            where: {id}
        });
    }

    async Create(data){
        return await Pet.create(data);
    }

    async Update(id, data){
        return await Pet.update(data, {where:{id}});
    }
}

module.exports = new ServicePet();