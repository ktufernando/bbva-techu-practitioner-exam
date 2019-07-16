// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 3000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = '24h';


// ============================
//  SEED de autenticación
// ============================
process.env.SEED = process.env.SEED || 'este-es-el-seed';

// ============================
//  Base de datos
// ============================
process.env.URLDB = 'mongodb+srv://usr-nodejs:25uE60N5RxGnO3EJ@cluster0-du2rr.mongodb.net/practitioner?retryWrites=true&w=majority';
