var Telegraf = require('telegraf')
var TelegrafWit = require('telegraf-wit')

var app = new Telegraf(process.env.BOT_TOKEN)
var wit = new TelegrafWit(process.env.WIT_TOKEN)

app.use(Telegraf.memorySession())
app.use(wit.middleware())

wit.onMessage(function * () {
  yield this.reply(this.state.wit.message)
})

app.startPolling()