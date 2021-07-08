const express = require('express')
const router = express.Router();
const{ add_Course,get_Course }=require('../controllers/course');
const { authMiddleware } = require('../middleware/userAuth');

router.post('/newcourse',authMiddleware,add_Course)
router.get('/',get_Course)



module.exports = router;

