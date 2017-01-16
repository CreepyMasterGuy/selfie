var Discord = require("discord.js");

module.exports = {
  enc: function (toEnc) {
    m.edit(Buffer.from(toEnc).toString('base64'))
    },
  dec: function(toDec) {
    m.edit( new Buffer(toDec, 'base64').toString())
  }
}
