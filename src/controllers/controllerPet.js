const serviceP = require('../services/ServicePet');

class ControllerPet {

    async FindAll(_, res) {
        try {
            const allPetsNames = await serviceP.FindAll();
            res.status(200).json({ allPetsNames });
        } catch(e) {
            res.status(500).json({ msg: e.message });
        }
    }

    async FindById(req, res) {
        try {
            const { id } = req.params;
            const result = await serviceP.FindById(id);
            res.status(200).json({ result });
        } catch(e) {
            res.status(500).json({ msg: e.message });
        }
    }

    async Delete(req, res) {
        try {
            const { id } = req.params;
            await serviceP.Delete(id);
            res.status(204).send();
        } catch(e) {
            res.status(500).json({ msg: e.message });
        }
    }

    async Create(req, res) {
        try {
            const data = req.body;
            const result = await serviceP.Create(data);
            res.status(201).json({ result });
        } catch(e) {
            res.status(500).json({ msg: e.message });
        }
    }

    async Update(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            await serviceP.Update(id, data);
            const result = await serviceP.FindById(id);
            res.status(200).json({ result });
        } catch(e) {
            res.status(500).json({ msg: e.message });
        }
    }
}

module.exports = ControllerPet;
