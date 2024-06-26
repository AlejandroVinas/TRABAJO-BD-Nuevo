var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

var MongoDBUtil = require('./modules/mongodb/mongodb.util');

console.log(MongoDBUtil);
MongoDBUtil.init();

try {
    const UserController = require('./modules/user/user.module')().UserController;
    console.log('UserController loaded:', !!UserController);
    const DesarrolladoraController = require('./modules/desarrolladora/desarrolladora.module')().DesarrolladoraController;
    console.log('DesarrolladoraController loaded:', !!DesarrolladoraController);
    const EditorialController = require('./modules/editorial/editorial.module')().EditorialController;
    console.log('EditorialController loaded:', !!EditorialController);
    const EditorialsmesaController = require('./modules/editorialsmesa/editorialsmesa.module')().EditorialsmesaController;
    console.log('EditorialsmesaController loaded:', !!EditorialsmesaController);
    const EmpleadosController = require('./modules/empleados/empleados.module')().EmpleadosController;
    console.log('EmpleadosController loaded:', !!EmpleadosController);
    const EncargosController = require('./modules/encargos/encargos.module')().EncargosController;
    console.log('EncargosController loaded:', !!EncargosController);
    const GenerosController = require('./modules/generos/generos.module')().GenerosController;
    console.log('GenerosController loaded:', !!GenerosController);
    const GenerosmesaController = require('./modules/generosmesa/generosmesa.module')().GenerosmesaController;
    console.log('GenerosmesaController loaded:', !!GenerosmesaController);
    const MiembrosController = require('./modules/miembros/miembros.module')().MiembrosController;
    console.log('MiembrosController loaded:', !!MiembrosController);
    const SagasController = require('./modules/sagas/sagas.module')().SagasController;
    console.log('SagasController loaded:', !!SagasController);
    const StockconduccionController = require('./modules/stockConduccion/stockconduccion.module')().StockconduccionController;
    console.log('StockConduccionController loaded:', !!StockconduccionController);
    const StockIndiesController = require('./modules/stockIndies/stockIndies.module')().StockIndiesController;
    console.log('StockIndiesController loaded:', !!StockIndiesController);
    const StocksmesaController = require('./modules/stocksmesa/stocksmesa.module')().StocksmesaController;
    console.log('StocksmesaController loaded:', !!StocksmesaController);

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(bodyParser.json());

    app.use('/users', UserController);
    app.use('/desarrolladora', DesarrolladoraController);
    app.use('/editorial', EditorialController);
    app.use('/editorialsmesa', EditorialsmesaController);
    app.use('/empleados', EmpleadosController);
    app.use('/encargos', EncargosController);
    app.use('/generos', GenerosController);
    app.use('/generosmesa', GenerosmesaController);
    app.use('/miembros', MiembrosController);
    app.use('/sagas', SagasController);
    app.use('/stockconduccion', StockconduccionController);
    app.use('/stockindies', StockIndiesController);
    app.use('/stocksmesa', StocksmesaController);
} catch (error) {
    console.error("Error loading controllers:", error);
}

const insertDataIfEmpty = require('./InsertData');
insertDataIfEmpty();

app.get('/', function (req, res) {
    var pkg = require(path.join(__dirname, 'package.json'));
    res.json({
        name: pkg.name,
        version: pkg.version,
        status: 'up'
    });
});

// Queries for datoseditorial
app.get('/data/datoseditorial/titles/:minTitles', (req, res) => {
    const minTitles = parseInt(req.params.minTitles, 10);
    const editorials = datoseditorial.filter(e => e.NumeroDeTitulos > minTitles);
    res.json(editorials);
});

app.get('/data/datoseditorial/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const editorial = datoseditorial.find(e => e.ID === id);
    res.json(editorial || {});
});

// Queries for datosdesarrolladora
app.get('/data/datosdesarrolladora/name/:name', (req, res) => {
    const name = req.params.name;
    const developer = datosdesarrolladora.find(d => d.Desarrolladora === name);
    res.json(developer || {});
});

app.get('/data/datosdesarrolladora/id/:minId', (req, res) => {
    const minId = parseInt(req.params.minId, 10);
    const developers = datosdesarrolladora.filter(d => d.ID > minId);
    res.json(developers);
});

// Queries for datoseditoriaslsmesa
app.get('/data/datoseditorialsmesa/games/:minGames', (req, res) => {
    const minGames = parseInt(req.params.minGames, 10);
    const editorials = datoseditoriaslsmesa.filter(e => e.juegos_en_tienda > minGames);
    res.json(editorials);
});

