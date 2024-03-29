/*
let frame = document.createElement('div');
	frame.id = 'player';
	document.body.appendChild(frame);
	var player;
	function onYouTubeIframeAPIReady() {
		player = new YT.Player('player', {
			height: '720',
			width: '1280',
			videoId: 'tqLjS0bVFYM',
			events: {
				'onStateChange': endVideo
				},
			playerVars: {
				'autoplay': 1,
				'controls': 0,
				'disablekb': 1
			}
		});
	}
function endVideo(event){
	if(event.data === 0){
		document.getElementById('player').remove();
		action();
	}
console.log(event);
}*/

/*добавляем коробку со сторонами пропорциональными локации(что бы не было искажения)*/
	let container = document.createElement('article');
	container.id = 'container';
	container.style.width = document.body.offsetHeight/0.5625+'px';
	document.body.appendChild(container);
	document.getElementById('container').addEventListener('click', click);
	window.addEventListener('resize', ()=>{
		container.style.width = document.body.offsetHeight/0.5625+'px';
	});

/*добавляем grid коробку для игровых элементов*/
	let grid = document.createElement('div');
	grid.id = 'grid';
	container.appendChild(grid);

const eventReady = new CustomEvent('ready',{bubbles: true});

const background = {
	id: 'background',
	src: 'img/bg_ho.png',
	width: '100%',
	height: '100%',
	parent: container
}

const tutorial = {
	id: 'tutorial',
	src: 'img/Tutorial1.png',
	width: '30%',
	height: '85%',
	parent: grid
}

const tutorialTXT ={
		id :'tutorialTXT',
		src : '',
		size: 'tutorial',
		width :'30%',
		height : '85%',
		parent : grid}

const gui = {
	id: 'gui',
	src: 'img/ho_gui.png',
	width: '100%',
	height: '100%',
	parent: grid
}

const fan = {
	id: 'fan',
	src: 'img/fan.png',
	width: '100%',
	height: '',
	parent: grid
}

const basket = {
	id: 'basket',
	src: 'img/basket.png',
	width: '50%',
	height: '',
	parent: grid
}

const book = {
	id: 'book',
	src: 'img/book.png',
	width: '100%',
	height: '',
	parent: grid
}

const shoe = {
	id: 'shoe',
	src: 'img/shoe.png',
	width: '75%',
	height: '',
	parent: grid
}

const cover = {
	id: 'cover',
	src: 'img/cover.png',
	width: '',
	height: '',
	parent: container
}

const logo = {
	id: 'logo',
	src: 'img/logo.png',
	width: '60%',
	height: '',
	parent: grid
}

const button = {
	id: 'button',
	src: 'img/button.png',
	width: '35%',
	height: '',
	parent: grid
}

const textTutorial1 = {
	id: 'tutorialTXT',
	color: 'rgba(79,1,1,1)',
	font: 'bold 80px "Unna", serif',
	align: 'center',
	text: 'FIND ALL THE',
	x: 515,
	y: 225,
	widthMAX: 1000
};

const textTutorial2 = {
	id: 'tutorialTXT',
	color: 'rgba(79,1,1,1)',
	font: 'bold 80px "Unna", serif',
	align: 'center',
	text: 'HIDDEN OBJECTS!',
	x: 515,
	y: 325,
	widthMAX: 1000
};

const textFan = {
	id: 'gui',
	color: 'rgba(79,1,1,1)',
	font: 'bold 60px "Unna", serif',
	align: 'center',
	text: 'Fan',
	x: 543.2,
	y: 200,
	widthMAX: 543.2
};

const textBasket = {
	id: 'gui',
	color: 'rgba(79,1,1,1)',
	font: 'bold 60px "Unna", serif',
	align: 'center',
	text: 'Basket',
	x: 1086.4,
	y: 200,
	widthMAX: 543.2
};

const textBook = {
	id: 'gui',
	color: 'rgba(79,1,1,1)',
	font: 'bold 60px "Unna", serif',
	align: 'center',
	text: 'Book',
	x: 1629.6,
	y: 200,
	widthMAX: 543.2
};

const textShoe = {
	id: 'gui',
	color: 'rgba(79,1,1,1)',
	font: 'bold 60px "Unna", serif',
	align: 'center',
	text: 'Shoe',
	x: 2172.8,
	y: 200,
	widthMAX: 543.2
};

const textButton = {
	id: 'button',
	color: 'rgba(11,35,0,1)',
	font: '60px "Unna", serif',
	align: 'center',
	text: 'PLAY FREE',
	x: 276,
	y: 75,
	widthMAX: 500
}

let clickableObjects = [
	'fan',
	'basket',
	'book',
	'shoe'
];

let count = {i:1,direction: true};
let pulseID;

function paintCanvasFromImg(src,id){
	let box = document.getElementById(id);
	let ctx = box.getContext('2d');
	let img = new Image();
	img.src = src;
	img.addEventListener('load', ()=>{
			box.width = img.naturalWidth
			box.height = img.naturalHeight;
			ctx.drawImage(img,0,0,box.width,box.height);
			box.dispatchEvent(eventReady);
		}, false);
}

