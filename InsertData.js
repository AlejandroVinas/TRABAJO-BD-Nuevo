const mongoose = require("mongoose");

// Importar los modelos y los datos



// Conectar
mongoose.connect("mongodb://localhost:27017/Tienda", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Comprobar Si hay datos
async function isDatabaseEmpty() {
    const count = await desarrolladora.countDocuments();
    return count === 0;
}

// Insertar datos
async function insertData() {

}

// insertar datos si no está vacía
async function insertDataIfEmpty() {
    try {
    const BasedeDatosVacia = await isDatabaseEmpty();
    if (await isDatabaseEmpty()) {
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