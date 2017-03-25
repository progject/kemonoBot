const Telegraf = require('telegraf')
 
const app = new Telegraf("365502316:AAHrAhpajKXA_Wf2ChVSuflpCKTojPqqd3w")
 

// 기본적인 커맨드
app.command('tanosi', (ctx) => {
  console.log('tanosi', ctx.from)
  ctx.reply('와이~ 타노시이!')
})

app.command('sukgoi', (ctx) => {
  console.log('sukgoi', ctx.from)
  ctx.reply('슥고이!!')
})

 
app.hears('hi', (ctx) => ctx.reply(ctx.from))
 
app.on('sticker', (ctx) => ctx.reply('👍'))
 
app.startPolling()