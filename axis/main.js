let Axis = function() {
	let doc = document;
	this.first = {
		arrow: doc.getElementById('first-arrow'),
		arrowSpan: doc.getElementById('for-first-span'),
		input: doc.getElementById('for-first'),
		resultSpan: doc.getElementById('first'),
		num: 0
	};

	this.second = {
		arrow: doc.getElementById('second-arrow'),
		arrowSpan: doc.getElementById('for-second-span'),
		input: doc.getElementById('for-second'),
		resultSpan: doc.getElementById('second'),
		num: 0
	};

	this.result = {
		input: doc.getElementById('for-result'),
		resultSpan: doc.getElementById('result'),
		num: 0
	};


	// примерный интервал между делениями спрайта
	this.interval = 38.2;

	// возвращает функцию обработчик
	let event = (obj, num) => {
		return ()=>{
			if (obj.input.value !== obj.num.toString()){
				this.error(num);
			} else {
				this.success(num);
			}
		};
	}

	// обработчики на все input`ы
	this.first.input.addEventListener('input',event(this.first, 1),false);
	this.second.input.addEventListener('input',event(this.second, 2),false);
	this.result.input.addEventListener('input',event(this.result, 3),false);
};

Axis.prototype.getRandom = function(min,max){
	return Math.floor(Math.random() * (max - min)) + min;
};

// инициализация
Axis.prototype.init = function(){

	this.first.input.value = '';
	this.second.input.value = '';
	this.result.input.value = '';

	this.first.num = this.getRandom(6,9);
	this.result.num = this.getRandom(11,14);
	this.second.num = this.result.num - this.first.num;
	
	this.initArrors();

	this.first.resultSpan.innerText = this.first.num;
	this.second.resultSpan.innerText = this.second.num;
	this.result.resultSpan.innerText = '?';

	this.first.arrowSpan.innerText = this.first.num;
	this.second.arrowSpan.innerText = this.second.num;

	this.show(this.first.resultSpan);
	this.show(this.second.resultSpan);
	this.show(this.result.resultSpan);
	this.show(this.first.arrow);
	this.first.input.focus();
};

// инициализация стилей стрелок
Axis.prototype.initArrors = function(){
	let firstWidth = this.first.num * this.interval + 3;

	this.first.arrow.style.width = firstWidth + 'px';
	this.first.arrow.style.height = (this.first.num * this.interval / 2) + 'px';

	this.second.arrow.style.width = (this.second.num * this.interval) + 'px';
	this.second.arrow.style.height = (this.second.num * this.interval / 2) + 'px';
	this.second.arrow.style.left = firstWidth + 38 + 'px';
};


Axis.prototype.show = function(elem){elem.classList.remove('hidden');};
Axis.prototype.hide = function(elem){elem.classList.add('hidden');};

// перезапуск
Axis.prototype.reload = function(elem){
	this.hide(this.first.resultSpan);
	this.hide(this.second.resultSpan);
	this.hide(this.result.resultSpan);
	this.hide(this.first.arrow);
	this.hide(this.second.arrow);
	this.hide(this.result.input);

	this.show(this.first.input);
	this.show(this.second.input);

	setTimeout(()=>{
		this.init();
	},1200);
};

// добавляем/убираем класс error
Axis.prototype.errorClass = function(elem, flag){
	if (flag) {
		elem.classList.add('error');
	} else {
		elem.classList.remove('error');
	};
};
// добавляем/убираем класс warning
Axis.prototype.warningClass = function(elem, flag){
	if (flag) {
		elem.classList.add('warning');
	} else {
		elem.classList.remove('warning');
	};
};

// действия при ошибочных вводах
Axis.prototype.error = function(id){
	switch(id){
		case 1: this.errorClass(this.first.input, true);
				this.warningClass(this.first.resultSpan, true);
				break;
		case 2: this.errorClass(this.second.input, true);
				this.warningClass(this.second.resultSpan, true);
				break;
		case 3: this.errorClass(this.result.input, true);
				break;
	};
};

// действия при успешном вводе
Axis.prototype.success = function(id){
	switch(id){
		case 1: this.errorClass(this.first.input, false);
				this.warningClass(this.first.resultSpan, false);
				this.hide(this.first.input);
				this.show(this.second.arrow);
				this.second.input.focus();
				break;
		case 2: this.errorClass(this.second.input, false);
				this.warningClass(this.second.resultSpan, false);
				this.hide(this.second.input);
				this.show(this.result.input);
				this.result.input.focus();
				break;
		case 3: this.errorClass(this.result.input, false);
				this.result.resultSpan.innerText = this.result.num;
				this.hide(this.result.input);
				this.successfulEnd();
				break;
	};
};

// действия при правильном решении
Axis.prototype.successfulEnd = function(id){
	setTimeout(()=>{
		if (confirm('Пример решен правильно! Решить новый?')){
			this.reload();
		}
	},700);
};


let newAxis = new Axis();
newAxis.init();