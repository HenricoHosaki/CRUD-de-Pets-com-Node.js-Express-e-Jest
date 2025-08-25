const { describe, it, expect } = require('@jest/globals');
const ControllerPet = require('../controllers/pet');

let controller;

beforeEach(() => {
  controller = new ControllerPet(); 
})

describe("First test of controllerPet", () => {
    it("getAll should return all pets", () => {
        const req = {};
        let responseData;
        const res = {
            status: () => ({
                json: (data) => { responseData = data; }
            })
        };

        controller.getAll(req, res);
        console.log(responseData);
        expect(responseData).toHaveProperty("allPetsNames");
    });
});

describe("Second test of controllerPet", () => {
    it("getOne should return a specific pet", () => {
        const index = 1;
        const req = { params: { id: index } };
        let responseData;
        const res = { status: () => ({ json: (data) => { responseData = data; } }) };

        controller.getOne(req, res);
        console.log(responseData);
        expect(responseData).toHaveProperty("petName");
    });
});

describe("Third test of controllerPet", () => {
    it("add should add a pet to the list", () => {
        const name = "Ant";
        const req = { body: { name } };
        let responseData;
        const res = { status: () => ({ json: (data) => { responseData = data; } }) };

        controller.add(req, res);
        console.log(responseData); 
        expect(responseData).toHaveProperty("petName", name);
    });
});

describe("Fourth test of controllerPet", () => {
    it("delete should remove a pet from the list", () => {
        const index = 0;
        const req = { params: { id: index } };
        let responseData;
        const res = { status: () => ({ json: (data) => { responseData = data; } }) };

        controller.delete(req, res);
        console.log(responseData);
        expect(responseData).toHaveProperty("removedPet");
    });
});

describe("Fifth test of controllerPet", () => {
    it("update should update a pet in the list", () => {
        const index = 0;
        const name = "Leo";
        const req = { params: { id: index }, body: { name } };
        let responseData;
        const res = { status: () => ({ json: (data) => { responseData = data; } }) };

        controller.update(req, res);
        console.log(responseData);
        expect(responseData).toHaveProperty("updatePet");
    });
});