/*	param = {
		id: строка с id элемента,
		src: строка с URL или пустая строка, можно использовать здесь dataURL base64
		Size: id элементa с которого брать размер
		width: css размеры,
		height: css размеры,
		parent: элемент в который добавляем
}*/
function appendCanvas(
		{id = 'foo',
		src = '',
		size = '',
		width = '25%',
		height = '25%',
		parent = document.body
		} = {}){
		let box = document.createElement('canvas');
		box.id = id;
		parent.appendChild(box);
		box.style.width = width;
		box.style.height = height;
		if(src.length!==0){
			paintCanvasFromImg(src, id);
		}else{
			let boxSize = document.getElementById(size);
			box.width = boxSize.width;
			box.height = boxSize.height;
			setTimeout(()=>{box.dispatchEvent(eventReady);},0);
		}
}

/*param = {
	id текст с id canvas:,
	color цвет текста:,
	font css свойство font:,
	align: css свойства text align,
	text: сам текст,
	x: позиция,
	y: позиция,
	widthMAX: максимальная ширина
}
*/
function paintText(
	{id = 'body',
	color = 'black',
	font = '30px serif',
	align = '',
	text = 'foo',
	x = 0,
	y = 0,
	widthMAX = 300
	}={}){
	let box = document.getElementById(id);
	let ctx = box.getContext('2d');
	ctx.fillStyle = color;
	ctx.font = font;
	ctx.textAlign = align;
	ctx.fillText(text, x, y, widthMAX);
}

function t1(event){
	if(event.target == document.getElementById('tutorialTXT')){
		paintText(textTutorial1);
		paintText(textTutorial2);
		console.log('text added')
		document.body.removeEventListener('ready', t1)
	}
}

function t2(event){
	if(event.target == document.getElementById('gui') ){
		paintText(textFan);
		paintText(textBasket);
		paintText(textBook);
		paintText(textShoe);
		document.body.removeEventListener('ready', t2)
	}
}

function t3() {
	if(event.target == document.getElementById('button')){
	paintText(textButton);
	console.log('text added')
	document.body.removeEventListener('ready', t3)
	}
}

function click(event){
	let xClck = event.clientX;
	let yClck = event.clientY
	for(let i of clickableObjects){
		let box = document.getElementById(i);
		let x = box.getBoundingClientRect().x;//кординаты верхнего левого угла
		let y = box.getBoundingClientRect().y;//кординаты верхнего левого угла
		let width = +getComputedStyle(box).width.replace('px','');//ширина
		let height = +getComputedStyle(box).height.replace('px','');//высота
		let matrixArr = getComputedStyle(box).transform.replace('matrix(','').replace(')','').split(', ').map((i)=>{return +i});//матрица преобразований в виде массива занчений
		let dx, dy;
		/*console.log('xClck = '+xClck);
		console.log('yClck = '+yClck);
		console.log('x = '+x);
		console.log('y = '+y);*/
		if (matrixArr[1]===0 && matrixArr[2]===0){
			/*нет поворота*/
			dx = x + width;
			dy = y + height;
		}
		if(Math.abs(matrixArr[0])===Math.abs(matrixArr[1]) && Math.abs(matrixArr[1])===Math.abs(matrixArr[2]) && Math.abs(matrixArr[2])===Math.abs(matrixArr[3])){
			/*случай угла 45 градусов*/
					dx = x + width;
					dy = y + width;
				/*if(matrixArr[0]>0 && matrixArr[1]>0){//I четверть
					dx = x + 100;
					dy = y + 100;
				}
				if(matrixArr[0]<0 && matrixArr[1]>0){//II четверть
					dx = x - width;
					y = y - height
					dy = y + height*2;
				}
				if(matrixArr[0]<0 && matrixArr[1]<0){//III четверть
					x = x + height
					dx = x - height*2;
					dy = y + width;
				}
				if(matrixArr[0]>0 && matrixArr[1]<0){//IV четверть
					dx = x + width;
					y = y + height
					dy = y - height*2;
				}*/
			}else{
						if(Math.abs(matrixArr[1])>0.7 && Math.abs(matrixArr[2])<=1){//более вертикальное положение
							if(matrixArr[1]>=0 && matrixArr[2]<0){//I и II четверть
								dx = x - height;
								dy = y + width;
							}
							if(matrixArr[1]<0 && matrixArr[2]>=0){//III и IV четверть
								dx = x + height;
								dy = y - width;
							}
						}
						if(Math.abs(matrixArr[0])>0.7 && Math.abs(matrixArr[3])<=1){//более горизонтальное положение
							if(matrixArr[0]>=0 && matrixArr[3]>=0){//I и IV четверть
								dx = x + width;
								dy = y + height;
							}
							if(matrixArr[0]<0 && matrixArr[3]<0){//IIи III четверть
								dx = x - width;
								dy = y - height;
							}
						}
			}

			let x1 = x<dx?x:dx;
			let x2 = x>dx?x:dx;
			let y1 = y<dy?y:dy;
			let y2 = y>dy?y:dy;

			if(xClck >= x1 && xClck <= x2 && yClck >= y1 && yClck <= y2){
				let index = clickableObjects.findIndex((elem)=>{return elem === box.id});
				let removes = clickableObjects.splice(index,1);
				box.classList.remove('blink');
				clearTimeout(waitingID);
				clickableObjects.forEach((elem)=>{
					document.getElementById(elem).classList.remove('blink');
				})
				box.classList.add('out');
				lineThrough (i);
				if(clickableObjects.length !== 0){
				waitingID = setTimeout(()=>{
					let id = clickableObjects[0];
					document.getElementById(id).classList.add('blink');
				},5000);
				console.log(removes);
				console.log('I am a '+ removes);
			}else{
				console.log('WIN!');
								setTimeout(()=>{clear();
								appendCanvas(logo);
								appendCanvas(button);
								document.body.addEventListener('ready', t3);
								document.getElementById('button').classList.add('pulse');
								/*document.body.addEventListener('ready', (event)=>{
									if(event.target.id ==='button'){
									pulseID = setInterval(pulse,150,paintText,text3);
									}
								})*/
							},2000);
			}
			}

	}
}

