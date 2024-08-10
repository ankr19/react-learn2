const { createUser, deleteUser, getUser, getUserByName } = require('../controller/api');

const router = require('express').Router();


router.get("/get-user", getUser);
router.get("/get-userbyname", getUserByName);


router.post("/create-user", createUser);

router.delete("/delete-user/:id", deleteUser);

module.exports = router;
