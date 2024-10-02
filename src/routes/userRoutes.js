const express = require('express');
const { createUser } = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser); // Ruta para crear usuario

module.exports = router;
