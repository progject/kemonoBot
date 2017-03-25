const Telegraf = require('telegraf')
const readline = require('readline')
const r = readline.createInterface({ input:process.stdin, output:process.stdout })

const app = new Telegraf("365502316:AAHrAhpajKXA_Wf2ChVSuflpCKTojPqqd3w")
 
console.log(" Welcome to kemonoBot ")

console.log(ctx.message)

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

// 여러 사용자가 있을때
app.command('tanosi@kemonoBot', (ctx) => {
  	console.log('tanosis', ctx.from)
  	ctx.reply('와이~ 타노시이!')
})

app.command('sukgoi@kemonoBot', (ctx) => {
	console.log('sukgois', ctx.from)
  	ctx.reply('슥고이!!')
})

 
app.hears('안녕' in , (ctx) => {
	console.log(ctx.from)
	ctx.reply('안녕' + ctx.from.first_name + '프렌즈야')
})
 
app.on('sticker', (ctx) => ctx.reply('👍'))

app.on((ctx) => {
	r.setPrompt('> ')
	r.prompt() 
	app.on()
	r.on('line', function(line){ 
	if (line == 'exit') { 
		r.close()
	} 
	console.log(line) 
	r.prompt() 
	})
	r.on('close', function() { 
		process.exit()
	})
})

app.startPolling()