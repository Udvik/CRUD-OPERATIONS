/*const express = require('express');
const router = express.Router();
const Alien = require('../models/schema');

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
        branch: req.body.tech,
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
*/

const express = require('express');
const router = express.Router();
const Alien = require('../models/schema'); // Assuming the model file is named 'alien.js'

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
        branch: req.body.branch, // Corrected key name
        sub: req.body.sub,
        isFriendly: req.body.isFriendly, // Added the isFriendly attribute
        age: req.body.age // Added the age attribute
    });

    try {
        const a1 = await alien.save();
        res.json(a1);
    } catch (err) {
        res.send('Error: ' + err);
    }
});

// Update an alien's attributes
router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        if (!alien) return res.status(404).json({ message: 'Alien not found' });

        // Update the attributes
        if (req.body.name != null) alien.name = req.body.name;
        if (req.body.branch != null) alien.branch = req.body.branch;
        if (req.body.sub != null) alien.sub = req.body.sub;
        if (req.body.isFriendly != null) alien.isFriendly = req.body.isFriendly;
        if (req.body.age != null) alien.age = req.body.age;

        const a1 = await alien.save();
        res.json(a1);
    } catch (err) {
        res.send('Error: ' + err);
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
