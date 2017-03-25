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

app.command('test', (ctx) => {
  console.log('test', ctx.from)
  ctx.reply(ctx.from.first_name + '은(는) 바보같은 프렌즈구나')
})

 
app.hears('hi', (ctx) => ctx.reply(ctx.from.first_name))
 
app.on('sticker', (ctx) => ctx.reply('👍'))
 
app.startPolling()