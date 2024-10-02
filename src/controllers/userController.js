const db = require('../database/db');

// Función para crear usuario
const createUser = async (req, res) => {
    const { username, role } = req.body;
    try {
        const [result] = await db.query('INSERT INTO users (username, role) VALUES (?, ?)', [username, role]);
        res.status(201).json({ id: result.insertId, username, role });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
};

module.exports = { createUser };
