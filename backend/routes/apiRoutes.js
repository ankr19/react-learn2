const { createUser } = require('../controller/api');

const router = require('express').Router();


router.post("/create-user", createUser);


module.exports = router;
