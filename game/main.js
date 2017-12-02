// document.addEventListener('DOMContentLoaded', initFunc, false);


let Game = function () {
	this.values = [];
	this.dopValues = [];
	this.number = 0;
	this.side = 0;
	this.styleStr = '';
	this.kol = 0;
};

Game.prototype.initButton = function() {
	this.mainBlock = document.querySelector('.block');
	this.messageBlock = document.querySelector('.message-block');
	this.inputsValue = newgame.querySelectorAll('input');

	let startGameFuncBind = this.startGameFunc.bind(this);

	startgame.addEventListener('click', startGameFuncBind, false);

	// this.visible(this.messageBlock)
	// 	.visible(newgame,700)
	// 	.visible(winheader,700)
	// 	.visible(wintext,700)
	// 	.visible(winhr,700);

	this.visible(this.messageBlock, 400, true)
		.visible(newgame,1100);
};

Game.prototype.startGameFunc = function(e) {
	e.preventDefault();
	let obj = this.checkInput();

	if (!obj) return;

	if (this.allBlock) 
		this.allBlock.forEach(function(el){
			el.remove();
		});

	// НУЖНО УДАЛИТЬ ТЕГ СТАЙЛ ЕЩЕ!!!!!!!!!
	if (this.styleBlock) this.styleBlock.remove();
	this.styleStr = '';


	if (this.mainBlock && this.clickFuncBind) 
		this.mainBlock.removeEventListener('click',this.clickFuncBind,false);

	console.log(this);
	this.number = 0;
	this.initFunc(obj.height, obj.row, obj.col);


	this.animStartGame();


};

Game.prototype.checkInput = function() {

	let height, row, col;

	try {
		height = this.parse(this.inputsValue[0]);
		row = this.parse(this.inputsValue[1]);
		col = this.parse(this.inputsValue[2]);
	} catch(e) {
		this.inputsValue[0].value = 70;
		this.inputsValue[1].value = 3;
		this.inputsValue[2].value = 3;
		alert(e.message);
		return false;
	} 
		
	if (!(height >= 50 && height <= 100)) {
		alert('Высота выходит из разрешенного диапазона');
		return false;
	} 
		
	if (!(row >= 3 && row <= 6)) {
		alert('Количество строк выходит из разрешенного диапазона');
		return false;
	} 
		
	if (!(col >= 3 && col <= 6)) {
		alert('Количество столбцов выходит из разрешенного диапазона');
		return false;
	}

	return {height: height, row: row, col: col};
};

Game.prototype.parse = function(elem) {
	let num;
	if (elem.value === '') {
		num = 0;
	} else {
		num = parseInt(elem.value);
	}

	if (num.toString() === 'NaN') throw new SyntaxError("Данные некорректны");
	elem.value = num;
	return num;
};


Game.prototype.initFunc = function(inHeight = 70, inRow = 4, inCol = 4){
	this.row = inRow;
	this.col = inCol;
	this.height = inHeight;

	this.kol = this.row * this.col;

	for (let i = 0; i < this.row; i++){
		this.values[i] = [];
		this.dopValues[i] = [];
		for (let j = 0; j < this.col; j++){
			this.values[i][j] = { num : this.number};
			this.dopValues[i][j] = this.number++;
		}
	}
	console.log(this.values);


	// Инициализация миниблоков и индексации
	for (let i = 0; i < this.kol; i++){
		let miniBlock = document.createElement('div');
		miniBlock.classList.add('mini-block');

		if (i < 10) {
			miniBlock.classList.add('elem-0'+i);
			this.styleStr += '.elem-0' + i + ':after { content: \'' + i + '\';}';
		} else {
			miniBlock.classList.add('elem-'+i);
			this.styleStr += '.elem-' + i + ':after { content: \'' + i + '\';}';
		};

		this.mainBlock.appendChild(miniBlock);
	}


	this.number = 0;
	this.allBlock = document.querySelectorAll('.mini-block');

	// Инициализация заливки и расположения
	for (let i = 0; i < this.row; i++){
		let top = this.height*i;

		for (let j = 0; j < this.col; j++){
			let left = this.height*j;

			if (this.number === 0) {
				this.styleStr += '.elem-0' + this.number + '{ transform: translate(' + left + 'px,' + top + 'px);}';
			} else if (this.number < 10) {
				this.styleStr += '.elem-0' + this.number + '{ transform: translate(' + left + 'px,' + top + 'px);\
													background-position:0% '+ 100/this.row*i +'%;}';
			} else {
				this.styleStr += '.elem-' + this.number + '{ transform: translate(' + left + 'px,' + top + 'px);\
													background-position:0% '+ 100/this.row*i +'%;}';
			};

			this.values[i][j].top = top;
			this.values[i][j].left = left;
			this.values[i][j].link = this.allBlock[this.number];

			this.number++;
		}
	}


	// Инициализация стилей главного блока
	this.styleStr += '.block {width: '+ this.height*this.col +'px; height: '+ this.height*this.row +'px; margin-top:-'+ this.height*this.row/2 +'px; margin-left:-'+ this.height*this.col/2 +'px;}';

	this.styleStr += '.mini-block {width: '+ this.height +'px; height: '+ this.height +'px;} \
						.mini-block:after {line-height: '+ this.height +'px;}';

	this.styleBlock = document.createElement('style');
	this.styleBlock.classList.add('style-block');
	this.styleBlock.innerHTML = this.styleStr;
	this.mainBlock.appendChild(this.styleBlock);


	this.clickFuncBind = this.clickFunc.bind(this);
	this.mainBlock.addEventListener('click',this.clickFuncBind,false);

	console.log(this.dopValues);
};

