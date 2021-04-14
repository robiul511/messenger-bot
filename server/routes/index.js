const Controller = require('../controller')

const router = require('express').Router()

router.post('/message', Controller.sendMessage)
router.get('/message', Controller.getAllMessages)
router.get('/message/:id', Controller.getMessageById)

module.exports = router