const db = require('../database/db');
const fs = require('fs');

// Función para registrar un pago
const registerPayment = async (req, res) => {
    const { userId, amount } = req.body;
    try {
        const [result] = await db.query('INSERT INTO payments (user_id, amount) VALUES (?, ?)', [userId, amount]);
        res.status(201).json({ id: result.insertId, userId, amount });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error registering payment' });
    }
};

// Función para subir recibos
const uploadReceipt = async (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).json({ message: 'No file uploaded' });
    }
    const targetPath = `./uploads/${file.originalname}`;
    fs.renameSync(file.path, targetPath);
    res.status(201).json({ message: 'File uploaded successfully', path: targetPath });
};

module.exports = { registerPayment, uploadReceipt };
