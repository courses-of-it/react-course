import "@testing-library/jest-dom";

import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("debe retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo debe retornar un objeto con la propiedad nombre del parametro", () => {
    const name = "Pepe";

    const userTest = {
      uid: "ABC567",
      username: name,
    };

    const user = getUsuarioActivo(name);
    expect(user).toEqual(userTest);
  });
});
