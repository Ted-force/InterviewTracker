const express = require('express');
const router = express.Router();
const questionController = require('../controller/questionController');

router.get('/all/', questionController.getAllQuestions);
router.get('/topicwise/:topic', questionController.topicWiseQuestions);
router.get('/:index', questionController.getQuestion);

router.post('/create', questionController.createQuestion);

module.exports = router;