Game.prototype.clickFunc = function(e){
	let clickElem = e.target,
		numberElem = parseInt(clickElem.classList[1].substring(5));
	// console.log(numberElem);

	let result = this.testMove(clickElem);
	// console.log(result);
	if (result) {
		this.moveElem(result);
	}
}

Game.prototype.testMove = function(elem){
	let elemArray;
	for (let i = 0; i < this.row; i++){
		for (let j = 0; j < this.col; j++){
			// Нашел этот элемент
			if (this.values[i][j].link === elem){
				elemArray = this.values[i][j];
			}
		}
	}

	for (let i = 0; i < this.row; i++){
		for (let j = 0; j < this.col; j++){
			// Нашел этот элемент
			if (this.dopValues[i][j] === elemArray.num){
				if (i-1 >= 0) 
					if (this.dopValues[i-1][j] === 0) {
						console.log("Можно вверх");

						this.replaceElem(i,j,i-1,j);
						this.side = 1;
						return elemArray;
					}
				
				if (j+1 <= this.col-1) 
					if (this.dopValues[i][j+1] === 0) {
						console.log("Можно вправо");

						this.replaceElem(i,j,i,j+1);
						this.side = 2; 
						return elemArray;
					}
				
				if (i+1 <= this.row-1) 
					if (this.dopValues[i+1][j] === 0) {
						console.log("Можно вниз");

						this.replaceElem(i,j,i+1,j);
						this.side = 3;
						return elemArray;
					}
				
				if (j-1 >= 0) 
					if (this.dopValues[i][j-1] === 0) {
						console.log("Можно влево");

						this.replaceElem(i,j,i,j-1);
						this.side = 4;
						return elemArray;
					} else { return false; }
			}
		}
	}
}

Game.prototype.replaceElem = function(i,j,_i,_j){
	let temp = this.dopValues[i][j];

	this.dopValues[i][j] = this.dopValues[_i][_j];
	this.dopValues[_i][_j] = temp;
	console.log(this.dopValues);
}

Game.prototype.moveElem = function(objElem){
	switch (this.side){
		case 1: { this.moveUp(objElem); break; }
		case 2: { this.moveRight(objElem); break; }
		case 3: { this.moveDown(objElem); break; }
		case 4: { this.moveLeft(objElem); break; }
	}
}

Game.prototype.moveUp = function(elem){
	elem.top -= this.height;
	this.moveSetValue(elem);
}
Game.prototype.moveRight = function(elem){
	elem.left += this.height;
	this.moveSetValue(elem);
}
Game.prototype.moveDown = function(elem){
	elem.top += this.height;
	this.moveSetValue(elem);
}
Game.prototype.moveLeft = function(elem){
	elem.left -= this.height;
	this.moveSetValue(elem);
}
Game.prototype.moveSetValue = function(elem){
	elem.link.style.transform = 'translate(' + elem.left + 'px,' + elem.top + 'px)';
	this.side = 0;
	this.winner();
}

Game.prototype.winner = function(){
	if (this.dopValues[this.row-1][this.col-1] === 0) {
		let num = 1,
			flag = true;

		for (let i = 0; i < this.row; i++){
			for (let j = 0; j < this.col; j++){
				if (this.dopValues[i][j] !== num) {
					flag = false; 
					break;
				} else {
					console.log(num++);
				}
				if (i === this.row-1 && j === this.col-2) break;
			}

			if (!flag) break;
		}


		// if (flag) alert('ПОБЕДА!');
		if (flag) this.animEndGame();
	}
}


// Анимации появления и исчезновения
Game.prototype.hiddenPlus = function(el, full){
	el.classList.add('hidden');

	if (full)
		setTimeout(
			() => el.classList.add('hidden-full'), 700);
}

Game.prototype.hidden = function(el, delay, full){

	if (delay) {
		setTimeout( () => this.hiddenPlus(el, full), delay);
	} else {
		this.hiddenPlus(el, full);
	}

	return this;
}

Game.prototype.visiblePlus = function(el, full){
	if (full) el.classList.remove('hidden-full');
	setTimeout( () => el.classList.remove('hidden'), 40);
}

Game.prototype.visible = function(el, delay, full){

	if (delay) {
		setTimeout( () => this.visiblePlus(el, full), delay);
	} else {
		this.visiblePlus(el, full);
	}

	return this;
}


Game.prototype.animStartGame = function(){

	this.hidden(winheader)
		.hidden(wintext)
		.hidden(winhr)
		.hidden(newgame)
		.hidden(this.messageBlock, 700, true)
		.visible(this.mainBlock, 700);
}

Game.prototype.animEndGame = function(){

	this.visible(this.messageBlock, 400, true)
		.visible(winheader,1100)
		.visible(wintext,2200)
		.visible(winhr,3300)
		.visible(newgame,4400)
		.hidden(this.mainBlock,5000);
}




let myNewGame = new Game();
myNewGame.initButton();