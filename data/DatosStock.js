const mongoose = require('mongoose');
const StockIndies = require('../modules/stockIndies/stockIndies.model');

// Genero and Desarrolladora IDs based on the provided arrays
const generos = [
    mongoose.Types.ObjectId("60d0fe4f5311236168a109ca"), // Replace with actual ObjectId from Generos collection
    mongoose.Types.ObjectId("60d0fe4f5311236168a109cb"), // Replace with actual ObjectId from Generos collection
    mongoose.Types.ObjectId("60d0fe4f5311236168a109cc"), // Replace with actual ObjectId from Generos collection
    mongoose.Types.ObjectId("60d0fe4f5311236168a109cd"), // Replace with actual ObjectId from Generos collection
    mongoose.Types.ObjectId("60d0fe4f5311236168a109ce")  // Replace with actual ObjectId from Generos collection
];

const desarrolladores = [
    mongoose.Types.ObjectId("60d0fe4f5311236168a109cf"), // Replace with actual ObjectId from Desarrolladora collection
    mongoose.Types.ObjectId("60d0fe4f5311236168a109d0"), // Replace with actual ObjectId from Desarrolladora collection
    mongoose.Types.ObjectId("60d0fe4f5311236168a109d1"), // Replace with actual ObjectId from Desarrolladora collection
    mongoose.Types.ObjectId("60d0fe4f5311236168a109d2"), // Replace with actual ObjectId from Desarrolladora collection
    mongoose.Types.ObjectId("60d0fe4f5311236168a109d3")  // Replace with actual ObjectId from Desarrolladora collection
];

const datosstock = [
    new StockIndies({ ID: 1, Nombre: 'Hollow Knight', stock: 19, Genero: generos[0], Desarrollador: desarrolladores[0], Precio: 10 }),
    new StockIndies({ ID: 2, Nombre: 'Dredge', stock: 8, Genero: generos[1], Desarrollador: desarrolladores[1], Precio: 5 }),
    new StockIndies({ ID: 3, Nombre: 'Whos Lila', stock: 50, Genero: generos[2], Desarrollador: desarrolladores[2], Precio: 10 }),
    new StockIndies({ ID: 4, Nombre: 'Cruelty Squad', stock: 27, Genero: generos[3], Desarrollador: desarrolladores[3], Precio: 15 }),
    new StockIndies({ ID: 5, Nombre: 'Return of the Obra Dinn', stock: 6, Genero: generos[4], Desarrollador: desarrolladores[4], Precio: 15 })
];

module.exports = datosstock;