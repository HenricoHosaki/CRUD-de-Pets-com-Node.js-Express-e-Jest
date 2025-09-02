const { describe, it, expect, beforeEach } = require('@jest/globals');
const ControllerPet = require('../controllers/controllerPet');

let controller;

beforeEach(() => {
  controller = new ControllerPet(); 
});

describe("ControllerPet - FindAll", () => {
  it("should return all pets", async () => {
    const req = {};
    let responseData;
    const res = {
      status: () => ({
        json: (data) => { responseData = data; }
      })
    };

    await controller.FindAll(req, res);
    console.log(responseData);
    expect(responseData).toHaveProperty("allPetsNames");
    expect(Array.isArray(responseData.allPetsNames)).toBe(true);
  });
});

describe("ControllerPet - FindById", () => {
  it("should return a specific pet by ID", async () => {
    const req = { params: { id: 1 } }; // ajuste para um ID válido no seu banco
    let responseData;
    const res = {
      status: () => ({
        json: (data) => { responseData = data; }
      })
    };

    await controller.FindById(req, res);
    console.log(responseData);
    expect(responseData).toHaveProperty("result");
    expect(responseData.result).toHaveProperty("id");
    expect(responseData.result).toHaveProperty("name");
    expect(responseData.result).toHaveProperty("breed");
    expect(responseData.result).toHaveProperty("color");
    expect(responseData.result).toHaveProperty("tutor");
    expect(responseData.result).toHaveProperty("birthDate");
  });
});

describe("ControllerPet - Create", () => {
  it("should add a new pet", async () => {
    const req = {
      body: {
        name: "Ant",
        breed: "Chow Chow",
        color: "Brown",
        tutor: "Lucas",
        birthDate: "2021-05-12"
      }
    };
    let responseData;
    const res = {
      status: () => ({
        json: (data) => { responseData = data; }
      })
    };

    await controller.Create(req, res);
    console.log(responseData);
    expect(responseData).toHaveProperty("result");
    expect(responseData.result.name).toBe("Ant");
    expect(responseData.result).toHaveProperty("breed", "Chow Chow");
  });
});

describe("ControllerPet - Update", () => {
  it("should update an existing pet", async () => {
    const req = {
      params: { id: 1 }, // ajuste para um ID válido
      body: {
        name: "Leo",
        breed: "Labrador",
        color: "Yellow",
        tutor: "Ana",
        birthDate: "2019-02-10"
      }
    };
    let responseData;
    const res = {
      status: () => ({
        json: (data) => { responseData = data; }
      })
    };

    await controller.Update(req, res);
    console.log(responseData);
    expect(responseData).toHaveProperty("result");
    expect(responseData.result.name).toBe("Leo");
    expect(responseData.result).toHaveProperty("breed", "Labrador");
  });
});

describe("ControllerPet - Delete", () => {
  it("should delete a pet", async () => {
    const req = { params: { id: 1 } }; // ajuste para um ID válido
    let responseStatus = null;
    const res = {
      status: (code) => {
        responseStatus = code;
        return { send: () => {} };
      }
    };

    await controller.Delete(req, res);
    expect(responseStatus).toBe(204);
  });
});
