const { User } = require('../models')

class Controller {
  static sendMessage (req, res,) {
    const {firstName, birthDate} = req.body
    console.log(firstName, birthDate)
    User.create({
      first_name: firstName,
      birth_date: birthDate
    }) 
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        res.json(err)
      })
    // res.send("masuk send message")
  }
  static getAllMessages (req, res) {
    // res.send("masuk getAllMessage")
    User.findAll()
      .then(dataUsers => {
        res.json(dataUsers)
      })
      .catch(err => {
        console.log(err)
      })
  }
  static getMessageById (req, res) {
    const id = +req.params.id
    User.findByPk(id)
      .then(dataUser => {
        res.json(dataUser)
      })
      .catch(err => {
        console.log(err)
        res.json(err)
      })
    // res.send(`masuk get message by id ${id}`)
  }
}


module.exports = Controller