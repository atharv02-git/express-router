const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('dog route home page')
})

router.post('/', (req, res) => {
    res.send('Posting dogs')
})

router.get('/:id', (req, res) => {
    res.send('viewing one dog')
})
router.get('/:id/edit', (req, res) => {
    res.send('editing one dog')
})


module.exports = router;