describe("Pruebas del demo.test.js", () => {
  test("deben de ser iguales los strings", () => {
    // inicializacion
    const mensaje = "hola mundo";

    //estimulo
    const mensaje2 = `hola mundo`;

    //observer el comportamiento
    expect(mensaje).toBe(mensaje2);
  });
});
