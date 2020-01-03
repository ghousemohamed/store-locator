const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        success: true, 
        msg: "Connected to the backend server"
    })
})

module.exports = router;