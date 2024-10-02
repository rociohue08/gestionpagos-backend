const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes'); 
const paymentRoutes = require('./src/routes/paymentRoutes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/api/users', userRoutes); // Usar rutas de usuarios
app.use('/api/payments', paymentRoutes); // Usar rutas de pagos

// Manejador de errores
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error'
    });
});

module.exports = app;
