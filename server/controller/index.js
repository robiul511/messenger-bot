class Controller {
  static sendMessage (req, res,) {
    res.send("masuk send message")
  }
  static getAllMessages (req, res) {
    res.send("masuk getAllMessage")
  }
  static getMessageById (req, res) {
    const id = +req.params.id
    res.send(`masuk get message by id ${id}`)
  }
}


module.exports = Controller