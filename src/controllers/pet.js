const ServiceP = require ('../services/pet')
const service = new ServiceP();

class controllerPet {

    getAll(req, res){
        try {
            const allPetsNames = service.getAll();
            res.status(200).json({ allPetsNames });
        } catch(e) {
            res.status(500).json({ e });
        }
    }

    getOne(req, res){
        try {
            const id = parseInt(req.params.id, 10);
            const petName = service.getOne(id);
            res.status(200).json({ petName });
        } catch(e) {
            res.status(500).json({ e });
        }
    }

    delete(req, res){
        try {
            const id = parseInt(req.params.id, 10);
            const removedPet = service.getOne(id); // captura o nome antes de deletar
            service.delete(id);
            const allPetsNames = service.getAll();
            res.status(200).json({ deletedPet: removedPet, allPetsNames});
        } catch(e) {
            res.status(500).json({ e });
        }
    }

    add(req, res){
        try {
            const petName = req.body.name;
            service.add(petName);
            const allPetsNames = service.getAll();
            res.status(200).json({ petName, allPetsNames }); // retorna o nome adicionado
        } catch(e) {
            res.status(500).json({ e });
        }
    }

    update(req, res){
        try {
            const id = parseInt(req.params.id, 10);
            const petName = req.body.name;
            service.update(id, petName);
            const allPetsNames = service.getAll();
            res.status(200).json({ updatePet: petName, allPetsNames }); // retorna o novo nome
        } catch(e) {
            res.status(500).json({ e });
        }
    }
}

module.exports = controllerPet;