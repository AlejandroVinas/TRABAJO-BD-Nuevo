const mongoose = require("mongoose");

// Importar los modelos y los datos
const Desarrolladora = require("./modules/desarrolladora/desarrolladora.model");
const desarrolladoraData = require("./data/DatosDesarrolladora");

const Editorial = require("./modules/editorial/editorial.model");
const editorialData = require("./data/DatosEditorial");

const Editorialsmesa = require("./modules/editorialsmesa/editorialsmesa.model");
const editorialsmesaData = require("./data/DatosEditorialsmesa");

const Empleados = require("./modules/empleados/empleados.model");
const empleadosData = require("./data/DatosEmpleados");

const Encargos = require("./modules/encargos/encargos.model");
const encargosData = require("./data/DatosEncargos");

const Generos = require("./modules/generos/generos.model");
const generosData = require("./data/DatosGenero");

const Generosmesa = require("./modules/generosmesa/generosmesa.model");
const generosmesaData = require("./data/DatosGenerosmesa");

const Miembros = require("./modules/miembros/miembros.model");
const miembrosData = require("./data/DatosMiembros");

const Sagas = require("./modules/sagas/sagas.model");
const sagasData = require("./data/DatosSagas");

const StockConduccion = require("./modules/stockConduccion/stockconduccion.model");
const stockConduccionData = require("./data/DatosStockconduccion");

const StockIndies = require("./modules/stockIndies/stockIndies.model");

const Stocksmesa = require("./modules/stocksmesa/stocksmesa.model");
const stocksmesaData = require("./data/DatosStocksmesa");

// Comprobar si hay datos
async function isDatabaseEmpty() {
    const desarrolladoraCount = await Desarrolladora.countDocuments();
    const editorialCount = await Editorial.countDocuments();
    const editorialsmesaCount = await Editorialsmesa.countDocuments();
    const empleadosCount = await Empleados.countDocuments();
    const encargosCount = await Encargos.countDocuments();
    const generosCount = await Generos.countDocuments();
    const generosmesaCount = await Generosmesa.countDocuments();
    const miembrosCount = await Miembros.countDocuments();
    const sagasCount = await Sagas.countDocuments();
    const stockConduccionCount = await StockConduccion.countDocuments();
    const stockIndiesCount = await StockIndies.countDocuments();
    const stocksmesaCount = await Stocksmesa.countDocuments();

    return (
        desarrolladoraCount === 0 &&
        editorialCount === 0 &&
        editorialsmesaCount === 0 &&
        empleadosCount === 0 &&
        encargosCount === 0 &&
        generosCount === 0 &&
        generosmesaCount === 0 &&
        miembrosCount === 0 &&
        sagasCount === 0 &&
        stockConduccionCount === 0 &&
        stockIndiesCount === 0 &&
        stocksmesaCount === 0
    );
}

// Insertar datos
async function insertData() {
    try {
        await Desarrolladora.insertMany(desarrolladoraData);
        await Editorial.insertMany(editorialData);
        await Editorialsmesa.insertMany(editorialsmesaData);
        await Empleados.insertMany(empleadosData);
        await Encargos.insertMany(encargosData);
        await Generos.insertMany(generosData);
        await Generosmesa.insertMany(generosmesaData);
        await Miembros.insertMany(miembrosData);
        await Sagas.insertMany(sagasData);
        await StockConduccion.insertMany(stockConduccionData);
        await Stocksmesa.insertMany(stocksmesaData);

        // Obtener los ObjectId insertados
        const generosDocs = await Generos.find();
        const desarrolladoraDocs = await Desarrolladora.find();

        // Mapear los nombres de generos y desarrolladoras a sus respectivos ObjectId
        const generosMap = {};
        generosDocs.forEach(doc => {
            generosMap[doc.Genero] = doc._id;
        });

        const desarrolladoraMap = {};
        desarrolladoraDocs.forEach(doc => {
            desarrolladoraMap[doc.Desarrolladora] = doc._id;
        });

        // Actualizar datos de stockIndies con ObjectIds reales
        const stockIndiesDataWithIds = [
            new StockIndies({ ID: 1, Nombre: 'Hollow Knight', stock: 19, Genero: generosMap['Metroidvania'], Desarrollador: desarrolladoraMap['Team Cherry'], Precio: 10 }),
            new StockIndies({ ID: 2, Nombre: 'Dredge', stock: 8, Genero: generosMap['Pesca'], Desarrollador: desarrolladoraMap['Black Salt Games'], Precio: 5 }),
            new StockIndies({ ID: 3, Nombre: 'Whos Lila', stock: 50, Genero: generosMap['Surrealismo'], Desarrollador: desarrolladoraMap['Garage Heathen'], Precio: 10 }),
            new StockIndies({ ID: 4, Nombre: 'Cruelty Squad', stock: 27, Genero: generosMap['Sátira'], Desarrollador: desarrolladoraMap['Consumer Softproducts'], Precio: 15 }),
            new StockIndies({ ID: 5, Nombre: 'Return of the Obra Dinn', stock: 6, Genero: generosMap['Misterio'], Desarrollador: desarrolladoraMap['Lucas Pope'], Precio: 15 })
        ];

        // Insertar datos en stockIndies
        await StockIndies.insertMany(stockIndiesDataWithIds);

        console.log("Datos insertados correctamente.");
    } catch (error) {
        console.error("Error al insertar los datos:", error);
    }
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