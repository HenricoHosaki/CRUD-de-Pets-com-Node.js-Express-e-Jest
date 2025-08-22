const repoPet = require ('../repository/pet');
const repoP = new repoPet();

class ServicePet{

    getAll(){
        return repoP.getAll();
    }

    getOne(id){
        return repoP.getOne(id);
    }

    delete(id){
        return repoP.delete(id);
    }

    add(name){
        return repoP.add(name);
    }

    update(id, name){
        return repoP.update(id, name);
    }
}

module.exports = ServicePet;