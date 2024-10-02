const express = require('express');
const { registerPayment, uploadReceipt } = require('../controllers/paymentController');

const router = express.Router();

router.post('/', registerPayment); // Ruta para registrar pago
router.post('/upload', uploadReceipt); // Ruta para subir recibo

module.exports = router;