app.get('/data/datoseditorialsmesa/name/:name', (req, res) => {
    const name = req.params.name;
    const editorial = datoseditoriaslsmesa.find(e => e.nombre === name);
    res.json(editorial || {});
});

// Queries for datosEmpleados
app.get('/data/datosEmpleados/hiredAfter/:date', (req, res) => {
    const date = new Date(req.params.date);
    const employees = datosEmpleados.filter(e => new Date(e.fecha_contratacion) > date);
    res.json(employees);
});

app.get('/data/datosEmpleados/role/:role', (req, res) => {
    const role = req.params.role;
    const employees = datosEmpleados.filter(e => e.cargo === role);
    res.json(employees);
});

// Queries for datosEncargos
app.get('/data/datosEncargos/client/:clientId', (req, res) => {
    const clientId = parseInt(req.params.clientId, 10);
    const orders = datosEncargos.filter(o => o.id_cliente === clientId);
    res.json(orders);
});

app.get('/data/datosEncargos/product/:productId', (req, res) => {
    const productId = parseInt(req.params.productId, 10);
    const orders = datosEncargos.filter(o => o.id_producto === productId);
    res.json(orders);
});

// Queries for datosgenero
app.get('/data/datosgenero/name/:name', (req, res) => {
    const name = req.params.name;
    const genre = datosgenero.find(g => g.Genero === name);
    res.json(genre || {});
});

app.get('/data/datosgenero/id/:minId', (req, res) => {
    const minId = parseInt(req.params.minId, 10);
    const genres = datosgenero.filter(g => g.ID > minId);
    res.json(genres);
});

// Queries for datosgenerosmesa
app.get('/data/datosgenerosmesa/name/:name', (req, res) => {
    const name = req.params.name;
    const genre = datosgenerosmesa.find(g => g.Genero === name);
    res.json(genre || {});
});

app.get('/data/datosgenerosmesa/id/:maxId', (req, res) => {
    const maxId = parseInt(req.params.maxId, 10);
    const genres = datosgenerosmesa.filter(g => g.ID < maxId);
    res.json(genres);
});

// Queries for datosMiembros
app.get('/data/datosMiembros/lastname/:lastname', (req, res) => {
    const lastname = req.params.lastname;
    const members = datosMiembros.filter(m => m.apellido === lastname);
    res.json(members);
});

app.get('/data/datosMiembros/email/:email', (req, res) => {
    const email = req.params.email;
    const member = datosMiembros.find(m => m.correo === email);
    res.json(member || {});
});

// Queries for datosSagas
app.get('/data/datosSagas/titles/:minTitles', (req, res) => {
    const minTitles = parseInt(req.params.minTitles, 10);
    const sagas = datosSagas.filter(s => s.NumeroDeTitulos > minTitles);
    res.json(sagas);
});

app.get('/data/datosSagas/name/:name', (req, res) => {
    const name = req.params.name;
    const saga = datosSagas.find(s => s.NombreSaga === name);
    res.json(saga || {});
});

// Queries for datosstock
app.get('/data/datosstock/genre/:genre', (req, res) => {
    const genre = req.params.genre;
    const games = datosstock.filter(g => g.Genero === genre);
    res.json(games);
});

app.get('/data/datosstock/developer/:developer', (req, res) => {
    const developer = req.params.developer;
    const games = datosstock.filter(g => g.Desarrollador === developer);
    res.json(games);
});

// Queries for datosstockconduccion
app.get('/data/datosstockconduccion/editorial/:editorial', (req, res) => {
    const editorial = req.params.editorial;
    const games = datosstockconduccion.filter(g => g.Editorial === editorial);
    res.json(games);
});

app.get('/data/datosstockconduccion/saga/:saga', (req, res) => {
    const saga = req.params.saga;
    const games = datosstockconduccion.filter(g => g.Saga === saga);
    res.json(games);
});

// Queries for datosstocksmesa
app.get('/data/datosstocksmesa/genre/:genre', (req, res) => {
    const genre = req.params.genre;
    const games = datosstocksmesa.filter(g => g.Genero.includes(genre));
    res.json(games);
});

app.get('/data/datosstocksmesa/editorial/:editorial', (req, res) => {
    const editorial = req.params.editorial;
    const games = datosstocksmesa.filter(g => g.Editorial === editorial);
    res.json(games);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({
        message: res.locals.message,
        error: res.locals.error
    });
});

module.exports = app;
const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
