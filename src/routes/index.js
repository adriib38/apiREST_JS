const { Router } = require('express');
const router = Router();

//Routes
router.get('/test', (req, res) => {
    const data = {
        "name": "Adrian",
        "website": "www.hola.com"
    }
    res.json(data);
});

module.exports = router;