function repaint(canvasProp, textProps){
	let box = document.getElementById(canvasProp.id);
	let ctx = box.getContext('2d');
	let width = box.width;
	let height = box.height;
	ctx.clearRect(0,0,width,height);
	for(prop of textProps){
		paintText(prop);
	}
}

function lineThrough (foo){
	function draw(
	{id = 'body',
	color = 'black',
	font = '30px serif',
	align = '',
	text = 'foo',
	x = 0,
	y = 0,
	widthMAX = 300
	}={}){
		let ctx = document.getElementById(id).getContext('2d');
		ctx.fillStyle = color;
		ctx.font = font;
		ctx.textAlign = align;
		let long = ctx.measureText(text).width + 40;
		let startX = x - long/2;
		let startY = y - 15;
		ctx.fillRect(startX, startY, long, 5);
	}
	switch (foo){
		case 'fan':
		draw(textFan);
		break;

		case 'basket':
		draw(textBasket);
		break;

		case 'book':
		draw(textBook);
		break;

		case 'shoe':
		draw(textShoe);
		break;

		default:
		console.log('I do not know who to strike out');
	}
}

function clear(){
	clearInterval(pulseID);
	clearTimeout(waitingID);
	document.getElementById('container').removeEventListener('click', click);
	document.getElementById('tutorial').remove();
	document.getElementById('tutorialTXT').remove();
	document.getElementById('cover').remove();
	document.getElementById('shoe').remove();
	document.getElementById('book').remove();
	document.getElementById('basket').remove();
	document.getElementById('fan').remove();
	document.getElementById('gui').remove();
	document.getElementById('background').style.filter = 'blur(3px)';
}


let waitingID = setTimeout(()=>{
	let id = clickableObjects[0];
	document.getElementById(id).classList.add('blink');
},5000);


let text1 = {};
let text2 = {};
let text3 = {}
for(prop in textTutorial1){
	text1[prop]=textTutorial1[prop];
}
for(prop in textTutorial2){
	text2[prop]=textTutorial2[prop];
}
for(prop in textButton){
	text3[prop]=textTutorial2[prop];
}

function pulse(canvas, ...texts){
	if(count.direction === true){
		for(elem of texts){
			elem.color = 'rgba(79,1,1,'+(0.5+count.i/10)+')'
		}
		count.i = ++count.i;
	}else{
		count.i = --count.i;
		for(elem of texts){
			elem.color = 'rgba(79,1,1,'+(0.5+count.i/10)+')'
		}		
	}
	if(count.i<=1 || count.i>=5){
		count.direction = !count.direction;
	}
	repaint(canvas, texts);
}

document.body.addEventListener('ready', (event)=>{
	if(event.target.id ==='tutorialTXT'){
		pulseID = setInterval(pulse,100,tutorialTXT, text1, text2);
	}
})


document.body.addEventListener('ready', t1);
document.body.addEventListener('ready', t2);



/*добавляем canvas с локацией*/
appendCanvas(background);

/*добавляем в сетку элементы*/

appendCanvas(tutorial);

/*необходимо чтобы сначала отрисовался tutorial нужны размеры его холоста
что бы холст с надписью был идентичного размера*/
document.body.addEventListener('ready', (event)=>{
	if(event.target.id === 'tutorial'){
		appendCanvas(tutorialTXT);
	}
});

appendCanvas(gui);

appendCanvas(fan);

appendCanvas(basket);

appendCanvas(book);

appendCanvas(shoe);

appendCanvas(cover);




/*action();*/