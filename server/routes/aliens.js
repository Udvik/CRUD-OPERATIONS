const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

// Get all aliens
router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find();
        res.json(aliens);
    } catch (err) {
        res.send('Error: ' + err);
    }
});

// Get alien by ID
router.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch (err) {
        res.send('Error: ' + err);
    }
});

// Add a new alien
router.post('/', async (req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    });

    try {
        const a1 = await alien.save();
        res.json(a1);
    } catch (err) {
        res.send('Error');
    }
});

// Update an alien's subscription status
router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        if (!alien) return res.status(404).json({ message: 'Alien not found' });
        alien.sub = req.body.sub;
        const a1 = await alien.save();
        res.json(a1);
    } catch (err) {
        res.send('Error');
    }
});

// Delete an alien by ID
router.delete('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        if (!alien) return res.status(404).json({ message: 'Alien not found' });

        await alien.deleteOne();
        res.json({ message: 'Alien deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
