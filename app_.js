//==================================================================================
//
//           KEMONOBOT - node.js
//
//==================================================================================
// 모둘을 정의한다
const Telegraf = require('telegraf');
const readline = require('readline');
const fs 	   = require('fs');
const express  = require('express');
const pug 	   = require('pug');

//
const r   = readline.createInterface({ input:process.stdin, output:process.stdout });
const web = express();

// 텔레그램 봇 모듈
const app = new Telegraf("365502316:AAHrAhpajKXA_Wf2ChVSuflpCKTojPqqd3w");
 
console.log(" Welcome to kemonoBot ");


process.on('uncaughtException', (err) => {
	console.log(err);
});

let checkMobile = 0;


// 편의성을 위하여 웹사이트를 제공한다.
web.get('/', (request, response) => {
	let ua = request.headers['user-agent'].toLowerCase();
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(ua)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(ua.substr(0,4))) {
		checkMobile = 2;
	} else { checkMobile = 1; }
	
	if (checkMobile == 1) {
		fs.readFile('main.pug', 'utf8', (error, file) => {
			const fn = pug.compile(file);
			const output = fn({

			});
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(output);
		});
	} else if(checkMobile == 2) {
		fs.readFile('mobile.pug', 'utf8', (error, file) => {
			const fn = pug.compile(file);
			const output = fn({

			});
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(output);
		});
	}
}).listen(3000);

web.get('/m', (request, response) => {
	fs.readFile('mobile.pug', (error, file) => {
		response.end(file);
	})	
});

web.get('/kemono.jpg', (request, response) => {
	fs.readFile('kemono.jpg', (error, file) => {
		response.end(file);
	})	
});

// 기본적인 커맨드
app.command('tanosi', (ctx) => {
  	console.log('tanosi', ctx.from);
  	ctx.reply('와이~ 타노시이!');
});

app.command('sukgoi', (ctx) => {
  	console.log('sukgoi', ctx.from);
  	ctx.reply('슥고이!!');
});

app.command('test', (ctx) => {
  	console.log('test', ctx.from);
  	ctx.reply(ctx.from.first_name + '은(는) 바보같은 프렌즈구나');
});

// 여러 사용자가 있을때
app.command('tanosi@kemonoBot', (ctx) => {
  	console.log('tanosis', ctx.from);
  	ctx.reply('와이~ 타노시이!');
});

app.command('sukgoi@kemonoBot', (ctx) => {
	console.log('sukgois', ctx.from);
  	ctx.reply('슥고이!!');
});

 
app.hears('안녕', (ctx) => {
	console.log(ctx.from);
	ctx.reply('안녕' + ctx.from.first_name + '프렌즈야');
});
 
app.on('sticker', (ctx) => ctx.reply('👍'));

// 명령을 입력받는다.
r.prompt() ;
r.on('line', (line) => { 
	if (line == 'exit') { 
		r.close();
	} 
	process.emit('tanosi'); 
	r.prompt() ;
	r.on('close', () => { 
		process.exit();
	});
});

app.startPolling();
