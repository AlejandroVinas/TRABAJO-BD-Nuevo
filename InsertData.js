const mongoose = require("mongoose");
const { getDb } = require("./modules/mongodb/mongodb.util");

// Importar los modelos y los datos
const desarrolladora = require("./modules/desarrolladora/desarrolladora.model");
const desarrolladoraData = require("./data/DatosDesarrolladora");

const editorial = require("./modules/editorial/editorial.model");
const editorialData = require("./data/DatosEditorial");

const editorialsmesa = require("./modules/editorialmesa/editorialmesa.model");
const editorialmesaData = require("./data/DatosEditorialsmesa");

const empleados = require("./modules/empleados/empleados.model");
const empleadosData = require("./data/DatosEmpleados");

const encargos = require("./modules/encargos/encargos.model");
const encargosData = require("./data/DatosEncargos");

const generos = require("./modules/generos/generos.model");
const generosData = require("./data/DatosGenero");

const generosmesa = require("./modules/generosmesa/generosmesa.model");
const generosmesaData = require("./data/DatosGenerosmesa");

const miembros = require("./modules/miembros/miembros.model");
const miembrosData = require("./data/DatosMiembros");

const sagas = require("./modules/sagas/sagas.model");
const sagasData = require("./data/DatosSagas");

const stockConduccion = require("./modules/stockConduccion/stockconduccion.model");
const stockConduccionData = require("./data/DatosStockconduccion");

const stockIndies = require("./modules/stockIndies/stockIndies.model");
const stockIndiesData = require("./data/DatosStock");

const stocksmesa = require("./modules/stocksmesa/stocksmesa.model");
const stocksmesaData = require("./data/DatosStocksmesa");

// Comprobar si hay datos
async function isDatabaseEmpty() {
    const count = await desarrolladora.countDocuments();
    return count === 0;
}

// Insertar datos
async function insertData() {
    await desarrolladora.insertMany(desarrolladoraData);
    await editorial.insertMany(editorialData);
    await editorialsmesa.insertMany(editorialmesaData);
    await empleados.insertMany(empleadosData);
    await encargos.insertMany(encargosData);
    await generos.insertMany(generosData);
    await generosmesa.insertMany(generosmesaData);
    await miembros.insertMany(miembrosData);
    await sagas.insertMany(sagasData);
    await stockConduccion.insertMany(stockConduccionData);
    await stockIndies.insertMany(stockIndiesData);
    await stocksmesa.insertMany(stocksmesaData);
}

// Insertar datos si no está vacía
async function insertDataIfEmpty() {
    try {
        const BasedeDatosVacia = await isDatabaseEmpty();
        if (BasedeDatosVacia) {
            console.log("La base de datos está vacía, se procede a insertar los datos...");
            await insertData();
        } else {
            console.log("La base de datos no está vacía, no se insertará nada.");
        }
    } catch (error) {
        console.error("Error al insertar los datos:", error);
    } finally {
        mongoose.disconnect();
    }
}

module.exports = insertDataIfEmpty;
