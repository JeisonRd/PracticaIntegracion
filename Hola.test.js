const holaMundo = require('./Hola');


test('Deberia de restornar "Hola Mundo" ', () => {
    expect(holaMundo()).toBe("Hola Mundo");
});

