const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('All shelters')
})

router.post('/', (req, res) => {
    res.send('Posting shelters')
})

router.get('/:id', (req, res) => {
    res.send('viewing one shelter')
})
router.get('/:id/edit', (req, res) => {
    res.send('editing one shelter')
})

module.exports = router;